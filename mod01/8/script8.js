'use strict';

const output = document.getElementById('output');

const start = +prompt('Enter starting year');
const end = +prompt('Enter ending year');

for (let year = start; year <= end; year++) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        const listItem = document.createElement('li');
        listItem.textContent = year;
        output.append(listItem);
    }
}