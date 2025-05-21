Given the topology of the universe, The Expansion of the univserse is determined by the *matter Inventory*.

## Solving the Friedmann's Equation
```
[mathematica]
flrwcoords = {t, x, y, z}
metric = {{-1, 0, 0, 0}, {0, a[t]^2, 0, 0}, {0, 0, a[t]^2, 0}, {0, 0, 
   0, a[t]^2}}
EinsteinTensor = 
 RicciTensor[metric, flrwcoords] - 
  metric*RicciScalar[metric, flrwcoords]/2
Simplify[%]
```

## The Friedmann's Equation
The [[Einstein's Equation]] gives **Friedmann Equations** in the following form:
$$
H^2(t)=\frac{8\pi G}{3}\times\left[\rho(t)+\frac{\rho_k}{a^2(t)}\right]
$$
Where $\rho_k = \rho_{crit}-\rho(t_0)$ is the measurement of curvature.
$$
(\frac{\dot{a}}{a})^2=\frac{8\pi G}{3}\rho-\frac{Kc^2}{a^2}
$$
## Critical density

$\rho_{crit}(t)=\frac{3H^2(t)}{8\pi G}$ is defined as the critical density, and using $\rho_{crit,0}=\frac{3H^2_0}{8\pi G}$ from the [[Hubble parameter]] measurement.

For a Flat Universe to Expand as it is now:
$\rho = \rho_{crit}\sim 10^{-29}g/cm^3\sim 1 \text{proton}/m^2 \sim 10^{11} M_{\odot}/Mpc^3$

## Simplification of Firedman Equation

$$
\frac{H}{H_0}^2=\frac{\rho}{\rho_{crit,0}}-\frac{Kc^2}{H_0^2 a_0^2}
$$
We can also define the $\Omega_i$ fractions [[Background matter scaling, Fluid Equations]], and similarly define the $\Omega_k$ the ''curvature density'' as:

$$
1 = \frac{\rho}{\rho_{crit,0}}-\frac{Kc^2}{H_0^2a_0^2}=\sum_i\Omega_i+\Omega_k
$$
