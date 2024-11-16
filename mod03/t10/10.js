'use strict';

const output = document.querySelector('#target');
const form = document.querySelector('form#source');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = form.querySelector('input[name="firstname"]').value;
    const lastName = form.querySelector('input[name="lastname"]').value;

    output.textContent = `Your name is ${firstName} ${lastName}`;
})