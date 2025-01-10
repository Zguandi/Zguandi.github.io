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

In [Schwarzschild metric](https://en.wikipedia.org/wiki/Schwarzschild_metric), light follows null geodesics.

$$
ds^2 = -(1-\frac{2M}{r})dt^2+(1-\frac{2M}{r})^{-1}dr^2+r^2d\Omega^2
$$

The geodesic Equation:

$$
u^{\mu} \nabla_{\mu} u^{\nu} = 0
$$

where $u^{\mu} = \frac{d}{d\tau}x^\mu = \dot{x}^\mu$

$$
\frac{d^2}{d\tau^2}x^{\mu} + \Gamma^{\mu}_{\nu\rho}\dot{x}^\nu \dot{x}^\sigma = 0
$$

