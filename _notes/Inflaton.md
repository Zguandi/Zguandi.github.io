---
tags:
  - theoretical_cosmology
---
The most simple model of the [[Inflation theory]] involves a **Beyond SM** particle called **Inflaton**. For monofield inflation:
$$
S= \int \sqrt{-g}dx^4(-g^{\mu\nu}\partial_\mu \phi\partial
_\nu \phi-V(\phi))
$$
The [[Energy Momentum tensor]] of the inflaton is:
$$
T_{\mu\nu}=\frac{2}{\sqrt{-g}}\frac{\delta S}{\delta g^{\mu\nu}}=-\partial_\mu \phi \partial_\nu\phi + g_{\mu\nu}(\frac{1}{2}\partial^\alpha \phi \partial_\alpha \phi - V(\phi))
$$
Here for discussion of the metric, it is convenient to decompose the inflaton field into a background and a fluctuation.
$$
\phi(\vec{x},t)=\phi_0(t)+\delta\phi(\vec{x},t)
$$
,where we assume the fluctuation $\delta \phi$ is very small.

## background inflation

The Energy momentum tensor at background level has no spatial dependence and is thus simply:
$$
\begin{align}
T^0_0=\rho &= \frac{1}{2}\dot{\phi_0}+V(\phi_0)\\
T^i_i=p&= \frac{1}{2}\dot{\phi_0}-V(\phi_0)
\end{align}
$$
The [[Einstein's Equation]] has the same form of [[FLRW metric]] results with Equation of state:
$$
\frac{\rho}{p}=\frac{\dot{\phi_0}^2+2V}{\dot{\phi}^2-2V}\approx-1
$$
This is supporting a exponentially decay.

The **Equation of state** is derived from the action as:
$$
\ddot{\phi}+3H\dot{\phi}+\partial_\phi V(\phi)=0
$$
And in conformal time this gives:
$$
\phi''+2a\phi'+a^2 \partial_\phi V(\phi)=0
$$
