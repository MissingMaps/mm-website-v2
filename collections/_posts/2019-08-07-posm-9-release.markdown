---
layout: post
title: "POSM 0.9 - Passel of POSMs"
postID: posm-passel
banner: https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20190807_banner.jpg
date: 2019-08-07
author: Dan Joseph, Seth Fitzsimmons
excerpt: "OpenDroneMap (ODM) is an open ecosystem of solutions for collecting, processing, analyzing and displaying aerial data. American Red Cross has used it when conducting drone mapping and trainings with the Philippines Red Cross, Haitian Red Cross, and Belize Red Cross. We’re excited to have been able to fund some recent improvements that create exciting opportunities when running ODM with POSM, while also benefiting the overall ODM project. The newest POSM release brings in the ODM updates and lets you distribute the processing of large image sets across a passel of POSMs. "
published: true
categories: [POSM, OpenDroneMap]
permalink: /blog/:year/:month/:day/:title/
lang: en
---

_**This was originally posted on on the [American Red Cross International Services Department](https://www.redcross.org/about-us/our-work/international-services.html) Data Team [blog](https://americanredcross.github.io/2019/08/07/posm-9-release/).**_

OpenDroneMap (ODM) is an open ecosystem of solutions for collecting, processing, analyzing and displaying aerial data. American Red Cross has used it when conducting drone mapping and trainings with the Philippines Red Cross, Haitian Red Cross, and Belize Red Cross. We’re excited to have been able to fund some recent improvements that create exciting opportunities when running ODM with POSM, while also benefiting the overall ODM project. The changes to ODM included: extension and modifications to ODM's split-merge code to support local and distributed workflows, and changes to the NodeODM API/proxy. What this means for you, is that it’s now possible to process large datasets on a cluster of machines faster by distributing the dataset over multiple nodes.

The newest POSM release brings in the ODM updates and lets you distribute the processing of large image sets across a passel of POSMs. We were ready to make the release available; however, please note that we are still running some tests, updating [documentation](http://posm.io/), and working to establish some benchmarks. You can expect more guidance on the new functionality and at least one minor POSM release in the near future.

Why invest in open source? American Red Cross could have purchased many years of licenses for proprietary photogrammetry software instead of supporting ODM. 

* Commercially available products often aren’t created with a primary focus on humanitarian use-cases. Because ODM is open source we can easily include it on POSM and better integrate it into our humanitarian workflows. Building on an open source foundation means we can spend less money and time building, and have more resources for learning and doing.
* The maintainers of ODM have done significant amounts of unpaid work improving tools that are available for free and helping people leverage the technology. The tools and accompanying support has helped us on our drone mapping journey. It has also benefited other organizations and individuals and helps to level the innovation field, making it easier for a more diverse group to improve their programs with new technologies. Our investment supports the developers and enables them to spend focused time on improving ODM.
* This American Red Cross investment makes the tools better for everyone, not just license holders. A ripple effect means our humanitarian colleagues already mapping with drones in the Belize Red Cross and Indonesian Red Cross benefit, as well as any other Red Cross or Red Crescent National Society that wants to include ODM in a drones for mapping workflow.


<figure>
<img alt="the WebODM interface" src="https://raw.githubusercontent.com/MissingMaps/img/main/images/missingmaps-blog_20190807_culasi.png">
<p class="caption">The WebODM interface on a POSM showing a completed processing task</p>
</figure>

We also continue to make small improvements that resolve bugs users have identified and improve the stability of the platform. See the [v0.9.0](https://github.com/posm/posm-build/releases/tag/v0.9.0) and [v0.9.1 release descriptions](https://github.com/posm/posm-build/releases/tag/v0.9.1) for a complete list of notable changes. 

A big thank you to Piero Toffanin of [Masserano Labs](https://www.masseranolabs.com/), Seth Fitzsimmons ([@mojodna](https://twitter.com/mojodna)), and Stephen Mather ([@smathermather](https://twitter.com/smathermather)) for all their help.

Grab the latest [POSM release](https://github.com/posm/posm-build/releases), check out the [documentation](http://posm.io/), log [issues](https://github.com/posm/posm/issues) on GitHub about any bugs or suggestions, follow [@awesomeposm](https://twitter.com/awesomeposm) on Twitter, and get in touch ([@danbjoseph](https://twitter.com/danbjoseph) / [daniel.joseph@redcross.org](mailto:daniel.joseph@redcross.org)) if you want to chat use-cases or coordinate on making the future of drones in humanitarian action even more exciting!
