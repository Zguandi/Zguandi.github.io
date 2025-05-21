---
tags:
  - galactic_physics
  - Astro_III
---

The main focus: 

motion of stars in **galactic potential**.
- star-star interaction are not considered.
- smooth potential with *spherical symmetry* and *flattened potential*.

motion of stars in [[Stellar Clusters]].
- star-star interaction must be considered.
- cluster evolution.

## Forces of Gravity

Newtons law of gravity applies:
$$
\begin{align}
\vec{F}(x)&=m_S\vec{g}(x)=m_S G\int \frac{\vec{x'-x}}{|x'-x|^3}\rho(x')dx'^3\\
\phi(x)&=-G\int\frac{1}{|x'-x|}\rho(x')dx'^3\\
\vec{g}(x)&=-\vec{\nabla}\phi(x)
\end{align}
$$
> [!note] The Newton theorem for shell gravity
> Suppose we have a **Spherically Symetric** mass shell distribution, the force of any test particle within the shell is **zero**. Whichi means:
> $\phi(r<R)=\text{Const}=-\frac{GM}{R}$ and $\phi(r>R)=-\frac{GM}{r}$.

## Spherically symmetric Distribution

In spherical distribution, the force at given radius r is only a function of the mass enclosed in the radius $M(r)$.
$$
\begin{align}
\phi(r)&=-\frac{GM(r)}{r}\\
F(r)&=-\vec{e_r}\cdot \frac{GM(r)}{r^2}
\end{align}
$$
> [!note] homogeneous density case
> Mass goes $\rho = \rho_0, M(r) = \frac{4\pi}{3}r^3 \rho_0$. This gives a centrifugal force $F = m_S\frac{4\pi G \rho_0}{3}\cdot r$. This centrifugal force gives an harmonic oscillator with period $T=2\pi \sqrt{\frac{3}{4\pi G\rho}}$. We can define the **Orbital Time scale** $t_{dyn} = \frac{1}{\sqrt{G\rho}}$.
## Plummer model

The Plummer model offers another analytic approximation for $\rho(r)$.

$$
\rho(r) \propto \frac{a^2}{r^2+a^2}
$$
## Toomre model

A **Disk** model, with cylindrical symmetric **surface density** $\Sigma(r)$.

$$
\begin{align}
\phi(r,z) &= \frac{-GM}{\sqrt{R^2+(|a|+|z|)^2}}\\
\Sigma(r) &= \frac{aM}{2\pi (r^2+a^2)^{3/2}}
\end{align}
$$
## Toomre model/Plummer sphere - (Miyamoto-Nagai model)

The intuition for Miyamoto nagai model is to consider a mixed model between a **disk** and a **Sphere**.
![Intuition_for_Miyamato_nagai_model](/assets/pictures/Intuition_for_Miyamato_nagai_model.png)

Combining the Toomre disk and the Plummer sphere, we can parametrize a pheno model:
$$
\begin{align}
\phi &= \frac{-GM}{\sqrt{R^2+(|a|+\sqrt{z^2+b^2})^2}}
\end{align}
$$
## Spheriodal distrobutions

> [!info] Extended Newton's theorem for spheriodals
> For a uniform density spheriodal shell, any test particle placed within the spheriodal experience no force, and potential $\phi(r<R)=\text{Const}$.
