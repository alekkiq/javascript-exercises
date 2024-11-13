'use strict';

document.getElementById('prompt').addEventListener('click', () => {
    const number = +prompt('Enter a number');
    const output = document.getElementById('output');

    if (number <= 1) {
        output.textContent = 'Invalid input!';
        return;
    }

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            output.textContent = `Number ${number} is not a prime number!`;
            return;
        }
    }

    output.textContent = `Number ${number} is a prime number!`;
})