'use strict';

const form = document.querySelector('#form');
const apiUrl = form.action;

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const query = form.querySelector('#query').value;
    const url = `${apiUrl}?q=${query}`

    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);
    } catch (e) {
        console.error(e);
    }
});