---
title: "Local functions in Kotlin"
excerpt: "Kotlin supports local functions, i.e. it allows you to put a function inside a function."
date: "2018-06-12"
author: Marcos Placona
header:
    og_image: assets/images/screenshots/local-functions-in-kotlin.png
---

```kotlin
fun accumulate(number: Int): Int {
    var givenNumber = number
    fun add() {
        givenNumber++
    }
    for (i in 1..10) {
        add()
    }
    return givenNumber
}

fun calculateBMI(weightInKg: Double, heightInCm: Double): Double {
    fun calculateBMI(weightInKg: Double, heightInCm: Double): Double {
        val heightInMeter = heightInCm / 100
        return weightInKg / (heightInMeter * heightInMeter)
    }

    // Calculate BMI using the nested function
    return calculateBMI(weightInKg, heightInCm)
}

fun main(args: Array<String>) {
    println(accumulate(32))
    // 42

    println(calculateBMI(100.0, 200.0))
    // 25.0
}
```

Local functions can also access local variables of outer functions and help with code reuse.
