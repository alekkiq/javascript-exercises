'use strict';

const output = document.querySelector('#output');
const outputList = document.createElement('ul');
output.appendChild(outputList);

document.getElementById('prompt').addEventListener('click', () => {
    const start = +prompt('Enter starting year');
    const end = +prompt('Enter ending year');

    if (start > end || start < 0 || end < 0) {
        output.textContent = 'Invalid input!';
        return;
    }

    for (let i = start; i <= end; i++) {
        if (i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0)) {
            const listItem = document.createElement('li');
            listItem.textContent = i;
            outputList.appendChild(listItem);
        }
    }
});