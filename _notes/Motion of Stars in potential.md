---
tags:
  - Astro_III
  - galactic_physics
---

Main objective:
From the [[Gravitational Potential Models of Galaxies]], we have models of galaxies, but what is the motion of stars within the galaxies?

## basic equations
1. Lagrangian: $L=\frac{m_i}{2}v_i^2-m_i\phi(x_i)$.
	1. In **spherical potentials**, $L = \frac{m_s}{2}(\dot{r}^2+r^2\dot{\theta}^2+r^2\sin^2\theta \dot{\phi}^2)-m_S\phi(x_S)$.
	2. In **cylindrical potentials**,  $L = \frac{m_s}{2}(\dot{r}^2+r^2\dot{\phi}^2+\dot{z}^2)-m_S\phi(x_S)$.
2. Total Angular momentum: $J = \sum_i m_i \vec{v_i}\times \vec{r_i}$. With v and r both relative velocity and position.
3. Total Energy: $E = \frac{m}{2}v_S^2+m_S\phi(x_S)$.
	1. Considering Angular momentum being constant (Ignoring the *Star-Star interaction* for now). $E = \frac{m_S}{2}\dot{r}^2+\frac{J^2}{2m_Sr^2}+m_S\phi(r)$. And the term $\phi_{eff}=\frac{J^2}{2m_S^2r^2}+\phi$ is called the **Effective potential**.
	2. In **cylindrical coordinates**, this is also introduced similarily. $\phi_{eff}(r,z)=\phi(r,z)+\frac{J_z^2}{2m_S^2 r^2}$. 

# Equations of Stellar self-interaction

For a star in a starfield.
$$
\vec{F}_s = \sum_i \vec{F}_i
$$
For two star scattering events, assuming $\delta v/v \ll 1$.
$$
\delta v = \int^{\infty}_{-\infty}\frac{F_\perp}{m}dt=\frac{Gm}{b}\frac{2}{v}
$$
If a star shoots through a stellar cluster that is standing still.
$$
dN = \frac{N}{\pi R^2}2\pi b db
$$
The velocity square summed gives us a scale of the interaction.
$$
\Delta v^2 = (\frac{2Gm}{bv})^2\frac{2N}{R}bdb=\frac{8G^2m^2N}{v^2R}\ln \frac{b_{max}}{b_{min}}=8v^2\ln\Lambda
$$
For the logarithm term, $b_{max}=R,b_{min}=Gm/v^2$. this gives:
$$
\Lambda = \frac{Rv^2}{Gm}=\frac{R}{Gm}\frac{GNm}{R}=N
$$
The $\frac{\Delta v^2}{v^2}=\frac{8ln N}{N}$. Which gives a typical timescale of cluster relaxation:
$$
t_{relax}\approx n_{relax} \cdot t_{cross}\approx \frac{0.1 ln N}{N}.
$$
this means the relax time is larger than crossing time for N>40.
