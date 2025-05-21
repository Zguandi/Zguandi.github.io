---
tags:
  - theoretical_cosmology
---
In [[Scalar temperature fluctuations]], we discuss the [[Inflation theory]] induced perturbation of scalar metric perturbation and scalar [[Inflaton]] perturbation.

Across the reheating process, we want to prove that the $R$ Ricci scalar is consistent.

We start with conservation of [[Energy Momentum tensor]]:
$$
\begin{align}
0&=\nabla_\mu T^\mu_0=\partial_t T^0_0+\Gamma^\mu_{\alpha\mu}T^\alpha_0-\Gamma^\alpha_{0\mu}T^\mu_\alpha\\
&=\frac{\partial \bar{T}^0_0}{\partial t}+\partial_t\delta T^0_0+\Gamma^\mu_{0\mu}T^0_0+\Gamma^\mu_{\mu i}T^i_0-\Gamma_{0\mu}^oT^\mu_0
\end{align}
$$
Since $\Gamma^\mu_{\mu i},\Gamma^0_{0i}T^i_0$ are all 1st order, we keep only 1st order of the equation:
$$
\begin{align}
0=\partial_t \bar{T}^0_0+\partial_t\delta T^0_0+3H(\bar{T^0_0}+\delta T^0_0)-2\dot{\Psi}T^0_0-H \bar{T^i_i}-H \delta T^i_i
\end{align}
$$
Using $\bar{T}^i_i=3P,\bar{T}^0_0=\rho$,
We get the equations, listed against the [[Background matter scaling, Fluid Equations]] of photons:
$$
\cases{
\partial_t \rho +3H(\rho+P)=0\\
\partial_t \delta T^0_0+3H\delta T^0_0-D\delta T^i_i+\dot{\Psi}(3\rho+3P)=0
}
$$
Now we use [[Einstein'e Equation perturbation]] to get $\Psi$:
$$
k^2\Psi=4\pi Ga^2(\delta T^0_0+3i\frac{k_i}{k^2}T^i_0a^2H)
$$
At superhorizon limit of $k/aH \ll 1$, The RIcci Scalar:
$$
R = -\Psi-\frac{\delta T^0_0}{3(P+\rho)}
$$
Since $\delta T^0_0=\delta \rho,\delta T^i_i=\delta P$,
$$
3(\rho+P)\dot{R}=3H(\frac{\dot{P}}{\dot{\rho}}\delta\rho-\delta P)
$$
This means when $\dot{R}=0$, $\delta P/\dot{P}=\delta \rho/\dot{\rho}$.

> [!note] During Inflation
> During inflation, on the inflation trajectory $\phi(\eta)$, every variable can be expressed as $f(\phi)$ because it is an attractor solution. (?why first order also), We can derive that $\dot{R}=0$ during slow roll.


This means the $R$ can give initial conditions for the [[Einstein Boltzmann Equation at Early Times]].

