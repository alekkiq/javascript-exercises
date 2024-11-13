'use strict';

const output = document.getElementById('output');

document.getElementById('prompt').addEventListener('click', () => {
    const name = prompt('Enter your name');

    // a shorter way without needing conditional statements
    // const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
    // const rolledHouse = houses[Math.floor(Math.random() * houses.length)];

    const randomNumber = Math.floor(Math.random() * 4);
    let rolledHouse;

    switch (randomNumber) {
        case 0:
            rolledHouse = 'Gryffindor';
            break;
        case 1:
            rolledHouse = 'Hufflepuff';
            break;
        case 2:
            rolledHouse = 'Ravenclaw';
            break;
        case 3:
            rolledHouse = 'Slytherin';
            break;
    }

    output.textContent = `${name}, you are a ${rolledHouse}.`;
});