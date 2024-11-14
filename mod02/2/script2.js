'use strict';

const output = document.getElementById('output');

const participantAmount = +prompt('Enter the number of participants');
const participants = [];

for (let i = 0; i < participantAmount; i++) {
    const participantName = prompt(`Enter participant ${i + 1} name`)
    participants.push(participantName);
}

const sortedParticipants = participants.sort()

for (let participant of sortedParticipants) {
    const listItem = document.createElement('li');
    listItem.textContent = participant;
    output.append(listItem);
}