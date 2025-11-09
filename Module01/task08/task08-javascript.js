'use strict';

// Ask user for start and end years
const startYear = parseInt(prompt("Enter the start year:"));
const endYear = parseInt(prompt("Enter the end year:"));

// Initialize an empty string to build the list
let leapYearList = "";

// Loop through each year in the interval
for (let year = startYear; year <= endYear; year++) {
    // Check if the year is a leap year
    if ((year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)) {
        leapYearList += `<li>${year}</li>`;
    }
}

// Display the list in the HTML document
document.getElementById("task08").innerHTML = `<ul>${leapYearList}</ul>`;