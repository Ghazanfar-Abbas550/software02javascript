'use strict';

// Ask user for number of dice rolls
const numberOfDice = parseInt(prompt("Enter the number of dice rolls:"));
let sum = 0;

// Roll the dice `numberOfDice` times
for (let i = 0; i < numberOfDice; i++) {
    const roll = Math.floor(Math.random() * 6) + 1; // Dice gives 1-6
    sum += roll;
}

// Display the sum in HTML
document.getElementById("task07").textContent = `The sum of ${numberOfDice} dice rolls is ${sum}`;