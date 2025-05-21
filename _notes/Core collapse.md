---
tags:
  - Astro_III
  - galactic_physics
---
Here we study the behaviour of an overdensity of gas (HI,H2,CO,...). Core collapse is one way of forming a dense object (the other main channel is [[Core accretion]]).
# The inventory before collapse
$$
\underbrace{H_2,H I}_{99\%},CO,... \underbrace{grains}_{<1\%}
$$The grains are usually referred to as **dust**, and they usually are solids. The solids can be detected by the thermal radiation (*refractory*).

The [[CO line]] is very important in measureming the gas component.

# Equations of Core collapse

Assume [[Gas Collapse Equillibrium]] in terms of hydrostatic equillibrium:
$$
\nabla P = -\rho g
$$
In **vertical** direction of the disk, the gas will try to end up onto the disk midplane and the gas pressure is resisting the effect.
$$
\frac{\partial P}{\partial z}=-\rho g_z=-\frac{GM_*}{a^2}(\frac{z}{a})
$$
Assuming ideal gas: $P=c^2\rho$,
$$
\frac{1}{\rho}\partial_z \rho=\frac{GM_*}{a^3 c^2}z
$$
The solution is a gaussian density distribution in the vertical direction.
$$
\rho = \rho_0 e^{-z^2\Omega^2/2c^2}
$$
And the characteristic height of disk $H^2=\frac{c^2}{\Omega^2}$. This leads to the flareing of the disks as seen from observations.

![Disk_flaring](/assets/pictures/Disk_flaring.png)

# Radial equillibrium

A perturbative solution: $P = P_0+\delta P$
$$

\frac{1}{\rho(r,t)}\frac{\partial P(r,t)}{\partial r}+\frac{GM_*}{r^2}-\Omega(r)^2 r=0
$$
If we look for solution of $\delta P$ in the form of $\exp[i\omega t \pm k r]$.

The solution gives:
$$
\omega^2=4\Omega^2-\underbrace{2\pi G \Sigma k}_{gravity}+\underbrace{c^2k^2}_{pressure}
$$
If the function gets to $\omega^2<0$, the solution will give an exponentially growing disk.
The minimum of the $\omega^2$ comes at $k_{crit}=\pi G\Sigma$.
$$
\omega^2_{crit}=4\Omega^2-\pi^2G^2\Sigma^2
$$
The disk stability is usually defined from comparing the $\Omega and \pi G \Sigma$, and we define the [[Toomre Q]] parameter:
$$
Q = \frac{c\Omega}{\pi G \Sigma}
$$
When $Q>2$, the disk is **Stable** and no perturbation of disk can grow exponetially, when $Q<1$, the disk is very unstable (Core Collapse happen).

however, this criteria is very strict, and for solar system planets $Q\sim 10^3$, and this is challenging the theory because the solar system could not have formed.



> [!note] Self gravity of disk not considered in the derivations
> The epoch we focus on ths the case when the star is already formed and typically has a $>99.9\%$ mass of the entire disk.

