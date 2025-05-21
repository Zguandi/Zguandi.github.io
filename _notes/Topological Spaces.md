---
tags:
  - General_relativity
---

Our interest in topological spaces is coming from the fact that GR spacetime has the structure of topological space. (On top of a list of other structures.)

## Definition

> A *topological space* $\{X,\mathcal{J}\}$ consistes of a set $X$ and a *collection* ot subsets $\mathcal{J}$, such that satisfies the following properties:
> a) The union of arbitrary collection of subsets in $\mathcal{J}$ is in $\mathcal{J}$. If $O_\alpha \in \mathcal{J}$, then $\bigcup_\alpha O_\alpha \in \mathcal{J}$.
> b) The intersection of a finite number of subsets in $\mathcal{J}$ is in $\mathcal{J}$ .
> c) $X\in \mathcal{J},\emptyset \in \mathcal{J}$. 

**Naming:** $\mathcal{J}$ is called a *topology* on $X$, and subsets in $\mathcal{J}$  are called *open sets*.

### Examples

The *discrete topology*: $\mathcal{J}=Power(X)$.
The *indiscrete topology*: $\mathcal{J}=\{\emptyset,X\}$.
The *usual topology* on $\mathbb{R}$: $\mathcal{J}$ is all sets expressed by unions of open intervals $(a,b)$.


> $A$ is a subset of $X$, then the collection of subsets: $\mathcal{L}=\{U|U=A\bigcap O, O\in \mathcal{J}\}$ is called an *induced topology*.  

> $\{X_1,J_1\},\{X_2,J_2\}$ are topological spaces, then let $X = X_1\times X_2 = \{(x_1,x_2)|x_1\in X_1, x_2 \in X_2\}$, and $J = \{U|U=O_1\times O_2, O_1 \in J_1, O_2\in J_2\}$. is a *product topology*.

### Examples

$\mathbb{R}^n$ standard topology is the product of n $\{\mathbb{R},J\}$.


> A map $f:X\rightarrow Y$ with $\{X,J\},\{Y,L\}$ is *continuous* if for any given open set