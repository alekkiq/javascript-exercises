'use strict';

function even(numbers) {
    return numbers.filter(num => num % 2 === 0)
}

const numberArray = [12, 5, 8, 130, 44];
const evenNumbers = even(numberArray);

// original array
console.log(numberArray);

// new array with even values from original arr
console.log(evenNumbers);