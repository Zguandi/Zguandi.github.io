---
tags:
  - unWISE_sz
  - Observational_cosmology
---

Sky maps are general objects dealt with in studying [[Cosmic Microwave Background]] and its secondary maps such as [[Thermal SZ]], [[CMB lensing]], etc.

Usually in using a sky map, we need to encode the mapped quantity (either a flux or a strength variable like temeprature) as a function of angular directions, ideally from the entire sphere $S^2$.

However, there are many complications to the sky map because in real measurements, we **Pixelize** them, and use *wierd* **Coodinate systems** (See [[Galactic Coordinates]],[[Equatorial Coordinates]]) and *wierd* units (See [[Magnitudes]]) due to either historical reasons or convention. Also in real measurements, we don't usually get the data for the entire $S^2$, but instead partly, usually described by a [[Mask]].

The set of statistical tools on Sky Maps usually involve doing **Spherical Harmonic Transform (SHT)**. (see[[Spherical Harmonics Properties]] for details).
$$
\begin{align}
\phi(x_{obs},\tau,\hat{n})&=\sum^{l=0}_{\infty}\sum^{m=-l}_{l}a_{lm}(x_{obs},\tau)Y_{lm}(\hat{n}) & \text{Spherical Harmonics}\\
a_{lm}(x_{obs},\tau)&=\int d\Omega \phi(x_{obs},\tau,\hat{n})Y^*_{lm}(\hat{n }) & \text{SHT}\\
C_l &= \langle |a_{lm}^2|\rangle & \text{Angular Power spectrum}
\end{align}
$$
The [[Angular Power Spectrum]] is a 2-pt statistics of gaussian fields on a 2d sphere.