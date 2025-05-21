---
tags:
  - Astro_II
  - Observational_cosmology
  - theoretical_cosmology
---

On Large distnces $l>10Mpc$ usually the perturbations are small.

## Conventions and Notations

Moving away from the [[The Cosmological Principle]], we can focus on the perturbations to a homogeneous-isotropic universe.
$$
\begin{gather}\ \text{density }\rho(x,t)\\
\text{velocity  }u(x,t) \\
\text{metric  } \Phi(x,t)
\end{gather}
$$
The related Eqautions as discussed in [[Equations of Perturbation for Matter]].
1. **Continuity Equation**.
2. **Euler's Equation**.
3. **Poisson Equation**.

For convenience, we define the fisical distance as $r = a(t) x$ and parametrize the density $\rho(r,t)=\rho(x,t)$.

Then the physical velocity $u=\dot{r}=\dot{a} x+a\dot{x}=\dot{a} x+v$. And $v=a\dot{x}$ is called the [[Peculiar Velocity]].

And also we usually use **Overdensities** $\rho = \bar{\rho}(1+\delta)$.

## Overal approach

Stepping from the homogeneous level, the expand the $f(x,p,t)$ as first-order taylor expansion W.R.T $x$,$\hat{p}$. 

1. [[Boltzmann Equation]] and [[Collisionless Boltzmann Equation]] in First Order of x, p.
2. [[Metric Perturbation]] governed by the [[Einstein's Equation]], also expanded in First Order of x,p.
3. Express the [[Energy Momentum tensor]] by perturbed quantities, and couple the equations. [[Energy Momentum Tensor Perturbation]].

![Couplings_of_perturbation](/assets/pictures/Couplings_of_perturbation.png)
## Index of perturbation by species

We solve the [[Boltzmann Equation Perturbation]], for Non-relativistic Particles such as [[DM perturbation]] and [[Baryon perturbation]], the equation is reduced into the first and second moment in momentum, which yields the **Fluid Equations**, involving $\delta_c, u_c$ and $\delta_b,u_b$.

For Relativistic particles like [[Photon Perturbation]] and [[Neutrino Perturbation]], we solve the full boltzmann, involving all modes, with a change of variables via fourier transfrom:
$$
\begin{gather}
\Theta(x,p,t)\rightarrow \Theta(\vec{k},\vec{\mu},t)\\
\mathcal{N}(x,p,t)\rightarrow \mathcal{N}(\vec{k},\vec{\mu},t)
\end{gather}
$$

## Numerical codes

To solve for the whole system, we can use [[Boltzmann Codes]] numerically. The State-of-theArt codes include **CAMB, CLASS,** etc.

