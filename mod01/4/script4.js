'use strict';

const output = document.getElementById('output');

const promptedName = prompt('Enter your name');

const randomNumber = Math.floor(Math.random() * 4) + 1;
let rolledHouse;

switch (randomNumber) {
    case 1:
        rolledHouse = 'Gryffindor';
        break;
    case 2:
        rolledHouse = 'Hufflepuff';
        break;
    case 3:
        rolledHouse = 'Ravenclaw';
        break;
    case 4:
        rolledHouse = 'Slytherin';
        break;
}

output.textContent = `${promptedName}, you are a ${rolledHouse}.`;