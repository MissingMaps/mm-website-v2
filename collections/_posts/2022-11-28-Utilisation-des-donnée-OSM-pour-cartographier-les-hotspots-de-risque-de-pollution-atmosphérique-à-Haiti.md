---
layout: post
title: Utilisation des données OSM pour cartographier les hotspots de risque de pollution atmosphérique à Martissant, Port-au-Prince, en réponse à l'augmentation des cas d'asthme
postID: Utilisation-des-données-OSM-pour-cartographier-les-hotspots-de-risque-de-pollution-atmosphérique-à-Martissant-Port-au-Prince-en-réponse-à-l-augmentation-des cas-d-asthme
banner: https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20221121_banner-haiti-air-pollution.png
date: 2022-11-28
author: Laurie Boobier
excerpt: MSF a utilisé des informations géographiques pour cartographier les risques de pollution de l’air avec l'aide des bénévoles de Missing Maps qui ont mis à jour de précieuses sources de données routières et de bâtiments OpenStreetMap (OSM).
published: true
categories: [MSF, OpenStreetMap]
permalink: /blog/:year/:month/:day/:title/
lang: fr
---

À Martissant, Port-au-Prince, Médecins Sans Frontières (MSF) a été chargé de répondre à un nombre élevé de cas d'asthme. Puisqu'il existe des liens clairs entre l'exposition à la pollution atmosphérique et le développement et l'exacerbation de l'asthme, il est important pour MSF de localiser les hotspot de la pollution de l’air. MSF a utilisé des informations géographiques pour cartographier les risques de pollution de l’air avec l'aide des bénévoles de Missing Maps qui ont mis à jour de précieuses sources de données routières et de bâtiments OpenStreetMap (OSM).
 
  <figure>
<img src="https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20221121_haiti-port-au-prince.jpg">
<p class="caption"></p>
</figure>
 
### Methodologie
Pour cartographier le risque de pollution atmosphérique, des données open source associées à la pollution atmosphérique d'origine routière (type de route, revêtement routier, trafic) et à la pollution atmosphérique d'origine résidentielle (densité des bâtiments) ont été extraites.
 
### Sources de données 
Type de Routes
Les données de type de route ont été extraites de OSM et catégorisées à partir des routes primaires et secondaires (routes principales) et des routes tertiaires et résidentielles (routes non principales). Les routes principales ont généralement des niveaux de pollution de l’air plus élevés que les routes non principales, car elles ont généralement plus de voies et sont empruntés par un  plus grand nombre de véhicules.
 
#### Trafic
Les données sur le trafic ont été extraites du Google Traffic et ont été classées en utilisant une palette de couleurs: rouge foncé (très élevé), rouge (élevé), orange (moyen), vert (faible). Un trafic élevé entraîne des embouteillages, ce qui entraîne des niveaux de pollution de l’air plus élevés qu'un faible trafic. Ces données étaient difficiles à collecter car elles étaient extraites à différents moments de la journée pour obtenir un ensemble de données de trafic moyen.
 
#### La surface de la route
Les données de surface de route ont été extraites de OSM et classées entre pavée et non pavée. Lorsqu'une route n'est pas pavée, des particules sont soulevées de la route, ce qui entraîne une émission de poussière plus importante que les routes pavées.
 
#### Distance depuis les routes
On a constaté que la pollution de l’air induite par la route demeurait constante à moins de 50 mètres d'une route. Dans les zones situées à 50-100 mètres, il est divisé en deux et subdivisé en quartiers dans les zones situées à 100-200 mètres. Des tampons ont donc été créés pour ces distances.
 
#### Densité des bâtiments
Les bâtiments ont été extraits d'OSM puis utilisés pour créer une couche de densité de bâtiment. Cela a été fait en comptant le nombre de bâtiments dans une grille de 10 mètres. La densité des bâtiments est un indicateur de l’utilisation résidentielle de combustibles (provenant du chauffage et du refroidissement).
 
### Fusion de données
Pour donner une image globale du risque de pollution de l’air, il a fallu fusionner toutes les sources de données. Un ensemble de données pour la pollution atmosphérique associée aux routes a d'abord été créé. de données induites par la route. Celui-ci combine le trafic, le type de route et la surface. Des pondérations ont été attribuées à des paramètres individuels et ont été basées sur le niveau d'influence sur la pollution atmosphérique.  
 
Des poids plus élevés ont été attribués aux attributs qui ont une forte influence sur la pollution atmosphérique, tels que les routes principales, le trafic intense et les routes non pavées. Une fois les poids ajoutés à chaque ensemble de données, ces couches ont été fusionnées pour créer une couche de pollution atmosphérique induite par la route. 
 
Cette nouvelle couche a ensuite été étendue à chaque zone tampon individuel à l'aide de l'outil d'allocation euclidienne (outil ArcGIS Pro). Ces couches étendues ont ensuite été multipliées par 0,5 (tampon de 50 à 100 m) et 0,25 (tampon de 100 à 200 m).
 
De plus, si les routes principales traversaient, ces couches étaient additionnées. La couche de pollution de l’air induite par les habitations a été créée simplement en créant une couche de densité de bâtiment. La couche de pollution atmosphérique induite par les routes et la couche résidentielle ont été reclassées également entre 0 et 1, puis additionnées.  

Les produits finaux sont présentés ci-dessous, la première carte montre la pollution de l'air en général et la deuxième carte montre le risque de pollution de l'air des bâtiments individuels.
 
### Cartes 
 <figure>
<img src="https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20221121_air-pollution-risk-map-haiti.jpg">
<p class="caption">Carte des données (induites par les routes et induites par les bâtiments) et de la pollution de l'air à Martissant, Port-au-Prince.</p>
</figure>

 <figure>
<img src="https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20221121_air-pollution-risk-building-map-haiti.jpg">
<p class="caption">Carte montrant le risque de pollution de l'air des bâtiments individuels et des écoles à Martissant, Port-au-Prince.</p>
</figure>

 
### Résultat 
Les cartes indiquent des zones à risque de pollution de l’air relativement plus élevé à proximité des routes ainsi que des zones à forte densité de bâtiments également susceptibles d'avoir un risque d'exposition à la pollution plus élevé. L'identification des bâtiments résidentiels et des écoles dans les zones à haut risque peut être utile pour les futures actions de santé publique.
 
### Pourquoi MSF devrait-elle s'intéresser à la pollution de l'air? 
La pollution de l'air dans les zones urbaines des pays à faible revenu et celles touchées par les urgences humanitaires est un problème croissant et un facteur de risque important et augmentant les taux de mortalité. Cela est dû au fait que de nombreuses maladies non transmissibles telles que l'asthme ont des liens avec le risque de pollution de l’air.  Les interventions humanitaires se font de plus en plus en milieu urbain. Les maladies non transmissibles (y compris l'asthme) sont une caractéristique augmentant la charge de travail des prestataires de soins de santé humanitaires. En tant que problème de santé publique, cela vaut la peine d'être pris en compte lorsque les équipes de MSF fournissent des soins de santé aux personnes touchées par l'exposition à la pollution de l’air.
 
### Que peut-on faire contre la pollution de l'air?
  <figure>
<img src="https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20221121_air-pollution-actions-haiti-FR.png">
<p class="caption"></p>
</figure>
 
Les données géographiques pour cartographier le risque de pollution de l'air peuvent aider les équipes MSF à comprendre quelles communautés sont les plus touchées par la pollution de l'air et à planifier leurs activités avec une couche supplémentaire d'informations. Comprendre les disparités d'exposition peut aider à y remédier et pour l'avenir, déterminer les hotspots peut aider les équipes à cibler les interventions pour les problèmes de santé liés à la pollution atmosphérique.
