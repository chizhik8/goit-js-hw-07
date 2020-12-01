'use strict';

const categoriesRef = document.querySelector('ul#categories');
console.log(`В списке ${categoriesRef.children.length} категории.`);


const elemCategoriesRef = document.querySelectorAll('.item');
elemCategoriesRef.forEach(elem => {console.dir(`Категория: ${elem.firstElementChild.textContent}\nКоличество элементов: ${elem.lastElementChild.children.length}`);});
