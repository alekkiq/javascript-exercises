'use strict';

const output = document.getElementById('output');

document.getElementById('prompt').addEventListener('click', () => {
    const numbersToAsk = 3;
    const numbers = [];

    for (let i = 0; i < numbersToAsk; i++) {
        numbers.push(+prompt(`Enter number ${i + 1}`));
    }

    let sum = 0, product = 1;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        product *= numbers[i];
    }

    const average = (sum / numbersToAsk).toFixed(2);

    output.innerHTML = `
        <p>Sum: ${sum}</p>
        <p>Product: ${product}</p>
        <p>Average: ${average}</p>
    `
});