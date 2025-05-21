---
tags:
  - theoretical_cosmology
---

Like the [[DM perturbation]], baryon pertrubation deals with mostly non-relativistic particles.

> [!question] Why is Electrons non-relativistic?
> At Around [[Recombination]], $T\ll m_ec^2 \ll m_pc^2$.

In the **tightly coupling** regime:
$$
\begin{align}
e+\gamma \leftrightarrow e+\gamma && \text{Compton Scattering}\\
p+e\leftrightarrow p+e && \text{Coupling}\\
p+H\leftrightarrow p+H && \text{Strong Interaction}
\end{align}
$$
The e,p,H components should have **the same overdensity**:
$$
\delta_b = \frac{\bar{\rho_i}-\rho_i}{\bar{\rho_i}}
$$
where i could be e,p or H. In addition, the flow speed is the same for all components $u_e=u_p=u_H=u_b$.

The [[Boltzmann Equation Perturbation]] for the baryons are:
$$
\partial_t n_k+\frac{1}{a}\partial_j(n_ku_k^j)+(3H+\dot{\Phi})n_k=C^{(n_i)}
$$
We know there are conservation $2n_H+n_p+n_e=Const$. The *Sum* of the Boltzmann Equations should have no [[Collision Term]].

The result for Hydrogen and protons at the first moment are:
$$
m_p[\partial_t (n_p+n_H)u_b^i+4H(m_p+m_H)u_b^i+\frac{n_p+n_h}{a}\frac{\partial f}{\partial x^i}]=\mathcal{F}_{e \leftarrow\gamma}^i
$$
Where the RHS is the **Force term** comes from interaction that transfers momentum between baryons and radiation, namely:
$$
\begin{gather}
e+\gamma \leftrightarrow e+\gamma\\
p+\gamma \leftrightarrow p+\gamma\\
H+\gamma \leftrightarrow H+\gamma
\end{gather}
$$
>[!note] The Cross section difference.
>After Decoupling, the cross section of H+gamma is strongly supressed, but the former two has thompson scattering cross section $<\sigma v>\propto \frac{e^4}{m_{particle}^2}$ and becomes the main interaction after recombination.


## Collision with photons

the collision term has relation:
$$
\partial_t u_b^i+Hu_b^i=\frac{1}{\rho_b}\mathcal{F}^i_{e\leftarrow \gamma}
$$
In fourier space (see dodelson 5.22), 
$$
-\frac{1}{\rho_b} \hat{k}\cdot \mathcal{F}_{e \leftarrow \gamma}=-\frac{1}{\rho_b} 2_{\text{e spin}} \int \frac{dp^3}{(2\pi)^3}(p \cdot \hat{k}) m_e\sigma_T [-p\frac{\partial f}{\partial p}](\Theta_0-\Theta(\mu)+\mu u_b)
$$
where $\mu = \hat{p} \cdot \hat{k}=\cos  \theta$ and $u_b$ is the velocity modulus.

Integrating over dp^3 and we get:
$$
LHS=-\frac{2m_e \sigma_T}{\rho_b} \frac{\rho_\gamma}{2}\times (i\Theta_1(k,t)+\frac{u_b}{3})
$$
where $\Theta_1(k,t) = i\int \frac{d\mu}{2}\mu \Theta(\mu,k,t)$ is the first moment of photon temperature distribution.

> [!question] What is the K dependence? why is it fourier mode? is it conjugate to x?
> The K dependence is just the conjugate of X. the parametrization of the photon field is: $\Theta(x,\hat{p},t)$, and the k is the fourier component for x.

## baryon equation

If we assume the velocity has zero vorticity, the complete verison of baryon collision is:
$$
\partial_t\mu_b+Hu_b+ik\psi = m_e \sigma_T a \frac{4\rho_\gamma}{3\rho_b}[3i\Theta_1+u_b]
$$

> [!note] Compton Drag
> The $u_b$ proportional force in the RHS is called **Compton Drag**, it acts as a drag force that photons exert on the coupled baryon fluid.

## Velocity Vorticity

Consider the term:
$$
\begin{align}
-\frac{\epsilon^{ijk}}{\rho_b}\hat{k^j}\mathcal{F}^k_{e\leftarrow \gamma}&=-\frac{2m_e \sigma_T}{\rho_b}\int \frac{dp}{(2\pi)^3}p^2 (-p \partial_pf^{(0)})\\
&\times \epsilon^{ijk} k_j \int d \hat{p}^2(\Theta_0-\Theta(\mu)+\mu u_b)\hat{p}_k
\end{align}
$$
It can be proven that if $\tilde{u_b}\neq 0$, it will decay, and assuming *zero vorticity* is reasonable.