---
tags:
  - Astro_III
  - galactic_physics
---

Coming from the star-star interaction results in [[Motion of Stars in potential]], we can estimate the process of the formation of [[Stellar Clusters]].

![Cluster_formation_process](/assets/pictures/Cluster_formation_process.png)
## Instantaneous gas removal

Stellar clusters usually have [[Star formation efficiency]] of $\epsilon \sim 0.2-0.4$.

> [!question] What would happen to the cluster when all gasses are removed?
> This scenario corresponds to the  *embedded clusters* in dynamical equillibrium.

Before removal:
$$
E_{cl}=\frac{GM_{init}^2}{r_{init}}+\frac{1}{2}M_{init}\sigma_{init}^2
$$
After removal, the potential:
$$
E_{after}=-\frac{GM_{after}}{r_{init}}(M_{after}-\frac{1}{2}M_{init})
$$
At final equillibrium,
$$
E_{cl}=\frac{GM_{cl}^2}{r_{cl}}
$$
This gives: $r_{cl}=\frac{M_{cl}}{M_{cl}-M_{gas}}r_{init}=\frac{1}{\epsilon}$

## Adiabatic gas removal

If time scales $\tau_{removal}\ll \tau_{relax}$. The result gives:
$$
r_{cl}=\frac{M_{init}}{M_{cl}}=\frac{1}{\epsilon}
$$
# Cluster formation

At equillibrium, we assume everything is **Thermalized**, and has a equipartition of kinetic energy.
$$
\frac{1}{2}m_1 \langle v_1^2 \rangle = \frac{1}{2}m_2 \langle v_2^2 \rangle
$$