---
tags:
  - Astro_III
  - planet_formation
---
In general, planet migration is driven by the torques acting on the **embryo**. The most simple case that result in an angular momentum exchange comes from the scattering of a smaller object following the keplerian flow.

# Scattering of an object by the planet

![planet_scattring](/assets/pictures/planet_scattring.png)
An object following the keplerian flow enters the [[Hill sphere and hill velocity]] of the planet, and we can analyze the small scattering by the impulse:
$$
\begin{align}
I_x &= \Delta p_x = -m\Delta v_x\\
F_x &= \frac{GMm}{x^2}(1+\frac{v_0 t}{x})^{-1}\\
\Delta v_x &= \int dt \frac{F_x}{m}=\frac{2GM}{xv_0}\\
\delta &= \frac{\Delta v_x}{v_0}=(\frac{M}{m})(\frac{a}{x})^3\sim \frac{r_H}{x}
\end{align}
$$
In the y direction, the momentum exchange gives: $\Delta v_y=v_0(1-\cos\delta)\approx v_0\delta^2$. This gives a angular momentum transfer:
$$
\Delta J = M a^2\Omega (\frac{m}{M})^2(\frac{a}{x})^5
$$
then we can sum over all the possible x of scattering:
$$
\Delta J/J = \int_{x_0}^{\infty} dr \Sigma \Omega a\Delta t (\frac{1}{M})^2(\frac{a^2}{\Delta r^2})
$$
Also the interior gives an opposite contribution.
$$
J_{out}-J_{in}\propto \Sigma_{out}-\Sigma_{in}
$$
The effect of the torque depends the matter distribution.

The torque is only present when:
1. Disk has non-symmetrical shapes (Different $\Sigma$ at inside and outside)
2. Energy exchange between disk and planet

If sign is NEGATIVE, planet migrates inwards
if sign is POSITIVE, planet migrates outwards

Only happens when there is gas, and planest can pile up around inner rim of disk.