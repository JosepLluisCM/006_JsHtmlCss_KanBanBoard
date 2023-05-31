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
    button: inputCardButton
  };
  return input;
}


//create the tooltip from scratch and show it in the page

function injectTooltip(button) {
  //console.log(button);
  if(button.childNodes.length === 3) button.childNodes[2].remove();
  else {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');

  const tooltipItem = document.createElement('div');
  tooltipItem.textContent = 'This is a tooltip Item';
  tooltipItem.classList.add('tooltip-item');

  tooltip.appendChild(tooltipItem);
  tooltip.appendChild(tooltipItem.cloneNode(true));

  button.appendChild(tooltip);
  tooltip.classList.add('tooltip-clicked');
  }
  

  
}

function eraseTooltips() {
  headerButtonsList.forEach( (button) => {
    console.log(button.childNodes);
    if(button.childNodes.length === 3) button.childNodes[2].remove();
    
  });
}

/* if (anyClicked) tooltip.classList.remove('tooltip-clicked'); */