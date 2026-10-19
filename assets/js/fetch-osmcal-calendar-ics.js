// assets/js/fetch-osmcal-calendar-ics.js
// Build subscribable calendar feeds (.ics) from osmcal.org, filtered by event name,
// so people can add e.g. only the Missing Maps London events to Outlook / Google Calendar.
// Feeds are saved into the root events/ folder, which Jekyll publishes at /events/<file>.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Each feed keeps the events whose name contains `match` (case-insensitive)
const FEEDS = [
  {
    file: 'london.ics',
    name: 'Missing Maps London Mapathons',
    match: 'missing maps london'
  }
];

// Split the calendar into its top-level components (VTIMEZONE, VEVENT),
// keeping the raw lines so the original folding and escaping are preserved
function parseComponents(ics) {
  const components = [];
  let current = null;
  let depth = 0;

  for (const line of ics.split(/\r?\n/)) {
    if (line.startsWith('BEGIN:')) {
      depth++;
      if (depth === 2) current = { type: line.slice('BEGIN:'.length), lines: [] };
    }
    if (current) current.lines.push(line);
    if (line.startsWith('END:')) {
      if (depth === 2 && current) {
        components.push(current);
        current = null;
      }
      depth--;
    }
  }

  return components;
}

// Component text with folded lines joined back together
function unfold(component) {
  return component.lines.join('\n').replace(/\n[ \t]/g, '');
}

function getProperty(component, name) {
  const match = unfold(component).match(new RegExp(`^${name}(;[^:]*)?:(.*)$`, 'm'));
  return match ? match[2] : '';
}

// Offset of a time zone from UTC at the given moment, in milliseconds
function zoneOffset(timestamp, timeZone) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', {
      timeZone,
      hourCycle: 'h23',
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric'
    }).formatToParts(timestamp).map(p => [p.type, Number(p.value)])
  );
  return Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, parts.second) - timestamp;
}

// Some calendar apps misread osmcal's time zone definitions (daylight saving changes
// listed as RDATE values) and show winter events an hour out, so event times are
// converted to UTC, e.g. DTSTART;TZID=Europe/London:20261103T190000 → DTSTART:20261103T190000Z
function toUtcLine(line) {
  const match = line.match(/^(DTSTART|DTEND);TZID=([^:;]+):(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})$/);
  if (!match) return line;

  const [, property, timeZone, ...fields] = match;
  const [year, month, day, hour, minute, second] = fields.map(Number);
  const asUtc = Date.UTC(year, month - 1, day, hour, minute, second);
  // Second pass corrects the offset when the first guess lands across a DST change
  let timestamp = asUtc - zoneOffset(asUtc, timeZone);
  timestamp = asUtc - zoneOffset(timestamp, timeZone);

  return `${property}:${new Date(timestamp).toISOString().replace(/[-:]|\.\d{3}/g, '')}`;
}

function buildFeed(feed, components) {
  const normalise = text => text.toLowerCase().replace(/\s+/g, ' ');

  const events = components
    .filter(c => c.type === 'VEVENT' && normalise(getProperty(c, 'SUMMARY')).includes(feed.match))
    .map(c => ({ ...c, lines: c.lines.map(toUtcLine) }));

  // Include any time zones the events still reference (the full osmcal list is large)
  const tzids = new Set(events.flatMap(e => [...unfold(e).matchAll(/TZID=([^:;]+)/g)].map(m => m[1])));
  const timezones = components.filter(c => c.type === 'VTIMEZONE' && tzids.has(getProperty(c, 'TZID')));

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Missing Maps//missingmaps.org//EN',
    `X-WR-CALNAME:${feed.name}`,
    ...timezones.flatMap(c => c.lines),
    ...events.flatMap(c => c.lines),
    'END:VCALENDAR'
  ];

  return { count: events.length, ics: lines.join('\r\n') + '\r\n' };
}

async function fetchOsmcalCalendar() {
  console.log('Fetching calendar from osmcal.org...');

  const response = await fetch('https://osmcal.org/events.ics', {
    headers: {
      'Client-App': 'missing-maps-website/2.0'
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const components = parseComponents(await response.text());
  const total = components.filter(c => c.type === 'VEVENT').length;
  if (total === 0) {
    throw new Error('No events found in the osmcal.org calendar');
  }
  console.log(`Fetched ${total} total events`);

  // Save into ROOT events/ (from assets/js → ../.. → repo root → events)
  const outputDir = path.join(__dirname, '..', '..', 'events');
  fs.mkdirSync(outputDir, { recursive: true });

  for (const feed of FEEDS) {
    const { count, ics } = buildFeed(feed, components);
    const outputPath = path.join(outputDir, feed.file);
    fs.writeFileSync(outputPath, ics);
    console.log(`Saved ${count} events to ${outputPath}`);
  }
}

// On failure no feeds are written, rather than empty ones: an empty feed would
// wipe the events from subscribers' calendars, and the site build carries on
fetchOsmcalCalendar().catch(err => {
  console.error('Error building calendar feeds from osmcal:', err);
});
