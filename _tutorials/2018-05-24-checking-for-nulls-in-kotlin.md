---
title: "Checking for nulls in Kotlin"
excerpt: "Kotlin's type system is aimed to eliminate `NullPointerException's` from your code."
date: "2018-05-24"
author: Marcos Placona
header:
    og_image: assets/images/screenshots/checking-for-nulls-in-kotlin.png
---

```kotlin
fun handleNullsExplicitly(name: String? = null): String? {
    return if (!name.isNullOrBlank()) name else "The one who shall remain nameless"
}

fun handleNullsWithElvisOperator(name: String? = null): String? {
    return name ?: return "The one who shall remain nameless"
}

fun main(args: Array<String>) {
    println(handleNullsExplicitly(""))
    // The one who shall remain nameless
    println(handleNullsExplicitly("Real Kotlin"))
    // Real Kotlin

    println(handleNullsWithElvisOperator())
    // The one who shall remain nameless
    println(handleNullsWithElvisOperator("Real Kotlin"))
    //Real Kotlin
}
```

You can handle nulls explicitly or using the ?: Elvis Operator and get rid of those pesky NPEs.
