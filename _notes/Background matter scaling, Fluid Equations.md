---
tags:
  - Observational_cosmology
  - theoretical_cosmology
---

# Fluid Euqations
The background matter density determines the [[Energy Momentum tensor]] of ideal fluids in the homogeneous isotrpic universe. The $\rho(t),P(t)$ for different components sum up to determine the right hand side of the [[Einstein's Equation]].

However, directly from **Bianchi Identity**, we know $\nabla_a G^{ab}=\nabla_a T^{ab}=0$. The zero-zero component of this equation gives:
$$
\dot{\rho}+\frac{3\dot{a}}{a}(\rho+P)=0.
$$
Then if we want to solve for the dependence of $\rho(a)$, we can dinfer from external information $P(\rho)$, which is the **Equation of State** parameter $P=w\rho$.

In the [[Friedmann Equations]] section, we defined the critical density, and we can define the matter fraction:
$$
\Omega_i(t)=\frac{\rho_i(t)}{\rho_{crit}(t)}.
$$

# Matter components
## Result of a general Fluid
Using Fluid equations and assume a **Equation of State**.
$$
\begin{cases}
\dot{\rho}=-3\frac{\dot{a}}{a}(\rho+P)\\
P=w\rho
\end{cases}
$$
Using first and third equation, we can first solve for the $\rho(a)$ dependence. 
$$
\frac{d\rho}{\rho}=-3(1+w)\frac{da}{a}\Rightarrow
\rho(a) = \rho_0(a_0/a)^{3(1+w)}
$$
We can see that:
$$
\frac{1}{a^3}\partial_t(\rho a^3)=-\frac{3\dot{a}}{a}P
$$
this translates into: A positive pressure cause the total energy density to decrease faster than $a^{-3}$.
## For ordinary matter
For matter particles that are not relativistic, $P<<\rho c^2$, and are effectively *Pressureless*. Thus, the **Equation of State** is $w=0$. From Fluid Equation, $\rho\propto a^{-3}$.
- $\rho = m n(t)$, which scales as $\propto a(t)^{-3}$
- Present day value $\Omega_m(0)= 0.23$, matter accounts

## For Radiation
For radiation (or ultra-relativistic matter), its **Equation of State** is $w=1/3$, coming from kenetic theories or thermaldynamics. From fluid equations, $\rho\propto a^{-4}$.
- $\rho = h\nu(t) n(t)$, which scales as $\propto a(t)^{-4}$
- Present day ratio $\Omega_r(0)= 10^{-5}$

>[!NOTE] Photon temperature
>For the pressure, Photons in thermal Equillibrium follows Bose-Einstein Distribution with zero chemical potential:
>$f(\nu/T)=\frac{1}{e^{h\nu/k_B T}-1}$
>We can think the distribution also follows $T\propto\frac{1}{a}$.

## For Cosmological Constant
Also know as [[Dark Energy]].
$\rho = \Lambda$ is a constant, that's why its is also cally *Vacuum Energy*.
Has negative pressure $P=-\rho c^2$.
## For general fluids
We can define the Equation of State Parameter $w$,
$$
P=w\rho c^2.
$$
# The Friedmanns Equation

The first of the [[Friedmann Equations]] can be simplified as:
$$
\frac{H}{H_0}=\left[\Omega_{m,0} (\frac{a_0}{a})^3+\Omega_{r,0} (\frac{a_0}{a})^4+\Omega_{\Lambda,0} +\Omega_k(\frac{a_0}{a}^2)\right]^{1/2}
$$
The solutions can be divided into regimes of dominance in terms of the different components,mlisted in [[Friedmann background solutions]].
## Transition from different components


```mathematica-plot 
raster:
  dim: 2D
  background: None
  size:
    height: Automatic
    width: "250"
general:
  axes: "True"
  axesLabel: "{log a, log rho}"
  frame: "False"
  boxed: "True"
  plotLabel: "{radiation, matter, dark energy}"
graphs:
  - id: graph_0
    options:
      plotLegends: "{radiation, matter, dark energy}"
    type: plot
    plot:
      expression: "{5-4*x,4-3*x,0.0}"
      plotRange:
        x:
          min: "0.8"
          max: "1.4"
        y:
          min: ""
          max: ""
 
 ```

