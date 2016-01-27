function doPrint() {
	console.log(this.myString);
}

var myObject = {

  myString: 'hello',

  registerCallback: function(element) {

  	element.addEventListener('click', function() {
  		console.log(this.myString);
  	});

  }
};

var myOtherObject = {

	myString: 'goodbye',
	print: doPrint
};

myObject.print();
myOtherObject.print();
doPrint();
