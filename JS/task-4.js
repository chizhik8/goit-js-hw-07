'use strict';

const buttonSubtracktRef = document.querySelector('.button-subtract');
const buttonAddRef = document.querySelector('.button-add');
const valueRef = document.querySelector('#value');
let counterValue = 0;

const increment = (event) => {
    counterValue++;
    valueRef.textContent = counterValue;
};
const decrement = (event) => {
    counterValue--;
    valueRef.textContent = counterValue;
};

buttonSubtracktRef.addEventListener('click', decrement);
buttonAddRef.addEventListener('click', increment);

