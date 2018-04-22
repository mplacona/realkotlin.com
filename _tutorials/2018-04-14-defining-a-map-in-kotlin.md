---
title: "Defining a map in Kotlin"
excerpt: "No need for explicitly defining generic types and no repetitive `put` or assignment to define maps."
date: "2018-04-14"
author: Marcos Placona
header:
    og_image: assets/images/screenshots/defining-a-map-in-kotlin.png
---

```kotlin
fun createImplicitMap(): Map<String, String>{
    return mapOf(
            "keyA" to "valueA",
            "keyB" to "valueB",
            "keyC" to "valueC"
    )
}

fun main(args: Array<String>) {
    println(createImplicitMap())
    // {keyA=valueA, keyB=valueB, keyC=valueC}
}
```

From time to time, there is a need to define a hardcoded `Map`. There are several ways to do them in Java, but nothing gets closer to the beauty of Kotlin.
