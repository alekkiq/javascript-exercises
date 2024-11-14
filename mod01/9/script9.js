'use strict';

const output = document.getElementById('output');

const number = +prompt('Enter a number');

if (number <= 1) {
    output.textContent = '1 and negative numbers are not prime numbers!'
} else {
    let isPrime = true;

    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            isPrime = false;
        }
    }

    output.textContent = isPrime
        ? `Number ${number} is a prime number!`
        : `Number ${number} is not a prime number!`;
}
