---
tags:
  - theoretical_cosmology
  - General_relativity
aliases:
  - Metric Gauge Transfroms
---

Using [[Metric Perturbation]], we can compute the metric perturbation equations.

In this note we use notations of **SVT decomposition** for the metric:

$$
ds^2 = g_{\mu\mu}dx^\mu dx^\nu
$$
And the metric:
$$
\begin{align}
g_{00}&=-1+h_{00}(t,\vec{x})\\
g_{0i}&=0+a(t)h_{0i}(t,\vec{x})\\
g_{ij}&=a^2(t)\delta_{ij}+a^2(t)h_{ij}(t,\vec{x})
\end{align}
$$
The perturbed metric is 16 components symmetric, leaving 10 degrees of freedom.
$$
\begin{align}
h_{00}(t,\vec{x})&=-2\underbrace{A(t,\vec{x})}_{scalar}\\
h_{0i}(t,\vec{x})&=-\partial_i\underbrace{B(t,\vec{x})}_{scalar}+\underbrace{B_i(t,\vec{x})}_{3-vector}\\
h_{ij}(t,\vec{x})&=2\underbrace{D(t,\vec{x})}_{scalar}\delta_{ij}-2\partial_i \partial_j\underbrace{E(t,\vec{x})}_{scalar}\\
&+(\partial_i \underbrace{V_j}_{3-vector}+\partial_jV_i)+\underbrace{h_{ij}^{TT}}_{tensor, \times +}
\end{align}
$$
With constraints:
$$
\begin{align}
\partial_i B^i &= 0 &\rightarrow \cases{\partial_i h_{0i}=\nabla^2B &\text{Solve for B}\\ B_i=-h_{0i}-\partial_iB & \text{Solve for Bi}}\\
\partial_iV^i&=0, \partial^ih_{ij}^{TT}=0,\delta^{ij}h_{ij}^{TT}=0 & \rightarrow \cases{\partial}
\end{align}
$$

This decomposition is unique for a given $h_{ij}$, from the d.o.f. counting, the decomposition also have 10 d.o.f.s.

| Components       | d.o.f | Constriants | true d.o.f |
| ---------------- | ----- | ----------- | ---------- |
| Scalar (ABDE)    | 4     | None        | 4          |
| Vector (B_i,V_i) | 6     | 2           | 4          |
| tensor (hTT)     | 6     | 4           | 2          |


> [!hint] Homogeneity and isotropy, the hint for the Equation forms
> Homogeneous Universe means that each "$k$" mode is decoupled. (?)
> Isotropy means the equations are decoupled between scalars and vectors (Note that $\partial^i V_i=0,\partial^iB_i=0$, and this kind of dependence in equations isn't valid). However, at higher orders of perturbation, couplings terms like $V_iV^i$ is possible and this is generally not true.

# Gauge transfromation

In the metric perturbation, there are still d.o.f.s that are **Redundancy** because a small coordinate transfrom could also generate some perturbation terms.
$$
\begin{align}
x&\rightarrow \tilde{x}=x+\xi(x)\\
g&\rightarrow \tilde{g}=(\delta^\alpha_\mu-\partial_\mu\xi^\alpha)(\delta^\beta_\nu-\partial_\nu\xi^\beta)[g_{\alpha\beta}-\xi^\lambda \partial_\lambda g_{\alpha\beta}]\\
\delta g &\rightarrow \delta\tilde{g}_{\mu\nu}(\tilde{x})=\delta g_{\mu\nu}(\tilde{x})-\xi^\lambda\partial_\lambda g_{\mu\nu}-\partial_\mu \xi^\lambda g_{\lambda\nu}-\partial_\nu \xi^{\lambda\mu}
\end{align}
$$
In **SVT** sense, $\xi^\mu = (\zeta,\partial_i\xi + \xi^V_i),\partial_i\xi^V_i=0$.

The transfromation of ABDE scalars under gauge transfrom is:
$$
\begin{align}
\tilde{A}&=A-\dot{\xi}=A-\frac{1}{a}\xi'\\
\tilde{B}&=B-\frac{1}{a}\zeta+\xi'\\
\tilde{D}&=D-H\zeta\\
\tilde{E}&=E+\xi
\end{align}
$$
The transformation of $B_i,V_i$ is linear in$\xi_V$ because they are vectro components (We leave it at this state for now without further derivations).

The $h_{ij}^{TT}$ is gauge invariant in the sense that there is no tensor component in gauge trnsfrom.

This means a perturbation modulus the gauge transfrom is the real d.o.f.

## Gauge Fixing

If the gauge is left in the equations, the [[Einstein's Equation]] isn't expected to yield info about gauge, this means we need to fix a gauge to actually solve the equation.

After fixing a gauge, the d.o.f.s become:

| Components       | d.o.f | gauge | true d.o.f |
| ---------------- | ----- | ----- | ---------- |
| Scalar (ABDE)    | 4     | 2     | 2          |
| Vector (B_i,V_i) | 4     | 2     | 2          |
| tensor (hTT)     | 2     | None  | 2          |
This sums up to 6 d.o.f.s which corresponds to the phyiscal equations (6 Einstein Equations).

There are several common choices for Gauges (only considere scalars for now):

## Conformal Newtonian Gauge

We can select $\xi$ such that $E=B=0$, and we call $A=\Psi$,$B=\Phi$. The perturbed metric with scalars is:
$$
ds^2=-(1+2\Psi)dt^2+a^2(1+2\Phi)\delta_{ij}dx^idx^j
$$
## Synchonous Gauge

We can select $\xi$ such that $A=0,B=0$. The perturbed metric is 'synchronous' in the sense that $g_{00}=-1$:
$$
ds^2=-dt^2+a^2(1+2D)[\delta_{ij}+\partial_i\partial_jE]dx^idx^j
$$

# Bardeen potentials

Similar to the Electromagnetic theory, there are gauge invariant potentials that we can pack the variables into, such that the final equation (should be gauge invariant) must only depend on the packed potentials. These are the bardeen Potentials:
$$
\begin{align}
\Phi_A&=A+\frac{1}{a}\partial_\eta [a(E'-B)] \xrightarrow{Newtonian gauge}\Psi\\
\Phi_H&=-D+aH(B-E') \xrightarrow{Newtonian gauge}\Phi\\
\end{align}
$$
These potentials are invariant under gauge transformations.


# Einstein's Equation results

The $G^{00}$ term gives:
$$
-3H \dot{\Phi}+3\Psi H^2-2\frac{k^2\Phi}{a^2}=-4\pi G[\rho_c\delta_c+\rho_b\delta_b+4\rho_\gamma\Theta_0+4\rho_\nu \mathcal{N}_0]\tag{1}
$$
The $G^{ij}$ terms is computed:
$$
\begin{align}
G^i_j&=\underbrace{g^{ik}}_{g_{0i}=0}(R_{kj}-g_{kj}R)\\
&=\frac{\delta^{ik}(1-2\Phi)}{a^2}R_{jk}-\frac{\delta^i_j}{2}R
\end{align}
$$
The $T^i_j$ is also expressed in perturbed form:
$$
T^i_j=\sum_s g_s \int \frac{dp^3}{(2\pi)^3}\frac{p^ip^j}{\epsilon_s(p)}f_s(\vec{x},\vec{p},t)
$$
A way to compute the tensor equation is to contract the equation with $\hat{k^i}\hat{k^j}-\frac{1}{3}\delta^{ij}$.

Note that $\delta_{ij}(\hat{k^i}\hat{k^j}-\frac{1}{3}\delta^{ij})=0$, This leaves $R_{ij}$ with only term proportional to $k_ik_j$, and this term can be calculated as:

$$
(\hat{k^i}\hat{k^j}-\frac{1}{3}\delta^{ij})G_{ij}=\frac{2}{3}\frac{k^2}{a^2}(\Phi+\Psi)
$$
The RHS term of energy momentum tensor is:
$$
(\hat{k^i}\hat{k^j}-\frac{1}{3}\delta^{ij})T_{ij}=\sum_s g_s \int \frac{dp^3}{(2\pi)^3}\frac{\mu^2-\frac{1}{3}}{\epsilon_s(p)}p^2f_s(\vec{x},\vec{p},t)
$$
Note that the angular dependence of $\mu=\hat{p}\cdot \hat{k}$ is $\mu^2-\frac{1}{3}=\frac{2}{3}P_2(\mu)$. The Integration gives a proportionailty to $\Theta_2$ of the distribution function.

For *Each particle species* in [[Cosmic Inventory Evolution]]:
- Nonrelativistic particles, $p^2/\epsilon^2\ll 1$, has negligible contribution.
- Photons: $RHS = -\frac{8}{3}\rho_\gamma \Theta_2$.
- Neutrinos: $RHS = -\frac{8}{3}\rho_\nu \mathcal{N}_2$.

The equation yields:
$$
\frac{2}{3}\frac{k^2}{a^2}(\Phi+\Psi)=-\frac{8}{3}(\rho_\gamma\Theta_2+\rho_\nu \mathcal{N}_2)
$$
This is a **Constriant Equation** and is independent of the initial conditions.

> [!note] Comments on The quadrupole
> Note in early times, $\Theta_2$ is very small when photons are tightly coupled to the electrons. At later times after recombination, the contribution of $\rho_\gamma$ again becomes negligible. Througout the process, the RHS is very close to zero.

Then we can plug $\Phi+\Psi = 0$ into equation (1) and integrate out the time dependence:
$$
k^2\Phi+\frac{3a'}{a}\frac{4\pi G a^2}{2ik^2}()
$$

In non-relativistic, matter dominated regime, this translates into the Poisson equation ($\Psi =- \Phi$):
$$
\nabla^2 \Phi = 4\pi G \bar{\rho}_c a^2 \delta_c
$$
