---
tags:
  - Astro_II
  - Observational_cosmology
aliases:
  - Halo bias
  - Halo overdensity
---
We now want to study how halos cluster in space.

Define the **Halo overdensity**
$$
\delta_H = \frac{N_h-\bar{N_h}}{\bar{N_h}}
$$
For halos in mass bins $[M,M+\Delta M]$.

From the [[Halo mass function|Press Schechter Ansatz]], we can get a simplified solution for halo overdensity:
$$
\delta_h(x,t)=b_h(x,t)\delta(x,t)
$$
where $b_h=1+\frac{1}{D(t)}[\frac{\nu^2-1}{\delta_c}]$ is the **halo bias**. (Also there are other fitting functions for the halo bias.)

![Halo_clusteirng_simulation](/assets/pictures/Halo_clusteirng_simulation.png)
The PS ansatz agrees well with simulations on large scales.

Note for $b_h>1$, the halos are *more clustered* than the matter distribution, and $b_h<1$ means *less clustered*. Higher mass halos are tend to be more clustered.
