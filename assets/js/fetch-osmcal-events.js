// assets/js/fetch-osmcal-events.js
// Fetch Missing Maps / Mapathon events from osmcal.org
// and save them into the root _data/osmcal.json for Jekyll.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function fetchOsmcalEvents() {
  try {
    console.log('Fetching events from osmcal.org...');

    const response = await fetch('https://osmcal.org/api/v2/events/', {
      headers: {
        'Accept': 'application/json',
        'Client-App': 'your-jekyll-site/1.0.0'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const events = await response.json();
    console.log(`Fetched ${events.length} total events`);

    // Filter: name contains "missing maps" or "mapathon" (case-insensitive)
    const filteredEvents = events.filter(event => {
      if (!event.name) return false;
      const n = event.name.toLowerCase();
      return n.includes('missing maps') || n.includes('mapathon');
    });

    console.log(`Found ${filteredEvents.length} relevant events`);

    const payload = {
      buildTime: new Date().toISOString(),
      count: filteredEvents.length,
      events: filteredEvents
    };

    // Save into ROOT _data for Jekyll (from assets/js → ../.. → repo root → _data)
    const dataDir = path.join(__dirname, '..', '..', '_data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const outputPath = path.join(dataDir, 'osmcal.json');
    fs.writeFileSync(outputPath, JSON.stringify(payload, null, 2));
    console.log(`Saved events to ${outputPath}`);
  } catch (err) {
    console.error('Error fetching events from osmcal:', err);

    // Still create a minimal file so Jekyll build doesn't break
    const dataDir = path.join(__dirname, '..', '..', '_data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const outputPath = path.join(dataDir, 'osmcal.json');
    const fallback = {
      buildTime: new Date().toISOString(),
      count: 0,
      events: [],
      error: err.message
    };
    fs.writeFileSync(outputPath, JSON.stringify(fallback, null, 2));
    console.log(`Wrote fallback osmcal.json to ${outputPath}`);
  }
}

// Always run when this file is executed with `node`
fetchOsmcalEvents().catch(err => {
  console.error('Unhandled error in fetchOsmcalEvents:', err);
});
