// variables
var a;
var b;
var sum;
var difference;
var product;
var myFullName;

// logic
a = 7;
b = 9;

 console.log('a',a);
 console.log('b',b);

sum = add(a, b);
difference = subtract(a, b);
product = multiply(a, b);
myFullName = 'firstName' + 'lastName'

console.log('1. add', a, b, sum);
console.log('2. subtract', b, a, difference);
console.log('3. multiply', b, a, product);
console.log('4. ', checkDifference (difference));
console.log('5. ', checkSum (sum));
console.log('6. ', checkProduct (product) * (difference));
console.log('7. ', addThenSubtract ( 4, 7, 9));
console.log('8. ', addThenMultiply ( 2, 8, 6));
console.log('9. ', createFullName ('Saul ', 'Bernal' ));
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