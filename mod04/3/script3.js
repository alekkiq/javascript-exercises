'use strict';

const form = document.querySelector('#form');
const output = document.querySelector('#results');
const apiUrl = form.action;

function createElement(tvShow) {
    const coreElement = document.createElement('article');

    const heading = document.createElement('h2');
    heading.textContent = tvShow.name;

    const image = document.createElement('img');
    image.src = tvShow.image?.medium;
    image.alt = tvShow.name;

    const link = document.createElement('a');
    link.href = tvShow.url;
    link.target = '_blank';
    link.textContent = 'Details';

    const summaryWrapper = document.createElement('div');
    summaryWrapper.innerHTML = tvShow.summary;

    coreElement.appendChild(heading);
    coreElement.appendChild(link);
    coreElement.appendChild(image);
    coreElement.appendChild(summaryWrapper);

    output.appendChild(coreElement)
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    results.innerHTML = '';

    const query = form.querySelector('#query').value;
    const url = `${apiUrl}?q=${query}`;

    try {
        const response = await fetch(url);
        const showsJson = await response.json();

        console.log(showsJson)

        showsJson.forEach((item) => createElement(item.show))
    } catch (e) {
        console.error(e);
    }
});