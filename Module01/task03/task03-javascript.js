let num1 = parseInt(prompt("Enter a number: "));
let num2 = parseInt(prompt("Enter another number:"));
let num3 = parseInt(prompt("Enter another number:"));
let sum = num1+num2+num3;
let product = num1*num2*num3;
let avg = (num1+num2+num3)/3;
document.getElementById("task3").innerHTML =
  `Sum of numbers: ${sum}<br>
   Product of numbers: ${product}<br>
   Average of numbers: ${avg}`;