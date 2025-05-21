---
tags:
  - Astro_III
  - planet_formation
---

Gravitational focusing increases the planet cross section and focus objects in orbit.

![Gravitational_focusing](/assets/pictures/Gravitational_focusing.png)

To calculate the effective radius $R_{eff}$, the conservation of energy and angular momentum gives:
$$
\cases{R_{eff}v_{rel}=R v_T\\
\frac{1}{2}mv_{rel}^2=\frac{1}{2}mv_T^2-\frac{GM}{R}}
$$
This soves to give:
$$
\begin{align}
(\frac{R_{eff}^2}{R^2}-1)v_{rel}^2&=\frac{2GM}{R}\\
F_{focus}^2&=\frac{R_{eff}^2}{R^2}=1+\frac{v_{esc}^2}{v_{rel}^2}
\end{align}
$$
where $v_{esc}=\sqrt{\frac{2GM}{R}}$. In the scenario of random motion with velocity dispersion $\sigma$,
$$
F_{focus} =  1+\frac{v_{esc}^2}{\sigma^2}
$$
The higher te velocity dispersion $\sigma$, the smaller the focusing effect.

At $v_{rel}\gg v_{esc}$, $F_{focus}\rightarrow 1$.

# Impact of drag

When there is [[Aerodynamic drag]], the potential effective radius is much bigger than the purely gravitational one.

An extension to the simple gravitational focusing effect is the concept of [[Hill sphere and hill velocity]].