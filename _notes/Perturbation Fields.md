---
tags:
  - Astro_II
  - Observational_cosmology
  - theoretical_cosmology
---

For the study of [[Cosmological Perturbation]] in general, we need necessary tools of mathematics.
## Statistical Tools

Consider a perturbation field: $\delta(x,t)$. We assume the comiving total volume is $V_u$, which we will take to the limit of infinity at the end of calculation.
$$
\begin{gather}
\delta(x,t)=\sum^{ }_{k}\delta_k(t)e^{ik \cdot x}\\
\delta_k(t)=\frac{1}{V_u}\int \delta(x,t)e^{-ik\cdot x}dx^3
\end{gather}
$$
> [!note] The introduction for the volume
> The Volume $V_u$ is purely a mathematical tool in theoretical derivation, and all results should not depend on it. However in **Numerical Simulations**, there is actually some sense in this $V_u$, which is the BoxSize parameter.

Or Equivalently, we can use the continuous version of the definition:
$$
\begin{gather}
\delta(x,t)=\int \frac{dk^3}{(2\pi)^3}\delta_k(t)e^{ik \cdot x}\\
\delta_k(t)=\int dx^3 \delta(x,t)e^{-ik \cdot x}
\end{gather}
$$
# Power spectrum

[[Power Spectrum]]s are a set of very Important statstical tools for cosmology.
