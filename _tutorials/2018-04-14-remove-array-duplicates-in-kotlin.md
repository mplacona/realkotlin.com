---
title: "Remove array duplicates in Kotlin"
excerpt: "Removing duplicates from arrays usually involves looping through an entire array and creating a new array without duplicates."
date: "2018-04-14"
author: Marcos Placona
header:
    og_image: assets/images/screenshots/remove-array-duplicates-in-kotlin.png
---

```kotlin
fun removeArrayDuplicates(duplicates: Array<String>): Array<String> {
    return Arrays.asList(*duplicates).toSet().toTypedArray()
}

fun main(args: Array<String>) {
    val duplicates = arrayOf("a", "b", "c", "a", "c")
    println(Arrays.toString(removeArrayDuplicates(duplicates)))
    // [a, b, c]
}
```

A `Set` is a collection that contains no duplicate events, so converting an array to a Set will get rid of all the duplicates.
