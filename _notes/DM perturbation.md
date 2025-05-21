---
tags:
  - theoretical_cosmology
---

We focus on the [[Boltzmann Equation Perturbation]]:
$$
\begin{align}
0&=\frac{df}{dt}=\frac{\partial f}{\partial t}+\frac{\partial f}{\partial x^i}\frac{p}{\epsilon}\frac{\hat{p^i}}{a}(1-\Phi-\Psi)\\
&+\frac{\partial f}{\partial p}(-(H+\dot{\Phi})p-\frac{\epsilon}{a}\hat{p^i}\Psi_{,i}
)\\
&+\frac{\partial f}{\partial \hat{p^i}}\frac{\epsilon}{a p}(\delta^{ik}-\hat{p^i}\hat{p^k})(\frac{p^2}{\epsilon^2}\Phi-\Psi)_{,k}
\end{align}
$$
At first order of perturbation:
$$
\begin{align}
0&=\frac{\partial f}{\partial t}+\frac{\partial f}{\partial x^i}\frac{\hat{p^i}}{a}\\
&-\frac{\partial f}{\partial p}[(H+\dot{\Phi})p+\frac{\epsilon}{a}\hat{p^i}\Psi_{,i}
]
\end{align}
$$
This equation is in both x, and p, and it is usually easier to integrate out p.

# First Moment of DM perturbation
Integrating over $\int \frac{dp^3}{(2\pi)^3 \epsilon_p}$. We get the *First Moment* of the Equation.

The result of the [[Equations of Perturbation for Matter]] for DM projected onto the 1st moment is:
$$
\partial_t n_c+\frac{1}{a}\partial_i(n_c u_c^i)+(3H+\dot{\Phi})n_c=0
$$
We can see that the Equation depends on $u_c^i$ and this is actually a 1st moment result. So the wise thing to do is to move onto the next moment.

# Second Moment of DM perturbation
integrating over $\int \frac{dp^3}{(2\pi)^3 \epsilon_p} \hat{p}^i$. We get the *Second Moment*. The result term by term.

- First term:
$$
\int \frac{dp^3}{(2\pi)^3 \epsilon_p} p\hat{p}^i \frac{\partial f}{\partial t}=\partial_t (n_cu_c^i)
$$
- Second term:
$$
\int \frac{dp^3}{(2\pi)^3 \epsilon_p} \frac{p}{\epsilon}p\hat{p}^i \frac{\partial f}{\partial x^j}\sim O(\frac{p^2}{\epsilon^2})=0
$$
- Third term
$$
\begin{align}
&\int \frac{dp^3}{(2\pi)^3} \frac{p \hat{p}^i}{\epsilon}\cdot - \frac{\partial f}{\partial p}[(H+\dot{\Phi})p+\frac{\epsilon}{a}\hat{p}^j\partial_j\Psi]\\
=& \int \frac{dp^3}{(2\pi)^3}\cdot-(H+\dot{\Phi})p^2\partial_pf-\frac{p}{a}\hat{p}^i \hat{p}^j \partial_j \Psi \partial_pf\\
=&\int \frac{dp d^2\Omega}{(2\pi)^3}[f_c \hat{p}^i\partial_p(\frac{p^4}{\epsilon_p})(H+\dot{\Phi})+f_c \hat{p}^i \hat{p}^j \partial_p(\frac{p^3}{\epsilon_p})\frac{1}{a}\partial_j \Psi]\\
=&4n_cu_c^i+\frac{n_c}{a}\frac{\partial \Psi}{\partial x^i}c
\end{align}
$$
This gives:
$$
\partial_t(n_c u_c^i)+4Hn_cu_c^i+\frac{n_c}{a}\frac{\partial \Psi}{\partial x^i}=0
$$
Combinied with the $n_c$ equation, we get the Euler's Equation for velocity field perturbation:
$$
\partial_tu^i+Hu^i=-\frac{\partial_i \Phi}{a}
$$


> [!note] Higher Order and higher Moments
> Taking a higher moment $\int dp^3 p^n$ is possible for non-relativistic particles as DM. And thhis is only needed for the nth moment is at least nth order in perturbation. And the N equations can solve the N moments in coupled diff. equations.
> This is called **The Boltzmann Hierarchy**.

