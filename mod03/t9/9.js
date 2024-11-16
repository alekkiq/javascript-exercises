'use strict';

const output = document.querySelector('#result');
const calculateBtn = document.querySelector('button#start');
const calculationInput = document.querySelector('input#calculation');

calculateBtn.addEventListener('click', () => {
    const calculation = calculationInput.value;

    // find all the numbers in the input with regexp
    const numbers = calculation.split(/[\+\-\*\/]/).map(Number);

    // find the operation with regexp
    const operationMatch = calculation.match(/[\+\-\*\/]/);
    
    if (!operationMatch) {
        const validOperations = ['+', '-', '/', '*']
        alert(`Invalid operation! Use one of these: ${validOperations.join(', ')}`)
        return;
    }

    const operation = operationMatch[0];

    // set result initially as the first number found in the input
    let result = numbers[0];
    const number2 = numbers[1];

    switch (operation) {
        case '+':
            result += number2;
            break;
        case '-':
            result -= number2;
            break;
        case '*':
            result *= number2;
            break;
        case '/':
            result /= number2;
            break;
    }

    output.textContent = `Result: ${result}`;
});