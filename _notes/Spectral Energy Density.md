---
tags:
  - Astro_III
  - galactic_physics
aliases:
  - SED
---
The observation of Protodisks SED is a window to the [[Core collapse]] or [[Core accretion]] process. The protodisk can be classified by [[Spectral Classes of Stellar systems]].

Practically the disk is seen from its dust content through *thermal blackbody emission*. The spectral energy distribution (**SED**) of the disk can be calculated as:
$$
F_\nu = \frac{\cos\theta}{D^2}\int_{r_{in}}^{r_{out}}2\pi rdrB_\nu(T)(1-e^{-\tau_{\nu}})
$$
Where $1-e^{-\tau}$ is the optical depth effect of the disk, and the $B_\nu$ is then nblackbody spectrum.

A simple approximation for **optically thin** disks is $1-e^{-\tau}\approx\tau$, and the optical depth is related to the galaxy surface density $\Sigma$ by:
$$
\tau_\nu(r) = k_\nu \Sigma(r)/\cos\theta
$$
This in turn gives:
$$
F_\nu = \frac{1}{D^2}\int_{r_{in}}^{r_{out}}2\pi rdrB_\nu(T)k_\nu \Sigma(r)=\frac{k_\nu}{D^2}B_\nu(T)M_d
$$
This is a easy model of SED that is used extensively.
