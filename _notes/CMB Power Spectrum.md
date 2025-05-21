---
tags:
  - Observational_cosmology
  - Astro_II
---
Wiki Link [CMB power spectrum](https://en.wikipedia.org/wiki/Cosmic_microwave_background).

CMB power spectrum is a good measurement for the CMB anisotropies. $(\bar{\Theta}-\Theta(\hat{n}))/\bar{\Theta}$. the anisotropies have the typical scale $\sim 10^{-4}$.

Anisotropy form After the [[Recombination]], after which photons still interact with residual free electrons.

The optical depth of photons via Thompson scattering.
$$
\tau_T(t)=\int_0^tn_e\sigma_Tdt
$$
Define the temperature anisotropy we observe on the sky dome as:
$$
f_\gamma(p,\hat{n})=f_{BE}(p/T(\hat{n}))
$$
And the temperature is expanded as:
$$
T(x,q,\tau)=T(\tau)(1+\Theta(\tau,q,\hat{n}))
$$
The data of CMB temperature anisotropy is in the form of pixellized [[Sky Map]]. The CMB power spectrum is usually decomposed as sum of **Spherical Harmonics** (see[[Spherical Harmonics Properties]]).

# Theoretical Result of CMB power spectrum
Assuming a instantaneous decoupling at $\tau_*$.
$$
\begin{align}
\Theta_l(k,\tau_0)&=[\Theta_0(k,\tau_*)+\Psi(k,\tau_*)]j_l[k(\tau_0-\tau_*)] & \text{Saches-Wolfe term}\\
&+3\Theta_1(k,\tau_*)\left[j_{l-1}[k(\tau_0-\tau_*)-\frac{l+1}{k(\tau_0-\tau_*)}j_l[k(\tau_0-\tau_*)]\right] & \text{Doppler term}\\
&+\int_0^{\tau_0}d \tau e^{-\tau_T}[\dot{\Psi}(k,\tau)-\dot{\Phi}(k,\tau)]j_l[k(\tau_0-\tau_*)] & \text{Integrated Saches-Wolfe term}
\end{align}
$$
In the three main terms:
1. The *Saches-Wolfe Effect* corresponds to the photon initial temeprature monopole and the initial gravitational redshift effect.
2. The Doppler term depends the *First Moment* of $\Theta(k,\tau_*)$ and corresponds to a doppler effect.
3. The *Integrated Saches-Wolfe Effect* corresponds to the gravitational potential bumping effect of the phtons in the line-of-sight travel, and the $\tau_T(t)=\int n_2 \sigma_T d t$ is the Thompson Optical depth.

>[!note] The ISW effect.
> The ISW term depends on $\dot{\Psi}-\dot{\Phi}$, and since in **Matter Dominated** Universe, the scalar perturbation $\dot{\Psi}\sim \dot{\Phi}\sim 0$. This is a term only dependent on the **DE-Dominated** Universe. 
> By calculation, if there is no DE component, and only the Saches Wolffe effect is at play, at **Superhorizon Limit**, the [[Angular Power Spectrum]] will be $C_l=\delta_H^2 \frac{1}{l(l+1)}$.

![CMB_power_labeled](/assets/pictures/CMB_power_labeled.png)

# The Features of temeprature fluctuation

## At largest scales
If no-ISW is present, the $l(l+1)C_l=\delta_H^2$ should be flat for small l, however there is a 'ISW' rise.

## At Intermediate scales

[[Baryon Acoustic Oscillation]] Effects are present and there are acoustic peaks. The Acoustic oscillations are with speed $c_s$,a d fluctuations are in form $e^{ikc_st}$.

This corrsponds to a [[Comoving distance]] at the surface of last scattering $L_*=c_s \tau$. The angular separation: $\theta = \frac{L_*}{r(\chi_*)}$ This gives a baryonic peak at aroun $\ell=200$.

## At large scales 

Plasma physics at last scattering gives a damping at l>1000. 

![CMB_temperature_fit_cosmopower](/assets/pictures/CMB_temperature_fit_cosmopower.png)

> [!note] The CMB power spectrum constraint of parameters are **Very Precise**
> Example, the acoustic peak position $\propto r(\chi)$, and this gives a tight bound on the curvature of the universe.

