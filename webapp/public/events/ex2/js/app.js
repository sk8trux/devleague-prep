window.onload = function () {

	var childClassElems;
	var i;
	var childClassElem;

  // For each element with the class 'child'...
	// Add an event listener on the 'click' event
  childClassElems = getChildClassElements();

	/* YOUR LOOP CODE HERE */
	for (i = 0; i < childClassElems.length; i++) {
		childClassElem = childClassElems[i];
		registerEventListener (childClassElems);
	}
	// When that event occurs toggle the  CSS styles which will show the secret
	// toy element. (Inspect the .css file to figure out what class this is.)
  function createEventListener(childClassElem) {

    var secretToyElem;
	var secretToyClassName; 'show';

		/* YOUR VARIABLE ASSIGNMENT CODE HERE */
	secretToyElem = childClassElem.children[1];
		return handleClick;
		childClassElem.addEventListener('click',handleClick);

		function handleClick() {
			secretToyElem.classList.toggle(secretToyClassName);
		 }
	}

	function getChildClassElements() {
		/* YOUR ELEMENTS RETRIEVAL CODE HERE */
		return document.getElementsByClassName('child');
	}
};
