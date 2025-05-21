---
tags:
  - Astro_II
  - Observational_cosmology
---
The matter power spectrum depicts the fluctuation strength vs scale relation in the present universe and gives information of the [[Large Scale Structure]].

The matter power spectrum is the 2-pt function in fourier space, after a smoothing scale (c.f. observation PSF and pixelization).
$$
\begin{align}
\delta_g(x,t)=\frac{m_g(x,t)-\bar{m_g}}{\bar{m_g}}\\
\delta_g(k,t)=\mathcal{F}[\delta_g(x,t)](k)
\end{align}
$$
The 2pt function:
$$
\langle\Omega|\tilde{\delta}_g(k)\delta_g(k')|\omega\rangle=(2\pi)^3\delta(k+k')P(k)
$$
The Current measurement result gives:
![Matter Power Spectrum](/assets/pictures/Matter Power Spectrum.png)
At Largest scales (smallest k), the power spectrum follows the $\Phi_p$ dependence of $\propto k^{n_s}$ of [[Primordial perturbations]]. These scales experience [[Horizon Crossing]] after [[Matter-Radiation Equality]], and have **Mode Freezing** effects.

The Power spectrum peaks at $k_{eq}=0.073Mpc^{-1} \omega_mh^2$, which is the scale corresponding to the [[Matter-Radiation Equality]]. 

At around $k_s=0.04Mpc^{-1}$, there are [[Baryon Acoustic Oscillation]] peaks, corresponding to the [[Sound Horizon]] scale of $L_s=150Mpc$.

At around $k_{NL}=0.1 Mpc^{-1}$, the nonlinear effects must be taken into account. The Nonlinear scale also grows with time evolution, meaning *larger and larger scales* become nonlinear at late times. This is called the [[Hierarchical Formation Model]] for large scale structures.

> [!NOTE] Where the gaussian appoximation kicks in
> The fourier of $\xi(r)$ shoulden't equal the P(k) if it's not a Gaussian field.

# Measurement of Matter power spectrum

The measurement can come from tow sources:
- [[CMB Power Spectrum]] from [Planck],[ACT],[COBE].
- Large scale spectrum survey like SDSS.

## Equations of Matter power spectrum

At late times when $a\ll a_{eq}$ in matter dominated regime, the gravitation is dominated by matter component.

According to [[Equations of Perturbation for Matter]],
We have:
$$
\begin{align}
&\text{Poisson Equation}&-k^2\Phi_k(a) &= 4\pi G \bar{\rho}a^2 \delta_k(a)\\
&\text{Initial Condition}& \Phi_k(a)&=\frac{9}{10}\Phi_{p,k}T(k)\frac{D(a)}{a}\\
&\text{Matter background Equation}&\bar{\rho}&=\frac{3H_0}{8\pi G}\Omega_{m,0}a^{-3}
\end{align}
$$
This gives:
$$
\delta_k(a) = -\frac{3}{5}\frac{k^2}{\Omega_{m,0} H_0^2}\Phi_{p,k}T(k)D(a)
$$
Where $D(a)$ is the [[Linear Growth Factor]].

Usually we parametrize the Primordial power spectrum $\propto k^{n_s-1}$ as such that:
$$
P_{\Phi_p}(k)=\frac{50 \pi^2}{9k^3}(\frac{k}{H_0})^{n_s-1}\delta_H^2(\frac{\Omega_m}{D(1)})^2
$$
It have scaling $\propto k^{n-4}$ as it should.

Putting this together, we get:
$$
P(k,a)=2\pi^2\delta_H^2\frac{k^n}{H_0^{n+3}}t^2(k)(\frac{D(a)}{D(1)})^2
$$
A more commonly used parameter that is used as the statistics of the power spectrum is the [[Sigma 8]].

> [!note] Growth of Power spectrum
> The matter power specrum grows at the rate of $D(a)^2$
> ![Desnsity_and_pwr_evo](/assets/pictures/Desnsity_and_pwr_evo.png)

# Structural Growth derived from Matter poer spectrum

The Top-hat smoothed overdensity:
$$
\langle\delta_s (x)^2\rangle = \int W_s^2(k') \frac{dk'^3}{(2\pi)^3}P_L(k')\approx \int_0^{k_s}k^2dkP_L(k) \frac{1}{2\pi^2}\sim k^3P_L(k)
$$
The smoothed overdensity would correspond to the scaless powerspectrum $P(k)k^3$.