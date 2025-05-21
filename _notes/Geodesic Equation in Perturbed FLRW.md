---
tags:
  - theoretical_cosmology
---

In [[Metric Perturbation]], we perturb the metric in the Newton gauge. For a general on-shell particle moving in the Perturbed FLRW, the [[Geodesics]] equation is:
$$
\begin{align}
\frac{dp^i}{dt}&=\frac{1}{p^0}\frac{dp^i}{d\lambda}=\frac{1+\Psi}{\epsilon}\frac{dp^i}{d\lambda}\\
&=(H+\dot{\Phi})p^i+p^k\Phi_{,k}\frac{p^i}{\epsilon}-(\frac{\epsilon}{a}\Psi_{,i}+2(H+\dot{\Phi}p^i)+\frac{2p^i}{a\epsilon}p^k\Phi_{,k})
\end{align}
$$
The equation for momentum modulus is:
$$
\begin{align}
\frac{dp}{dt}&=\frac{d}{dt}\sqrt{\delta_{ij}p^ip^j}=\frac{1}{p}\delta_{ij}p^i \frac{dp^i}{dt}\\
&=-(H+\dot{\Phi})p-\frac{\epsilon}{a}\hat{p^i}\Psi_{,i}
\end{align}
$$
> [!note] In Background level limit
> $\Psi = 0$, the equation becomes the [[Background matter scaling, Fluid Equations]]:
> $$
> \frac{dp}{dt}=-Hp
> $$



And the equation for the direction is:
$$
\begin{align}
\frac{d\hat{p}^i}{dt}&=\frac{d}{dt}(\frac{p^i}{p})=\frac{1}{p}\frac{dp^i}{dt}-\frac{1}{p^2}\frac{p^idp}{dt}\\
&=\frac{\epsilon}{a p}(\delta^{ik}-\hat{p^i}\hat{p^k})(\frac{p^2}{\epsilon^2}\Phi-\Psi)_{,k}
\end{align}
$$

> [!note] The famous factor 2 difference between GR and Newton.
> In Non Relativistic limit, $\epsilon \ll p$, the bending effect of gravity acts under:
> $$
> \frac{d\hat{p^i}}{dt}_{NEWT}=\frac{\epsilon}{a p}(\delta^{ik}-\hat{p^i}\hat{p^k})(-\Psi)_{,k}
> $$
> However, in GR stationary solutions, there is always $\Psi = -\Phi$, and for **Ultra-relativistic** particles like photons, 
> $$
> \frac{d\hat{p^i}}{dt}_{GR}\propto(\Phi-\Psi)_{,k}=2\frac{d\hat{p^i}}{dt}_{NEWT}
> $$
> This results in the weak lensing bending effects for photons being 2 times the Newton predicted value.

