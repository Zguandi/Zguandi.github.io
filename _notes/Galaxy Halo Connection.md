---
tags:
  - Astro_II
  - Observational_cosmology
---
Galaxy distribution in a halo with a known density profile is crucial for observational tests of [[Large Scale Structure|LSS]] studies.

![galaxy_halo_connection](/assets/pictures/galaxy_halo_connection.png)

Consider the most simple case for galaxy in [[NFW halo profile|NFW profile]] halo, where the galaxy is taking a central plane in the halo. The galaxy has gas density: $\rho(R,z)$, and the surface density is:
$$
\Sigma(R)=\int dz \rho(R,z)
$$
Usually the density profile could be fitted by a double exponential model:
$$
\rho(R,z)=\rho_0 e^{-R/R_0}e^{-|z|/h}
$$
The circular velocity:
$$
m\frac{V_c^2}{R}=F_{G,disk}+F_{G,halo}
$$
And we define $V_c^2(R)=V_{disk}^2+V_{halo}^2$. Where the two are contributions from the gas disk and the halo.

Using the conservation of angular momentum as a total:
$$
J = \int dx^3 \rho r \times v=2\pi \int_0^\infty dR R^2 \Sigma(R) V_c(R)
$$
And the *spin parameter* $\lambda = \frac{J|E|^{1/2}}{GM^{5/2}}$.

> [!important] Milky Way numbers
> Max circular velocity $V_{c,max}=220k\cdot s^{-1}$ Radius $R_d = 3.5kpc$
> $\frac{M_d}{M_{tot}}=0.05$ which is lower than the baryon-DM ratio $\Omega_m/\Omega_c = 0.17$, possibly due to feedback processes. The spin parameter is $\lambda \simeq 0.05$.



