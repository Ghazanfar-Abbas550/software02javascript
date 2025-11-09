'use strict';
let yearInput = parseInt(prompt("Enter the year: "));
if (yearInput%400===0){
    document.getElementById("task05").textContent = `${yearInput} is leap year`;
} else if (yearInput%100===0){
    document.getElementById("task05").textContent = `${yearInput} is not leap year`;
} else if(yearInput%4===0){
    document.getElementById("task05").textContent = `${yearInput} is leap year`;
} else{
    document.getElementById("task05").textContent = `${yearInput} is not leap year`;
}


// Alternative code using switch
// 'use strict';
// let yearInput = parseInt(prompt("Enter the year: "));
// switch (true){
//     case yearInput%400===0:
//         document.getElementById("task05").textContent = `${yearInput} is leap year`;
//         break;
//     case yearInput%100===0:
//         document.getElementById("task05").textContent = `${yearInput} is not leap year`;
//         break;
//     case yearInput%4===0:
//         document.getElementById("task05").textContent = `${yearInput} is leap year`;
//         break;
//     default:
//         document.getElementById("task05").textContent = `${yearInput} is not leap year`;
// }