---
tags:
  - Astro_III
  - planet_formation
---
Dust coupled to gasses are subject to aerodynamic drag.

Dust particles are inclined to have keplerian vel, but gass has less vel. This the dust lose angular momentum and soiral inwards.

$$
\Omega_{gas}<\Omega_{solids}
$$

In the direction vertical to the disk:
$$
\frac{\partial^2 z}{\partial t^2}+\frac{1}{\tau_f}\frac{\partial z}{\partial t}=-\frac{GM}{a^2}\frac{z}{a}
$$

- When there is no gas, the drag term is zero, and the motion is oscillatory.
- When there is gas, the particles will eventually settle down on the disk plane given enough time.

The decay timescale in z direction: $t_{drag} = \tau_f$, and the oscillatory timescale is $T=\frac{1}{\Omega}$.

The drag can be approximated by the motion of spheres in uniform medium:
$$
\tau_f = \frac{\rho_{solid} R_{solid}}{\rho \underbrace{c}_{H\Omega}}
$$
Moving $\Omega$ to th eleft gives a dimensionless $\Omega \tau_f = \frac{\rho_s R_s}{\rho H}$.

The decaying of $z\sim \exp[-t\Omega^2\tau_f]$. usually $\Omega t>\frac{1}{\Omega \tau_f}$. The time usualy takes $10^6$ Orbital periods $\frac{1}{\Omega}$.