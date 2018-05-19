---
title: "Vetoable properties in Kotlin"
excerpt: "Vetoable are delegate properties that allow you to update a property value if a certain condition is matched."
date: "2018-05-22"
author: Marcos Placona
header:
    og_image: assets/images/screenshots/vetoable-properties-in-kotlin.png
---

```kotlin
private var vetoableValue: String by Delegates.vetoable("Real Kotlin") {
    // Will only update if the proposed value starts with an R
    _, _, new -> new.startsWith("R")
}

fun failVetoableCondition(): String {
    vetoableValue = "Won't update"
    return vetoableValue
}

fun passVetoableCondition(): String {
    vetoableValue = "Royal Wedding"
    return vetoableValue
}

fun main(args: Array<String>) {
    println(vetoableValue)
    // Real kotlin

    println(failVetoableCondition())
    // Real Kotlin

    println(passVetoableCondition())
    // Royal Wedding
}
```

The value will only change once we hit a condition set by the property.
