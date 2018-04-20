---
title: "Functions With Expression Body"
excerpt: "When a function returns a single expression, the curly braces can be omitted and the body is specified after a = symbol."
date: "2018-04-11"
author: Marcos Placona
---

```kotlin
fun double(x: Int) = x * 2

fun sum(a: Int, b: Int) = a + b

fun main(args: Array<String>) {
    println(double(21))
    // 21 * 2 = 42
    println(sum(36, 6))
    // 36 + 6 = 42
}
```

Explicitly declaring the return type is optional when this can be inferred by the compiler.
