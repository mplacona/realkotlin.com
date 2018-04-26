---
title: "Late initialisation in Kotlin"
excerpt: "Non-null type properties must be initialised in the constructor but that's not always very convenient. `lateinit` properties change that."
date: "2018-05-01"
author: Marcos Placona
header:
    og_image: assets/images/screenshots/late-initialisation-in-kotlin.png
---

```kotlin
private lateinit var name: String

fun getMessage(): String {
    name = "RealKotlin"
    val message = "We didn't even need to say $name until now"
    // lateinit properties are always mutable. Be careful!
    name = "42"
    return message
}

fun getNewMessage(): String = name

fun main(args: Array<String>) {
    println(getMessage())
    // We didn't even need to say RealKotlin until now

    println(getNewMessage())
    // 42
}
```

Whenever you need a mutable property or one that is set outside of your class, `lateinit` may be just what you need.
