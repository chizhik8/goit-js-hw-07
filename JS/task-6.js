'use strict';

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', event => {
    if (event.target.value.length == inputRef.dataset.length) {
        inputRef.className = 'valid';
    }
    else { inputRef.className = 'invalid'};
});
