---
tags:
  - unWISE_sz
---
Assuming the galaxy start at $\rho_i(r_i),P_i(r_i)$ with a prifile already known. And a Blast wave has driven a wall of radius $r_{shock}$ adiabatically for the outlying gas.

The Hydrostatic equation: 
$$
\frac{\nabla P}{\rho}=\nabla\Phi
$$
where the gravitational potential is: $\phi = \phi_{NFW}(x)=4\pi G \rho_0 R_s^2 \frac{1}{x}\ln(1+x)$. Which is the [[NFW halo profile|NFW profile]].

![Pasted image 20250516201742](/assets/pictures/Pasted image 20250516201742.png)
# Isothermal model
Assuming isothermal: $P=c^2_g\rho$, $c_g$ is the soundspeed with $c^2_g=\frac{k_BT}{\mu m_p}$. The solution is:
$$
\begin{align}
c^2\partial_r \ln\rho(r) &= \partial_r \Phi\\
\rho(r)&=\rho_{g0}\exp\left[-\frac{4\pi G \rho_0 R_s^2}{c^2_g}\frac{\ln(1+x)}{x}\right]
\end{align}
$$
This isothermal assumption is very far from reality, and mass doesn't conserve.

# Full model

The hydro static equation:
$$
\frac{\nabla P}{\rho}=\nabla\Phi
$$
The mass conservation:
$$
4\pi r^2\rho(r) dr=4\pi r_i^2 \rho[r_i(r)]dr_i
$$
The adiabatic process:
$$
\frac{P(r)}{\rho (r)^\gamma}=\frac{P_i[r_i(r)]}{\rho_i[r_i(r)]^\gamma}
$$
Solve the equation with $r_i(r)$. Set $r_i^3 = U, r^3 = V$

$$
\partial_rP = \partial_r [[\frac{d(r_i^3)}{d(r^3)}]^\gamma P_0(r_i)]=3r^2\partial_V(\frac{dU}{dV}^\gamma P_0(U(V)))=3V^{2/3}\partial_V[\frac{dU}{dV}^\gamma P_0(U(V))]
$$
The equation becomes:
$$
\begin{align}
3V^{2/3}\partial_V[\frac{dU}{dV}^\gamma P_0(U(V))]=\rho_0(\frac{dU}{dV})\nabla\Phi
\end{align}
$$

# Approximation-polynomial

The direct solution is not easy for general $P_i(r),\rho_i(r)$. But we can expand the mapping $r \rightarrow r_i$ as $r\rightarrow R=r-r_{shock} \rightarrow r_i$. and $r_i = k_1R+k_2R^2+o(R^3)$.


# Approximation-polyptic EoS

The polyptic assumption gives an equation of state $\frac{P}{\rho^\gamma}=C$ as an equation of state for all radius $r$.

This translated the hydrostatic equation into:
$$
{C\gamma \rho^{\gamma-2}\partial_r \rho}=\partial_r\Phi
$$
This solved to give:
$$
\begin{align}
C\gamma \frac{1}{\gamma-1}\partial_r (\rho^{\gamma-1})&=\partial_r\Phi\\
\frac{C\gamma}{\gamma-1}\rho^{\gamma-1}&=\Phi+D\\
\rho(r)&=[\frac{\gamma-1}{C\gamma} (\Phi-\Phi_0)]^{\frac{1}{\gamma-1}}
\end{align}
$$
This is also discussed in [Hydrostatic equilibrium profiles for gas in elliptical galaxies](https://arxiv.org/pdf/1003.2175) by Pedro et. al..

![density_profile_polytropic](/assets/pictures/density_profile_polytropic.png)