---
tags:
  - unWISE_sz
---

The pixel window function describes the effects of pixelization of the Statistics of a [[Sky Map]]. The unbiased estimate of statistics of e.g. [[Power Spectrum]] need to correct for the effects of pixel window function.

[healpix nasa introduction](https://healpix.jpl.nasa.gov/html/intronode14.htm)

For a pixel p including the solid angle range of $\Omega$:
$$
f(p)=\int_\Omega f(\hat{n})w(\hat{n})d\Omega^2
$$
If expand into spherical harmonics:
$$
f(p)=\sum_{l=0}^{l_{max}}\sum_{m=-l}^l a_{lm}w_{lm}(p)
$$
