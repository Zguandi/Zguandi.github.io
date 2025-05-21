---
tags:
  - Astro_II
  - theoretical_cosmology
---

In talking about photons on  null [[Geodesics]], we have the  Geodesic Equations using the [[Christoffel Symbol for FLRW]] applied on the 4-wavenumber of the photon.
$$
\frac{dp^0}{d\lambda}=-\Gamma^0_{\alpha\beta}p^\alpha p^\beta=-a^2H\delta_{ij}p_ip_j=-H\mathrm{p}^2
$$
where $\mathrm{p}$. is the physical momentum satisfying $\mathrm{p}^2+m^2=\epsilon^2$. Or in other words $\mathrm{p^2}=g_{ij}p^ip^j$.

The time evolution of $\mathrm{p}$ is:
$$
\frac{d\mathrm{p}}{dt}=(p^0)^{-1}\frac{d\mathrm{p}}{d\lambda}=-H\mathrm{p}
$$

Since $p^2=0$, we have $\epsilon^2 = (p^0)^2=\mathrm{p}^2$, and in [[FLRW metric]], $\mathcal{p}=a|\vec{p}|$. This gives parametrization of the spatial component of $p^\mu$ as:
$$
p^i=\frac{\mathrm{p}}{a}\hat{p^i}
$$
We can reparametrize the [[Distribution Function]] as: $f(x,\mathrm{p},\hat{p},t)$ and the [[Boltzmann Equation]] is:
$$
\frac{Df}{dt}=\frac{\partial f}{\partial t}+\frac{\partial f}{\partial x^i} \frac{\partial x^i}{\partial t}+\frac{\partial f}{\partial p}\frac{\partial p}{\partial t}+\frac{\partial f}{\partial \hat{p}}\frac{\partial\hat{p}}{\partial t}=C[f]
$$
## Background Homogeneous, Isotropic

From [[The Cosmological Principle]], we can use *Isotropy*, $\frac{\partial \hat{p}}{\partial t}\frac{\partial f}{\partial \hat{p}}=0$ and Use *Homogeneity*, $\frac{\partial f}{\partial x}=0$ We can know that:
$$
\frac{\partial f}{\partial t}+\frac{\partial f}{\partial \mathrm{p}}\frac{\partial \mathrm{p}}{\partial t}=C[f]
$$
$$
\frac{\partial f}{\partial t}-\frac{\partial f}{\partial \mathrm{p}}Hp=C[f]
$$
## Particle density

Integrate both sides with $p^2dp$ and use integral by parts same as in [[Boltzmann Equation]] section. We can see:
$$
\frac{\partial n(t)}{\partial t}+3Hn(t)=\int\frac{dp^3}{(2\pi)^3} C[f]
$$