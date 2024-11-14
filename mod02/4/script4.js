'use strict';

const numbers = [];

while (true) {
    const number = +prompt('Enter a number (enter 0 to stop)')

    if (number === 0) break;

    numbers.push(number);
}

// desc
const sortedNumbers = numbers.sort((a, b) => b - a)

console.log(sortedNumbers)