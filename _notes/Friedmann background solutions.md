---
tags:
  - Astro_II
  - Observational_cosmology
  - theoretical_cosmology
---

The solutions of the [[Friedmann Equations]] should be dependent on the sum of all metter components with different Equation of states. However, there are periods in the universe where only one component is dominant, and we can solve analytically the Firedmnan's Equation.

# Component Dominated Universe

## Result of a General fluid Component
Using Evolution of density by fluid equations in [[Background matter scaling, Fluid Equations]] and the first of [[Friedmann Equations]].
$$
\begin{cases}
\dot{\rho}=-3\frac{\dot{a}}{a}(\rho+P)\\
\frac{\dot{a}}{a}^2=\frac{8\pi G}{3}\rho\\
P=w\rho
\end{cases}
$$
Using first and third equation, we can first solve for the $\rho(a)$ dependence. 
$$
\frac{d\rho}{\rho}=-3(1+w)\frac{da}{a}\Rightarrow
\rho(a) = \rho_0(a_0/a)^{3(1+w)}
$$

## Matter dominated Universe
Coming from Pressureless matter,
$$
w_{m}=0, \rho=\rho_0 a^{-3}
$$
This gives:
$$
\frac{\dot{a}}{H_0 a}=\Omega_0^{1/2}a^{-3/2} \Rightarrow a(t)\propto t^{1/2}
$$
## Dark Energy dominated Universe

$$
\frac{\dot{a}}{H_0 a}=\Omega_{\Lambda}^{1/2} \Rightarrow a(t)\propto e^{H_0 t}
$$
## General Fluid Domination



```mathematica-plot 
raster:
  dim: 2D
  background: None
  size:
    height: Automatic
    width: "250"
general:
  axes: "True"
  axesLabel: "{t, a/a0}"
  frame: "True"
  boxed: "True"
  plotLabel: The expansion of different Universes
graphs:
  - id: graph_0
    options:
      plotLabels: ""
      plotLegends: "{Matter dominated ,DE dominated}"
    type: plot
    plot:
      expression: "{x^0.5,E^{x-1}}"
      plotRange:
        x:
          min: "0.0"
          max: "2.0"
        y:
          min: ""
          max: ""
 
 ```
 