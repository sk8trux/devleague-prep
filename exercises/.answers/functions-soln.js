/*
 * ====Functions====
 *
 * Functions are great, they take data (input), do stuff with that data and then
 * return it to you all shiny and fancy (output).
 *
 * Below are some specifications for Functions to be built.
 */

/* ==== Declare variables here ==== */

var a;
var b;
var c;
var sum;
var difference;
var product;
var footballResult;
var howMany;
var myFirstName;
var myLastName;
var myFullName;

/* ==== END variable declarations === */

/*
 * Declare Two Variables
 *
 * a random Number value
 * b random Number value
 * We will be using both of these variables to pass as parameters to the
 * following functions that we will write. Pay close attention to the other
 * variable names you will create as they will become input to other functions.
 */

a = 52;
b = 27;
console.log('a:', a);
console.log('b:', b);

/*
 * Function - add
 *
 * Pretend you have a function called 'add'.
 * Call this function, passing 'a' and 'b' as arguments.
 * Store the resulting value into a new variable named 'sum'.
 * (Remember to declare sum at the top of the file.)
 * Use the console.log function to print out the sum.
 *
 * At the bottom of the file, create a function called 'add' that has two
 * parameters named 'x' and 'y'.
 *
 * Have the function return the result of adding its parameters together.
 */

sum = add(a, b);
console.log('sum:', sum);

/*
 * Function - subtract
 *
 * Repeat the steps for 'add', except:
 * - name the variable 'difference'
 * - name the function 'subtract'
 * - return the result of subtracting the second parameter from the first
 */

difference = subtract(a, b);
console.log('difference:', difference);


/*
 * Function - multiply
 *
 * Repeat the steps for 'add', except:
 * - name the variable 'product'
 * - name the function 'multiply'
 * - return the result of multiplying the two parameters together
 */

product = multiply(a, b);
console.log('product:', product);


/*
 * Function - checkFootballResult
 *
 * Pretend you have a function named 'checkFootballResult'.
 * Call this function, passing 'difference' as the argument.
 * Store the resulting value into a new variable named 'footballResult'.
 * (Remember to declare new variables at the top of the file.)
 * Use the console.log function to print out 'footballResult'.
 *
 * At the bottom of the file, create a function called 'checkFootballResult'
 * that has a single parameter named 'numTimesLost'.
 *
 * Have the function return the string "My football team lost X times this
 * week", where X is the value stored in 'numTimesLost'.
 */

footballResult = checkFootballResult(difference);
console.log('footballResult:', footballResult);

/*
 * Function - checkSum
 *
 * Pretend you have a function named 'checkSum'.
 * Call this function, passing no arguments.
 *
 * At the bottom of the file, create a function called 'checkSum'
 * that has no parameters.
 *
 * This function uses console.log to print to the screen the phrase
 * "I CAN ADDZ NUMBERS TO MAKE X" where X is the value stored in
 * the variable sum.
 *
 * (Remember functions can still "see" variables from the scope that defined
 * them.)
 *
 * There is no return value (i.e. the return value is undefined).
 */

checkSum();

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

c = 11;
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

howMany = addThenMultiply(1, 2, 3);
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

myFirstName = 'Marty';
myLastName = 'McFly';
myFullName = createFullName(myFirstName, myLastName);

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
console.log('\nverifyDrinkingAge', 22, '->', verifyDrinkingAge(22));

console.log('\nverifyDrinkingAge', 21, '->', verifyDrinkingAge(21));

console.log('\nverifyDrinkingAge', 20, '->', verifyDrinkingAge(20));


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

/* ==== Declare functions here ==== */

function add(x, y) {
  return x + y;
}

function subtract(s, t) {
  return s - t;
}

function multiply(r, q) {
  return r * q;
}

function addThenSubtract(m, n, o) {
  return subtract(add(m, n), o);
}

function addThenMultiply(f, g, h) {
  return multiply(add(f, g), h);
}

function checkFootballResult(numTimesLost) {
    return 'My football team lost ' + numTimesLost + ' times this week';
}

function checkSum() {
    console.log('I CAN ADDZ NUMBERS TO MAKE ' + sum);
}
