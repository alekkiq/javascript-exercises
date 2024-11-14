'use strict';

const numbers = [];
const numbersToAsk = 5;

for (let i = 0; i < numbersToAsk; i++) {
    numbers.push(+prompt(`Enter number ${i + 1}`));
}

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}