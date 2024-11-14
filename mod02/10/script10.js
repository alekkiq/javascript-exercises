'use strict';

const numberOfPeople = +prompt('Enter the number of candidates');

const candidates = [];

// create each candidate
for (let i = 1; i <= numberOfPeople; i++) {
    const candidateName = prompt(`Enter candidate ${i}'s name`);
    candidates.push({
        name: candidateName.toLowerCase(),
        votes: 0
    });
}

// ask for the votes
candidates.forEach((candidate) => {
    const validCandidates = candidates.filter((c) => c.name !== candidate.name);
    const candidateToVote = prompt(`Who do you vote for, ${candidate.name}?\nOptions:\n${validCandidates.map((c) => c.name).join(', ')}`);
    const candidateVoted = candidates.find((c) => c.name === candidateToVote.toLowerCase());

    if (candidateVoted) {
        candidateVoted.votes++;
    }
});

// sort the thing and display the results
const sortedResult = candidates.sort((a, b) => b.votes - a.votes);

console.log(
    `The winner is ${sortedResult[0].name} with ${sortedResult[0].votes} votes`
);
console.log(
    `results:\n${sortedResult.map((c) => `${c.name}: ${c.votes} votes`).join('\n')}`
);
