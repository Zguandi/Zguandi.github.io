---
tags:
  - Astro_II
  - Observational_cosmology
aliases:
  - Press Schechter Mass Function
  - Press Schechter Ansatz
---
Recall in [[Top-hat collapse|spherical collapse]] model, the density field with a $\delta>\delta_c=1.69$ will collapse into virialized object.

In [[Linear Growth Factor]] regime: $\delta(x,t;R)=\delta(x,0;R)D(t)$, the collapsed regions are places where:
$$
\delta_s = \delta(x,0,R)D(t)>\delta_c
$$
Where the label $R$ denotes the density field is being smoothed by a window function of radius R.
$$
\delta_s(x,t) = \int dx'^3 W(x-x')\delta(x',t)
$$
Since the initial $\delta(x,0)$ is a gaussian field with probability distribution:
$$
p(\delta_0)=\frac{\exp[-\delta_0^2/2\sigma^2(M)]}{\sqrt{2\pi}\sigma(M)}
$$
Where the $\sigma(M)$ is the matter 1-pt function of radius $M=\frac{4}{3}\pi R^3 \bar{\rho}$.

The probability of a region of space having collapsed is 
$$
\mathcal{P}(>\delta_c(t))=\int_{\delta_c}^{\infty} d \delta_s p(\delta_s)=\frac{1}{2} erfc[\frac{\delta_c(t)}{\sqrt{2}\sigma(M)}]
$$
The Ansatz by *Press and schechter (1974)*:
$$
F(>M)=2\mathcal{P}(>\delta_c(t))
$$
Where the factor 2 is the **Fudge factor** coming from normalization.
$$
M\rightarrow0,\mathcal{P}\rightarrow0.5, F=2\mathcal{P}
$$
The $F(>M)$ is seen as the **Integrated Mass function**.

The halo distribution with mass bins is:
$$
\begin{align}
n(M,t)&=\underbrace{\frac{\bar{\rho}}{M}}_{volume^{-1}}\frac{\partial F(>M)}{\partial M}\\
&=2\frac{\bar{\rho}}{M}\partial_M\mathcal{P(>\delta_c(t))}\\
&=\frac{\bar{\rho}}{M}\sqrt{\frac{2}{\pi}}\exp[-\delta_c^2/2\sigma^2(M)]\frac{\delta_c(t)}{\sigma^2(M)}|\frac{\partial\sigma(M)}{\partial M}|\\
&=\frac{\bar{\rho}}{M^2}\sqrt{\frac{2}{\pi}}\exp[-\delta_c^2/2\sigma^2(M)]\frac{\delta_c(t)}{\sigma(M)}|\frac{\partial\ln\sigma(M)}{\partial \ln M}|\tag{1}
\end{align}
$$
This equation is called the **Press schechter (PS) mass function**.

In another form (usually used in literature):
$$
n(M,t)=\frac{\bar{\rho}}{M^2}f_{PS}(\nu)|\frac{\partial\ln\sigma(M)}{\partial \ln M}|
$$
where $f_{PS}$ is the Press-Schechter Mutiplicity function:
$$
f_{PS}(\nu)=\sqrt{\frac{2}{\pi}}\nu e^{-\nu^2/2}
$$
> [!question] Can halo correlation function come from this ansatz?
