'use strict';

const output = document.querySelector('#result');
const button = document.querySelector('#start');

button.addEventListener('click', () => {
    const num1Value = document.querySelector('#num1').value || 0;
    const num2Value = document.querySelector('#num2').value || 0;
    const operation = document.querySelector('#operation').value || 'add';

    let outcome = 0;

    switch (operation) {
        case 'add':
            outcome = num1Value + num2Value;
            break;
        case 'sub':
            outcome = num1Value - num2Value;
            break;
        case 'multi':
            outcome = num1Value * num2Value;
            break;
        case 'div':
            outcome = (num1Value / num2Value).toFixed(2);
            break;
    }

    output.textContent = `Result: ${outcome}`
});