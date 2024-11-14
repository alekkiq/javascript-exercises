'use strict';

function concat(array) {
    let output = '';

    for (let i = 0; i < array.length; i++) {
        output += array[i];
    }

    return output;
}

const stringArray = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
const concatenatedArray = concat(stringArray);

console.log(stringArray);
console.log(concatenatedArray);