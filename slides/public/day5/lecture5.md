# Agenda

* Review
* `!`, `&&`, and `||`
* `while` and `break`
* `else if`
* closures
* oh-my-zsh
* github cleanup
* Exercises 1
* `Object`
* Exercises 2

---

# Review

You tell me...

Questions (*I love questions*)

---

# `!`, `&&`, and `||`

* NOT
* AND
* OR

> N.B. left-to-right short circuiting

---

# Falsy review

* `''` (type: `string`)
* `null` (type: `Object`)
* `0` (type: `number`)
* `NaN` (type: `number`)
* `false` (type: `boolean`)
* `undefined` (type: `undefined`)

> N.B. `[]` is NOT false... `Array` is actually an `Object`, so its "falsy" value is `null`

---

# Using `||` to avoid undefined values


---

# `while` and `break`

> Lesser known cousins `do...while` and `continue`

---

# `else if`

Mention `if` and `else` without curly braces
Mention to never do this except for `else if`
Maybe `break` is okay if on the same line...

---

# Closures

Key points:
* `var` is function scoped
* avoid global scope as much as possible
* Nested `functions`

> N.B. Variables are only resolved when their values are needed
  e.g. clojures inside loops

---

# oh-my-zsh

Mac Only

> Windows already has the full path with colors... Thanks, Git Bash :)

* bureau theme

## Why?

* Better visualization of the current directory

## Navigating review

* `..`
* `/`
* tab completion

---

# github cleanup



---

# `function` and `for` rewrite

* Use closures and while-loops instead of for-loops and arguments...

---

# Objects

Two uses:
1. Record of structured data
2. Index of key-value pairs

# Object Creation Syntax

Syntax:
```
var myObject =
{ keyOfNumber: 3,
  keyOfBoolean: true,
  'key-of-string': 'str',
  keyOfObject: { key5: 'nested'},
  keyOfArray: [ 0, 1 ] }
```



---

# Environment Variables review

process.env is just an Object...

---

# Properties and member functions

e.g. `string:split` on Path

> N.B. Nested functions are not members

