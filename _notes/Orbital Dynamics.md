---
tags:
  - Astro_III
  - exoplanets
---
The orbital dynamics within a stellar system is usually dealt with as a two-body Newtonian system.
$$
\vec{r}=r_1-r_2
$$
$$
\ddot{\vec{r}}=-G(M_1+M_2)/r^3 \vec{r}
$$
The Integrals of motions:
$$
J = \vec{r}\times \dot{\vec{r}}
$$
$$
E = \frac{1}{2} |\dot{\vec{r}}|^2-G(M_1+M_2)/r
$$
In polar coordinates: $r,\theta,(\phi)$,
$$
J=r^2\dot{\theta}=2 \frac{d A}{dt}
$$
$$
\ddot{r}-r\dot{\theta}^2=-\frac{G(M_1+M_2)}{r^2}
$$
The solution gives elliptical orbits:
$$
r(\theta)=\frac{J^2}{G(M_1+M_2)}\frac{1}{1+e\cos \theta}
$$
Where $e = \sqrt{\frac{2EJ^2}{G^2(M_1+M_2)^2}}$

The orbital period: $p=\frac{2}{J}\int \frac{1}{2}J dt=\frac{2A}{J}=\frac{2\pi a b}{J}$. And the angular momentum is:
$$
J=\frac{2\pi}{p}a^2\sqrt{1-e^2}
$$

# The time evolution

The time evolution of $r$, which gives:
$$
\dot{r}=\frac{2\pi}{p}\frac{1}{r}\sqrt{a^2e^2-(r-a)^2}
$$
Has no analytic solution, but usually  a substitution of variable is done:
$$
r(t)=a(1-e \cos E(t))
$$
and $\dot{E}=\frac{2\pi}{p}\frac{1}{1-eE(t)}$. This is called **Eccentricity Anomally**.

![orbital_geometry_keperian](/assets/pictures/orbital_geometry_keperian.png)

# projection into plane of sight

Using **Euler Angles**: 
