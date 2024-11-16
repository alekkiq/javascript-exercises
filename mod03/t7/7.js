'use strict';

const trigger = document.querySelector('#trigger');
const targetImage = document.querySelector('img#target');

const picA = 'img/picA.jpg';
const picB = 'img/picB.jpg';

trigger.addEventListener('mouseover', () => {
    targetImage.src = picB;
});

trigger.addEventListener('mouseout', () => {
    targetImage.src = picA;
});