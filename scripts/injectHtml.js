function injectList(list) {
  const listsArray = document.getElementById('listsArray');
  

  const listContainer = document.createElement('div');
  listContainer.classList.add('list-container');

  const listContent = document.createElement('div');
  listContent.classList.add('list-content');
  listContainer.appendChild(listContent);

  const listHeader = document.createElement('div');
  listHeader.classList.add('list-title');
  listHeader.textContent = list.title;
  listContent.appendChild(listHeader);

  let listCards = document.createElement('div');
  listCards.classList.add('list-cards');
  listContent.appendChild(listCards);



  list.cards.forEach(cardFromList => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = cardFromList;
    listCards.appendChild(card);
  });



  const cardCreator = document.createElement('div');
  cardCreator.classList.add('card-creator');
  const inputCard = document.createElement('input');
  inputCard.placeholder = 'Card Content';
  inputCard.classList.add('newCard');
  cardCreator.appendChild(inputCard);
  const inputCardButton = document.createElement('button');
  inputCardButton.classList.add('card-creator-button');
  inputCardButton.textContent = 'Add Card';
  cardCreator.appendChild(inputCardButton);
  listContent.appendChild(cardCreator);
  
  //We insert the list created with JS before the list creator
  listsArray.appendChild(listContainer);

  //we return all info we need, the input text and button for listener
  const input = {
    value: inputCard,
    button: inputCardButton
  };
  return input;
}


