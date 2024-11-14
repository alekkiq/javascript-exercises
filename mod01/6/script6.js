'use strict';

const output = document.getElementById('output');

const confirmation = confirm('Should I calculate the square root?');
let text = '';

if (!confirmation) {
    text = 'The square root is not calculated';
} else {
    const number = +prompt('Enter a number');

    if (number < 0) {
        text = 'The square root of a negative number is not defined';
    } else {
        const squareRoot = Math.sqrt(number).toFixed(2);
        text = `The square root of ${number} is approximately ${squareRoot}`;
    }
}

output.textContent = text;