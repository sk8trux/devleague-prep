var a = 5;
var b = 3;

function add(x, y) {
	return x + y;
}

var sum = add(a, b);
console.log('add: ' + sum);

function subtract(x, y) {
	return x - y;
}

console.log('sub: ' + subtract(a, b));

function verifyDrinkingAge(age) {
	return age >= 21;
}

var someonesAge = 22;
var canDrinkBeer = verifyDrinkingAge(someonesAge);

function throwParty(oldEnough) {
	if (oldEnough) {
		console.log('This Party will have an open bar');
	} else {
		console.log('The Party will have tons of Cake!');
	}
}

throwParty(canDrinkBeer);

function createFullName(firstName, lastName) {
	return firstName + ' ' + lastName;
}

function eatFood(firstName, lastName, food) {
	var fullName = createFullName(firstName, lastName);
	console.log(fullName + ' loves to eat ' + food + '!');
}

eatFood('Mark', 'Egesdal', 'pizza');


function repeater(howMany, oldEnough) {
	for (var i = 0; i < howMany; i++) {
		if (oldEnough) {
			console.log('yay');
		} else {
			console.log('boo');
		}
	}
}

repeater(10, canDrinkBeer);


