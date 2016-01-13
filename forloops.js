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

// #2


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


var a = 4;
console.log('a', a);  // -> a 4

var b = a++;
// var b = a;
// a = a + 1;

console.log('a after first', a);  // -> a after first 5
console.log('b', b);  // -> b 4

var c = ++a;
// a = a + 1;
// var c = a;

a += 1;


console.log('a after second', a);
console.log('c', c);




console.log('number 3...');


var evenNumberArray = [];
for (var j = 1; j < 99; j++) {
	if (j % 2 === 0) {
		evenNumberArray.push(j);
	}
}

console.log(evenNumberArray);

var myOopsArray = [ 'turn', ,'down', ,'for', , 'what' ];

function doOopsArray(oopsArray) {
	console.log('oopsArray', oopsArray.length, oopsArray);

	//for (var k = 0; k < oopsArray.length; k++) {
	var k = 0;
	while (true) {

		console.log(k, oopsArray[k]);	
		if (k >= oopsArray.length) break;

		if (k % 2 === 1) {
		//if (!oopsArray[k]) {
			oopsArray[k] = 'nope';	
			console.log('adding nope to', k);
		}
		k++;
	}

	console.log('oopsArray', oopsArray.length, oopsArray);
}

doOopsArray(myOopsArray);


var myGreeting = 'bye';
if (myGreeting === 'hi') {
	console.log('myGreeting was hi!!!!');
	myGreeting += '!';
} else if (myGreeting === 'hello') {
	myGreeting += '!!';
}

console.log(myGreeting);









































