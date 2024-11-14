'use strict';

const output = document.getElementById('output');

const year = +prompt('Enter a year');

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    output.textContent = `${year} is a leap year`;
} else {
    output.textContent = `${year} is not a leap year`;
}

