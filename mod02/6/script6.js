'use strict';

function rollDice() {
    return Math.floor(Math.random() * 6) + 1
}

const output = document.getElementById('output');

let roll = 0;
do {
    roll = rollDice();

    const listItem = document.createElement('li');
    listItem.textContent = roll;
    output.append(listItem);
} while (roll < 6)