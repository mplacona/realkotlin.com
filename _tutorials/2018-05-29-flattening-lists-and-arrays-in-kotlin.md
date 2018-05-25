---
title: "Flattening Lists and Arrays in Kotlin"
excerpt: "With the `flatten` method in Kotlin, you can turn a list of lists and array of arrays into a single list of all elements."
date: "2018-05-29"
author: Marcos Placona
header:
    og_image: assets/images/screenshots/flattening-lists-and-arrays-in-kotlin.png
---

```kotlin
fun simpleFlattenedList(list: List<List<Any>>): List<Any> {
    return list.flatten()
}

fun flattenedArray(array: Array<Array<Int>>): List<Int> {
    return array.flatten()
}

fun main(args: Array<String>) {
    println(simpleFlattenedList(listOf(listOf(1, 2, 3), listOf("one", "two", "three"))))
    // [1, 2, 3, one, two, three]

    println(flattenedArray(arrayOf(arrayOf(1), arrayOf(2, 3), arrayOf(4, 5))))
    // [1, 2, 3, 4, 5]
}
```

When `flatten` is called on a `List` or `Array`, a new list is created and every value on the passed argument is iterated over once and added into a new flat `List`.
