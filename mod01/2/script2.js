'use strict';

const output = document.getElementById('output');

const promptedName = prompt('Enter your name');

output.textContent = `Hello, ${promptedName}!`;