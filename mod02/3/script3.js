'use strict';

const output = document.getElementById('output');

const dogsToAsk = 6;
const dogs = []

for (let i = 1; i <= dogsToAsk; i++) {
    const dogName = prompt(`Enter dog ${i} name`);
    dogs.push(dogName);
}

// sort & reverse
const sortedDogs = dogs.sort().reverse()

for (let i = 0; i < sortedDogs.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = sortedDogs[i]
    output.append(listItem);
}