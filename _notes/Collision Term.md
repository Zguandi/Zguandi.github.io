---
tags:
  - theoretical_cosmology
---

The collision term $C[f]$ as the following properties:
- If there exist collisions, collision only change the [[Distribution Function]] in p space, but not in x because collisions are happening locally.
- If C[f] =0, the solution is clled a *Collisionless* solution.

## The collision term under semi-classical approximation

For a particle reaction 1+2=>3+4:
$$
\frac{Df_1}{dt}=C[f_1,f_2,f_3,f_4]
$$
With the collision term:
$$
\begin{align} \\
C[f]&=\int \frac{dp_2^3}{(2\pi)^3 2E_2} \int \frac{dp_3^3}{(2\pi)^3 2E_3} \int \frac{dp_4^3}{(2\pi)^3 2E_4} \\ \\
&\times |\mathcal{M}|^2(2\pi)^4\delta^4(p_1+p_2-p_3-p_4)\\ \\
&\times \left[f_3(p_3)f_4(p_4)(1\pm f_1(p_1))(1\pm f_2(p_2))- f_1(p_1)f_2(p_2)(1\pm f_3(p_3))(1\pm f_4(p_4))\right]
\end{align}
$$

Where the $\pm$ comes from boson/fermion statistics of the correspondinig species.

 From this we can see that the [[Boltzmann Equation]] with collision is a coupled integral-diffrential equation.