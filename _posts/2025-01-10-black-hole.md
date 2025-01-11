---
layout: post
title:  "A blackhole raytracing pipeline"
date:   2025-01-10 23:14:02 +0800
categories: jekyll update
---

A primitive code written for black hole ray tracing, written in python. I admit that this is not optimized for performance, but it works.

## Github repo

The github repo for this one of my project is [General Relativity Lensing](https://github.com/Zguandi/General_Relativity_Lensing). The master branch is purely python scripting and is easy to adapt to apply lensing effects onto pictures. The program specifics are covered in the README.md.

## Theoretical support

In [Schwarzschild metric](https://en.wikipedia.org/wiki/Schwarzschild_metric), the distance is:

$$
ds^2 = -(1-\frac{2M}{r})dt^2+(1-\frac{2M}{r})^{-1}dr^2+r^2d\Omega^2
$$

The geodesic Equation:

$$
u^{\mu} \nabla_{\mu} u^{\nu} = \kappa(\tau) u^{\nu}
$$

where $$u^{\mu} = \frac{d}{d\tau}x^\mu = \dot{x}^\mu$$ is the four-velocity of the light (wavevector).

$$
u^\mu \partial_\mu u^\nu + \Gamma^\nu_\mu\rho u^\mu u^\rho = 0
$$

Under affine parametrization [null geodesic](https://en.wikipedia.org/wiki/Geodesics_in_general_relativity). There is parameter $\lambda$, that:

$$
\frac{d^2}{d\lambda^2}x^\mu = \Gamma^\mu_{\nu\rho}u^\nu u^\rho=0
$$

This gives four geodesic equations (In the form of second order coupled differntial equations).

$$
\begin{align}
  \ddot{t}&=-\frac{2M}{r(r-2M)}\dot{t}\dot{r}\\
  \ddot{r}&=-\frac{2M(r-2M)}{r^3}\dot{t}^2+\frac{M}{r(r-2M)}\dot{r}^2+(r-2M)\dot{\theta}^2+(r-2M)\sin^2(\theta)\dot{\phi}^2\\
  \ddot{\theta}&=\sin\theta\cos\theta\dot{\phi}^2-2\frac{\dot{r}\dot{\theta}}{r}\\
  r&^2\sin^2\theta \dot{\phi}^2=J
\end{align}
$$

Then we can use the four equations to setup numerical solution methods.

## Numerical methods
