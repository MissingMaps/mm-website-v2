---
layout: post
title: Mapping landcover with OSM Cameroon 
postID: mapping-landcover-with-OSM-Cameroon
banner: https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20221012_banner.png
date: 2022-10-14
author: Yves Emmanuel Nikoyo Emougou, Jorieke Vyncke, Lale Pirlot 
excerpt: "In order to improve Cameroon’s landcover and landuse mapping, OSM Cameroon strived to collect better data and enrich the OSM map that shows landcover patterns across the country." 
published: true
categories: [OSM, partners]
permalink: /blog/:year/:month/:day/:title/
lang: en
---


### Introduction
Cameroon is often called "*Africa in miniature*" because of the country’s diversity in landscapes and how the various geographic landscapes adorning the African continent can almost all be found in Cameroon. The country is such an interesting case for mapping landcover and who else is better to do so than its OSM Community?

<figure>
<img src="https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20221012_teampic2.png">
<p class="caption">OSM Cameroon team working on landcover mapping</p>
</figure>


The OpenStreetMap Cameroon team has been hard at work over the past years, improving the map of their country through data collection and the collaboration with local partners, notably the vocational training [Centre Eurêka Geo](http://eurekageo.space/), which supported the team with training on OSM digitization. Under [Christin Steve Nwagoum Keyamfe](https://www.openstreetmap.org/user/Steveeen)’s supervision, [Yves Emmanuel Nikoyo Emougou](https://www.openstreetmap.org/user/NIKOYO%20EMOUGOU%20Yves%20Emmanuel), [Victoire Tsajio](https://www.openstreetmap.org/user/victoire%20Tsajio), [Sylvie Galago](https://www.openstreetmap.org/user/Sylvie%20GALAGO), [Ismael Ebenezer Ongali Tsala](https://www.openstreetmap.org/user/ongalisma),  [Ian Jocelyn Kemme Kemme](https://www.openstreetmap.org/user/Le%20Mago), [Guy Berlin Boutchouang](https://www.openstreetmap.org/user/Guy%20Berlin%20Boutchouang)  carried out the mapping of landcover for the whole country of Cameroon. Within 6 months, from December 2019 to May 2020, their daily volunteer work yielded fruits. Here is a look back on how they did it, their methods and the challenges they overcame. 
#### Editor and Imagery choices
The mapping was done using the [JavaOpenstreetMap (JOSM) editor](https://josm.openstreetmap.de/) which is an OSM editor that has advanced features for digital mapping of topographic features (rivers, roads, buildings) and landcover, unlike other editors like ID Editor. Versions 15322 and 15238 were the most widely used versions of the editor, while the choice of imagery depended on the availability of the vendor. For instance, Maxar Premium, which was the selected imagery for the implementation of this project, was unavailable for a good period of the project’s duration. Thus, Mapbox satellite and Esri Mondial were the imageries used to overcome this problem of unavailability.
#### Landcover & landuse
One of the many important aspects of mapping is depicting landuse, which helps people understand how the land is being used and what vegetates on it. This information is critical for development planning, disaster response, and many other purposes. As the name implies, [landuse](https://www.google.com/url?q=https://wiki.openstreetmap.org/wiki/Land_use&sa=D&source=docs&ust=1665498066836565&usg=AOvVaw3Iir-sOXoql5spmP6eTNHV) describes what an area of land is used for, such as housing, commercial activities, farming, education, leisure, and so on. It is related to [landcover](https://www.google.com/url?q=https://wiki.openstreetmap.org/wiki/Landcover&sa=D&source=docs&ust=1665498066837017&usg=AOvVaw18x3tMn82uw7sg0lz3wdG5), which describes the physical thing and surface that covers the land. The two ideas are complementary and can be used in tandem, however in the case of OSM Cameroon’s work, the team mainly mapped the landcover of Cameroon. 
In order to improve Cameroon’s landcover mapping, OSM Cameroon strived to collect better data,  enrich the OSM map that shows landcover patterns across the country and to produce maps at 1/20000. Their collaboration amongst members and hard work has resulted in more accurate and up-to-date landcover maps. Their self-organised and cross-functional team created meaningful data, and we could learn a lot from their knowledge and their process.

<iframe width="560" height="315" src="https://www.youtube.com/embed/FfCFtaNTOaU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Data collection and improved collaboration 
The overarching understanding is that, to do landcover and landuse mapping in OSM, it is very important to know the local area and to avoid mapping conflicts. As a matter of fact, by knowing the environment where one is mapping it is easier to interpret the aerial imagery. And through collaboration and open communication, risks of conflicts are avoided. 
#### The importance of avoiding conflicts 
Whether a task is set up on the [HOT Tasking Manager](https://tasks.hotosm.org/), or the boundaries and grid are defined in [QGIS](https://www.qgis.org/en/site/), it is best to let mappers not work on squares close to each other. For instance, OSM Cameroon’s strategy was to let one mapper start in the north, and the other in the south. It is advised to use a grid as it makes it easier to coordinate the work between different mappers and a conflict in mapping will be avoided. It allowed the OSM Cameroon team to be more efficient in their work and avoid members wasting time and energy on a single task.
Here’s the method used by OSM Cameroon with examples: First, they chose the landcover or landuse that they wanted to map; farmland for instance. While drawing the area, it is best to avoid the landcover or landuse to connect nodes with roads. Roads can be crossed, but landcover or landuse should not connect to roads. When the area is drawn, then the attributes can be added: eg. landuse=farmland.

<figure>
<img src="https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20221012_cp1_presenceofroads.png">
<p class="caption">Good practice of landuse mapping in the presence of roads</p>
</figure>

Once the first landcover or landuse is drawn, the drawing of the second one can follow. In the example of the OSM Cameroon team, this was a residential area. It is important to assure the connectivity of the residential area nodes to the neighbouring landuse of the farmland area, which was drawn previously. The first node between the two different landuses has to be joined, then pressing F, one follows the existing line of the residential area. The use of the [Missing Maps/Youthmappers Map Paint style](https://github.com/MissingMaps/josm_styles/archive/master.zip) can show warning triangles if they are connected with each other. To avoid these triangles, it is important to create multipolygons by selecting the two layers and pressing CTRL+B.

Yves Emmanuel Nikyo Emougou explains:  “*if the landcover or landuse area that you want to map is very large, you could also map multiple polygons that you merge afterwards. First you map your first landcover area, after you continue with a new polygon next to the one already mapped. If the polygons are small and carry the same attributes, they can be joined together. To do so, select both polygons and press SHIFT+J. After the confirmation, select what to keep and select ‘apply’. Making one large polygon from the beginning is fair too. An important point to take into account is the limit of nodes that one can upload. When uploading the data online, if the nodes are greater than 2000, an error message will be received and it will not be possible to send your data.*”

But what if a residential area is within farmland? “*Since it is not good practice to make landcover and landuse overlapping with each other, they should be mapped as a relation. For this, the best practice to adopt would be to first map the farmland area, and then the residential area within it. Next, select both areas and press CTRL+B to create a multipolygon. Note that, the outside polygon is called outer and the inside polygon inter.*" 

<figure>
<img src="https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20221012_cp2_lackofrelations.png">
<p class="caption">Illustration of the lack of relations in landcover and landuse mapping on OSM</p>
</figure>


<figure>
<img src="https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20221012_cp3_usingrelations.png">
<p class="caption">Using relations in landcover and landuse mapping on OSM</p>
</figure>

#### The importance of local knowledge 
Although the best practices for landcover and landuse mapping share common ground (no pun intended), they should be adapted to the area’s landscape. The definition of common classes that encompass various landscapes and ecoregions can be a challenge in landcover and landuse mapping and classification. OSM as a global project uses categories to map landcover and landuse around the world. As a result, it is critical to specify how these categories should be used in a specific ecoregion. The types of forest in Belgium and the types of forests in Cameroon are not the same. Moreover, on aerial imagery, it can be difficult to understand the specificity of the land. So, how should these be classified? Good instructions with pictures and local knowledge are key to understand what type of landcover and landuse will be mapped. The importance of local knowledge is paramount to collect accurate data and classify them properly. 

Landcover and landuse is now mapped with a variety of categories in OpenStreetMap, as it has evolved over time. However, a challenge the team faced was the absence of categories adapted to the Cameroonian ecosystem classes on OSM. Indeed, not all landcover and landuse classes that are existing in Africa have dedicated categories on OSM. Cameroon is divided into four geographical regions: northern, central, southern, and western. The savanna plain that occupies the country's center descends in elevation as it approaches the Lake Chad basin north of the Benue (Bénoué) River. Although approximately 20% of the surface on Earth is covered by savanna, it remains absent as a classification on OSM. In order to adapt to the existing confines, it has been tagged as ‘meadow’ by the OSM Cameroon team.

The challenges of not having local knowledge can hinder the collection of accurate data. From aerial imagery, one could make the mistake of mapping some places as residential areas when in reality, they are actually buildings to store materials for farming activities. Another instance is with agricultural lands. Agricultural land with its crops, perennial or annual, is constantly evolving. From one year to another, agricultural land uses can change, or stay the same for over a decade. Even further, there can be confusion with forests. A palm oil, coffee or cocoa field may look like a forest on aerial imagery. Only local knowledge can elucidate and take into consideration the organisation of the objects you see. Natural objects such as forests are quite disorganised, however in some cases you are able to distinguish farmland from forest based on aerial imagery. Like for example  the palm groves in the figure, which are better organised and characterised by the presence of access roads to facilitate the transportation of crops. 

<figure>
<img src="https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20221012_cp4_landcoverorganisation_eng.png">
<p class="caption">Illustration of the organisation of a forest and palm groves</p>
</figure>

### What next?
OSM Cameroon is committed to continue improving their landcover mapping in order to provide better information. Their effort doesn’t end here, as the team is now doing quality control. OSM could be utilised more extensively in operational applications and environmental research, such as monitoring landcover change in connection with vegetation and climate modelling. The achievements of [Christin Steve Nwagoum Keyamfe](https://www.openstreetmap.org/user/Steveeen), [Yves Emmanuel Nikoyo Emougou](https://www.openstreetmap.org/user/NIKOYO%20EMOUGOU%20Yves%20Emmanuel), [Victoire Tsajio](https://www.openstreetmap.org/user/victoire%20Tsajio), [Sylvie Galago](https://www.openstreetmap.org/user/Sylvie%20GALAGO), [Ismael Ebenezer Ongali Tsala](https://www.openstreetmap.org/user/ongalisma),  [Ian Jocelyn Kemme Kemme](https://www.openstreetmap.org/user/Le%20Mago), and [Guy Berlin Boutchouang](https://www.openstreetmap.org/user/Guy%20Berlin%20Boutchouang) are a great example of OSM communities’ capabilities and activities around the world, and more so how their contribution to open geospatial data can be used for various types of decision-making.


#### Have a look at their social media accounts! 
[Facebook](https://www.facebook.com/OpenStreetMap-Cameroun-799439470157013/)

[Twitter](https://twitter.com/OSMCameroun)

#### Curious about mapping landcover and landuse? Have a look at these:
- [OSM Landuse Landcover](https://osmlanduse.org/), a WebGIS application to explore the OpenStreetMap database specifically in terms of landuse and landcover information.

- [Wiki page for Land use](https://wiki.openstreetmap.org/wiki/Land_use).

- [Wiki page for Land Cover](https://wiki.openstreetmap.org/wiki/Landcover).

- [Advanced Mapping using JOSM](https://www.missingmaps.org/assets/downloads/JOSM_Advanced_Mapping_EN.pdf), MissingMaps’ guide to learn about the ins and outs of JOSM.

- [OpenStreetMap as a support for the production of 2673 national topographic maps at the 1:25,000 scale](https://www.linkedin.com/pulse/openstreetmap-comme-support-%C3%A0-la-production-de-2673-coupures-sob/), from [Willy Franck Sob](https://www.hotosm.org/people/willy-franck-sob/), 2021. 

To improve landcover and landuse mapping in OpenStreetMap, you too can participate in landcover and landuse mapping efforts for humanitarian organisations. The [HOT Tasking Manager’s explore page](https://tasks.hotosm.org/explore/filters?types=LAND_USE) allows users to filter projects by types of mapped objects or key words, and one can always choose the ‘landuse’ option to find new tasks! 

#### Médecins Sans Frontières set up a task for the [landuse and landcover mapping of Gummi, Nigeria](https://tasks.hotosm.org/projects/13625/) if you’d like to contribute!

