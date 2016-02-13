

# Final Boss: Stage 1

***Objective:*** Filter any array by value type

**Given:** The *Array* of miscellaneous values stored in the `miscStorage` variable.

```
miscStorage = [ [], 'Carrots', 9, 'Beets', {}, {name: "Todd B."}, 'Mush' ];
```

**Goal:** Filter out all of the non-*String* values from the *Array*.

**Hint:** Create a function to perform this filtering.
This function should take a single parameter, assumed to be an *Array*.

Have the function return a new *Array* with only the *String* values from the
original *Array*, preserving order.



# Final Boss: Final Form

![final-boss](https://s3.amazonaws.com/uploads.hipchat.com/54891/2015941/zamX8AqbgYw0QJ8/giphy.gif)

***Objective:*** Change values of objects stored within an Array

It's that time again, we need to graduate the current class of students and
start enrollment for the next class.

**Given:** The *Array* of the students in the current class stored in the
`currentClass` variable.  (Students are represented as *Objects*.)

```
currentClass = [
  {
    name: 'Doug',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Pat',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Marsha',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Moira',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Ben',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Nigel the Giraffe',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Brandon the Shark',
    graduated: false,
    enrolled: true
  }
];
```

**Goal:** For each student in the class:
 * If they are enrolled, change their graduated status to `true`
 * Otherwise, change their enrolled status to `true`

**Hint:** Create a function named `graduateAndSetNewClass` to implement this behavior.
This function should take a single argument, assumed to be an *Array* of *Objects*.
Each *Object* in the *Array* is assumed to have the following properties:
 * `name` (*String*)
 * `graduated` (*Boolean*)
 * `enrolled` (*Boolean*)
