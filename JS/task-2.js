'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredientsRef = document.querySelector('ul#ingredients');


ingredients.map(item => {
    const itemsIngredientsRef = document.createElement('li');
    itemsIngredientsRef.textContent = item;
    listIngredientsRef.appendChild(itemsIngredientsRef);
});

