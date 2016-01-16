/*
Getting Loopy
For loops are great for:

Iterating through an Array to access values within

or running a set of instructions over and over again for a set amount of times, executing functions or one-off code.

or any/all combinations of the above.
*/

//Exercises

/*
Presidents - Accessing values in an Array

Declare a variable named presidents which contains the first 5 presidents' last names: Washington, Adams, Jefferson, Madison, Monroe.

Now write a FOR loop which iterates through this Array.

Within the FOR loop, use console.log to:

Log the value of i. Use a message like Value of i is: and append the value of i to this String
Log what is at index i in the array. Use a message like Value at Index is: and append the value stored within the Array at that index.
console.log is a great tool to give you feed back about your loops and the data that you're working with. When all else fails use console.log to inspect and debug your code.

Example:

example-1

bonus: could you take the code inside of this FOR loop and encapsulate it inside of a function called printContent and still achieve the same result? This new function should accept two parameters.
*/

var presidents = ['Washington', 'Adams', 'Jefferson', 'Madison', 'Monroe'];

function printContent(i) {
    console.log('Value of i is: ' + i);
    console.log('Value at Index is: ' + presidents[i]);
}

function printPresidents() {
    for (var i = 0; i < presidents.length; i++) {
        //printContent(presidents, i);
        printContent(i);
    }
}

printPresidents();


/*
The String of Numbers

Declare a variable named stringOfNumbers and set it's value to '' (an empty String).

Then write a FOR loop that appends a Number value to that string starting from 10 all the way up to and including 20.

After the FOR loop, use console.log to inspect your variable. In the end your String should look like this 1011121314151617181920

bonus: could you take the code inside of this FOR loop and encapsulate it inside of a function called appendToString and still achieve the same result?
*/

function createStringOfNumbers(start, end) {

    var stringOfNumbers = '';

    function appendToString(stringToAppend) {
        presidents.push('Hamilton');
        stringOfNumbers += stringToAppend;
    }

    for (var i = start; i <= end; ++i) {
        appendToString(i);
    }
    return stringOfNumbers;
}

var myStringOfNumbers = createStringOfNumbers(10, 21);
console.log(myStringOfNumbers);


/*
Add only even numbrs to an array

Declare a variable named evenNumberArray.

Use a FOR loop to add only even numbers to an Array. Add 50 even numbers to the evenNumberArray starting with the value 0.
*/

var evenNumberArray = [];

for (var j = 0; j < 99; j++) {
    if (j % 2 === 0) {
        evenNumberArray.push(j);
    }
}

console.log(evenNumberArray);

/*
Accessing only the odd indexes of an Array - 'Not Even Brah'

Someone forgot to fill out this array! Oh noes...

Declare a new variable named oopsArray set it's value to be: [ 'turn' , , 'down' , , 'for' , , 'what' ]

using a FOR loop, add the string 'nope' to every odd index.

Example result should look like:

`[ 'turn' , 'nope' , 'down' , 'nope' , 'for' , 'nope' , 'what' ]`
*/

var oopsArray = ['turn', , 'down', , 'for', , 'what'];

for (var k = 0; k < oopsArray.length; k++) {
    if (k % 2 === 1) {
    //OR using falsy-ness of empty elems: if (!oopsArray[k]) {
        oopsArray[k] = 'nope';
        console.log('adding nope to', k);
    }
}

console.log('oopsArray', oopsArray.length, oopsArray);


/*
Going backwards?!

Using a FOR loop, iterate through the Array stored at oopsArray backwards. console.log each value in the Array.

example output:

what
nope
for
nope
down
nope
turn
*/

for (var k = oopsArray.length - 1; k >= 0; k--) {
    console.log(oopsArray[k]);
}

/*

isNapTime

Declare a variable named isNapTime. Set it to false

Declare a variable named napSchedule. Set it's value to be an Array with the values [false, false, true, false, true, true]

Declare a function named nap. This function takes in a single parameter called schedule

  - If schedule is true then use console.log to display the message 'ZzZzZzZz'

  - otherwise if schedule is false use console.log to display the message 'Gotta get to work!' and then change the value of isNapTime to true

Now, Write a FOR loop that iterates through the napSchedule array and runs the function nap while passing in the value at the current position of napSchedule into the nap function.
*/
var isNapTime = false;
var napSchedule = [false, false, true, false, true, true];

function nap(schedule) {
    if (schedule) {
        console.log('ZzZzZzZz');
    } else {
        console.log('Gotta get to work!');
        isNapTime = true;
    }
}

for (var p = 0; p < napSchedule.length; p++) {
    nap(napSchedule[p]);
}

/*
CopyArray - clone array values

Declare a variable named copyOfValuesArray and set it's value to be an empty array, [].

Declare a variable named valuesArray and set it's value to be an array, [99, 66, 829, 1941, 8, 76].

Declare a function named copyArray which takes two arguments: originArray and destinationArray. Inside of this function you will loop through the contents of originArray and push each value into destinationArray.

To get started, below your function declaration, call your function and pass in the two variables, valuesArray and copyOfValuesArray. After that, use console.log to to inspect the values of valuesArray and copyOfValuesArray to make sure they have the same values (which means your function worked!).
*/

var copyOfValuesArray = [];
var valuesArray = [ 99, 66, 829, 1941, 8, 76 ];

function copyArray(originArray, destinationArray) {
    for (var i = 0; i < originArray.length; i++) {
        destinationArray.push(originArray[i]);
    }
    return destinationArray;
}

copyArray(valuesArray, copyOfValuesArray);
console.log(valuesArray);
console.log(copyOfValuesArray);

/*

Final Boss: Stage 1 - Only String Values

Declare a variable named miscStorage set it's value to be: [ [], 'Carrots', 9, 'Beets', {}, {name: "Todd B."}, 'Mush' ]

Declare a function named generateArrayOfStrings which takes a single argument storage. This function returns a new Array with only String values inside of it.
*/

var miscStorage = [ [], 'Carrots', 9, 'Beets', {}, {name: "Todd B."}, 'Mush' ];

function generateArrayOfStrings(storage) {
    var strStorage = [];
    for (var i = 0; i < storage.length; i++) {
        var storedValue = storage[i];
        if (typeof(storedValue) === 'string') {
            strStorage.push(storedValue);
        }
    }
    return strStorage;
}

console.log(generateArrayOfStrings(miscStorage));

/*

Final Boss: Final Form - Change values of objects stored within an Array

It's that time again, we need to graduate the current class of students and start enrollment for the next class.

Declare a variable named currentClass and set it's value to be this array found here.

Declare a function named graduateAndSetNewClass, it takes a single argument called class.

Your function will iterate through the class argument and check each student's enrolled property.

If the enrolled property is set to true then change that student's graduated property to true. Otherwise, if enrolled is set to false then change enrolled to true leaving graduated alone and unchanged.
*/

var currentClass = [
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

function graduateAndSetNewClass(graduatingClass) {
    for (var i = 0; i < graduatingClass.length; i++) {
        var student = graduatingClass[i];
        if (student.enrolled) {
            student.graduated = true;
        } else {
            student.enrolled = true;
        }
    }
}

console.log(currentClass);
graduateAndSetNewClass(currentClass);
console.log(currentClass); // <-- notice the changes
