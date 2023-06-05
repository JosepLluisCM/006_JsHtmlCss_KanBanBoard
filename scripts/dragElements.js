//Here we set up for the drag operations, first only the lists

let cardMoving = false;
function setDragLists() {
  if(!cardMoving) {
    const dragLists = document.querySelectorAll('.dragList');
    const dragListsCont = document.getElementById('listsArray');
    
    dragLists.forEach( dragList => {
      //We set up the dragging class to separate the item, and change it class appearance
      dragList.addEventListener('dragstart', (e) => {
        dragList.classList.add('list-dragging');
        //console.log(e.target);
      });
  
      dragList.addEventListener('dragend', (e) => {
        dragList.classList.remove('list-dragging');
      });
    });
  
    //As we grag over, we determine the position it needs to be
    dragListsCont.addEventListener('dragover', e => {
      e.preventDefault();
      const passedElement = getPassedList(dragListsCont, e.clientX);
      console.log('lol');
      const draggable = document.querySelector('.list-dragging');
      dragListsCont.insertBefore(draggable, passedElement);
      
      if (passedElement == null) {
        modListtoEnd(draggable);
      } else {
        modList(draggable, passedElement);
      }
    });
  }
  
  //function to update list position
  function getPassedList(container, x) {
    const dragElements = [...container.querySelectorAll('.dragList:not(.list-dragging')];
  
    return dragElements.reduce( (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = x - box.right /* - (box.width/2) */;
      //console.log(offset);
  
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child}
      } else return closest
    }, {offset: Number.NEGATIVE_INFINITY}).element;
  }
}


/* 
//THE SAME AS BEFORE; BUT WITH CARDS
function setDragCards() {
  const dragCards = document.querySelectorAll('.dragCard');
  const dragCardsCont = document.querySelectorAll('.dragCards-container');

  dragCards.forEach( dragCard => {
    //We set up the dragging class to separate the item, and change it class appearance
    dragCard.addEventListener('dragstart', (e) => {
      e.stopPropagation();
      e.stopImmediatePropagation();

      dragCard.classList.add('card-dragging');
      cardMoving = true;
      console.log(cardMoving);
    });

    dragCard.addEventListener('dragend', (e) => {
      e.stopPropagation();
      e.stopImmediatePropagation();
      dragCard.classList.remove('card-dragging');
      cardMoving = false;
      console.log(cardMoving);
    });
  });

  //As we grag over, we determine the position it needs to be
  dragCardsCont.forEach( container => {
    container.addEventListener('dragover', e => {
      e.stopPropagation();
      e.stopImmediatePropagation();
      
      const passedElement = getPassedCard(container, e.clientY);

      //console.log(passedElement);
      const draggable = document.querySelector('.card-dragging');
      if (passedElement == null) {
        container.appendChild(draggable);
        //modCardtoEnd(draggable)
      } else {
        container.insertBefore(draggable, passedElement);
        //modCard(draggable, passedElement);
       
      } 
    });
  });
}

//function to update list position
function getPassedCard(container, y) {
  const dragElements = [...container.querySelectorAll('.dragCard:not(.card-dragging')];

  return dragElements.reduce( (closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - (box.height/2);
    //console.log(offset);

    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child}
    } else return closest
  }, {offset: Number.NEGATIVE_INFINITY}).element;
} */