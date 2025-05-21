---
tags:
  - Astro_III
  - planet_formation
---

In collision process:
- if collision is one big mass and one small mass, the two merge into a bigger object.
- If the two bodies are euqal sized, usually fragmentation is the result

Highly dependent on the collision cross section.

There is a famous **1 meter bottleneck** for [[Planetesimals]] to collide and not grow in size (instead fragmenting and bouncing back, for example).
![collision_gap](/assets/pictures/collision_gap.png)
The bouncing gap there is clearly showing something that is not working (for example, surface chemistry and coallition physics is not well modeled in the simulations).

There is theory for Collisions for unequal mass collsions (In which we assume all planetesimals hit and glue):
![planetesimal_accretion](/assets/pictures/planetesimal_accretion.png)
$$
\frac{dM}{dt}=\pi R^2\times \rho_{solid}v_{rel}\times F_{focus}
$$
Where the $F_{focus}$ is the focusing factor representing the [[Gravitational focusing]] effect.

In more observational variables:
$$
\frac{dM}{dt}=\pi R^2 \Omega\Sigma_sF_{focus}
$$
where we use $v_{rel}=\Omega H$. because the velocity dispersion across the disk height is $\Omega H$.

Using the [[Gravitational focusing]] result, we have:

$$
\frac{dM}{dt}=\pi\Omega\Sigma_s R^2F_{focus}=\pi\Omega\Sigma_s R^2 (1+\frac{8\pi}{3}\frac{G\rho_pR^2}{v_{rel}^2})
$$
At $v_{rel}\gg v_{esc}$, the growth $\frac{dM}{dt}\propto M^{\frac{2}{3}}$, However there will eventually be a phase when $M$ grows to the point of $v_{rel}\ll v_{esc}$, $\frac{dM}{dt}\propto M^{\frac{4}{3}}$the phase is called **Oligrachic growth** discussed in [[planetesimal growth phases]]. This means only a small selected few of the planetesimals that climb to the transition point quick enough that end up into planets.