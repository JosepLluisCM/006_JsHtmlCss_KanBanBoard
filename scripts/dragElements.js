function setDragLists() {

  const dragLists = document.querySelectorAll('.dragList');
  const dragListsCont = document.getElementById('listsArray');

  /* console.log(dragLists);
  console.log(dragListsCont); */

  dragLists.forEach( dragList => {

    dragList.addEventListener('dragstart', () => {
      dragList.classList.add('list-dragging');
    });

    dragList.addEventListener('dragend', () => {
      dragList.classList.remove('list-dragging');
    });
  });

  
    dragListsCont.addEventListener('dragover', e => {
      e.preventDefault();
      const passedElement = getPassedList(dragListsCont, e.clientX);
      //console.log(passedElement);
      const draggable = document.querySelector('.list-dragging');
      dragListsCont.insertBefore(draggable, passedElement);
      //console.log(draggable);
      
    
    });
  
}

function getPassedList(container, x) {
  const dragElements = [...container.querySelectorAll('.dragList:not(.list-dragging')];
  //console.log(dragElements);

  return dragElements.reduce( (closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = x - box.right /* - (box.width/2) */;
    //console.log(offset);

    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child}
    } else return closest


  }, {offset: Number.NEGATIVE_INFINITY}).element;
}
