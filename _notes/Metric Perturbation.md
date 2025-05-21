---
tags:
  - theoretical_cosmology
  - General_relativity
---

In [[Cosmological Perturbation]] theory, we can do inhomogeoeous fluctuations on the background, homogeneous-isotropic universe. From [[FLRW metric]] we have the background $g_{\mu\nu}^{FLRW}$. Easily we can split the metric into:
$$
g_{\mu\nu}=g_{\mu\nu}^{FLRW}+\delta g_{\mu\nu}
$$
However, we need to note that there is freedom of coordinate transform in GR, e.g. spatial translations:
$$
\begin{gather}\ x' = x+\xi\\
g'_{\mu\nu}=g_{\mu\nu}-\nabla_\mu\xi_\nu-\nabla_\nu\xi_\nu
\end{gather}
$$
At **Linear level**, we can decompose the metric perturbation into *scalar* and *vector* parts depending their tranformation under rotations, and on linear level, the scalar and vectorial components have separable evolution.

> [!NOTE] The Scalar perturbation vs Vector perturbation
> In the present universe, the scalar perturbations $\delta\phi$ is dominant and for  now we can focus on scalar perturbations.
# Conformal Newton gauge

Under the *Conformal Newton gauge*, we can parametrize the perturbation as:
$$
\begin{gather}
g_{00}=-1-2\Psi(x,t) \\
g_{0i}=0 \\
g_{ij}=\delta_{ij}a^2(t)(1+2\Phi(x,t))
\end{gather}
$$
# Spatially flat gauge
Under the spatially flat gauge, the metric is taken so that $g_{ij}=\delta_{ij}$.
$$
ds^2 = -N^2dt^2+g_{ij}^3(dx^i+N^idt)(dx^j+N^jdt)
$$
Where the $N$ is the **Shift** defining the shift of equal time slices, and the $N^i$ vectors are the **lapse** vector. defining the change of time within the equal time slices.

## Perturbed Christoffel Symbol

Using $\Gamma^\mu_{\nu\rho}=\frac{1}{2}g^{\mu\lambda}[g_{\lambda\nu,\rho}+g_{\lambda\rho,\nu}-g_{\nu\rho,\lambda}]$.

The Christoffel Symbol is :
$$
\begin{align}
\Gamma^0_{00}=&\Psi_{,0} \\
\Gamma^0_{0i}=\Gamma^0_{i0}=&\Psi_{,i} \\
\Gamma^0_{ij}=&\delta_{ij}a^2[H+2H(\Phi-\Psi)+\Phi_{,0}] \\
\Gamma^i_{j0}=\Gamma^i_{0j}=&\delta_{ij}(H+\Phi_{,0}) \\
\Gamma^i_{jk}=&[\delta_{ij}\partial_k+\delta{ik}\partial_j-\delta{jk}\partial_i]\Phi
\end{align}
$$
## World Line

See details in [[Geodesic Equation in Perturbed FLRW]].
