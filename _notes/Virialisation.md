---
tags:
  - Astro_II
  - Observational_cosmology
  - Astro_III
  - galactic_physics
  - theoretical_cosmology
aliases:
  - Virial Theorem
---
Usually used in discussion of [[Virialisation]] and [[Top-hat collapse]] models.

The [[Virialisation|Virial Theorem]] is esaily applied to DM systems which is collisionless. (Collision can also virialize)

>[!question] Why is collisionless very important?
>This is the preassumption so that we can neglect stellar collision and use [[Collisionless Boltzmann Equation]]

# Timescales related

Consider the system of N particles each with mass $m$ and velocity $\vec{v}_i$. The three important timescales are:
1. [[Crossing Timescale]].
2. [[Close Encounter Timescale]].
3. [[Relaxation timescale]].

> [!note] 
> In cases of cosmology, the timescales has relation:
> $$
>   t_{close}\ll t_{relax} \ll t_H \ll t_{cross}
> $$
> For a typical galaxy, $r=10kpc$, $v=200km/s$, $N=10^{10}$


This means for Virialization, the distribution of particles $f(\vec{x},\vec{v},t)$ is a [[Collisionless Boltzmann Equation]] evolving under the gravitational potential.

The moments of distribution in p space:
$$
\begin{align}
n(x,t)=\int dv^3 f(x,v,t)\\
Q(x,t)=\int \vec{v} dv^3 f(x,v,t)\\
\end{align}
$$
The equations:
$$
\begin{align}
0=\frac{df}{dt}=&\frac{\partial f}{\partial t}+\nabla_x f \cdot \dot{\vec{x}}+\nabla_p f\cdot \dot{\vec{v}}\\
=&\frac{\partial f}{\partial t}+\nabla_x f \cdot \dot{\vec{x}}+\nabla_p f\cdot -\nabla_x \Phi \tag{1}\\
\nabla^2 \Phi =& 4\pi G \rho \tag{2}
\end{align}
$$
TO solve (1), we need to compute the projected quantities such as density $n$ and velocity $u$. For a general Quantity $Q(u)$.
$$
\begin{align}
0=&\frac{\partial }{\partial t} [n\langle Q \rangle] + \sum_i\frac{\partial }{\partial x^i}[n\langle Q v_i\rangle]+n \sum_i \frac{\partial \Phi}{\partial x_i}\langle \frac{\partial Q}{\partial v_i}\rangle \tag{3}\\
0\xlongequal{Q=1}&\partial_t n(x) + \nabla [n(x) \vec{v}(x)] \tag{4}\\
0\xlongequal{Q=v_j}&\partial_t (nv_j)+\sum_i \partial_{x_i}[n\langle v_i v_j\rangle]+n\frac{\partial \Phi}{\partial x_j}\tag{5}
\end{align}
$$
The equations (4) **Continuity Equation**, (5) are the moments in terms of v. Defining the stress tensor: $\sigma_{ij}=\langle v_i v_j\rangle-\langle v_i\rangle \langle v_j \rangle$. Equation (5) turns into
$$
0=\partial_t (nv_j)+\sum_i n\langle v_i \rangle \partial_{x_i}\langle v_j\rangle+n \sum_i\partial_{x_i}n\sigma_{ij}+n\frac{\partial \Phi}{\partial x_j}\tag{6}
$$
The Equation (6) is the **Jean's Equation**. however we can still not solve this because the moment $\sigma_{ij}$ has 6 d.o.f the density and potential has 2 d.o.f, the velocity has 3 d.o.f, and the number of equations is only 5. See [Wiki Page Jeans Equation](https://en.wikipedia.org/wiki/Jeans_equations#:~:text=The%20Jeans%20equations%20are%20a,system%20for%20systems%20without%20collision.).

> [!note] Solving higher moments
> In principle, solving the higher moments of the equation (3) can also give a full description, but it will require infinite moments. If we want a simple solution, we need 

# Evolution into the steady state

Even without Significant collision, the self-gravitating particles could still Virialize.
Potential drivers:
1. **Phase mixing**: Circular motion mixes particles with different orbital periods.
2. **Chaotic mixing**: Chaotic evolution is phase space transitive.
3. **Violent relaxation**: have a very quick time scale, caused by gravitational potential variation.
4. **Landau damping**: large scale perturbations interact with structures and convert energy into random motion.
## The Virial Theorem

The [[Jeans Equation]] (6) can be taken in the Centre of mass frame of the mass, which gives $\langle v_k \rangle=0$ For stability gives:
$$
0=\partial_t (nv_j)+n \sum_i\partial_{x_i}n\sigma_{ij}+n\frac{\partial \Phi}{\partial x_j}
$$
Integrating by $\int dx^3 m x_k$:
$$
\begin{align}
0=&\sum_i\int x_k \partial_{x_i}[\rho \sigma_{ij}]+\int dx^3 x_k \partial_{x_j}\Phi\\
=&\sum_i\underbrace{\int dx^3 \partial_{x_i}[x_k \rho \sigma_{ij}]}_{=Boundary term = 0}-\sum_i\int dx^3 \frac{\partial x_k}{\partial x_i} \rho \sigma_{ij}+\int dx^3 \rho\partial_{x_j}(x_k \Phi)-\int dx^3 \rho\Phi \delta_{ik}\\
=&-\underbrace{\int dx^3\rho \sigma_{ij}}_{2K_{ij}}-\underbrace{\int dx^3 \rho\Phi}_{W_{ij}}
\end{align}
$$
Taking the trace: $2K+W=0$, This means the Kinetic energy $\frac{1}{2}m \sigma^2 = -\frac{1}{2}W$.

# Steady State solution

The [[Collisionless Boltzmann Equation]]: 
$$
0=\frac{df}{dt}=\cancel{\frac{\partial f}{\partial t}}+\nabla_x f \cdot \dot{\vec{x}}+\nabla_p f\cdot \dot{\vec{v}}
$$
Note that any Motion Integrals (Convserved Quantites):
$$
0=\frac{\partial I}{\partial x} \dot{x}+\frac{\partial I}{\partial v}\dot{v}
$$
This means any motion integral (such as $E , \vec{L}$) ca be a solution for the steady state. and $f=f(E,L,...)$ is also a solution.

This gives a way to parametrize the halo profile in terms of conserved quantities, such as the [[NFW halo profile]].

## Virial theorem description in context of galaxy

In [[Galaxy Evolution]] and galaxys like the milky way, virial theorem applies:
$$
E_{kin}=-\frac{1}{2}E_{p}=\frac{1}{2}\frac{GM^2}{R}
$$
The Infalling gas would gain a Extremely hot temeprature if we assume the gasses holds all the Kinetic Energy:
$$
E_{thermal}=\frac{M}{m_H} k_BT=\frac{GM^2}{R}
$$
This gives a temperature: $T_{vir} = 5 \cdot 10^6 K \cdot \frac{M/10^{11} M_{\odot}}{R/10kpc}$.

The prediction for velocity dispersion is similarly:
$$
\frac{1}{2}M\sigma^2=\frac{GM^2}{2R}
$$
This gives a virial velocity dispersion: $\sigma_{vir}=200km/s \cdot \frac{M/10^{11}m_{\odot}}{R/10kpc}$.
