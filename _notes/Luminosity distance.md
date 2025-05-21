---
tags:
  - Observational_cosmology
---

In Eucledian Space, radiation power at distance d is:
$$
F=\frac{L}{4\pi d^2}
$$
In Cosmology, we also define the **Luminosity distance** as:
$$
F=\frac{L}{4\pi d_L^2}
$$
there is relation:
$$
d_L=\frac{d_A}{a^2}=\frac{r(\chi)}{a}
$$

## Derivation for the luminosity distance

Set the metric to be:
$$
ds^2=c^2dt^2-a^2(t)(d\chi^2+r^2(\chi)d\Omega^2)
$$
with the coordinate origin set at the emmision star.

The comoving coordinate of us, the observer is $\chi$, and since it is connected with a timelike geodesic,
$$
\begin{align}
\int_0^\chi d\chi &= \int_0^{t(\chi)} \frac{cdt}{a(t)} \\
&= \int_{a_{emit}}^{a_0}\frac{cda}{a^2H(a)}=\int_0^{z_{emit}}\frac{cdz}{H(z)}
&=\chi(a_{emit})
\end{align}
$$

This means the chi coordinate of observer in this new system is just the [[Comoving distance]] $\chi$.

If we count photons, the [[Absolute Luminosity]] of the star $L$ is $L=\frac{dN}{dt} \frac{hc}{\lambda_{emit}}$. The observed flux is:
$$
F=\frac{dN_{obs}}{dt}\frac{hc}{\lambda_{obs}}\frac{1}{4\pi r(\chi)^2}
$$
The $\frac{dN}{dt}$ scales with $\frac{a_0}{a}$ due to logitudinal expansion, and the 'comoving speed' of photons are decreased at lower redshift.

For [[FLRW metric]] without spatial curvature:
$$
r(\chi)=\chi;
$$
The Flux is:
$$
F=\frac{dN}{dt}\frac{a}{a_0}\frac{hc}{\lambda_{emit}}\frac{a}{a_0}\frac{1}{4\pi \chi^2}
$$
This gives:
$$
d_L(a)=\frac{\chi(a)}{a}.
$$
