---
title: "Multiline String Literals in Kotlin"
excerpt: "Multiline String Literals in Java have always been clumsy and full of + operators for line-breaks."
date: "2018-06-26"
author: Marcos Placona
header:
    og_image: assets/images/screenshots/multiline-string-literals-in-kotlin.png
---

```kotlin
fun indentedStringLiteral() =
    """
        First Line
        Second Line
        Third Line
    """

fun unindentedStringLiteral() =
    """
        First Line
        Second Line
        Third Line
    """.trimIndent()


fun main(args: Array<String>) {
    println(indentedStringLiteral())
    //         First line
    //        Second Line
    println(unindentedStringLiteral())
    //First line
    //Second Line
    //Third line
}
```

In Kotlin you just have to define multiline strings in triple quotes and even get rid of indents.
