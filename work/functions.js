// variables
var a;
var b;
var sum;
var difference;
var product;
var myFullName;
var firstName;
var lastName;
var canDrinkBeer;
var age;
var canDrinkBeer;
var food;
var howMany;

// logic
a = 7;
b = 9;

 console.log('a',a);
 console.log('b',b);

sum = add(a, b);
difference = subtract(b, a);
product = multiply(a, b);
myFullName = 'firstName' + 'lastName';
firstName = 'Saul';
lastName = ' Bernal';
age = 21;
food = 'Burger';
howMany = 3

console.log('1. add', a, b, sum);
console.log('2. subtract', b, a, difference);
console.log('3. multiply', b, a, product);
console.log('4. ', checkDifference (difference));
console.log('5. ', checkSum (sum));
console.log('6. ', checkProduct (product) * (difference));
console.log('7. ', addThenSubtract ( 4, 7, 9));
console.log('8. ', addThenMultiply ( 2, 8, 6));
console.log('9. ', createFullName (firstName , lastName ));
console.log('10. ', verifyDrinkingAge (age), ', welcome to Paradise' , firstName);
console.log('11. ', throwParty());
console.log('12. ', eatFood(firstName, lastName, food));
console.log('13. ' + firstName + '!', repeater());

// functions
function add(x, y) {
	return x + y;
}
function subtract(x, y) {
	return x - y; 
}
function multiply(x, y) {
	return y * x;
}
function checkDifference(x) {
	return "My football team lost " + x + " times this week";
}
function checkSum(x) {
	return "I can add " + x + " numbers";
}
function checkProduct(x) {
	return x;
}
function addThenSubtract(x, y, z){
	return subtract(add(x, y), z); 
}
function addThenMultiply( x, y, z){
	return multiply(add(x, y), z);
}
function createFullName( x, y){
	return x + y
}
function verifyDrinkingAge(){
	if (age < 21) {
	    return false;
	} else {
		return true;
	}
}
function throwParty(){
	if (canDrinkBeer === false) {
		return "This Party will have tons of Cake!";
	} else {
		return "This Party will have an open bar";
	}
}
function eatFood( firstName, lastName, food){
	return firstName + " " + lastName + " loves to eat " + food
}
function repeater(){
	if (canDrinkBeer === false) {
		return 'Let if go... LET IT GOOOOOOOOooOOoOo...';
	} else {
		return 'Bacon Pancakes, making Bacon Pancakes...';
	}
}
