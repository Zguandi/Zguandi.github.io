---
tags:
  - theoretical_cosmology
---

The Boltzman equation is the time evolution of a set of [[Distribution Function]]s of particle species that have reaction.

The form of the Boltzmann Equation is:
$$
\frac{df_i}{dt}=C_i[f]
$$
At background level, the distribution has no spatial dependence:
$$
\frac{df_i}{dt}=\frac{\partial f_i}{\partial t}+\frac{\partial f_i}{\partial p}\frac{dp}{dt}
$$
While we already know that momentum should scale with $a^{-1}$, $\frac{dp}{dt}=\frac{p_0d(a^{-1})}{dt}=-Ha^{-1}p_0=Hp$. Then the equation turns:
$$
\frac{df_i}{dt}=\frac{\partial f_i}{\partial t}-\frac{\partial f_i}{\partial p}Hp
$$
The RHS is called the [[Collision Term]]. If it is set to zero, the equation is called [[Collisionless Boltzmann Equation]].
## For number density
$$
n(t)=4\pi\int f(p,t)p^2dp\\
$$
The time evolution:
$$
\partial_t\int p^2dp f-\int p^2dpHp\partial_pf=\int C_i[f]p^2dp=0[Collisionless]
$$
For collisionless equations, we integrate by parts the secnd equation.
$$
H\int dp p^3\partial_pf=H\int d(p^3f)|_0^{\infty}-H\int 3p^2f dp=-3H(t)n(t)
$$
This gives:
$$
\partial_tn+3H(t)n=0
$$
