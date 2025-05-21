---
tags:
  - Astro_II
  - theoretical_cosmology
---

## Two types of partcle relics

1. Freeze out happens at $x=m_i/T<<1$, the [[Freeze Out]] process happens while the particle is relativistic, called **Hot Relics**.
2. Freeze out happens at $x=\frac{m_i}{T}>>1$, the [[Freeze Out]] happens when th eparticle is non-relativistic, called **Cold Relics**.

## Examples
1. Massles [[Neutrino]]s, if Neutrinos are truly massless, Solution gives: $\Omega_{i, 0} h^2 \simeq \frac{1}{2} g_{\text {ieff }}\left[\frac{g_{*_s}\left(x_0\right)}{g_{*_s}\left(x_f\right)}\right]^{\frac{4}{3}} \Omega_{\gamma, 0} h^2$ This gives a neutrino fraction $\sim O(1)$ to the photon fraction which is very small, and **Can't** Account for the [[Dark Matter]].
2. WIMPS (Weakly interacting Massive Particles), see [[WIMPs]] for details.
3. Nucleosynthesis. The BBN is another example for the Particle relic., see [[Big-bang Nucleosynthesis]].
4. Recombination. The universe cools down to a temperature much lower than the binding energy of a hydrogen atom (13.6eV) and neutral atoms star to form. See [[Recombination]].

## Relic Equations For WIMPs

From the [[Kinetic Equillibrium, Saha Equation]] section, we can derive that for a particle rextion in the form of $XX\rightarrow\Psi\Psi$ is:
$$
\frac{dY}{dx}=-\frac{\lambda}{x^2}(Y^2-Y_{eq}^2)
$$
Where $Y = \frac{n_X}{T^3}$, x = $\frac{m}{T}$. and $\lambda = \frac{m_X^3<\sigma v>}{H(m_X)}$.

Suppose in the case for [[WIMPs]] , $\lambda = \frac{m_X^3}{H} \frac{m_X^3g^4}{m_X^2} \frac{M_{pl}}{m_X^2}$ and $H(T)=\frac{T^2}{M_{pl}}$. The $\lambda$ in this case is usually very small, around $10^{-12}$.

At late time, the RHS is mostly dominated by Y^2 because the reaction moves away from equillibrium. $Y\ll Y_{eq}$.

At this stage:
$$
\frac{dY}{dx}=-\frac{\lambda Y^2}{x^2}
$$
And the solution gives:
$$
\frac{1}{Y_\infty}-\frac{1}{Y(x_f)}=\frac{\lambda}{x_f}
$$
where $x_f$ is the **Freeze out time** when $\Gamma < H$. The xf satisfies:
$$
(m_X T_f)^{3/2} e^{-m_X/T_f}<\sigma v> \sim H(T_f)
$$
this gives an esitmate for $x_f = \log \left( \frac{M_{pl}}{m_X g^4} \right)+ \log x_f^{1/2}$, with $x_f \sim 24 \ll 1$. This means WIMPs freezes out at very non-relativistic temperatures.

We can also know that the fraction of freezeout: $Y_\infty\ll Y(x_f)$. dispite out of equillibrium