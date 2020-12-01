'use strict';

const sizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

console.log(sizeControlRef);
console.log(textRef);

sizeControlRef.addEventListener('click', event => { 
    console.log('click');
});