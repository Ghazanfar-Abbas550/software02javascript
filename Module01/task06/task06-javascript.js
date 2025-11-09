'use strict';

const shouldCalculate = confirm("Should I calculate the square root?");

if (shouldCalculate) {
    const numberInput = parseFloat(prompt("Enter a number:"));

    if (numberInput < 0) {
        document.getElementById("task06").textContent = `The square root of a negative number is not defined`;
    } else {
        const squareRoot = Math.sqrt(numberInput);
        document.getElementById("task06").textContent = `The square root of ${numberInput} is ${squareRoot}`;
    }
} else {
    document.getElementById("task06").textContent = `The square root is not calculated.`;
}

// Alternative code using switch
// 'use strict';
//
// const shouldCalculate = confirm("Should I calculate the square root?");
//
// switch (true) {
//     case !shouldCalculate:
//         document.getElementById("task05").textContent = `The square root is not calculated.`;
//         break;
//     case shouldCalculate:
//         const numberInput = parseFloat(prompt("Enter a number:"));
//         if (numberInput < 0) {
//             document.getElementById("task05").textContent = `The square root of a negative number is not defined`;
//         } else {
//             document.getElementById("task05").textContent = `The square root of ${numberInput} is ${Math.sqrt(numberInput)}`;
//         }
//         break;
// }
