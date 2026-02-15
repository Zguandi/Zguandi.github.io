---
layout: post
title:  "Will emulated spectroscopic positioner dream of cyber galaxies?"
date:   2026-01-21 23:14:02 +0800
categories: jekyll update
thumbnail: /assets/thumbnails/patro_universe.png
description: blackhole rendering using raytracing in general relativity
---

In Jan 26, I started my master thesis in Professor Marcelle Soares-Santos group at [Universität Zürich](https://www.physik.uzh.ch/en.html). In the project, I will focus on the characterization of fiber positioners used in next generation spectroscopic instruments, specifically, [MUST](https://astro.tsinghua.edu.cn/en/Research/Research_interests_and_Projects/MUST.htm).

# Why do we need spectroscopic surveys?

The universe has **three spatial dimentions**, but we as astrophysicist maximally observe objects on the celestrial sphere, which is only **2D**. To reconstruct a 3D map of the universe, we need **radial distances** of each objects in the line of sight.

![Figure 1](/assets/pictures/Spectroscopy_lss_demo.png)

An accurate measurement of the radial distance utilizes the information of light spectrum in each of the distant objects. By measuring characteristic emmission and absorption lines, we can determine its **redshift**, and infer the radial distance using our understanding of the expanding universe. This method is called **spectroscopy**. Many exsisting spetroscopic surveys (SDSS, DESI) have achived tremendeous success in determining the matter clustering of the large-scale structure. The next generation of spectroscopic surveys (Spec-S5, MUST) will give better galaxy coverage in higher redshift.

However, measureing millions of galaxys with spectrum is a technical challenge. Usual astrophysical camera CCD/CMOS only give intensity information. However, passing the light from each galaxy into a spectrograph requires lots of labor, as every time the field of view changes, the galaxies will appear on different spots on the focal plane, and the fiber routing of spectrographs need to change.

# Why use positioners?

Fiber-positioner based robotic spectroscopic focal plane unit is one of the answers to this challenge. 

![Figure 3](/assets/pictures/positioner_demo.png)

At each field of view change, robotic positioners will carry each of the spectrograph fibers to exact locations of the galaxies, and stay stable during exposure. This method is very flexible and is robust against galaxy positioning on the focal plane. However, to match the requirements of a Stage-V spectroscopic survey, at each exposure, there will be $\sim 10^{4}$ galaxies in the field of view, this requires a considerable amount of robotic positioners to be mounted very compactly on the focal plane. For example, MUST will require $\sim 20000$ positioners on the $\sim 1m^2$ focal plane. This limites the size of fiber positioner modules and raises high demand of precision manufacturing of the microrobotic arms.

![Figure 4](/assets/pictures/DESI_robots.jpg)
*DESI positioners.*

# Why on moving mount?

In the real telescope configuration, the fiber positioners are fixed on the focal plane and rotate with the star tracking machanism on the telescope. According to DESI, up to 30% of positioners experienced more than expected wearing and malfunctions during operations, because the robotic positioners are not tested or spec-ed with a changing orientation. This lesson need to be drawn for future stage-V spectroscopic surveys.

As a group effort at UZH, a telescope mounted positioner test stand has been assembled. This allows us to test fiber positioner performance under changing orientations. My work of the master thesis will focus on the testing of the positioner X-Y precision.

