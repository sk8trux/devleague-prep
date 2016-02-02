/*var myObject = {
	keyOfNumber: 3,
    keyOfBoolean: true,
    'key-of-string': 'str',
    keyOfObject: { key5: 'nested'},
    keyOfArray: [ 0, 1 ]
};*/

//console.log(myObject.keyOfNumber);
//console.log(myObject['keyOfNumber']);

//console.log(myObject['key-of-string']);

function myLog(x) {
	console.log(x);
}

var myObject = {
	myMethod: myLog
};

myObject.myMethod('hi');


var myMap = {};

function addToMap(map, key, value) {
map[key] = value;  // NOT map.key!!!!! (map['key'])
}

var myKey = 'somestring';
var myValue = 27;

addToMap(myMap, myKey, myValue);
console.log(myMap);


for (var key in process.env) {
    /*if (key === 'PATH') {
        var isWin = /^win/.test(process.platform);
        var delimeter = isWin ? ';' : ':';
        var pathElems = process.env.PATH.split(delimeter);
        for (var k = 0; k < pathElems.length; k++) {
            console.log(key, k, pathElems[k]);
        }
    } else {*/
        

       			 console.log(key, process.env[key]);
       console.log('hi');
    //}
}


var orders = [];
for(var i = 0; i < orders.length; i++) {
	var order = orders[i];
	console.log('=====');
	console.log('id:', order.id);
	console.log('purchase date:', order.date);
}

function randomNumber(low, high) {
	return Math.random() * (high - low) + low;
}

var myArr = [];
for (var j = 0; j < 10; j++) {
	myArr.push(randomNumber(5, 20));
}

var obj = {
	objArr: []
}

var myArr1 = [1, 2, 3];
var myArr2 = ['hi', 'bye', ':('];

for (var k = 0; k < 3; k++) {
	var passenger = {
		num: myArr1[i],
		str: myArr2[i]
	};
	obj.objArr.push(passenger);
}



var myMap = {};
myMap.add = function (key, value) {
	myMap[key] = value;
	return myMap;
}

myMap.add('a', 5).add('b', 6);
console.log(myMap);















