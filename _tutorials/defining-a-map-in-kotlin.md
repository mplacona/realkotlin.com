---
title: "Defining a map in Kotlin"
excerpt: "No need for explicitly defining generic types and no repetitive `put` or assignment to define maps."
author: Marcos Placona
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
}
```

From time to time, there is a need to define a hardcoded `Map`. There are several ways to do them in Java, but nothing gets closer to the beauty of Kotlin.
