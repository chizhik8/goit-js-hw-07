'use strict';

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('change', event => {
    event.target.value.length === Number(inputRef.dataset.length) ? inputRef.id = 'validation-input.valid' : inputRef.id = 'validation-input.invalid';
});
