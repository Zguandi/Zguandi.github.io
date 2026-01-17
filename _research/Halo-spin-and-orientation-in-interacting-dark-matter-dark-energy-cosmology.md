---
layout: post
title: "Halo spin and orientation in interacting dark matter dark energy cosmology"
date: 2025-01-01
description: "Guandi Zhao, Jiajun Zhang, Peng Wang, and Ji Yao"
thumbnail: /assets/pictures/EVO.png
tags:
  - cosmology
  - N-body simulation
---

In a 2025 paper, I joined research term at Shanghai Astronomical Observatory to discuss how would interacting dark matter (DM) dark energy (DE) models leave imprints on the cosmological large-scale structure (LSS). This work has been published to [*Physics Review D*](https://doi.org/10.1103/lq8t-gw3m).

## Key concepts 

### Interacting dark matter-dark energy models

Our universe at its present is composed of ~70% dark energy, and ~25% dark matter, as a result given by the standard $\Lambda$CDM model. While the physics nature of DM and DE is largely unknown, recent spectroscopic surveys and supernovae catalogs has further challenged the $\Lambda$CDM model's assumption of non-interacting DE in late times.

In this context, interacting dark matter dark energy models (IDE) is a possible theoretical framework. The phenological parametrization for IDE studied in this work is:

$$
Q_{DE\rightarrow DM}=\xi_2\rho_E,
$$

which assumes the energy transfer from DM to DE $Q_{DE\rightarrow DM}$ is proportional to the energy density of DE $\rho_E$. In late time cosmology, a positive $\xi_2$ parameter leads to a decaying DE and accumulating DM and vice versa. This effect acts as a correction to the $\Lambda$CDM matter density and anisotropy in the late time universe, when redshift $z\sim 1$ and DE start to dominate the universe.

### Intrinsic alignment of dark matter halos

In $\Lambda$CDM cosmology, initial anisotropy in matter distribution caus gravitational collapse of dark matter into dense dark matter halos, described by the hierarchical formation theory. The intrinsic alignment is a secondary effect of LSS formation, where due to their formation inside large-scale tidal environments, final halos have a larger tendency to be epllitical, with its major axis aligned with the tidal stretch direction. This also causes nearby halos to align with each other. This effect is shown on the right panel of Fig. 1, where halo major axis (blue) have tendency to align with the tidal stretch direction (grey).

![Figure 1](/assets/pictures/quiver_halo.png)
*Figure 1: Halo alignment visualization in $\Lambda$CDM. The arrow in grey are the tidal field stretch direction at each dark matter halo, the blue arrows correspond to halo major axis direction.*

In observational cosmology, the intrinsic alignment is coherent with the cosmic shear, and brings systematics in weak lensing experiments such as DES and CSST. Current models of intrinsic alignments are based on calibration in the $\Lambda$CDM framework, and the effect of IDE needs to be investigated.

## Method and results

We used a N-body cosmology simulation setup based on GADGET-2 developed by [Zhang et al. (2018)](https://journals.aps.org/prd/abstract/10.1103/PhysRevD.98.103530). The simulation, initial conditions, box size and smoothing details are covered in the [main paper](https://doi.org/10.1103/lq8t-gw3m). We did a comparison between IDE I (DM $\rightarrow$ DE), $\Lambda$CDM and IDE II (DE $\rightarrow$ DM).

### The halo mass fucntion

Due to IDE modifying the DM total mass, we se less halos with large masses in IDE I than $\Lambda$CDM, which is also less than the IDE II model. The halo mass function $\frac{dn}{d\log_{10}M}$ is shown in Fig. 2.

![Figure 2](/assets/pictures/HMF.png)
*Figure 2: The halo mass function in IDE models compared to $\Lambda$CDM.*

### Spin, shape tidal autocorrelation and crosscorrelation

In IDE models, the halo population also demonstrated tendancy to have shape alignment with tidal environment, this is shown in Fig. 3.

![Figure 3](/assets/pictures/power_law_fit.png)
*Figure 3: Halo shape alignment with tidal environment in IDE models compared to $\Lambda$CDM.*

In cosmological observations, the tidal field is not directly observable. Here we show the statistics of halo pairs regarding their alignment properties. We show the alignment of different vectors (shape, spin, and tidal) direction as a function of halo pair separation distance $r$ in Fig. 4.

![Figure 4](/assets/pictures/cross_corr_alignment.png)
*Figure 4: Halo shape, spin and tidal pair alignment as a function of halo pair separation distance $r$.*

The results show that IDE I shows the most halo shape alignment with the tidal field and shape autocorrelation, while IDE II shows the least. This could be explained by the difference in halo density profiles in IDE. As discussed by [Liu et al.](https://arxiv.org/abs/2201.09817), halo concentrations $c_{200}$ in IDE I are lower, which give halos a loose internal structure, and thus more subject to tidal environment.

This can be seen in a slice comparison of the evolution of a typical filament structure in Fig. 5.

![Figure 5](/assets/pictures/EVO.png)
*Figure 5: Halo shape alignment with tidal environment in IDE models compared to $\Lambda$CDM.*

The three models start with the same initial anisotropy at z=3.62, and as redshift decreases and the IDE effect grows stronger, IDE halos start to lose mass and grows diffuse in teh centre, while IDE II halos gain mass and become more compact compared to $\Lambda$CDM.