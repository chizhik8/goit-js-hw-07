'use strict';

const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');


inputNameRef.addEventListener('change', event => {
     outputNameRef.textContent = event.target.value.length>0 ? event.target.value : 'незнакомец';
});
 