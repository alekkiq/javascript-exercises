'use strict';

const form = document.querySelector('#joke-form');
const output = document.querySelector('#output');
const apiUrl = 'https://api.chucknorris.io/jokes';

async function getJokes(query) {
    try {
        const url = `${apiUrl}/search?query=${query}`
        const response = await fetch(url);
        const jokes = await response.json();
        console.log(jokes.result)
        return jokes.result;
    } catch (e) {
        console.warn(e)
        return '';
    }
}

function createElement(joke) {
    const article = document.createElement('article');
    const text = document.createElement('p');
    text.textContent = joke;

    article.appendChild(text);
    output.appendChild(article);
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    output.innerHTML = '';

    const query = form.querySelector('#query').value;
    const jokes = await getJokes(query);

    jokes.forEach(joke => createElement(joke.value));
});