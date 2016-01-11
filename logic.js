function youGetTaco(action) {
	var eat = 'eat';
	if (action === eat) {
		return 'EAT TACOS';
	} else {
		return ':\'(';
	}
}

var myAction = 'eat';
var myActionResult = youGetTaco(myAction);
console.log('1. youGetTaco', myAction, myActionResult);

var myOtherAction = 'drink';
var myOtherActionResult = youGetTaco(myOtherAction);
console.log('1. youGetTaco', myOtherAction, myOtherActionResult);

// word is a string
function createArrayFromString(word) {
  var wordCharsSansA = [];
  for (var i = 0; i < word.length; i++) {
  	var ithChar = word[i];
  	if (ithChar !== 'a') {
  		wordCharsSansA.push(ithChar);
  	}
  }
  return wordCharsSansA;
}

var words = [ 'Tomato', 'Pizza', 'Happy' ];
for (var j = 0; j < words.length; j++) {
	var jthWord = words[j];
	var wordResult = createArrayFromString(jthWord);
	console.log(jthWord, wordResult);
}

var word1 = 'Tomato';
var word1Result = createArrayFromString(word1);
console.log(word1, word1Result);

var word2 = 'Pizza';
var word2Result = createArrayFromString(word2);
console.log(word2, word2Result);

var word3 = 'Happy';
var word3Result = createArrayFromString(word3);
console.log(word3, word3Result);























