---
layout: post
title: Cartographier l'occupation du sol avec OSM Cameroun
postID: cartographier-l-occupation-du-sol-avec-OSM-Cameroun
banner: https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20221012_banner.png
date: 2022-10-14
author: Camille Couturier
excerpt: "Afin d'améliorer la cartographie de l’occupation et l’usage du sol au Cameroun, OSM Cameroun s'est efforcé de collecter de meilleures données et d'enrichir la carte OSM qui montre les régularités d’occupation du sol à travers le pays." 
published: true
categories: [OSM, partners]
permalink: /blog/:year/:month/:day/:title/
lang: fr
---

<figure>
<img src="https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20221012_cp3_usingrelations.png">
<p class="caption">Utilisation d'une relation dans la cartographie de l'usage et de l'occupation du sol sur OSM</p>
</figure>: post
title: Cartographier l’occupation du sol ave<figure>
<img src="https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20221012_cp3_usingrelations.png">
<p class="caption">Utilisation d'une relation dans la cartographie de l'usage et de l'occupation du sol sur OSM</p>
</figure>

### Introduction
Le Cameroun est souvent appelé « *l'Afrique en miniature* », en raison de la diversité des paysages du pays et du fait que la plupart des paysages géographiques qui ornent le continent africain se retrouvent presque tous au Cameroun. Le pays est un cas très intéressant pour la cartographie de l’occupation du sol et qui d’autre est mieux placé que sa communauté OSM pour le faire?

<figure>
<img src="https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20221012_teampic2.png">
<p class="caption">L'équipe OSM Cameroun travaillant sur la cartographie de l'occupation du sol</p>
</figure>


L'équipe d'OpenStreetMap Cameroun a travaillé dur ces dernières années, améliorant la carte de leur pays par la collecte de données et la collaboration avec des partenaires locaux, notamment le [Centre de formation professionnelle Eurêka Geo](http://eurekageo.space/) qui a appuyé l’équipe par la formation sur la numérisation sur OSM. Sous la supervision de [Christin Steve Nwagoum Keyamfe](https://www.openstreetmap.org/user/Steveeen), les membres d’OSM Cameroun, [Yves Emmanuel Nikoyo Emougou](https://www.openstreetmap.org/user/NIKOYO%20EMOUGOU%20Yves%20Emmanuel), [Victoire Tsajio](https://www.openstreetmap.org/user/victoire%20Tsajio), [Sylvie Galago](https://www.openstreetmap.org/user/Sylvie%20GALAGO), [Ismael Ebenezer Ongali Tsala](https://www.openstreetmap.org/user/ongalisma), [Ian Jocelyn Kemme Kemme](https://www.openstreetmap.org/user/Le%20Mago), [Guy Berlin Boutchouang](https://www.openstreetmap.org/user/Guy%20Berlin%20Boutchouang) ont réalisé la cartographie de l’occupation du sol du Cameroun. En 6 mois, de décembre 2019 à mai 2020, leur travail bénévole effectué au quotidien a porté ses fruits. Voici un retour sur leur approche, leurs méthodes et les défis qu'ils ont surmontés.

#### Choix de l'éditeur et de l'imagerie
La cartographie a été réalisée à l'aide de l'éditeur [Java OpenstreetMap JOSM](http://josm.openstreetmap.de/), qui est un éditeur OSM disposant de fonctionnalités avancées pour la cartographie numérique des caractéristiques topographiques (rivières, routes, bâtiments) et de l’occupation du sol contrairement à d'autres éditeurs comme ID Editor. Les versions 15322 et 15238 étaient les versions les plus utilisées de l'éditeur tandis que le choix de l’imagerie dépendait de la disponibilité du fournisseur. Par exemple, Maxar Premium, qui était l'imagerie de choix pour la mise en œuvre de ce projet, n'était pas disponible pendant une bonne période de la durée du projet. Ainsi, Mapbox satellite et Esri Mondial sont les imageries qui ont été utilisées pour résoudre ce problème d'indisponibilité.

#### L’occupation et l'usage du sol
L'un des nombreux aspects importants de la cartographie est la représentation de l’occupation du sol, qui aide les gens à comprendre comment les terres sont utilisées et ce qui y pousse. Ces informations sont essentielles pour la planification des projets de développement, les réponses aux catastrophes et de nombreuses autres fins. Comme son nom l'indique, l'usage du sol décrit à quoi sert une superficie de terre, comme une zone résidentielle, les activités commerciales, l'agriculture, l'éducation, les loisirs, etc. Il est lié à l’occupation du sol, qui décrit la chose physique et la surface qui recouvre la terre. Les deux idées sont complémentaires et peuvent parfois être utilisées en tandem. Dans le cas du travail d’OSM Cameroun, c’est principalement l’occupation du sol qui fut cartographiée. 
Afin d'améliorer la cartographie de l’occupation et l’usage du sol au Cameroun et surtout la volonté de produire des cartes au 1/20000 à jour, OSM Cameroun s'est efforcé de collecter de meilleures données et d'enrichir la carte OSM qui montre les régularités d’occupation du sol à travers le pays. La collaboration entre leurs membres et leur travail acharné ont permis de réaliser des cartes d’occupation du sol plus précises et à jour. Leur équipe indépendante et interfonctionnelle a créé des données significatives, et nous pouvons en apprendre beaucoup grâce à leurs connaissances et à leur processus.

<iframe width="560" height="315" src="https://www.youtube.com/embed/FfCFtaNTOaU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Collecte de données et collaboration renforcée
La compréhension générale est que, pour cartographier l’occupation et l’usage du sol dans OSM, il est très important d’avoir une connaissance locale de la zone et d'éviter les conflits de cartographie. En effet, en connaissant l'environnement où l'on cartographie, il est plus facile d'interpréter l'imagerie aérienne. Et grâce à la collaboration et à une communication ouverte, les risques de conflits sont évités.

#### L'importance d'éviter les conflits
Que la tâche soit configurée sur le [HOT Tasking Manager](https://tasks.hotosm.org/) ou que les limites et la grille soient définies dans [QGIS](https://www.qgis.org/en/site/), il est préférable que les mappers ne travaillent pas sur des carrés côte à côte. Par exemple, la stratégie d'OSM Cameroun était de laisser un mapper commencer au nord et l'autre au sud. Il est conseillé d'utiliser une grille car elle facilite la coordination du travail entre les différents mappers. Éviter les conflits dans la cartographie a permis à l'équipe d'OSM Cameroun d'être plus efficace dans leur travail et d'éviter que les membres perdent du temps et de l'énergie sur une seule tâche.

Voici la méthode utilisée par OSM Cameroun avec des exemples: Tout d'abord, ils ont choisi l’occupation du sol qu'ils voulaient cartographier; les champs agricoles par exemple. En traçant la zone, il faut éviter que l’occupation du sol  soit connectée aux nœuds des routes. Les routes peuvent être traversées, mais l’occupation du sol ne doit pas se connecter aux routes. Après que la zone est tracée, les attributs peuvent être ajoutés: par exemple, landuse=farmland.


<figure>
<img src="https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20221012_cp1_presenceofroads.png">
<p class="caption">Bonnes pratiques de cartographie de l'usage du sol en présence de routes</p>
</figure>

Une fois que la première occupation du sol est tracée, le dessin de la seconde peut suivre. Dans l'exemple de l'équipe d'OSM Cameroun, c'était une zone résidentielle. Il est important d'assurer que les nœuds des zones résidentielles soient connectés à l’occupation du sol  à côté de la zone agricole qui a été dessinée auparavant. Les premiers deux nœuds entre les occupations du sol différentes doivent être joints, puis en appuyant sur F, la ligne existante de la zone résidentielle doit être suivie. L'utilisation du [style de peinture/carte de MissingMaps/YouthMappers](https://github.com/MissingMaps/josm_styles/archive/master.zip) permet d’afficher des triangles d'avertissement quand ils sont interconnectés. Pour éviter ces triangles, il est important de créer des multipolygons en sélectionnant la couche et en appuyant sur CTRL + B.

Yves Emmanuel Nikyo Emougou explique: « *Si l’occupation du sol est très vaste, vous pouvez aussi cartographier plusieurs polygones que vous fusionnerez après. Si les polygones sont petits et portent les mêmes attributs, ils peuvent être joints plus tard. Pour cela, sélectionnez les deux polygones et appuyez SHIFT+J. Après la confirmation, sélectionnez ce qu'il faut garder et sélectionnez "appliquer". Faire un grand polygone depuis le début est aussi correct. Un point important à prendre en compte est la limite des nœuds qu'on peut envoyer. Lors de l’envoie des données sur OpenStreetMap, s’il y a plus de 2000 nœuds, un message d'erreur sera affiché et il ne sera pas possible d'envoyer les données.* »

Mais que se passe-t-il si une zone résidentielle se trouve à l'intérieur des champs  agricoles? « *Puisque ce n'est pas une bonne pratique que les différentes occupations du sol se chevauchent, elles devraient être cartographiées en tant que relation. Pour cela, la meilleure pratique à adopter est de cartographier d'abord la zone des champs agricoles, puis la zone résidentielle à l'intérieur. Ensuite, sélectionnez les deux zones et appuyez CTRL + B pour créer un multipolygone. Notez que, le polygone extérieur s'appelle outer et le polygone intérieur s’appelle inner.* »

<figure>
<img src="https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20221012_cp2_lackofrelations.png">
<p class="caption">Illustration du manque de relation dans la cartographie de l'usage et de l'occupation du sol sur OSM</p>
</figure>

<figure> 
<img
src="https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20221012_cp3_usingrelations.png"> <p class="caption">Utilisation d’une relation dans la cartographie de l'usage et de l'occupation du sol sur OSM</p> 
</figure>
  
#### L'importance des connaissances locales
Bien que les meilleures pratiques pour cartographier l'usage et l’occupation du sol partagent un terrain d'entente (sans jeu de mots), elles devraient être adaptées au paysage de la région. Trouver une compréhension commune des classes des divers paysages et écorégions peut constituer un défi en matière de cartographie et de classification de l'usage et l’occupation du sol. OSM, en tant que projet mondial, utilise des *categories* pour cartographier l'usage et l’occupation du sol dans le monde entier. Par conséquent, il est essentiel de spécifier comment ces *categories* doivent être utilisés pour la cartographie de l'usage  et l’occupation du sol dans une écorégion spécifique. Les types de forêts en Belgique et les types de forêts au Cameroun ne sont pas les mêmes. De plus, sur l'imagerie aérienne, il peut être difficile de comprendre la spécificité du terrain. Alors, comment devraient-ils être classés? De bonnes instructions avec des images et des connaissances locales sont essentielles pour comprendre quel type d’occupation du sol nous cartographions. L'importance des connaissances locales est primordiale pour collecter des données précises et les classer correctement.

L'occupation et l’usage du sol est maintenant cartographiée avec une variété de *categories* dans OpenStreetMap car elles ont évolué au fil du temps. Cependant, un défi auquel l'équipe a été confrontée était l'absence de *categories* adaptées aux classes de l'écosystème camerounais sur OSM. En effet, toutes les classes d’occupation du sol  existantes en Afrique ne sont pas sur OSM. Le Cameroun est divisé en quatre régions géographiques: le nord, le centre, le sud et l'ouest. La plaine de savane qui occupe le centre du pays descend en altitude à l'approche du bassin du lac Tchad au nord de la rivière Bénoué. Bien qu'environ 20% de la surface terrestre soit recouverte de savane, elle reste absente en tant que classification sur OSM et pour s'adapter, elle est cartographiée comme [prairie](https://wiki.openstreetmap.org/wiki/FR:Tag:landuse%3Dmeadow) par l'équipe d'OSM Cameroun.

Le fait de ne pas avoir de connaissances locales peut entraver la collecte de données précises. À partir d'images aériennes, on pourrait commettre l'erreur de cartographier certains endroits comme des zones résidentielles alors qu'en réalité, ce sont en fait des bâtiments pour stocker des matériaux pour les activités agricoles. Un autre exemple concerne les champs agricoles. Les champs agricoles avec leurs cultures, pérennes ou annuelles, sont en constante évolution. D'une année à l'autre, les affectations des champs agricoles peuvent changer ou rester les mêmes pendant plus d'une décennie. De plus, il peut y avoir confusion avec les forêts. Une ferme d'huile de palme, de café ou de cacao peut ressembler à une forêt sur des images aériennes. Seules les connaissances locales peuvent élucider et prendre en considération l'organisation des objets que vous voyez. Les objets naturels tels que les forêts sont normalement désorganisés, mais dans certains cas, vous pouvez distinguer les champs agricoles des forêts sur la base d'images aériennes. Comme par exemple les palmeraies de la figure, qui sont mieux organisées et caractérisées par la présence de routes d'accès pour faciliter le transport des cultures.


<figure>
<img src="https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20221012_cp4_landcoverorganisation.png">
<p class="caption">Illustration de l'organisation d'une forêt et d'une palmeraie</p>
</figure>

### Quelle est la suite?
OSM Cameroun s'engage à continuer d'améliorer sa cartographie de l’usage et de l’occupation du sol afin de fournir de meilleures informations et leurs efforts ne s'arrêtent pas là car l'équipe effectue actuellement un contrôle de qualité. OSM pourrait être utilisé plus largement dans les applications opérationnelles et la recherche environnementale, telles que la surveillance des changements d'occupation des terres en relation avec la végétation et  la modélisation du climat. Les réalisations de [Christin Steve Nwagoum Keyamfe](https://www.openstreetmap.org/user/Steveeen), [Yves Emmanuel Nikoyo Emougou](https://www.openstreetmap.org/user/NIKOYO%20EMOUGOU%20Yves%20Emmanuel), [Victoire Tsajio](https://www.openstreetmap.org/user/victoire%20Tsajio), [Sylvie Galago](https://www.openstreetmap.org/user/Sylvie%20GALAGO) [Ismael Ebenezer Ongali Tsala](https://www.openstreetmap.org/user/ongalisma), [Ian Jocelyn Kemme Kemme](https://www.openstreetmap.org/user/Le%20Mago) et [Guy Berlin Boutchouang](https://www.openstreetmap.org/user/Guy%20Berlin%20Boutchouang) sont d'excellents exemples des capacités et des activités des communautés OSM à travers le monde, et plus encore de la façon dont leurs contributions aux données géospatiales ouvertes peuvent être utilisées pour divers types de prise de décision.

#### Jetez un œil à leurs réseaux sociaux!
[Facebook](https://www.facebook.com/OpenStreetMap-Cameroun-799439470157013/)

[Twitter](https://twitter.com/OSMCameroun)

#### Curieux d’en apprendre plus sur la cartographie de l’usage et de l'occupation du sol? Jetez un oeil ici:
- [OSM Landuse Landcover](https://osmlanduse.org/), une application WebGIS pour explorer la base de données OpenStreetMap spécifiquement en termes d'informations sur l'usage et l’occupation du sol.

- [Page wiki sur l’usage du sol](https://wiki.openstreetmap.org/wiki/FR:Land_use)

- [Cartographie avancée avec JOSM](https://www.missingmaps.org/assets/downloads/JOSM_Advanced_Mapping_FR.pdf), guide de Missing Maps pour apprendre tout sur la cartographie avancée de JOSM

- [OpenStreetMap comme support à la production de 2673 coupures de cartes topographiques nationales à l'échelle du 1/25 000](https://www.linkedin.com/pulse/openstreetmap-comme-support-%C3%A0-la-production-de-2673-coupures-sob/), de [Willy Franck Sob](https://www.hotosm.org/people/willy-franck-sob/), 2021

Vous pouvez aussi améliorer la cartographie de l’occupation du sol dans OSM et participer aux efforts de cartographie de l’occupation du sol pour les organisations humanitaires. La section [« explorer les projets » du Tasking Manager de HOT](https://tasks.hotosm.org/explore/filters?types=LAND_USE) permet de filtrer les projets par types, et on peut toujours choisir l'option « occupation du sol » pour trouver des nouvelles tâches! 

#### Médecins Sans Frontières a mis en place un [projet de cartographie de l’usage du sol de Gummi, au Nigéria](https://tasks.hotosm.org/projects/13625/) si vous souhaitez contribuer!

