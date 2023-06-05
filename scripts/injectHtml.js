function injectList(list) {
  const listsArray = document.getElementById('listsArray');
  
  //Creation of list container and content
  const listContainer = document.createElement('div');
  listContainer.classList.add('list-container');
  listContainer.classList.add('dragList');
  listContainer.draggable = true;

  const listContent = document.createElement('div');
  listContent.classList.add('list-content');
  listContainer.appendChild(listContent);

  //add the list title, delete icon and modal
  const listHeader = document.createElement('div');
  listHeader.classList.add('list-title');
  listHeader.textContent = list.title;

  const editIcon = document.createElement('i');
  editIcon.classList.add('fa-solid');
  editIcon.classList.add('fa-pen-to-square');
  listHeader.appendChild(editIcon);

  //We create the modal
  const modal = editListModal(listHeader);

  listContent.appendChild(listHeader);

  //Creation of card list container
  let listCards = document.createElement('div');
  listCards.classList.add('list-cards');
  /* listCards.classList.add('dragCards-container'); */
  listContent.appendChild(listCards);
  //Iterate cards on list and append to listCards
  list.cards.forEach((cardFromList, cardIndex) => {
    const card = document.createElement('div');
    card.classList.add('card');
    /* card.classList.add('dragCard');
    card.draggable = true; */
    card.textContent = cardFromList;
    listCards.appendChild(card);

    document.addEventListener('keydown', (event) => {
      if (event.key === 'c') {
        card.addEventListener('click', () => {
          deleteCard(list.title, cardIndex);
        }, {once: true});
      }
    }, {once: true});
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
  const listInfo = [
    {
      value: inputCard,
      button: inputCardButton,
      edit: editIcon,
    },
    modal
  ];

  return listInfo;
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
    

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-solid');
    deleteIcon.classList.add('fa-skull-crossbones');
    deleteButton.textContent = 'Delete List ';
    deleteButton.appendChild(deleteIcon);
    renameList.appendChild(deleteButton);

    const note = document.createElement('p');
    note.textContent = '*To delete a card, click it while pressing C*';
    renameList.appendChild(note);

  editList.appendChild(renameList);
listHeader.appendChild(editList);

  const modal = {
    modalWrapper: editList,
    renameInput: renameInput,
    renameButton: renameButton,
    deleteButton: deleteButton
  };
  return modal;
}

function eraseTooltips() {
  headerButtonsList.forEach( (button) => {
    let tooltip = button.childNodes[3];
    tooltip.classList.remove('tooltip-clicked');
  });
}
