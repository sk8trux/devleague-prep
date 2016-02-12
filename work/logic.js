//variables
var action;
var number;


//logic
action = 'eat';
console.log('1.', youGetTaco());
console.log('2.', isNumberGreaterThan(2, 9));
console.log('3.', isTrue(isNumberSmallerThan(2, 9)));
console.log('4.', isFalse(isNumberGreaterThan(2, 9)));
console.log('5.', isEqual( 3, 3));
//functions
function youGetTaco(){
	if (action === 'eat'){
		return 'EAT TACOS';
	}
}
function isNumberGreaterThan(first, second){
	if (first > second){
		return true
	} else {
		return false
	}
}
function isNumberSmallerThan(first, second){
	if (first < second) {
		return true
	} else {
		return false
	}
}
function isTrue(myVal){
	if (myVal) {
		return true
	} else {
		return false
	}
}
function isFalse(myVal){
	if (myVal) {
		return true
	} else {
		return false
	}
}
function isEqual(firstWord, secondWord){
	if (firstWord === secondWord) {
		return 'AWWWWRIGHT'
	} else {
		return 'Y U NO MATCH!'
	}
}