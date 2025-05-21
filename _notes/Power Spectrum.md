---
tags:
  - Astro_II
  - Observational_cosmology
---

For a perturbation field. $\delta(x,t)$ and fourier model $\delta_k$, described in [[Perturbation Fields]]:
$$
P(\vec{k})=V_u\langle |\delta_k(t)|^2\rangle
$$
Where the $\langle\rangle$ is ideally a **Ensemble Average**, though in cosmology we usually use *spatial average* as an estimation for this average.

The variance of the field (Discrete Notation):
$$
\begin{align}
\langle \delta^2(t)\rangle&=\frac{1}{V_u}\int dx^3\langle \sum^{ }_{k}\delta_k e^{ikx}\sum_{q}\delta_q e^{iqx}\rangle\\
&=\frac{1}{V_u}\langle\delta_k(t)\delta_q(t)\rangle\delta_{k,-q}V_u\\
&=\frac{1}{V_u}\sum_\vec{k}P(\vec{k})
\end{align}
$$
Or the continuous notation:
$$
\begin{align}
\langle \delta^2(t)\rangle&=\langle \int \frac{dk^3}{(2\pi)^3}\int \frac{dq^3}{(2\pi)^3}\delta_k\delta_q e^{i(k+q)\cdot x}\rangle\\
&=\\
&=\sum_\vec{k}P(\vec{k})
\end{align}
$$
Since $P_{\vec{k}}$ is shperically symmetric, the summation over k is .