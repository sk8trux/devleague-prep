var myAction;

myAction = 'eat';
console.log('youGetTaco', myAction, youGetTaco(myAction));

myAction = 'dance';
console.log('youGetTaco', myAction, youGetTaco(myAction));

function youGetTaco(action) {
  if (action === 'eat') {
    return 'EAT TACOS';
  } else {
    return 'stay hungry :(';
  }
}
