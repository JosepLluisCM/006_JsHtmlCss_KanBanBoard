
//In this array is saved all lists in thge page
let listsArr = [];

function renderBoard() {

  document.getElementById('listsArray').innerHTML = "";

  listsArr.forEach( (list, index) => {
    //first we write a list to the html file
    const listInfo = injectList(list);
    //next we listen for the addCCart button
    listInfo[0].button.addEventListener('click', () => {
      if (listInfo[0].value.value.length) {
        list.cards.push(listInfo[0].value.value);
        listInfo[0].value.value = '';
        renderBoard();
      };
    });
    document.addEventListener('keydown', (e) => {
      if (listInfo[0].value.value.length && e.key === 'Enter') {
        list.cards.push(listInfo[0].value.value);
        listInfo[0].value.value = '';
        renderBoard();
      };

    });
    listInfo[0].value.focus();
    //we listen for the edit button press
    listInfo[0].edit.addEventListener('click', () => {
      listInfo[1].modalWrapper.classList.remove('edit-list-hidden');
      
      //Multiple options, we listen for escape and exit the modal
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') listInfo[1].modalWrapper.classList.add('edit-list-hidden');
      });
      //if the change name is clicked, we update the list and render the board again, closing the modal
      listInfo[1].renameButton.addEventListener('click', () => {
        //console.log(listInfo[1].renameInput.value);
        if(listInfo[1].renameInput.value.length) {
          list.title = listInfo[1].renameInput.value;
          renderBoard();
          listInfo[1].modalWrapper.classList.add('edit-list-hidden');
        }
      });
      //if we press delete button, remove list from listArr and renderBoard
      listInfo[1].deleteButton.addEventListener('click', () => {
        listsArr.splice(index, 1);
        renderBoard();
        listInfo[1].modalWrapper.classList.add('edit-list-hidden');
      });
    });
  });  
}

function deleteCard(listTitle, cardIndex) {
  const listIndex = listsArr.findIndex( list => list.title === listTitle);
  listsArr[listIndex].cards.splice(cardIndex, 1);
  renderBoard();
}


//Add list to listArr
function addList(listTitle) {
  //console.log(`List Created with title: ${listTitle}`)
  let list = {
    title: listTitle,
    cards: []
  }
  listsArr.push(list);
  renderBoard();

  document.querySelector('.newList').value = '';
}

//listener for the add list button
document.getElementById("list-creator-button").addEventListener('click', () => {
  if (document.querySelector('.newList').value.length) {
    addList(document.querySelector('.newList').value);
    document.querySelector('.newList').focus();
  };
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && document.querySelector('.newList').value.length) {
    addList(document.querySelector('.newList').value);
    document.querySelector('.newList').focus();
  } 
});



//Listen for the header buttons
const headerButtonsList = document.querySelectorAll('.header-buttons');
headerButtonsList.forEach( (button) => {
  button.addEventListener('click', () => {
    let tooltip = button.childNodes[3];
    if (tooltip.classList.contains('tooltip-clicked')) {
      tooltip.classList.remove('tooltip-clicked');
    }
    else {
      eraseTooltips();
      tooltip.classList.add('tooltip-clicked');
    }

    //Listener for clicks outside button for closing tooltip
    document.addEventListener('click', (e) => {
      //console.log(e.target.classList.value);
      if(e.target.classList.value != 'header-buttons') {
        tooltip.classList.remove('tooltip-clicked');
      }
    });

  });
});

//listen for the retract sidebar button
const retract = document.getElementById('retract-button');
const sidebar = document.getElementById('sidebar');
retract.addEventListener('click', () => {
  if(!retract.classList.contains('retract-clicked')) {
    retract.classList.add('retract-clicked');
    sidebar.classList.add('sidebar-out');
  }
  else {
    retract.classList.remove('retract-clicked');
    sidebar.classList.remove('sidebar-out');
  }
});







/* 
JS CREATION OF TOOLTIP, PARKED FOR NOW
//add listeners for the header buttons

const headerButtonsList = document.querySelectorAll('.header-buttons');
console.log(typeof(headerButtonsList));
headerButtonsList.forEach( (button) => {
  console.log(button);
  //createTooltip(button);
});


//console.log(headerButtonsList);
let anyClicked = false;
headerButtonsList.forEach( (button) => {
  button.addEventListener('click', () => {
    console.log(button);
    //createTooltip(button);
  
    
    
  });
}); */