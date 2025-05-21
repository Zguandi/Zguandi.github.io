---
tags:
  - Astro_II
  - theoretical_cosmology
---
The transfer function is defined as:
$$
T(k,a)=\frac{\Phi(k,a_{late})}{\Phi(k_{verylong},a_{early})}
$$
where the late time $a_{late}\gg a_{early}$. The very long modes is defined to have no growth in transfer function. (In fact it has (10% decrease, accounted in discussion of [[Large Scale Structure]])) At largest scales $T(k)=1$.

We define the [[Linear Growth Factor]] as:
$$
\frac{\Phi(k,a)}{\Phi(k,a_{late})}=\frac{D_+(a)}{a}
$$
We know immediately that $D_+(a)=a$ in Matter Domination. Altogether, the result for $\Phi(k,a)$is:

$$
\Phi(k,a)=\Phi(k,a_{init})\frac{\Phi(k_{long},a_{late})}{\Phi(k_{long},a_{init})}\frac{\Phi(k,a_{late})}{\Phi(k_{long},a_{late})}\frac{\Phi(k,a))}{\Phi(k,a_{late})}=\frac{3}{5}\zeta(k)\frac{D_+(a)}{a}
$$
This form states the perturbations where the k dependence and a dependence is separated.

We can do predictions of [[Matter Power Spectrum]] using the [[Linear Growth Factor]].