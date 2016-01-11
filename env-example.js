function printPathNTimes(howMany) {
	var i;
	console.log('hi', i);
	for (i = 0; i < howMany; i++) {
 	 console.log(process.env.PATH);
	}
}

printPathNTimes(10);