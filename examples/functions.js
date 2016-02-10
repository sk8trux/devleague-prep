// variables
var cheese;
var numPeople;

// logic
cheese = 'parmesan';
numPeople = 6;
cookPasta('fettuccine');
makeSalad(5, true, chopNicely);


// functions

function chopNicely(size, numWholes) {
  console.log('Chopped ' + size + ' nice pieces from ' + numWholes + ' wholes.'); 
}

function chopSloppy(size, numWholes) {
  console.log('Chopped ' + size + ' sloppy pieces from ' + numWholes + ' wholes.'); 
}

function cookPasta(type) {
  
  // variables
  var numCupsOfWater;

  // logic
  numCupsOfWater = 2 * numPeople;
  boilWater();

  console.log('Made ' + type + ' pasta with ' + numCupsOfWater + ' cups of water and ' + cheese + ' on top.');

  return 0;

  // helper functions

  function boilWater() {
    console.log('Boiling ' + numCupsOfWater + ' cups of water...');
  }
}

function makeSalad(numPeople, useCroutons, chop) {
  
  var numLettuceLeafs;
  var numCupsOfChoppedLettuce;

  numLettuceLeafs = numPeople * 4;

  numCupsOfChoppedLettuce = chop('large', numLettuceLeafs); //chopLettuce();

  console.log('Made ' + numCupsOfChoppedLettuce + ' cups of lettuce');
  console.log('Did I use croutons?', useCroutons);

  /*function chopLettuce() {
    return numLettuceLeafs * 0.5;
  }*/
  
}


