'use strict';

function even(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

document.getElementById('prompt').addEventListener('click', () => {
    const numberArray = [12, 5, 8, 130, 44];
    const evenNumbers = even(numberArray);

    console.log(numberArray);
    console.log(evenNumbers);
});