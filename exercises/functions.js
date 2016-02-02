/*
 * ====Functions====
 *
 * Functions are great, they take data (input), do stuff with that data and then
 * return it to you all shiny and fancy (output).
 *
 * Below are some specifications for Functions to be built.
 */

/*
 * Declare Two Variables
 *
 * a random Number value
 * b random Number value
 * We will be using both of these variables to pass as parameters to the
 * following functions that we will write. Pay close attention to the other
 * variable names you will create as they will become input to other functions.
 */

var a = 52;
var b = 27;
console.log('a: ' + a);
console.log('b: ' + b);

/*
 * Function - add
 * This function returns the result of adding a and b together. Store this
 * value in a variable named sum.
 */
function add(x, y) {
    return x + y;
}

var sum = add(a, b);
console.log('\nsum: ' + sum);


/*
 * Function - subtract
 * This function returns the result of subtracting b from a Store this value in
 * a variable named difference.
 */
function subtract(x, y) {
    return x - y;
}

var difference = subtract(a, b);
difference = subtract(a, b);
console.log('\ndifference: ' + difference);


/*
 * Function - multiply
 * This function returns the result of multiplying b by a. Store this value in a
 * variable named product.
 */
function multiply(x, y) {
    return x * y;
}

var product = multiply(a, b);
console.log('\nproduct: ' + product);


/*
 * Function - checkDifference
 * This function accesses the value stored in the difference variable and uses
 * this number to return the string "My football team lost X times this week",
 * where X is the value stored in difference.
 */
function checkDifference(numTimesLost) {
    return 'My football team lost ' + numTimesLost + ' times this week';
}

console.log('\ncheckDifference:');

// N.B. Return values can be passed directly to other functions
var asdf;
asdf = checkDifference(difference);
console.log(checkDifference(difference));

/*
 * Function - checkSum
 * This function checks the value stored at sum and uses that number to print to
 * the screen the phrase "I CAN ADDZ X NUMBERS" where X is the value stored in
 * the variable sum .
 */
function checkSum(x) {
    console.log('I CAN ADDZ ' + (2 * x) + ' NUMBERS');
    return 4 * x;
}

checkSumRp = function(x) {
    return 6 * x;
};
console.log('\ncheckSum:');
checkSumRp(sum);
checkSum(sum);

/*
 * Function - checkProduct
 * This function checks the value stored at product and multiplies it by the number stored at difference and then prints the result to the console.
 */
function checkProduct(x) {
    // N.B. Functions can access variables defined outside of them!
    console.log(x * difference);
}

console.log('\ncheckProduct:');
checkProduct(product);

/*
 * Function - addThenSubtract
 *
 * This function takes three Number arguments named by you, then adds the first
 * two arguments together. Then with the sum of that operation, subtract the
 * value at the third argument.
 *
 * This function should make use of your previous functions.
 *
 * example: addThenSubtract(4, 5, 7); //-> returns 2 because 4 + 5 - 7 = 2
 */
function addThenSubtract(x, y, z) {
    return subtract(add(x, y), z);
}

var c = 11;
console.log('\naddThenSubtract', a, b, c, '->', addThenSubtract(a, b, c));

/*
 * Function - addThenMultiply
 * This function takes three Number arguments named by you, then adds the first
 * two arguments together. Then with the sum of that operation multiply it by
 * the third argument. This function also should make use of your previous
 * functions.
 *
 * Store the return of this function to a variable named howMany
 */
function addThenMultiply(first, second, third) {
    return multiply(add(first, second), third);
}

var howMany = addThenMultiply(1, 2, 3);
console.log('\naddThenMultiply', 1, 2, 3, '->', howMany);

/*
 * Function - createFullName
 * @param Datatype: String firstName
 * @param Datatype: String lastName
 * @return Datatype: String
 *
 * This function takes two String arguments firstName and lastName. This
 * function returns back a string which represents someone's full name.
 *
 * Call this function and pass your first and last name into it. Store the
 * return value to a variable named myFullName
 */
function createFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

var myFirstName = 'Marty';
var myLastName = 'McFly';
var myFullName = createFullName(myFirstName, myLastName);

// log to test...
// N.B. console.log can take a list and puts a space between value
console.log('\ncreateFullName "' + myFirstName + '" "' + myLastName + '" -> "' + myFullName + '"');

/*
 * Function - verifyDrinkingAge
 * @param Datatype: Number age
 * @return Datatype: Boolean
 *
 * This function takes one Number argument age. This function returns the
 * Boolean value true or false if age is lower than the legal drinking age
 * in the state of Hawaii.
 *
 * Call this function and pass in a number value. Store the return value to a
 * variable named canDrinkBeer
 */
function verifyDrinkingAge(age) {
    return age >= 21;
}

var someonesAge = 22;
var canDrinkBeer = verifyDrinkingAge(someonesAge);

// log to test...
console.log('\nverifyDrinkingAge', someonesAge, '->', canDrinkBeer);

someonesAge -= 1;
canDrinkBeer = verifyDrinkingAge(someonesAge);
console.log('\nverifyDrinkingAge', someonesAge, '->', canDrinkBeer);

someonesAge -= 1;
canDrinkBeer = verifyDrinkingAge(someonesAge);
console.log('\nverifyDrinkingAge', someonesAge, '->', canDrinkBeer);


/*
 * Function - throwParty
 * This function checks the value stored at the canDrinkBeer variable and if
 * the value is false it should print to a message to the screen, "The Party
 * will have tons of Cake!" otherwise this message should be "This Party will
 * have an open bar".
 */
function throwParty(oldEnough) {
    if (oldEnough) {
        console.log('This Party will have an open bar');
    } else {
        console.log('The Party will have tons of Cake!');
    }
    return oldEnough;
}

console.log('\nthrowParty ' + canDrinkBeer + ':');
throwParty(canDrinkBeer);

canDrinkBeer = true;
console.log('\nthrowParty ' + canDrinkBeer + ':');

var throwPartyResult;
throwPartyResult = throwParty(canDrinkBeer);

canDrinkBeer = 'hi';

/*
 * Function - eatFood
 *
 * This function takes 3 arguments firstName, lastName, food and prints out a
 * message to your screen. Internally this function will make use of the
 * createFullName function you created earlier.
 *
 *
 * example 1.
 *
 * call: eatFood( "John", "Papa", "Pizza" )
 *
 *
 * example 2.
 *
 * call: eatFood( "Peter", "Bojangles", "California Burritos" )
 *
 * output: "Peter Bojanglesloves loves to eat California Burritos"
 */
function eatFood(firstName, lastName, food) {
    var fullName = createFullName(firstName, lastName);
    console.log(fullName + ' loves to eat ' + food + '!');
}

console.log('\neatFood:');
eatFood('Mark', 'Egesdal', 'pizza');

/*
 * Function - repeater
 *
 * This function will print to the screen X amount of times. Where X is the
 * value stored at howMany. Inside of this function it will check if the value
 * of canDrinkBeer, if the value is true the message will be "Bacon Pancakes,
 * makin' Bacon Pancakes..." othewise the message will be "Let it go.... LET IT
 * GOOOOOOoOoOoOo..."
 */
function repeater(timesToRepeat, oldEnough) {
    for (var i = 0; i < timesToRepeat; i++) {
        if (oldEnough) {
            console.log('Bacon Pancakes, makin\' Bacon Pancakes');
        } else {
            console.log('Let it go.... LET IT GOOOOOOoOoOoOo...');
        }
    }
}

console.log('\nrepeater ' + howMany + ' ' + canDrinkBeer + ':');
repeater(howMany, canDrinkBeer);

canDrinkBeer = false;
console.log('\nrepeater ' + howMany + ' ' + canDrinkBeer + ':');
repeater(howMany, canDrinkBeer);