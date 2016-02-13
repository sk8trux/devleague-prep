//variables
var action;
var number;
var word;

//logic
action = 'eat';
first = true;
second = false;
word =  createArrayFromString('Welcome to Paradise');


console.log('1.', youGetTaco());
console.log('2.', isNumberGreaterThan(2, 9));
console.log('3.', isTrue(isNumberSmallerThan(2, 9)));
console.log('4.', isFalse(isNumberGreaterThan(2, 9)));
console.log('5.', isEqual( 3, 3));
console.log('6.', isNotEqual( 23, 32));
console.log('7.', doubleEquals(true, false));
console.log('8.', totalOver30 ( 3, 7, 13));
console.log('9.', totalUnderWhat ( 5, 13, 23, 45));
console.log('10.');
loopToNumber (23);
console.log('11.');
showEachValue (['a','s','d','t']);
console.log('12.');
console.log(word);
//functions
function youGetTaco(){
	if (action === 'eat'){
		return 'EAT TACOS';
	}
}
function isNumberGreaterThan(first, second){
	if (first > second){
		return true;
	} else {
		return false;
	}
}
function isNumberSmallerThan(first, second){
	if (first < second) {
		return true;
	} else {
		return false;
	}
}
function isTrue(myVal){
	if (myVal) {
		return true;
	} else {
		return false;
	}
}
function isFalse(myVal){
	if (myVal) {
		return true;
	} else {
		return false;
	}
}
function isEqual(firstWord, secondWord){
	if (firstWord === secondWord) {
		return 'AWWWWRIGHT';
	} else {
		return 'Y U NO MATCH!';
	}
}
function isNotEqual(firstWord, secondWord){
	if (firstWord !== secondWord){
		return "AWWWWRIGHT";
	} else {
		return 'Y U MATCH!';
	}
}
function doubleEquals( first, second){
	if ( first === second){
		return true;
	} else {
		return false;
	}
}
function totalOver30(first, seocnd, third){
	if (first + second + third > 30){
		return true;
	} else {
		return false;
	}
}
function totalUnderWhat(first, second, third, fourth){
	if (first + second + third < fourth){
		return true;
	} else {
		return false;
	}
}
function loopToNumber(limit){
	for ( var i = 0; i < limit; i++){
		console.log(i);
	} 
}
function showEachValue(characters){
	for (var i = 0; i < characters.length; i++){
		console.log(characters[i]);
	}
}
function createArrayFromString(word){
	var i;
	var ithChar;
	var array;

	array = [];
	for (i = 0; i < word.length; i++){
		ithChar = word[i];
		if (ithChar !== 'a') {
			array.push(ithChar);
		}
	} 
	return array;
}