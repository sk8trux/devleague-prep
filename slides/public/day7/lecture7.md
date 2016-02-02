# Agenda

* JavaScript review: Variables vs. Values
* Mutable Values
* Objects Exercises Review
* Data Structure: Tree
* HTML
* DOM
* Web Server with Node

---

# JavaScript Review

## Storing Data: *Values*

* Boolean
* Number
* String
* Object
* Array

## Manipulating Data

* variables (`var`)
* functions
* branching (`if...else`)
* loops (`for` and `while`)

---

# Values vs. variables

* Variables are not values... they "store"/"point to"/"hold" values

* Expressions resolve to values... a function call is an expression, so is '1 + 1' or 'x <= y'... so is a variable by itself

* Functions take in and return *values*... i.e. the values that the variables are holding, not the variables themselves.  In other words the argument expressions must be resolved *before* the function call happens (this is often called 'strict' evaluation)

* Variables are assigned values (using '='), so the RHS must be resolved before the assignment happens

* If you do not capture the return *value* of a function in a variable, it is lost.

---

# What do variables actually hold?

Just a reference to the actual value (i.e. all variables 'share' actual value)

---

# Immutable Values (the 'primitives')

No need worry...

* Boolean
* String
* Number

---

# Mutable Values

Now we can worry...

* Array
* Object

> N.B. Reassignment changes the *variable*, NOT the *value*

---

# Two key things to remember

* What is done by one, is reflected in all

* Reassigning a variable to a new value does not change the value the other variables are "pointing" to

```
function someFn() {
  var myObj = {};	
  modifyObj(myObj);
}

function modifyObj(obj) {
	obj.foo = 'bar';  // <- myObj.foo == 'bar'
	obj = { foo: 'baz' };  // <- myObj still points to { foo: 'bar' }
}
```

---

# Tree

Vocab:

* Nodes
* Single parent
* Many children
* Node with no children is called a "leaf node"

> We have already seen a tree: **The file system**

---

# HTML

(Hypertext Markup Language)

Just a language for a describing a tree, with these characteristics...

Nodes are either:
* Elements
* Text

Elements:
* Have a type from a pre-defined set of HTML types
* Have a set of attributes (set of key-value pairs)
    * Attributes from a pre-defined set of that depends on the element type
* Special style attribute is itself a set of key-value pairs
    * Those keys are also pre-defined
* Have any number of children

Text:
* *cannot* have attributes
* *cannot* have children (i.e. they are always leaf nodes)

Question: how could we model this using JavaScript?

---

# HTML Syntax

```html
<elem attrKey1="attrVal1" attrKey2="attrVal2">
  <!-- children go here (P.S. I am a comment) -->
  <childElem>
    childElem's child text node
  </childElem>
  elem's child text node
</elem>
```

But `elem` and `childElem` are not valid HTML elem types

---

# Actual HTML Syntax

```html
<div id="myDivision" class="myStyle">
  <!-- Comments are actually a special type of node too! -->
  <em>
    Something I want to say boldly!
  </em>
  Something that I am not as bold to say.
</div>
```
> N.B. `id` and `class` are allowed attributes for the `div` element type 

---

# DOM

Document Object Model

(Jason's slides)

Node had `process` and `require`

Browser has `window` and `document`

---

# Node server

1. make a directory in your repo
2. `mkdir public` (make a directory in that repo called public)
3. `subl package.json` (make a file in that directory called package.json and open it for editing)
4. Add an author field (See example) 
5. `npm install --save express`
6. `npm install --save serve-static`
7. Verify package.json has changed
7. Copy server.js file from Slack into that directory

---

# What is package.json?

1. `rm -r node_modules`
2. `npm install` (should add b)

---

# What is node_modules?

1. `subl .gitignore`
2. Add a line that says: `node_modules/`

# What is express and serve-static?

1. Read through it
2. `node server`
3. New terminal window
4. `cd public`
5. subl `index.html`
