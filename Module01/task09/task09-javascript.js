'use strict';

const numberInput = parseInt(prompt("Enter an integer:"));
let isPrime = true;

// Handle numbers less than 2
if (numberInput < 2) {
    isPrime = false;
} else {
    // Check divisibility from 2 up to the square root of the number
    for (let i = 2; i <= Math.sqrt(numberInput); i++) {
        if (numberInput % i === 0) {
            isPrime = false;
            break;
        }
    }
}

// Print the result to HTML
if (isPrime) {
    document.getElementById("task09").textContent = `${numberInput} is a prime number.`;
} else {
    document.getElementById("task09").textContent = `${numberInput} is not a prime number.`;
}