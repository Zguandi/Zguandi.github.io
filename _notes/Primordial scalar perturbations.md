---
tags:
  - theoretical_cosmology
---
In quantizing the scalar perturbations of the [[Inflation theory]], we need to consider the *coupled evolution* of $\delta \phi, \Psi, \Phi$ scalar perturbations.

Here we adopt the **Spatially Flat** gauge from [[Metric Perturbation]], and the scalar fields in perturbations.

$$
ds^2 = -N^2dt^2+g_{ij}^3(dx^i+N^idt)(dx^j+N^jdt)
$$

The Action during inflation:
$$
\begin{align}
S&=\frac{1}{2}\int dx^4 \sqrt{h}[\frac{1}{8\pi G}N R^{(3)}+\frac{1}{N}(\epsilon^{ij}\epsilon_{ij}-(\epsilon'^i_i)^2)+\frac{1}{N}(\dot{\phi}-N^i\partial_i\phi)(\dot{\phi}-N^j\partial_j\phi)\\
&-Nh^{ij}\partial_i\phi\partial_j\phi-2NV(\phi)]
\end{align}
$$
where $\epsilon_{ij}=\frac{1}{2}(h_{ij}-\nabla_iN_j-\nabla_jN_i)$ and $\nabla$ is the 3d covariant derivative.

note that for the shift and lapse $N,N_i$, there is no *dynamics* in lagrangian and can be solved as a function of $\phi, h$. Also $h = a^2\delta_{ij}$.

The solution for $N_1$ at linear order of perturbation $\delta \phi$ is:
$$
N_1=\frac{\dot{\phi}}{2H}\delta\phi
$$
Since the **Slow roll parameters** $\epsilon_{SR}=-\frac{\dot{H}}{H^2}=-\frac{1}{2}\frac{\dot{\phi}}{H}\frac{\partial\phi V}{V}$. Using background inflation equation:
$$
\ddot{\phi}+3H\dot{\phi}+V'=0
$$
This gives $\epsilon_{SR}=\frac{1}{2}\frac{V'^2}{3H^2V}$. and the $\delta_{SR}=\frac{\ddot{\phi}}{H\phi}=\frac{-3H\dot{\phi}-V'}{H\dot{\phi}}$.

The expansion for the Action:
$$
S = S(\phi_0)+\underbrace{\delta_\phi S}_{0=eom} \delta\phi+\delta^2_\phi S \delta\phi^2
$$
the Action for the perturbation is:
$$
S_2 = \int dk^2\int dt a^3 \frac{1}{2}[|\delta\dot{\phi}_k|^2-\frac{k^2}{a^2}|\delta\phi_k|^2]+o(\delta_{SR},\epsilon_{SR})
$$
yielding an exactly same result as [[Primordial gravitational waves]], and has a Power spectum:
$$
\langle0|\delta\phi(\vec{k},\eta)\delta\phi(\vec{k'},\eta)|0\rangle=(2\pi^3)\delta^3(k+k')\frac{H^2}{2k^3}(1+k^2\eta^2)
$$
Now pay attention to the terms we drop, for example: keeping $\partial^2_\phi V(\phi)$,
Compare the term $V_{,\phi\phi}$ and other terms like $k^2/a^2$. Since $V_{,\phi\phi}\propto \epsilon_{SR}H^2$, the two terms:
$$
\frac{k^2}{a^2}\div \frac{\partial^2 V}{\partial\phi^2}\sim \frac{k^2}{a^2H^2}\frac{1}{\epsilon_{SR}}=\frac{r_{horizon}}{r_k}^2\frac{1}{\epsilon_{SR}}
$$
This means the appoximation works at scales with $r_{k}<\frac{1}{\sqrt{\epsilon_{SR}}}r_{horizon}$. Also this equation involving slow roll will break when $k^2/a^2>H$, This means the approximation only work in scale range:
$$
1\gg \frac{k^2}{aH^2}\gg \sqrt{\epsilon_{SR}};1\ll \frac{r_k}{r_{horizon}}\ll \frac{1}{\sqrt{\epsilon_{SR}}}
$$
