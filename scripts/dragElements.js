//Here we set up for the drag operations, first only the lists

function setDragLists() {

  const dragLists = document.querySelectorAll('.dragList');
  const dragListsCont = document.getElementById('listsArray');

  dragLists.forEach( dragList => {
    //We set up the dragging class to separate the item, and change it class appearance
    dragList.addEventListener('dragstart', () => {
      dragList.classList.add('list-dragging');
    });

    dragList.addEventListener('dragend', () => {
      dragList.classList.remove('list-dragging');
    });
  });

  //As we grag over, we determine the position it needs to be
  dragListsCont.addEventListener('dragover', e => {
    e.preventDefault();
    const passedElement = getPassedList(dragListsCont, e.clientX);
    
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
