/*__________MODEL__________*/
/*__________VIEW__________*/
let listsArr = [];

//let listsHTML = [];

function renderBoard() {
  let listsHTML = '';

  listsArr.forEach( (list) => {
    // const input = ....
    // const addCardButton = document.createElement("BUTTON");
    // addCardButton.addEventListener(() => { /* Tot lo de baix */})

    const HTML = `
      <div class="list-container">
        <div class="list-content">
          <div class="list-title">${list.title}</div>
          <div class="list-cards js-list-cards">
            
          </div>
          <div class="card-creator">
            <input type="text" class="newCard js-newCard" placeholder="Card Content" data-list-title="${list.title}">
            <button class="card-creator-button js-card-creator-button" data-list-title="${list.title}">Add Card</button>
          </div>
        </div>
      </div>
    `;
    listsHTML += HTML;
  });

  document.querySelector('.js-lists-array').innerHTML = listsHTML;
}

/*__________CONTROLLER__________*/

//EVENT LISTENERS
document.querySelector('.js-list-creator-button').addEventListener('click', () => {
  
  let listInput = document.querySelector('.js-newList').value;
  if (listInput.length) {
    console.log(listInput);
    addList(listInput);
    document.querySelector('.js-newList').value = '';
  };
});



document.querySelector('.js-board').addEventListener('click', (event) => {
  if (event.target.classList.contains('js-card-creator-button')) {
    //pick the id from the button pressed
    const listId = event.target.dataset.listTitle;
    //console.log(event.target.dataset); 

    const cardInput = document.querySelector('.js-newCard').value;
    if (cardInput.length) {
      addCard(cardInput, listId);
      document.querySelector('.js-newCard').value = '';
      console.log(cardInput + ',' + typeof listId);
    };
    
    
  } 
});


function addCard(cardInput, listId) {
  
  const listToUpdate = listsArr.findIndex( element => element.title == listId);
  console.log(listToUpdate);

  listsArr[listToUpdate].cards.push(cardInput);
  console.log(listsArr);
}


function addList(listTitle) {
  //console.log(`List Created with title: ${listTitle}`)

  let list = {
    title: listTitle,
    cards: []
  }

  listsArr.push(list);

  renderBoard();

}