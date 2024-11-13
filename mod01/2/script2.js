'use strict';

const output = document.getElementById('output');

document.getElementById('prompt').addEventListener('click', () => {
    const name = prompt('Enter your name');

    output.textContent = `Hello, ${name}!`;
});