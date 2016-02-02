function randomNumber(low, high) {
//	var randomNumbers = [ 23, 10, 5, 3, 4, 1, 103, 27, 82, 2 ];
//	return randomNumbers[i];
	return Math.floor(Math.random() * (high - low)) + low;
}

function shuffle(arr) {

	var i;
	//var shuffledArr = arr;
	var shuffledArr = [];
	for (i = 0; i < arr.length; i++) {
		shuffledArr[i] = arr[i];
	}
	// Fisher-Yates shuffling algorithm
	for (i = arr.length - 1; i >= 1; i--) {
		var j = randomNumber(0, i+1);
		var tmp = shuffledArr[i];
		shuffledArr[i] = shuffledArr[j];
		shuffledArr[j] = tmp;
	}

	return shuffledArr;
}

function putStuff(box) {
	//box.contents = box.contents || [];
	//if (box.contents === undefined) {
	if (!box.contents) {
		box.contents = [];
	}
	for (var i = 0; i < 10; i++) {
		box.contents.push(randomNumber(0, 100));
	}
	return box;
}

var plainBox = {};
//plainBox.contents = [];
putStuff(plainBox);
console.log(plainBox.contents);
console.log(shuffle(plainBox.contents));
console.log(plainBox.contents);

var passengerList = [ 'Jon', 'Jason' ];

var passengerAges = [ 19, 12 ];

function buildPerson(name, age) {
	var person = {};
	person.name = name;
	person.age = age;
	return person;
}

function weRidin(car, names, ages) {

	//car.passengers = car.passengers || [];

	for (var i = 0; i < names.length; i++) {
		var passenger = buildPerson(
			names[i],
			ages[i]);
		car.passengers.push(passenger);
	}

	return car;
}

function displayPassengers(car) {
	for (var i = 0; i < car.passengers.length; i++) {
		var passenger = car.passengers[i];
		console.log(passenger.name + ', age ' +
			passenger.age + ', is riding dirty!');
	}
}

var myCar = {
	model: 'Chevy',
	year: 2010,
	passengers: []
};

weRidin(myCar, passengerList, passengerAges);

displayPassengers(myCar);























