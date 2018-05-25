---
title: "Tail recursive functions in Kotlin"
excerpt: "Algorithms that would normally be written using loops are instead written as recursive functions with no risk of stack overflows."
date: "2018-05-31"
author: Marcos Placona
header:
    og_image: assets/images/screenshots/tail-recursive-functions-in-kotlin.png
---

```kotlin
tailrec fun factorial(n: BigInteger, run: BigInteger = BigInteger.ONE): BigInteger {
    return if (n == BigInteger.ONE) run else factorial(n- BigInteger.ONE, run*n)
}

tailrec fun fibonacci(n: Int, a: BigInteger, b: BigInteger): BigInteger {
    return if (n == 0) a else fibonacci(n-1, b, a+b)
}

fun main(args: Array<String>) {
    println(factorial(BigInteger("42")))
    // 1405006117752879898543142606244511569936384000000000

    println(fibonacci(42, BigInteger.ZERO, BigInteger.ONE))
    // 267914296
}
```

When a function is marked with the `tailrec` modifier and meets the required form, the compiler optimises out the recursion, leaving behind a fast and efficient loop based version instead.
