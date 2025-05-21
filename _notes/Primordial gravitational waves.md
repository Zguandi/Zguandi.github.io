---
tags:
  - theoretical_cosmology
aliases:
  - primordial tensor perturbations
---
The [[Inflation theory]] predicts the tensor perturbations as rooted from initial quantum fluctuations.

From[[Einstein'e Equation perturbation]] we know the tensor part of metric perturbation is coupled to no ther components in the early universe.

Using the *Traceless Transverse* gauge:

The Tensorial part of the [[Inflation theory]] Action is (After some algebra):
$$
S = \int dx^3 \int dt \frac{a^3}{16\pi G}\frac{1}{4}[\dot{h}^{TT}_{ij}\dot{h}^{TT\ ij}-\frac{1}{a^2}\partial_l h_{ij}^{TT}\partial^lh^{TT\ ij}].
$$
> [!question]  Where is the boundary term in the E-H action

We decompose the field $h_{ij}^{TT}=\int \frac{dk^3}{(2\pi)^3} e^{i\vec{k} \cdot \vec{x}} \sum_{s=\times,+} \epsilon_{ij}^{s}(\vec{k})h_s (\vec{k},t)$. where $\epsilon^s$ are the polarizations.

At direction $\vec{k}=k \hat{z}$, the polarizations have form:
$$
\epsilon^+=\begin{pmatrix}
1&0&0\\0&-1&0\\0&0&0
\end{pmatrix}
\epsilon^\times=\begin{pmatrix}
0&1&0\\-1&0&0\\0&0&0
\end{pmatrix}
$$
The action for tensor perturbation is:
$$
\begin{align}
S&=\int dx^3 dt\frac{a^3}{16\pi G}\frac{1}{4}\int \frac{dk^3}{(2\pi)^3}
\int \frac{dq^3}{(2\pi)^3} \\&\times\sum_{s,r}\epsilon^s_{ij}(k)\epsilon^{r\ ij}(q)e^{i(\vec{k}+\vec{q})\cdot \vec{x}}\dot{h}_s(k,t)\dot{h_r}(q,t)-\frac{1}{a^2}\epsilon^s_{ij}(k)\epsilon^{r\ ij}(q)\partial_l (e^{ikx})\partial^l(e^{iqx})h_s(k,t)h_r(q,t)\\
&=\int dt\frac{a^3}{16\pi G}\frac{1}{4}\int \frac{dk^3}{(2\pi)^3}\frac{dq^3}{(2\pi)^3}\\ &\times \sum_{s,r}(2\pi)^3\delta^3(\vec{k}+\vec{q})\epsilon^s_{ij}(k)\epsilon^{r\ ij}(q)\dot{h}_s(k,t)\dot{h_r}(q,t)+ \frac{1}{a^2}\vec{k}\cdot \vec{q}\epsilon^s_{ij}(k)\epsilon^{r\ ij}(q)\\
&=\frac{1}{16\pi G}\sum_{s} \int \frac{dk^3}{(2\pi)^3}\int dt a^3 \frac{1}{2}[\dot{h}_s(k)\dot{h}_s^*(k)-\frac{k^2}{a^2}h_s(k,t)h_s^*(k,t)]
\end{align}
$$
For Quantization, taking the fields $h_s(k)$ as operators, and the Momentum is the conjugate variable.
$$
\Pi_s(k)=\frac{\delta \mathcal{L}}{\delta h_s(k)}=a^3 \dot{h}_s^*(k)
$$
The Hamiltonian:
$$
\begin{align}
H &= \frac{1}{4\pi G}\sum_s\int \frac{dk^3}{(2\pi)^3}\Pi_s(k)\dot{h}_s(k)-\mathcal{L}\\
&=\frac{1}{4\pi G}\sum_s\int \frac{dk^3}{(2\pi)^3} \frac{1}{2}\left[\frac{1}{a^3}\Pi_s(k)\Pi_s^*(k)+\frac{k^2}{a^2}a^3h_s(k)h_s^*(k)\right]
\end{align}
$$
This is the hamiltonian for a Harmonic oscillator with $\omega_k = \frac{k^2}{a^2}$

Then take the canonical commutational relation:
$$
[h_s(p),\Pi_r(q)]=i\delta_{sr}\delta^3(p-q)
$$
And after quantization, the creating and annihilation operators are:
$$
h_s(k)=v_s(k,t)a_k^s+v_s^*(k,t)a_k^{s\dagger}
$$
The evolution of the operators are:
$$
h''+2\frac{a'}{a}h'+k^2h=0
$$
And following:
$$
v''+2\frac{a'}{a}v'+k^2v=0
$$
The whole solution is:
$$
v_k^s(\eta)=\sqrt{16\pi G}\frac{i-k\eta}{\sqrt{2k^3}}e^{ik\eta}
$$

The solution can be taken at limit of $H\ll w=\frac{k}{a}$, the solution for mode functions are:
$$
v_k^s = \frac{1}{a^{3/2}}\frac{e^{-i\omega t}}{2\omega_k}=\frac{e^{ik\eta}}{\sqrt{-2k\eta H}}
$$
Now the [[Power Spectrum]] of the primordial gravitational wave is computed from the vacuum 2-pt function:
$$
\langle 0 | h_s(k,\eta)h_{s'}(k',\eta)|0\rangle=\delta_{ss'}(2\pi)^3\delta^3(k-k')P_{h,s}(k,\eta)
$$
This gives:
$$
P_{h,s}=8\pi G (1+(k\eta)^2)H^2\frac{1}{k^3}
$$

> [!important] Small-scale mode functions
> For modes with $-k\eta \gg 1$. The modes are way inside the [[Comoving Horizon|Particle horizon]].
> $P_{h,s}\frac{1}{a^2}$ Since the energy is proportional to $\omega^2 P_{k}$, this means the density of gravitational waves has: $\propto a^{-4}$ scalaing similar to [[Photons]].

At some time, the expansion of the universe $a$ will lead to the $\frac{k}{aH}=-k\eta\leq1$ or even $-k\eta \ll 1$. At this late stage, the mode crosses the [[Comoving Horizon|Particle horizon]], and  the power spectrum becomes $\propto \frac{1}{k^3}$. This is called a **Scale Independent Power Spectrum** because $\langle h^2\rangle = \int k^3 \frac{1}{k^3}=\int d\ln k$ (power contribution is the same accross decades).

> [!info] Detection of Gravitational Wave (primordial)
> If we detect PGW, this is really quantum effects. And it cannot be detected other wise since $H\propto \rho G$, and $\rho \sim 10^14 GeV\sim 10^9 [LHC]$.

> [!hint] Why are we not observing a completely quantum Cosmos?
> In the hamiltonian, the frequency of the H.O. is time dependent $k/a$. At very accelerated expansion, the potential will have drastic opening, and the initial state will turn out be a very high excited state from the vacuum state now. This means the current universe is in semiclassical limit.

