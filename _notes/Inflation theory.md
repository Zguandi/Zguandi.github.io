---
tags:
  - theoretical_cosmology
---
The inflation theory hypothesizes a period of **Exponential Expansion** briefly after the big bang. This is the *de-Sitter* Spacetime.
$$
a = a_i e^{Ht}
$$
This could solve the [[Horizon Problem]] by growing the [[Comoving Horizon]] **exponentially**.
$$
\chi_h(t_i,t_e) = c\int\frac{da}{a^2 H}=\frac{c}{H}[e^{2Ht}-1]
$$
To solve the [[Horizon Problem]], we need the inflation to happen for at least $Ht>60$ and this means at least 60-e folds of expansion.

Also this solves the [[Flatness Problem]] because we can show:
$$
\frac{\Omega^{-1}_{t_e}-1}{\Omega^{-1}_{t_i}-1}<10^{-52}
$$
And this means even if there are curvature at the beginning, it will be **Diluted** by inflation.
## Conformal time
The [[Comformal Time]] $\eta(t)$ during inflation is:
$$
\eta(t)=\int_{t_e}^{t}\frac{dt'}{a(t')}\xlongequal{a=e^{H_It}}\frac{1}{H_I}(e^{-H_I t_e}-e^{-H_I t})=\frac{1}{H_I}(\frac{1}{a_e}-\frac{1}{a_t})<0
$$
In conformal time coordinates, the inflation period corresponds to $\eta<0$.

## Field Theory for the drive of Inflation

We can assume a scalar field called [[Inflaton]] to be the drive force for the inflation $\phi(x,t)$. At background level the inflaton has an approximate Equation of state $w\simeq 1$, with:
$$
w = \frac{\frac{1}{2}\dot{\phi_0}^2+V(\phi_0)}{\frac{1}{2}\dot{\phi_0}^2-V(\phi_0)}
$$
when we have **Slow roll**, the spacetime can have approximate exponential expansion.

![Slow_roll_inflation](/assets/pictures/Slow_roll_inflation.png)

> [!important] Conditions for Inflation
> For the inflation to be happening for 60 e-folds, we need **Slow Roll Condition**, which states $\dot{\phi}^2\ll V(\phi)$.
> The Slow roll parameters describes this deviation of $V(\phi)$ being completely flat, or in other words the deviation fromo de-Sitter Spacetime. The first one being:
> $$
> \epsilon_{SR}=\frac{d}{dt}\frac{1}{H}=-\frac{H'}{aH^2}
> $$
> the second one describes the role of friction:
> $$
> \delta_{SR}=\frac{\ddot{\phi}}{H\dot{\phi}}=\frac{-1}{aH\phi'}(3aH\phi'+a^2V')
> $$
> The Slow roll regime is when $\epsilon_{SR}\ll1$ and $\delta_{SR}\ll1$.

# Fluctuation and Quantization of inflaton field

(See details in the Mathcha note: [[Curved Spacetime QFT and Cosmology.pdf]].)

This gives the prediction for [[Primordial perturbations]] in **Scalar and tensor** modes.

> [!hint] The reason why the inflation potential shouldn't be a false vacuum decay.
> If The inflation is driven by a false vacuum state, the tunneling rate of vacuum decay $\propto \exp[-\frac{1}{\hbar}\Delta V t]$. If the false vacuum height $\Delta V$ is too small, the inflation won't last for enough e-folds, on the other hand, if $\Delta V$ is not small enough, the overall timescale of tunneling would take too long time and the vacuum decays random;y at different parts of the universe anf form bubbles.
> Note that in theory we could be in a bubble, and this bubble universe doesn't contradict with cosmology **Except that** the bubbles would be very *Open Universes* while our universe is spatially flat.
> ![False_vacuum_inflation](/assets/pictures/False_vacuum_inflation.png)

