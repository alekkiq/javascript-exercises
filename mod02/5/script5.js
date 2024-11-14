'use strict';

const numbers = [];

while (true) {
    const number = +prompt('Enter a number');

    if (numbers.includes(number)) break;

    numbers.push(number)
}

// asc
const sortedNumbers = numbers.sort((a, b) => a - b);

console.log(sortedNumbers)