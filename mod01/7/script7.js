'use strict';

const output = document.getElementById('output');

const numberOfDice = +prompt('Enter the number of dice');

let sum = 0;

for (let i = 0; i <= numberOfDice; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    //console.log(roll);
    sum += roll;
}

output.textContent = `The sum of ${numberOfDice} dice rolled is ${sum}`;
