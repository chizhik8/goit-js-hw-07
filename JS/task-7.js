'use strict';

const sizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

sizeControlRef.addEventListener('input', event => { 
    console.log(event.target.value);
    textRef.style.fontSize = `${event.target.value}px`;

});