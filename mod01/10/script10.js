'use strict';

document.getElementById('prompt').addEventListener('click', () => {
    const numberOfDice = +prompt('Enter the number of dice');
    const sumGuess = +prompt(`Enter a sum to calculate the odds of (max: ${numberOfDice * 6})`);
    const output = document.getElementById('output');

    if (numberOfDice < 1 || sumGuess > numberOfDice * 6) {
        output.textContent = 'Invalid input!';
        return;
    }

    const simulationThrows = 10000;
    let matchingThrows = 0;

    for (let i = 0; i <= simulationThrows; i++) { // loop through simulation throws
        let sum = 0;
        for (let j = 0; j < numberOfDice; j++) { // "throw" the amount of dice we have
            sum += Math.floor(Math.random() * 6) + 1;
        }
        if (sum === sumGuess) {
            matchingThrows++;
        }
    }

    const percentage = (matchingThrows / simulationThrows) * 100;

    output.textContent = `
        Probability to get sum ${sumGuess} 
        with ${numberOfDice} dice is 
        ${percentage.toFixed(2)}%
    `;
})