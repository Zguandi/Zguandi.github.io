---
tags:
  - Astro_II
  - Observational_cosmology
aliases:
  - spherical collapse
  - spherical collapse model
  - top-hat collapse model
---

![Top-hat_collapse](/assets/pictures/Top-hat_collapse.png)
Let us consider a spherical top-hat overdensity with only collisionless Dark matter.

Using Newton's law and considere masses at the edge of the sphere:
$$
\frac{d^2 r}{dt^2}=-\frac{GM}{r}
$$
And the Mass is: $M(<r)=\frac{4\pi}{3}r^3 \bar{\rho}(1+\delta)$. Since if there are no shell-crossing, the mass inside shell is going to be constant.

The Energy of the shell is conserved:
$$
\mathcal{E} = \frac{1}{2}\frac{dr}{dt}^2-\frac{GM}{r}
$$
The solution is:
$$
\cases{r=A(1-\cos\theta)\\t=B(\theta-\sin \theta)}
$$
With $A = \frac{GM}{|\mathcal{E}|},B=\frac{GM}{(2|\mathcal{E}|)^{3/2}}$.

The time of collapse turnaround from this parametrized curve is $T = \pi B$. this is a typical timescale for halo virialization.

At later time, the $M(<r)$ assumption fails because there are shell crossing.

# The simple model for cosmology

The initial condition comes from the homogeneous expansion and set the overdensity to have radius $r_i$. Assume $v_{i}$ follows the Hubble Flow, $v_i = \frac{da}{dt}x_i$.

The overdensity evolves as:
$$
1+\delta = \frac{9}{2}\frac{(\theta-\sin \theta)^2}{(1-\cos \theta)^3}
$$
```mathematica-plot 
raster:
  dim: 2D
  background: None
  size:
    height: Automatic
    width: "250"
general:
  axes: "True"
  axesLabel: "{theta, delta}"
  frame: "False"
  boxed: "True"
graphs:
  - id: graph_0
    options:
      plotLabels: ""
      plotLegends: Top-hat collapse
    type: plot
    plot:
      expression: 4.5*(x-Sin[x])^2/(1-Cos[x])^3
      plotRange:
        x:
          min: "0"
          max: "4"
        y:
          min: ""
          max: ""
 
 ```

At linear order of t, we get:
$$
\delta_{lin}=\frac{3}{20}(6\pi)^{2/3}(\frac{t}{t_{ta}})^{2/3}
$$
This is extrapolated to latetimes and this will diverge.

The overall density follows the relation

![top_hat_and_virialisation](/assets/pictures/top_hat_and_virialisation.png)

# Late time

The top-hat overdensity undergo [[Virialisation]] and reach equillibrium.

@ turn around, $K = 0$, $W = -\frac{3GM^2}{5R_{ra}}=E$.
@ virialization, $K=-\frac{W}{2}; K+W = E$, this gives: $W = 2 E; r_{vir} = \frac{1}{2}r_{ta}$.

The overdensity at virialization:
$$
1+\Delta_{vir}=\frac{\rho (t_{vir})}{\bar{\rho}(t_{vir})}=\underbrace{\frac{\rho_{ta}}{\bar{\rho}(t_{ta})}}_{5.55}\times \underbrace{\frac{r_{ta}}{r_{vir}}^3}_{2^3} \times \underbrace{\frac{\bar{\rho}(t_{ta})}{\bar{\rho}(t_{vir})}}_{2^2}
$$
This gives:
$$
\Delta_{vir} \approx 178
$$

This value is usually used in Numerical simulations as a criteria of [[DM halo]]s being virialized.