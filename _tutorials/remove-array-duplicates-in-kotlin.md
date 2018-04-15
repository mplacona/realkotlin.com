---
title: "Remove array duplicates in Kotlin"
excerpt: "Removing duplicates from arrays usually involves looping through an entire array and creating a new array without duplicates"
author: Marcos Placona
---

```kotlin
import java.util.*

fun removeArrayDuplicates(duplicates: Array<String>): Array<String> {
    return Arrays.asList(*duplicates).toSet().toTypedArray()
}

fun main(args: Array<String>) {
    val duplicates = arrayOf("a", "b", "c", "a", "c")
    println(Arrays.toString(removeArrayDuplicates(duplicates)))
}
```

A `Set` is a collection that contains no duplicate events, so converting an array to a Set will get rid of all the duplicates.
