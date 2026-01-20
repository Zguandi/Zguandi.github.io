---
layout: research
title: "Bedretto lab magnetic environment characterization for future atomic interferometer gravitational wave detectors"
date: 2025-12-15
description: "Guandi Zhao, Johannes Wüthrich, Marcelle Soares-Santos"
thumbnail: /assets/thumbnails/bedretto_thumbnail.jpg
tags:
  - experimental physics
  - remote long measurement
  - atomic intereferometer
---

As part of a collaborative work for the development of future underground physics labs, I conducted magnetic field measurement inside the Bedretto underground laboratory in 2025. This project was supervised by professor Marcelle Soares-Santos and professor Alexandre Refregier. The work contributed a section to a joint characterization paper of the bedretto site, seen on [*arxiv.2512.14815*](https://arxiv.org/abs/2512.14815). We discussed the magnetic field impact on AI-GW measurements and discovered that trains running 1.75km away from the test site is the main interference.


## Atomic interferometer based gravitational wave detectors

Long baseline atomic interferometers (AIs) promises mid-band detection of gravitational waves (GW). They could achieve maximum sensitivity to gravitational strain in the frequency range of $0.01-100\text{Hz}$. Traditional laser interferometry GW detectors such as LIGO records the gravitational wave strain in the slight change of laser phases, in AI-GW detectors, the gravitational wave is carried by atom ensembles.

Most designs of AIs in the context of GW detection use superposition of atomic excitation states to accumulate phase differences. A typical setup starts with dispensing Strontium 87 atom clouds into free fall. Atoms are partially excitated into superposition of excited and ground states using laser pulses, and the extra phase accumulated over time on excited states is precisely measured using interferometry of atomic states, with the whole process shown in Fig. 1.

![Figure 1](/assets/pictures/magis-threepulse-aigw.png)
*Figure 1: Atomic optical processes of the strontium atom in a single interferometer setup.*

In current designs of atomic interferometers including [AION](https://doi.org/10.1088/1475-7516/2020/05/011), [MAGIS-100](https://doi.org/10.1088/2058-9565/abf719) and [AICE](https://arxiv.org/abs/2509.11867), a differential approach is proposed, where multiple AIs are arranged vertically in the same vacuum tube, and share the same laser pulses. The gravitational strain induces slight time of flight difference for laser pulses between the two AIs, this time of flight is translated into time difference of excitation, and is measured as atomic phase difference. In a typical 2 AI differential setup, the phase difference $\delta \phi$ is related to GW strain amplitude $h$ by:

$$
\delta\phi = \frac{4N\omega_a h_0}{c}\sin^2(\frac{\omega_G T}{2})\sin(\phi_0+\omega T),
$$

where $\omega_G$ is the frequency of the gravitational wave, $\omega_{a}$ is the frequency of the laser, $h$ is the strain amplitude, $\phi_0$ is the gravitational wave initial phase when reaching the upper interferometer.

![Figure 2](/assets/pictures/MAGIS-100_atomic_interferometer_maxzehnder.png)
*Figure 2: double AI setup in [MAGIS-100](https://doi.org/10.1088/2058-9565/abf719), where the atoms are dispensed simultaneously, and the laser pulses are shared.*

## Atomic interferometer noise sources

### Seismic noise

Seismic vibration of the lab environment could cause jitter in the laser phase and a jitter in the atomic dispenser, this contributes a stocastic noise on the phase. A proper design of the suspension and vibration isolation for the AIs could greatly suppress the $\delta a$ term.

### Gravity gradient noise

Similar to seismic noise, gravitity gradient noise (GGN), or sometimes called Newtonian noise, is induced by earth seismic activities. The difference is that seismic noise is direct couple through vibration, but GGN comes from the newtonian gravity variantion from density fluctuation waves in the ground throught the formula $\vec{g}=\int_V\frac{G\rho(r')\vec{r'}}{r'^3}dr'^3$. Due to its nature, it is not possible to shield or isolate GGN using machanical structures and the activa cancellation of GGN is an active research field. Building the AI-GW underground could also grestly suppress the GGN.

### Magnetic field noise

The magnetic field $B$ couples to the atom spin and induces the Zeeman effect, shifting the energy levels of the atoms by $\Delta E$. This causes a phase shift that could be confused with the signal from gravitational waves. Operating the atom interferometer using an even mix of two atomic spin states can effectively cancel the first order Zeeman effect. However, a residual energy shift $\Delta E = \frac{1}{2}\alpha B^2$ coming from the second order Zeeman effect persists. For Strontium 87 atoms, this indices a stochastic phase noise:

$$
\delta \phi_{mag}\sim (1\times 10^{-3}rad/\sqrt{Hz})(\frac{B_0}{1G})(\frac{\delta B}{100nT/\sqrt{Hz}})(\frac{T}{1s})
$$

if the magnetic field has time variation $\delta B$ on an constant offset $B_0$. Restricting the magnetic phase noise to less than $10^{-3}\rm rad/\sqrt{Hz}$, would impose a restriction on time-varying magnetic field to be less than $100\rm nT/\sqrt{Hz}$. In this work I will mainly focus on the characterization of the magnetic field background.

To characterize the magnetic field noise, we have a focus on the working frequency range of AIs $0.01 - 100\rm Hz$, and we also need to characterize the site long enough to capture possible disruption events that could occur over time. Thus we need a setup to remotely measure magnetic field for months.

## Test setup

### Bedretto underground laboratory

The Bedretto tunnel in southern Switzerland offers an opportunity for underground physics research. The Bedretto tunnel was built for the logistics for the construction of the furka-baseline train tunnel. The furka-baseline tunnel (FBT) connects Oberwald, Valais to Realp, Uri, and the Bedretto tunnel connects horizontally from the 7 km tunnel mark of the FBT to tunnel entrance in Bedretto, Ticino. The relative location of FBT and the Bedretto Tunnel is shown in Figure 3.

![Figure 3](/assets/pictures/bedretto-site-overview.png)
*Figure 3:The Bedretto tunnel location inside Switzerland (a), the relative position with respect to the Furka baseline tunnel (b), and the rock profile of the mountain with the different rock formations overlaid. The location of [Bedretto Geology Laboratory](https://duglab.ethz.ch/en/home/) by ETH Zurich is shown on subfigure (c). Figure exerpt from [Site characterization paper](https://se.copernicus.org/articles/13/301/2022/)*

The tunnel now holds the [Bedretto Underground Laboratory for Geosciences and Geoenergies](https://duglab.ethz.ch/en/home/) operated by ETH Zürich, and extensive geoscientific studies has been carried out. The electricity, internet connectivity, ventilation and safety equipment are well established inside the tunnel.

The total length of the Bedretto tunnel is 5220 m with a width and height of 2.70 m and a maximum overburden of about 1650 meters [13]. The intended site for the AI-GW development is located about 3.5 km into the tunnel from the surface entrance and is denoted TM3500. The site has a very humid environment and poses a challenge for electronics operating remotely inside the tunnel.

### Measurement setup

To satisfy the long-haul and remote acquisition requirements in the humid tunnel environment, we built a watertight box integrated with magnetic field maasurement, data acqusition, data compression, remote monitoring and data transmission capabilities. The masurement of magnetic field was done in three axes with a samling rate of $20\rm kHz$ using a Bartington Mag-13MS70 fluxgate magnetometer. The setup and the schematic diagram is shown in Fig. 4. The overall qusntization noise, instrumental noise and ADC noise is estimated to be $13\rm pT/\sqrt{Hz}$. See the [joint paper](https://arxiv.org/abs/2512.14815) for detailed description of the specifications of the setup.

![Figure 4](/assets/pictures/bedreto-box-schematic.png)
*Figure 4:The Schematic diagram (left) and a picture of the measurement setup inside the box.*

To fully characterize the combined noise floor of the measurement setup and compare to the actual field background, we used a 3-layer MuMetal zero-gauss chamber with an attenuation of >1000 to perform an null test.

The measurement setup was brought to the TM3500 site on 2025-07-22, see Fig. 5 for the view of the site and orientation of the magnetometer. The overall time coverage is 161.6 hours inside the zero-gauss chamber and 310.2 hours outside the zero-gauss chamber.

![Figure 5](/assets/pictures/bedretto_measurement_site.png)
*Figure 5: TM3500 measurement site (left), and map location of the bedretto tunnel, the Furka baseline tunnel (FBT), and the orientation of the magnetometer.*

## Measurement result

### PSD on-off test

Figure 6 shows the comparison of the zero-gauss chamber on-off test. The linear spectral density (LSD) plotted shows tha y direction magnetic field.

![Figure 6](/assets/pictures/mag_psdperc_both_chy_recolored.png)
*The linear spectral density (LSD) of magnetic field in y direction (vertically downwards), for measurements obtained with (black) and without (magenta) the zero-gauss chamber. The solid lines denote medians and the filled ranges denote 16th to 84th percentile ranges.*

We observe several features of the magnetic field dataset:

1. There is a 1/f pink noise in the frequency range of $10−2\rm Hz$ to $\sim 10\rm Hz$, which ankles at around 1Hz.
2. In the y direction (vertically downwards direction), the noise floor is higher than x (horizontally perpendicular to the tunnel) and z (horizontally parallel to the tunnel). The peak at $16.7\rm Hz$ is $\sim 10\times$ higher than the other two directions. This peak exceeds the $100\rm nT/\sqrt{Hz}$ limit.
3. The noise floor from the setup (zero-gauss chamber) is significantly lower than the actual magnetic field background.

The $16.7\rm Hz$ signal peak is especially interesting, because it corresponds to the train electrical grid operation frequency in the mid-south of Switzerland, see [documentation](https://www.bahn-journalist.ch/pdf/ser_2024_05_mgb-orion.pdf). This suggests the noise from the trains running inside furka tunnel is causing significant interference.

### PSD day-night test

To further investigate this, We divide the sample of measured magnetic field in the y direction into day (4:00-19:00) and night (4:00-19:00) samples. The PSD resulting plot is shown in Fig. 7.

![Figure 7](/assets/pictures/mag_psdperc_daynight_chy.png)
*Figure 7:Day-night comparison of the PSD in y direction. The day signals (red) are taken with start-time 4:00-19:00 and night signals (blue) are taken with start time 19:00- 4:00.*

We can see several features that further confirms that this $16.7\rm Hz$ interference is coming from train operations.

1. 4:00-19:00 operation of trains elevates the PSD around 16.7Hz by a factor of ∼ 6.
2. 19:00-4:00 operation has less variance over measurement campaign and have less significant peak at 16.7Hz.
3. The day-night cycle is only present in y-direction magnetic field, and not seen in x,z measurements.

this suggests that in real operation of the AI-GW, a viable stratergy is to avoid operating in train intensive periods.

## Conclusion

In this work, we carried out a 471.8h magnetic field characterization at the Bedretto Underground Laboratory Tunnel Marker 3500 (TM3500) site, with an emphasis on the validation of the site as a potential research and development test-ground for atomic interferometer based gravitational wave detectors (AI-GW).

Similar measurements have been carried out at [CERN](http://arxiv.org/abs/2304.00614), although those measurements are dominated by their setup noise floor, largely due to the high quantization noise from a lower sampling rate. Comparison with our result shows that Bedretto's magnetic field background is low enough to host the proposed R\&D facility. The magnetic field background have average noise floor $\sim 30\rm pT/\sqrt{Hz}$ at 1Hz, which is a significantly lower than the $100\rm nT/\sqrt{Hz}$ minimal requirement for the AI-GW. 

The investigation of the 16.7Hz signal peak occurring in the magnetic field reveals that this signal is caused by the railway electrical grid and by trains passing through the Furka baseline tunnel which is 1.75 km away from the TM3500 site. A day-night comparison shows the PSD to be $\sim 6\times$ higher around the 16.7 Hz peak during daytime (4:00-19:00) than night (19:00-4:00).

This work provides support for the Bedretto tunnel TM3500 site as a research and development environment for future AI-GWs. We have demonstrated through the zero-gauss chamber experiment that passive shielding is sufficient to shield against the magnetic signals from trains. The experiment can also choose to operate during less noisy periods at night, when no trains are running through the tunnel.