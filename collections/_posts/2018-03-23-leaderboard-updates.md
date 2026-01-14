---
layout: post
title: Leaderboard 2.0
postID: leaderboard-updates
banner: https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmapsblog-leaderboardbanner.jpg
date: 2018-03-23
author: Dale Kunce
excerpt: Microsoft Philianthropies funds improvements to Missing Maps leaderboards.
published: true
categories: [Red Cross, OpenStreetMap, Leaderboards]
permalink: /blog/:year/:month/:day/:title/
lang: en
---

# Leaderboard Updates

When [Missing Maps](https://www.missingmaps.org/) started, it was impossible to imagine what it would ultimately become. The goal was to simply make more open map data available before disasters and to help the Humanitarian OpenStreetMap Team build more local mapping communities. 

Early on we realized we needed better ways to quantify and track the impact of Missing Maps to OSM. Nearly 4 years later, we are making great progress on both of those fronts. Our efforts eventually produced the Missing Maps [leaderboards](https://missingmaps.org/leaderboards), which sought to track individual users and teams.

The Missing Maps leaderboard technology is a streaming, real-time look at who is supporting our work. Initially funded by the [Cisco Foundation](https://www.cisco.com/c/en/us/about/csr/impact/cisco-foundation.html), the leaderboards became a major way to engage and reward mappers. We were blown away when 4,000 mappers helped out on Missing Maps projects during the first year. Four years later, 52,000 mappers contributed to 1,200 mapping Missing Maps projects, the vast majority of those mappers were making their very first edits to OSM. In 2017, 10% of all new OSM mappers made their first edits in support of Missing Maps. The scale of tracking all these new users created problems for our system. 

Thanks to a generous grant from [Microsoft Philanthropies](https://www.microsoft.com/en-us/philanthropies/), [Pacific Atlas](https://www.pacatlas.com/) migrated the stack to Microsoft Azure, completed a full analysis backfill, and rewrote large chunks to enable things to scale better in the future without dropping edits. As always, all the code is open, including the [leaderboard code](http://github.com/missingmaps) and the [osm-stats](http://github.com/americanredcross/osm-stats) infrastructure. We are [always looking for help](https://github.com/missingmaps/missingmaps.github.io/issues) to create new badges or suggest new ideas.

### The Numbers

 - **Total Contributors**: We did a complete backfill of OSM history using [OSMesa](https://github.com/azavea/osmesa) to capture dropped edits and editors (and to update our calculations). You'll notice that our number of total contributors is well over 52,000 now.
 - **Total Edits**: The total number of edits has increased.
 - **Building Edits**: This is a big change. In the past we we tracked _Buildings Added_ to OSM. After doing some reflection, this wasn't a good representation of the total volume of edits Missing Maps contributes. Building Edits now reflects _both_ new additions and the contributions of our validators to clean up and coach new mappers.
 - **Road Measurements**: We've got some egg on our face here. We fixed some math errors (briefly: edits were counting the full length) and we are now _correctly_ reporting the total km of roads added and edited.

![Missing Maps Stats](https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20180323_stats.jpg)

### What's New

 - **New Data**: We now have data for **all** changesets (previously we'd only been tracking `#hashtagged` ones). This means that user profile pages now include **all** edits made, rather than only those associated with hashcategories. Users can still find their contribution to an individual hashtag by searching for the hashtag and user name in the leaderboards.
 - **More POIs**: Edits with `amenity=*` were previously the only POIs accounted for; we've expanded the set of categories tracked to better match Missing Maps editing activity.
 - **New Leaders**: With the new data we've got some new leaders. I'm totally amazed at the commitment and dedication of Missing Maps mappers. From the first-time mapathon volunteer who manages to complete 40 buildings to the repeat mappers who make literally hundreds of thousands of edits.
 - **User Map**: We changed the way the user contribution map is showing. Instead of a heatmap, we now display a simple choropleth that breaks down contributions by country.
 - **Badges**: We dropped support for the GPS Tracks Badge. We weren't seeing a big uptick in new tracks added to OSM and this is already supported on the OSM user profiles.
 - **Slightly less real-time**: Due to the increased volume of data that we're tracking, we had to reduce the aggregation frequency in order to keep things sprightly. Expect data to update approximately every 10-15 minutes.
 - **OSM Stats API**: [OSM Stats API](https://github.com/AmericanRedCross/osm-stats/blob/master/documentation/API.md) now supports some additional queries and options, not all of which are documented yet but will be in the coming days.
 - **OSM Stats Workers**: [OSM Stats Workers](https://github.com/AmericanRedCross/osm-stats-workers) was almost completely rewritten; [metric calculations](https://github.com/AmericanRedCross/osm-stats-workers/tree/master/src/metrics) have been simplified and stream handling made more robust.

![Missing Maps Leaderboards](https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20180323_leaderboard.jpg)
