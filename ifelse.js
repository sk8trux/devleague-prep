// Falsy examples

// 1. false
// 2. 0
// 3. '' (empty string)
// 4. null
// 5. undefined
// 6. NaN
var notTrue = 10 +'hi';
if (notTrue) {
  console.log('aaaaaahhh!!!! what happened?!?!?!', notTrue);
} else {
  console.log('Falsy... whew', notTrue);
}

var myName = 'mark';
for (var i = 0; i < myName.length; i++)
{
console.log(myName[i]);
		//console.log(myName.charAt(i))
	} var a = 'huh?';