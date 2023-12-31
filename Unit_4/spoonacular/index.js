//! Imports
import apiKey from "./key.js";

//!Global Variables
const baseURL = 'https://api.spoonacular.com/recipes/random';
let buildURL = `${baseURL}/?apiKey=${apiKey}`;
let storedRecipes =[];

//! DOM Elements
const searchForm = document.querySelector('form')
const randomCard = document.querySelector('.random-card');
const keptCards = document.getElementById('kept-cards');

//! Functions
// randomCard and keptCard are replacing element when called on in their function RC line 31, KC line 70
const removeElements = element => {
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  }
}


// Display Single Card (random)
const displayRandomCard = recipe => {
  // console.log(recipe);

  // while(randomCard.firstChild) {
    //   randomCard.removeChild(randomCard.firstChild);
    // }

    removeElements(randomCard);

  //* Create Elements
  let card = document.createElement('div');
  let img = document.createElement('img');
  let body = document.createElement('div');
  let title = document.createElement('h5');
  let btn = document.createElement('a');

  //* Set Attributes
  card.className = 'card';
  card.style.width = '18rem';
  img.src = recipe.img;
  img.className = 'card-img-top';
  img.alt = recipe.title;
  body.className = 'card-body';
  title.className = 'card-title';
  title.textContent = recipe.title;
  btn.className = 'btn btn-primary';
  btn.textContent = 'add';  
  btn.onclick = () => {
    storedRecipes.push(recipe);
    setTable();
  }

  //* Attach Elements
  body.appendChild(title);
  body.appendChild(btn);

  card.appendChild(img);
  card.appendChild(body);
  
  randomCard.appendChild(card);
}

// Display Deck of Cards
const setTable = () => {
  console.log('Stored Recipe Array: ', storedRecipes);

  removeElements(keptCards);
  storedRecipes.map(obj => {

  //* Create
  let div = document.createElement('div');
  let card = document.createElement('div');
  let img = document.createElement('img');
  let body = document.createElement('div');
  let title = document.createElement('h5');
  let p = document.createElement('p');
  let a = document.createElement('a');
  
  
  //* Set Attributes
  div.className = 'col';
  card.className = 'card';
  img.src = obj.img; // needs an object from the array
  img.alt = obj.title; // needs an object from the array
  img.className = 'card-img-top';
  body.className = 'card-body';
  title.className = 'card-title';
  title.textContent;
  p.className = 'card-text';
  a.href; //need object
  a.target = '_blank';
  a.textContent = 'Link to Recipe';  
  
  //* Append to Parent
  p.appendChild(a);
  body.appendChild(title);
  body.appendChild(p);
  card.appendChild(img);
  card.appendChild(body);
  
  div.appendChild(card);
  
  keptCards.appendChild(div);
});
}
  
  //! Event Listeners
  searchForm.addEventListener('submit', e => {
  e.preventDefault();
  fetch(buildURL)
    .then(res => res.json())
    .then(data => {
      // console.log(data.recipes[0])
      let recipe = data.recipes[0];

      let obj = {
        title: recipe.title,
        img: recipe.image,
        src: recipe.sourceUrl
      }

      // console.log(obj)
      displayRandomCard(obj);
    })
    .catch(error => console.error(error));
});
