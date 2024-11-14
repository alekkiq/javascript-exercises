'use strict';

const output = document.getElementById('output');

const numbersToAsk = 3;
const numbers = [];

for (let i = 0; i < numbersToAsk; i++) {
    numbers.push(+prompt(`Enter number ${i + 1}`));
}

let sum = 0, product = 1, average = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    product *= numbers[i];
}

// calc average after sum is known
average = (sum / numbers.length).toFixed(2);

output.innerHTML = `
    Sum: ${sum}<br>
    Product: ${product}<br>
    Average: ${average}
`