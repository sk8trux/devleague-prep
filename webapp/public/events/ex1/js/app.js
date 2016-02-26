window.onload = function () {

  var listItemElems;
  var listItemElem;
	var i
  listItemElems = getNavMenuListItems();

  // For each li element inside of the nav menu add an event listener on 'click' events.
  // Your event listener should be the handleClick function implemented below.

  /* YOUR LOOP CODE HERE */
for (i = 0; i < listItemElems.length; i++) {
    listItemElem = listItemElems [i];
    registerEventListener(listItemElem);
}


	// This event should log to the console the text inside of the <a> tag.
  function registerEventListener (listItemElem) {
      var anchorText;
      anchorElem= document.getElementById('navMenu')
    /* YOU CAN FIND THE <a> TAG HERE */
    listItemElem.addEventListener('click', handleClick);
    return handleClick;

    function handleClick() {
      /* YOUR 'click' EVENT LOGIC HERE */
      anchorText = listItemElem.firstElementChild.textContent
      console.log(anchorText);
    }
  }

  function getNavMenuListItems() {
    var navMenuElem;
    navMenuElem = document.getElementById('navMenu');
    return navMenuElem.children;
    /* YOUR ELEM RETRIEVAL CODE HERE */
  }
};
