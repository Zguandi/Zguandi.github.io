---
tags:
  - theoretical_cosmology
---

For [[Collisionless Boltzmann Equation]] for photons,
$$
\begin{align}
0&=\frac{df}{dt}=\frac{\partial f}{\partial t}+\frac{\partial f}{\partial x^i}\frac{\hat{p^i}}{a}(1-\Phi-\Psi)\\
&+\frac{\partial f}{\partial p}(-(H+\dot{\Phi})p-\frac{p^i}{a}\Psi_{,i}
)\\
&+\frac{\partial f}{\partial \hat{p^i}}\frac{\epsilon}{a p}(\delta^{ik}-\hat{p^i}\hat{p^k})(\Phi-\Psi)_{,k}
\end{align}
$$
Where we are using results from [[Geodesic Equation in Perturbed FLRW]].


> [!note] 
> Similarily for Non-relativistic particles:
> $$
\begin{align}
0&=\frac{df}{dt}=\frac{\partial f}{\partial t}+\frac{\partial f}{\partial x^i}\frac{p
}{\epsilon}\frac{\hat{p^i}}{a}(1-\Phi-\Psi)\\
&+\frac{\partial f}{\partial p}(-(H+\dot{\Phi})p-\frac{\epsilon}{a}\hat{p^i}\Psi_{,i}
)\\
&+\frac{\partial f}{\partial \hat{p^i}}\frac{\epsilon}{a p}(\delta^{ik}-\hat{p^i}\hat{p^k})(\frac{p^2}{\epsilon^2}\Phi-\Psi)_{,k}
\end{align}
> $$

In the first order beyond [[The Cosmological Principle]],
- $\frac{\partial f}{\partial x}$ is first order.
- $\frac{\partial f}{\partial \hat{p^i}}$ is also first order.

In this sense, the photon equation in 1st order is:
$$
\begin{align}
0&=\frac{df}{dt}=\frac{\partial f}{\partial t}+\frac{p}{\epsilon}\frac{\hat{p^i}}{a}\frac{\partial f}{\partial x^i}\\
&-[H+\dot{\Phi}+\frac{\epsilon}{ap}\hat{p^i}\Psi_{,i}]p \frac{\partial f}{\partial p}
\end{align}
$$
## Reparametrization, perturbed temeprature

In absence of perturbation, we have $f(p)=\frac{1}{e^{p/T}\pm 1}$. Here we can parametrize th inhomogeneity by the **temperature fluctuations**.
