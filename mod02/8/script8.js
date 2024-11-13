'use strict';

function concat(array) {
    let output = '';

    for (let i = 0; i < array.length; i++) {
        output += array[i];
    }

    return output;
}

document.getElementById('prompt').addEventListener('click', () => {
    const stringArray = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
    const concatenatedString = concat(stringArray);

    console.log(stringArray);
    console.log(concatenatedString);
});