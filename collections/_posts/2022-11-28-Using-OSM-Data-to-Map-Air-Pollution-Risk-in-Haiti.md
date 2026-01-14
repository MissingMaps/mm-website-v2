---
layout: post
title: Using OSM data to map Air Pollution Risk hotspots in Martissant, Port-au-Prince in response to rising Asthma cases
postID: Using-OSM-data-to-map-Air-Pollution-Risk-hotspots-in-Martissant-Port-au-Prince-in-response-to-rising-Asthma-cases
banner: https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20221121_banner-haiti-air-pollution.png
date: 2022-11-28
author: Laurie Boobier
excerpt: "MSF used geographical information to map air pollution risk with help from Missing Maps volunteers who updated valuable OpenStreetMap (OSM) road and building data sources."
published: true
categories: [MSF, OpenStreetMap]
permalink: /blog/:year/:month/:day/:title/
lang: en
---

In Martissant, Port-au-Prince, Médecins Sans Frontières / Doctors Without Borders (MSF) has been tasked with responding to high numbers of asthma cases. As there are clear links between exposure to air pollution and both the development of and exacerbation of asthma, it is important for MSF to locate air pollution hotspots. MSF used geographical information to map air pollution risk with help from Missing Maps volunteers who updated valuable OpenStreetMap (OSM) road and building data sources.  

 <figure>
<img src="https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20221121_haiti-port-au-prince.jpg">
<p class="caption"></p>
</figure>
 
### Methodology  
To map air pollution risk, open-source data associated with road-induced air pollution (road type, road surface, traffic) and with residential induced air pollution (building density) were extracted from OSM. 
 
### Data Sources 
 
#### Road Type 
 
Road type data was extracted from OSM and categorised from primary and secondary roads (major roads) and tertiary and residential roads (non-major roads). Major roads generally have greater levels of air pollution then non major roads as they tend to have more lanes and a higher number of vehicles using these roads.  
 
#### Traffic 
 
Traffic data was extracted from Google Traffic and was categorised using colour scheme: dark red (very high), red (high), orange (medium), green (low). High traffic leads to congestion, which causes higher levels of air pollution compared to low traffic. This data was difficult to collect as data was extracted at various times to get an average traffic dataset. 
 
#### Road Surface 
 
Road surface data was extracted from OSM and categorised from paved and unpaved. When a road is unpaved particles are lifted from the road leading to greater dust emission than paved roads.  
 
#### Distance from roads 
 
The road network was extracted from OSM. Road-induced air pollution has been found to remain consistent within 50 metres of a road. In areas 50-100 metres away, it is halved and quartered in areas 100-200 m away. Buffers were therefore created for these distances. 
 
#### Building Density 
 
Buildings were extracted from OSM and then used to create a building density layer. This was done by counting the number of buildings within a 10-metre grid. Building density is a proxy to residential fuel-burning (mainly from heating and cooking). 
 
### Merging data 
To give an overall picture of air pollution risk, it was necessary to merge all the data sources. The road-induced air pollution dataset was created first. This combined traffic, road type and surface. Weights were given to individual parameters and were based on the level of influence on air pollution.  
Higher weights were given to attributes which have a high influence on air pollution, such as major roads, high traffic, and unpaved roads. Once weights were added to each dataset these layers were merged to create a road-induced air pollution layer. 
This new layer was then extended to each individual buffer zone using the euclidean allocation tool (ArcGIS Pro tool). These extended layers were then multiplied by 0.5 (50 - 100 m buffer) and 0.25 (100- 200 m buffer). Furthermore, if major roads crossed, these layers were added together. 
The residential-induced air pollution layer was created simply by creating a building density layer. Both road and residential induced air pollution layers were reclassified equally between 0 and 1 and then added together.  
The end products are shown below, the first map shows air pollution risk in general, and the second map shows the air pollution risk of individual buildings. 
 
### Maps 
 <figure>
<img src="https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20221121_air-pollution-risk-map-haiti.jpg">
<p class="caption">Map including both datasets (road induced and building induced) and showing air pollution risk, in Martissant, Port-au-Prince.</p>
</figure>

 <figure>
<img src="https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20221121_air-pollution-risk-building-map-haiti.jpg">
<p class="caption">Map showing air pollution risk of individual buildings and schools in Martissant, Port-au-Prince.</p>
</figure>


### Outcome 
The maps indicate areas of relatively higher air pollution risk proximal to roads as well as areas of high building density also likely to have higher pollution exposure risk. Identifying residential buildings and schools in high-risk areas, can be useful for future public health actions.  
 
### Why should MSF be interested in air pollution? 
Air pollution in urban areas in low-income countries, and those affected by humanitarian emergencies, is an increasing issue and a large and increasing risk factor for morbidity. This is due to many non-communicable diseases such as asthma having links to air pollution risk.  Humanitarian response is increasingly taking place in urban settings. Non-communicable diseases (including asthma) are an increasing feature of the workload of humanitarian healthcare providers. As a public health issue, this is worth considering where MSF teams are providing healthcare to those affected by exposure to air pollution. 
 
### What can be done about air pollution? 

 <figure>
<img src="https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20221121_air-pollution-actions-haiti-EN.png">
<p class="caption"></p>
</figure>
 
The geographical data to map the risk of air pollution can help MSF teams understand which communities are the most affected by air pollution and plan their activities with an additional layer of information. Understanding exposure disparities can help address them and for the future, determining the hotspots can help teams target interventions for health conditions related to air pollution.  

