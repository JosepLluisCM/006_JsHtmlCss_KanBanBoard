
//In this array is saved all lists in thge page
let listsArr = [];

function renderBoard() {

  document.getElementById('listsArray').innerHTML = "";

  listsArr.forEach( (list) => {
    //first we write a list to the html file
    const input = injectList(list);
    //next we listen for the addCCart button
    input.button.addEventListener('click', () => {
      if (input.value.value.length) {
        list.cards.push(input.value.value);
        renderBoard();
      };
    });

    input.editButton.addEventListener('click', () => {
      console.log(list.title);
    });
  });
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
}

//listener for the add list button
document.getElementById("list-creator-button").addEventListener('click', () => {
  
  let listInput = document.querySelector('.newList').value;
  if (listInput.length) {
    //console.log(listInput);
    addList(listInput);
    document.querySelector('.newList').value = '';
  };
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