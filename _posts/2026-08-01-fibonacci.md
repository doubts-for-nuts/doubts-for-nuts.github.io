---
layout: post
title:  "Dynamic programming Fibonacci is not linear"
date: 2026-08-01
excerpt: "Your favorite dynamic programming method is nowhere close to $$O(n).$$"
---


The Fibonacci sequence
\\\[
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, \ldots
\\\]


```python
def fib(n):
  if n <= 1:
    return n
  else:
    return fib(n - 1) + fib(n - 2)
#######################################
```
