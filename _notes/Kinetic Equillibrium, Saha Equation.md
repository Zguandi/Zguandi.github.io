---
tags:
  - theoretical_cosmology
---

In the [[Boltzmann Equation]] with [[Collision Term]], we see the equation is very complicated. But in practice it is usually sufficient to just look at simple scenarios such as equillibrium.

Kinetic Equillibrium means that in the group of interacting particle species, **Energy Exchange** happens very fast. From statisitically physics, the [[Distribution Function]] of the species should take the Equillibrium form with a [[Chemical Potential]].

## Approximations
At $\epsilon-\mu >>T$, the distribution $f=\frac{1}{e^{\frac{\epsilon-\mu}{T}}\pm1}$ turns to the Maxwell distribution $f=e^{(\mu-\epsilon)/T}\ll1$.

The collision term:
$$
\begin{align}
RHS&=f_3(p_3)f_4(p_4)(1\pm f_1(p_1))(1\pm f_2(p_2))- f_1(p_1)f_2(p_2)(1\pm f_3(p_3))(1\pm f_4(p_4)) \\&
\approx f_3f_4-f_1f_2\approx \exp [-\frac{\epsilon_1+\epsilon_2}{T}]\times [\exp(\frac{\mu_3+\mu_4}{T})-\exp(\frac{\mu_1+\mu_2}{T}) ] 
\end{align}
$$
Where we used $\epsilon_1+\epsilon_2=\epsilon_3+\epsilon_4$.

Using the n(\mu) relation:
$$
n_s = e^{\mu/T}n_s^0
$$
We can define the *Thermal Averaged Cross Section*
$$
\begin{align} \\
<\sigma v> &= \frac{1}{n_1^0n_2^0} \int \frac{dp_1^3}{(2\pi)^3 2E_1} \int \frac{dp_2^3}{(2\pi)^3 2E_2} \int \frac{dp_3^3}{(2\pi)^3 2E_3} \int \frac{dp_4^3}{(2\pi)^3 2E_4} \\
&\times e^{-\frac{\epsilon_1+\epsilon_2}{T}} |\mathcal{M}|^2(2\pi)^4\delta^4(p_1+p_2-p_3-p_4) \\
&=\langle C[f] \rangle_{p_1}
\end{align}
$$
The Boltzmann Equation is:
$$
\partial_t n+3H n=n_1^0 n_2^0 <\sigma v>\times {\frac{n_3n_4}{n_3^0n_4^0}-\frac{n_1n_2}{n_1^0n_2^0}}
$$
This Equillibrium will only hold when the RHS has less order of magnitude than the [[Hubble parameter]]. Which is the reasion for [[Freeze Out]].

The Equillibrium happens when ${\frac{n_3n_4}{n_3^0n_4^0}-\frac{n_1n_2}{n_1^0n_2^0}}=0$, This is the **Saha Eqaution**.