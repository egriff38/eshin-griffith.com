---
layout: ./_Post-layout.astro
---

Suppose $f:[a,b]\rightarrow\mathbb{R}$ is a continuous function and let $y$ be a number between $f(a)$ and $f(b)$. We want to show that there exists a number $c\in[a,b]$ such that $f(c)=y$.

Let $S={x\in[a,b]:f(x)<y}$. Note that $a\in S$ and $b\notin S$ since $f(b)>y$. Therefore, $S$ is non-empty and bounded above by $b$. By the completeness axiom, $S$ has a least upper bound $c$. We claim that $f(c)=y$.

Suppose for contradiction that $f(c)\neq y$. Without loss of generality, assume that $f(c)<y$. Since $f$ is continuous, for every $\epsilon>0$, there exists a $\delta>0$ such that $|f(x)-f(c)|<\epsilon$ whenever $|x-c|<\delta$. In particular, there exists a $\delta>0$ such that $f(x)<y$ whenever $c-\delta<x<c+\delta$. This contradicts the fact that $c$ is the least upper bound of $S$, since $c-\delta$ is an upper bound of $S$ that is strictly less than $c$. Therefore, we must have $f(c)=y$.

Thus, we have shown that there exists a number $c\in[a,b]$ such that $f(c)=y$, as desired.
