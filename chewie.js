var starWarsMovies =
[ 
  { 
    title: 'A New Hope',
    episode: 4,
    year: 1977,
    director: 'George Lucas'
  },
  { 
    title: 'The Empire Strikes Back',
    episode: 5,
    year: 1980,
    director: 'Irvin Kershner',
    actors: [
      {
        lastName: 'Ford',
        firstName: 'Harrison'
      },
      {
        lastName: 'Fisher',
        firstName: 'Carrie'
      }
    ]
  },
    'rotj',
    'tpm',
    'aotc',
    'rots', 
    'tfa' ];

function sortChronologically() {
    var i = 0;
    while (i < 3) {
        var temp = starWarsMovies[i];
        starWarsMovies[i] = starWarsMovies[i + 3];
        starWarsMovies[i + 3] = temp;
        i++;
    }
}

function chewie() {
    console.log();
    var i = 0;
    while (i < starWarsMovies.length) {
        if (starWarsMovies[i] === 'tpm' || starWarsMovies[i] === 'aotc') {
            console.log(starWarsMovies[i], 'Which way to Kashyyyk?');
        } else if (starWarsMovies[i] === 'tesb') {
            console.log('Rawwwrarhgh');
        } else {
            console.log(starWarsMovies[i], 'Laugh it up fuzzball!');
        }
        i++;
    }
}

chewie();
sortChronologically();
chewie();





/*
for (var key in process.env) {
    if (key === 'PATH') {
        var isWin = /^win/.test(process.platform);
        var delimeter = isWin ? ';' : ':';
        //if (isWin) {
        //   delimeter = ';';
        //} else {
        //    delimeter = ':';
        //}
        var pathElems = process.env.PATH.split(delimeter);
        for (var k = 0; k < pathElems.length; k++) {
            console.log(key, k, pathElems[k]);
        }
    } else {
        console.log(key, process.env[key]);
    }
}
*/