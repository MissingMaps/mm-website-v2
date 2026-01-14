---
layout: post
title: "Roads less traveled... all 72,000 km of them"
postID: gps-tracks
banner: https://raw.githubusercontent.com/MissingMaps/img/main/images/motorbike_road.png
date: 2017-01-07
author: Emily Eros
excerpt: "Red Cross volunteers on motorbikes logged 72,000 km of GPS tracks during border mapping in West Africa. We used these data to get under the clouds and add roads to OSM that can't be seen from satellite imagery. These roads connect some of the most remote communities in the region. Here's how we processed the dataset and what we were able to do with it."
published: true
categories: [West Africa, Field Mapping, Red Cross, GPS, osmAnd, roads]
permalink: /blog/:year/:month/:day/:title/
lang: en
---

While our Red Cross volunteers were out mapping in West Africa, we asked them to record their GPS tracks using the [OsmAnd](http://osmand.net/) Android application. Now that fieldwork is complete, we finally had a chance to look through the hundreds of GPX files that they recorded.

The first step was merging the many, many GPX files. There were 72,000 km of tracks recorded - equal to circling the Earth 1.8 times! Since the dataset was so large, the best way was to [combine the files into a spatialite database](https://github.com/ptrv/gpx2spatialite).

Next, we cleaned up the data. This involved removing any GPX track points with a speed higher than 100 kph (which only happened when a staff member got on a flight and forgot to put their phone on airplane mode) and any track points that were floating in weird places (we had some points appear in Kenya and null island - these were from when the GPS on a phone was first turned on and was trying to search for a signal).

We mapped the data to see the full extent of how much ground the volunteers covered:

<figure>
<a href="https://raw.githubusercontent.com/MissingMaps/img/main/images/gpx-tracks-compressed.png">
<img src="https://raw.githubusercontent.com/MissingMaps/img/main/images/gpx-tracks-compressed.png"></a>
<p class="caption">GPS tracks in West Africa, with snapshot of local area. CC-BY American Red Cross</p>
</figure>

## Completing the road network in OSM

These data aren't just pretty; they're also useful for adding roads to OSM. Several areas in the border regions have really cloudy satellite imagery and we wouldn't be able to trace the roads if it weren't for the GPX data.

<figure>
<img src="https://raw.githubusercontent.com/MissingMaps/img/main/images/trace_roads.png">
<p class="caption">GPX data lets us get underneath the clouds to add roads to OpenStreetMap (OSM). Track points are shown in fuschia. CC-BY American Red Cross</p>
</figure>

I used the GPX data to complete the road network. First, I needed to figure out which of the tracks were for roads that already existed in OSM. I did this by downloading the existing road data and calculating how far each GPX point was from an existing road.

There are several ways to do this. I did it by downloading the country-level OSM-PBF file from [GeoFabrik](http://download.geofabrik.de/) (these are faster to download than shapefiles), [converting this into a spatialite database](https://github.com/AmericanRedCross/workflows/blob/master/converting_pbf_into_spatialite.md), and filtering the data by `highway=*`.

The GPX data and the roads data both had to be saved in an equal area projection so that the distance calculations would be accurate.

Within QGIS, I used the v.distance function in GRASS. It's slightly hidden. You can find it under:

`Processing -> Toolbox -> GRASS -> v.distance`

This iterated through each of the GPX track points to determine the closest road and the distance between the road and the point. I took the output and filtered the data to only keep track points that were over 100 metres from an existing road. This left me with a set of points that needed to be traced into OSM, which I did using JOSM; you can add in a GPX track points layer on top of existing data and imagery.

Three days, 8 episodes of Game of Thrones, and one sore arm later, the tracing was complete. Through the volunteers' efforts, we added about 600 km of roads into OSM, connecting some of the most inaccessible and remote communities in West Africa.

Thanks to all the volunteers who made this possible!
