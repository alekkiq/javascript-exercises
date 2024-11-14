'use strict';

function rollDice(sides = 6) {
    return Math.floor(Math.random() * sides) + 1;
}

const output = document.getElementById('output');

const diceSides = +prompt('Enter the number of sides on a dice');

let roll = 0;
do {
    roll = rollDice(diceSides)

    const listItem = document.createElement('li');
    listItem.textContent = roll;
    output.append(listItem);
} while (roll < diceSides)