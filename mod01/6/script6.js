'use strict';

const output = document.getElementById('output');

document.getElementById('prompt').addEventListener('click', () => {
    const confirmation = confirm('Should I calculate the square root?');

    if (!confirmation) {
        output.textContent = 'The square root is not calculated';
        return;
    }

    const number = +prompt('Enter a number');

    if (number < 0) {
        output.textContent = 'The square root of a negative number is not defined';
        return;
    }

    const squareRoot = Math.sqrt(number).toFixed(2);

    output.textContent = `The square root of ${number} is approximately ${squareRoot}`;
});