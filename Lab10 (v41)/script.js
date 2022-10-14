let imgDiv = document.querySelector('.imageDiv');
let btn = document.querySelector('.btn');

function stylingButton() {
  let btnText = document.querySelector('.btn-text');
  btnText.classList.add('after')
}

async function getDeck(nrOfDecks) {
  let deck = await fetch ('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=' + nrOfDecks);
  let deckJson = await deck.json();
  console.log(deckJson)
}

getDeck(1)

async function getCardJson() {
  let card = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1');
  let cardJSON = await card.json();
  return cardJSON
}

async function showCards() {
  let img = document.createElement('img');
  img.classList.add('image');
  
  let cardJson = await getCardJson();
  let cardImgURL = cardJson.cards.at(0).image;
  img.setAttribute('src', cardImgURL);
  imgDiv.appendChild(img)

  stylingButton();
}

async function showCardValue() {
  let cardJson = await getCardJson()
  let cardValue = cardJson.cards.at(0).value;
  console.log(cardValue)
}

showCardValue()

btn.addEventListener('click', () => { 
  showCards()
 //showCardValue()
})