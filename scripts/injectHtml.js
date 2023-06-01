function injectList(list) {
  const listsArray = document.getElementById('listsArray');
  
  //Creation of list container and content
  const listContainer = document.createElement('div');
  listContainer.classList.add('list-container');

  const listContent = document.createElement('div');
  listContent.classList.add('list-content');
  listContainer.appendChild(listContent);

  //add the list title, delete icon and modal
  const listHeader = document.createElement('div');
  listHeader.classList.add('list-title');
  listHeader.textContent = list.title;

  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('fa-solid');
  deleteIcon.classList.add('fa-pen-to-square');
  listHeader.appendChild(deleteIcon);
  editListModal(listHeader);

  listContent.appendChild(listHeader);

  //Creation of card list container
  let listCards = document.createElement('div');
  listCards.classList.add('list-cards');
  listContent.appendChild(listCards);
  //Iterate cards on list and append to listCards
  list.cards.forEach(cardFromList => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = cardFromList;
    listCards.appendChild(card);
  });

  //Creation of the Card creator footer
  const cardCreator = document.createElement('div');
  cardCreator.classList.add('card-creator');
  const inputCard = document.createElement('input');
  inputCard.placeholder = 'Add a Card';
  inputCard.classList.add('newCard');
  cardCreator.appendChild(inputCard);
  const inputCardButton = document.createElement('button');
  inputCardButton.classList.add('card-creator-button');
  /* inputCardButton.textContent = 'Add Card'; */
  inputCardButton.innerHTML = `<i class="fa-solid fa-plus fa-lg"></i>`;
  cardCreator.appendChild(inputCardButton);
  listContent.appendChild(cardCreator);
  
  //We insert the list created with JS before the list creator
  listsArray.appendChild(listContainer);

  //we return all info we need, the input text and button for listener
  const input = {
    value: inputCard,
    button: inputCardButton,
    editButton: renameButton
  };
  return input;
}

//function to create the Edit list modal
function editListModal(listHeader) {
  const editList = document.createElement('div');
  editList.classList.add('edit-list');
  editList.classList.add('edit-list-hidden');
    const renameList = document.createElement('div');
    renameList.classList.add('rename-list');
      const renameInput = document.createElement('input');
      renameInput.classList.add('rename-input');
      renameInput.placeholder = 'Change your list title';
      const renameButton = document.createElement('button');
      renameButton.classList.add('rename-button');
      renameButton.textContent = 'Rename';
    renameList.appendChild(renameInput);
    renameList.appendChild(renameButton);
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Delete List';
    renameList.appendChild(deleteButton);
  editList.appendChild(renameList);
listHeader.appendChild(editList);
}

function eraseTooltips() {
  headerButtonsList.forEach( (button) => {
    let tooltip = button.childNodes[3];
    tooltip.classList.remove('tooltip-clicked');
  });
}

/*
JS CREATION OF TOOLTIP, PARKED FOR NOW


//create the tooltip from scratch and show it in the page

function createTooltip(button) {
  //console.log(button);
  
  tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');

  const tooltipItem = document.createElement('div');
  tooltipItem.textContent = 'This is a tooltip Item';
  tooltipItem.classList.add('tooltip-item');

  tooltip.appendChild(tooltipItem);
  tooltip.appendChild(tooltipItem.cloneNode(true));

  button.appendChild(tooltip);
  //tooltip.classList.add('tooltip-clicked');
  
  

  
}

function eraseTooltips() {
  headerButtonsList.forEach( (button) => {
    console.log(button.childNodes);
    if(button.childNodes.length === 3) button.childNodes[2].remove();
    
  });
}
 */
/* if (anyClicked) tooltip.classList.remove('tooltip-clicked'); */