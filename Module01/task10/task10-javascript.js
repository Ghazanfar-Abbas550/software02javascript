'use strict';

const diceCount = parseInt(prompt("Enter the number of dice:"));
const targetSum = parseInt(prompt("Enter the desired sum:"));
const simulations = 10000; // number of trials
let successCount = 0;

for (let i = 0; i < simulations; i++) {
  let sum = 0;
  for (let j = 0; j < diceCount; j++) {
    sum += Math.floor(Math.random() * 6) + 1; // roll die (1–6)
  }
  if (sum === targetSum) {
    successCount++;
  }
}

const probability = (successCount / simulations) * 100;

document.getElementById("task10").textContent =
  `Probability to get sum ${targetSum} with ${diceCount} dice is ${probability.toFixed(2)}%`;
