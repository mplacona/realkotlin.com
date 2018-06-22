---
title: "Calling Multiple Methods in Kotlin"
excerpt: "Kotlin lets you call multiple methods on the same object."
date: "2018-07-05"
author: Marcos Placona
header:
    og_image: assets/images/screenshots/calling-multiple-methods-in-kotlin.png
---

```kotlin
class StringParser(var string: String) {
    fun removeHTMLTags(): String {
        string = Regex("<[^>]*>").replace(string, "")
        return string
    }

    fun removeSpecialCharacters(): String {
        string = Regex("[^A-Za-z0-9 ]").replace(string, "")
        return string
    }

    fun removeLeadingAndTrailingSpaces(): String {
        return string.trim()
    }
}

fun main(args: Array<String>) {
    val htmlString = """
        <html>
            <header><title>This is a title</title></header>
            <body>
                Hello world!!!
            </body>
        </html>
    """.trimIndent()
    val stringParser = StringParser(htmlString)

    val response = with(stringParser) {
        removeHTMLTags()
        removeSpecialCharacters()
        removeLeadingAndTrailingSpaces()
    }

    println(response)
    // This is a title            Hello world
}
```

Using `with` you can chain all the method calls in the object instance and have it return the result of the last expression.
