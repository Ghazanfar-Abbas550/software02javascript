'use strict';
const studentName = prompt("Enter your name: ");
let randomNum = Math.floor(Math.random()*4)+1;
let chosenHouse;
if (randomNum === 1){
    chosenHouse = "Gryffindor";
} else if (randomNum === 2){
    chosenHouse = "Slytherin";
} else if (randomNum === 3){
    chosenHouse = "Hufflepuff";
} else{
    chosenHouse = "Ravenclaw";
}
document.getElementById("task4").textContent = `${studentName}, you are a ${chosenHouse}.`



// Alternative code using switch

// 'use strict';
// const studentName = prompt("Enter your name:");
// const randomNum = Math.floor(Math.random() * 4) + 1;
// let chosenHouse;
//
// switch (randomNum) {
//   case 1:
//     chosenHouse = "Gryffindor";
//     break;
//   case 2:
//     chosenHouse = "Slytherin";
//     break;
//   case 3:
//     chosenHouse = "Hufflepuff";
//     break;
//   default:
//     chosenHouse = "Ravenclaw";
// }

// document.getElementById("greeting").textContent = `${studentName}, you are a ${chosenHouse}.`;