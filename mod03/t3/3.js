'use strict';
const names = ['John', 'Paul', 'Jones'];
const target = document.querySelector('#target');

names.forEach((name) => {
    const listItem = document.createElement('li');
    listItem.textContent = name;
    target.appendChild(listItem);
});