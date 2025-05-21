---
tags:
  - Astro_II
  - Observational_cosmology
---

# CAMB
[CAMB](https://camb.readthedocs.io/en/latest/) stands for Code for Anisotropies in the Microwave Background. It is a cosmology code for calculating CMB, lensing, galaxy count, dark-age 21cm power spectra, matter power spectra and transfer functions.

# CLASS
The purpose of [CLASS](http://class-code.net/) is to simulate the evolution of linear perturbations in the universe and to compute CMB and large scale structure observables. Its name also comes from the fact that it is written in object-oriented style mimicking the notion of class. Classes are a wonderfull programming feature available e.g. in C++ and python, but these languages are known to be less vectorizable/parallelizable than plain C (or Fortran), and hence potentially slower. For CLASS we choose to use plain C for high performances, while organizing the code in a few modules that reproduce the architecture and philosophy of C++ classes, for optimal readability and modularity.