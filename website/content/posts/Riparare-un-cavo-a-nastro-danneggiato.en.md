---
title: Repairing a damaged ribbon cable

showReadingTime: false
groupByYear: false
showAuthor: false
showWordCount: false
showDate: false
showBreadcrumbs: false
showPagination: false
showTableOfContents: false
---

### Introduction

In my homelab I can mount an NVME SSD and a SATA drive via an interface that is connected via a ribbon cable. The model of this interface is "***902746-001 HDD SATA MGE 16/51 Rev A***," which is easily replaceable and available online. In this post, I'll share how I fixed a damage that was affecting its functionality.

#### The problem

The cable's traces are intact (they are on the white part of the cable), but the tape that protects them (in blue colour) has broken, exposing the electrical traces. Dust and debris can cause short circuits on the electrical traces, leading to cable malfunctions. The cable appears as shown in the following image.

![](/assets/img/damagedcable.jpg)

Due to malfunctions caused by dust and debris settling on the tracks, my homelab did not detect any connected SATA drives.

#### The solution

First, I dusted the cable to remove all the debris. Then I took some heat shrink tubing and fit the cable through it, covering both "sections" of protective blue tape. The following image shows what the cable looked like before applying heat.

![](/assets/img/damaged_with_tube.jpg)

At this point, I applied heat with a lighter just for a few seconds so as not to damage the cable and the tubing. Below is what the cable looks like once heat has been applied.

![](/assets/img/fixed_cable.jpg)

The traces are now protected and the cable remains flexible.

#### The result

Reconnecting the cable to the motherboard, we can also plug the SATA drive to the interface. Running the `lsblk` command shows the drive as the "sda1" partition.

![](</assets/img/fixed lsblk.png>)
