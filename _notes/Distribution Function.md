---
tags:
  - Astro_II
  - theoretical_cosmology
---

Used extensively in [[Boltzmann Equation]].

The Boltzmann Equation discribes the **distribution function** in phase space:
$$
f_i(x,p,t)dx^3dp^3
$$
For a number of species $i$.

For a particle species with a number of polarizations/[[Degree of Freedom]], the distribution function can be written as:
$$
\epsilon_s
$$
Due to the [[The Cosmological Principle]], the universe is homogeneous and istropic, $f(x,p,t)=f(|p|,t)$, relying only on the scale of momentum.

# Moments of the distribution function
The number density, Energy density and pressure.
$$
\begin{gather}
n(t)=4\pi\int f(p,t)p^2dp\\
\rho(t)=4\pi\int E(p)f(p,t)p^2dp\\
P(t)=4\pi\int \frac{p^2}{3E(p)}f(p,t)p^2dp\\
\end{gather}
$$
Where E(p) is the on-shell condition. (Note that $c=\hbar=k_{B}=1$)

# Thermalized distribution
For a particle population in thermal equillibrium, particles satisfy:
$$
f(E)
\begin{cases}
\frac{1}{e^{E-\mu}-1}& Bose-Einstein\\
\frac{1}{e^{E-\mu}+1}& Fermi-Dirac
\end{cases}
$$
> [!NOTE] The Chemical potential
> The chemical potential for most cosmologicall processes are negligible:
> $\mu/T<<1$.
