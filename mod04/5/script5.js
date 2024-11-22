'use strict';

const output = document.querySelector('#output');
const apiUrl = 'https://api.chucknorris.io/jokes/random';

async function getRandomJoke() {
    try {
        const response = await fetch(apiUrl);
        const joke = await response.json();

        console.log(joke.value);
    } catch (e) {
        console.warn(e)
    }
}

getRandomJoke()