var inDaClub;

inDaClub = shouldLetSomeoneIn(20, 150);

if (inDaClub) {
  console.log('Welcome to the club');
} else {
  console.log('Maybe next time...');
}

// functions...

function isUnderAge(age) {
  return (age < 21);
}

function hasCoverCharge(money) {
  return (money >= 10);
}

function hasEnoughToBribe(money) {
  return money >= 100;
}

function shouldLetSomeoneIn(age, money) {
  return (!isUnderAge(age) && hasCoverCharge(money)) || hasEnoughToBribe(money);
}

