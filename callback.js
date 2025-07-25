// function sayHello(name) {
//     console.log("Hello, " + name + "!");
// }
// function greetUser(callback) {
//     const username = "Anamika";
//     callback(username);
// }
// greetUser(sayHello);


// function process(callback) {
//     console.log("Starting process...");
//     callback();
//     console.log("Process complete.");
// }
// process(function() {
//     console.log("Callback function executed.");
// });


// function showMessage() {
//     console.log("This message is shown after 2 seconds");
// }
// setTimeout(showMessage, 2000);


// const numbers = [1,3,5];
// numbers.forEach(function(num) {
//     console.log("Number:", num);
// });


// function fetchData(callback) {
//     setTimeout(() => {
//         const data = "Some data from server";
//         callback(data);
//     }, 1000);
// }
// fetchData(function(result) {
//    console.log("Received:", result);
// });


// function fetchDataPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { 
//             resolve("Data from promise");
//         }, 1000);
//     });
// }
// fetchDataPromise().then(function(data) {
//     console.log(data);
// });


// const button  = document.getElementById('myButton');
// button.addEventListener('click', function() {
//     alert('Button clicked!');
// });

// // function x() {
// //     var a =7;
// //     function y() {
// //         console.log(a);
// //     }
// //     return y;
// // }
// // var z = x();
// // console.log(z);
// // z();

// //callback pyramid of doom
// function step1(callback) {
//     setTimeout(() => {
//         console.log("Step 1 complete");
//         callback();
//     }, 1000);
// }
// function step2(callback) {
//     setTimeout(() => {
//         console.log("Step 2 complete");
//         callback();
//     }, 1000);
// }
// function step3(callback) {
//     setTimeout(() => {
//         console.log("Step 3 complete");
//         callback();
//     }, 1000);
// }

// step1(() => {
//     step2(() => {
//         step3(() => {
//             console.log("All steps complete");
//         });
//     });
// });

 //convert to promises
// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Step 1 complete");
//             resolve();
//         }, 1000);
//     });
// }
// function step2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Step 2 complete");
//             resolve();
//         }, 1000);
//     });
// }
// function step3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Step 3 complete");
//             resolve();
//         }, 1000);
//     });
// }
// step1()
// .then(step2)
// .then(step3)
// .then(() => {
//     console.log("All steps complete");
// });


// //async,await
// async function runSteps() {
//     await step1();
//     await step2();
//     await step3();
//     console.log("All steps complete");
// }
// runSteps();



// //for loop
// for (let i =1; i <= 5; i++) {
//     console.log("Count:", i);
// }

// //while loop
// let i = 1;
// while (i <= 5) {
//     console.log("While Count:",i);
//     i++;
// }

// //do..while loop
// let i = 1;
// do {
//     console.log("Do..While Count:",i);
//     i++;
// }while(i <= 5);

// //for..of loop
// const fruits = ["apple", "banana", "cherry"];
// for (const fruit of fruits) {
//     console.log("Fruits:", fruit);
// }


// //for..in loop
// const student = {
//     name: "Akshaya",
//     age: 21,
//     course: "Computer Science"
// };
// for (const key in student) {
//     console.log( `${key}: ${student[key]}`);
// }



// const fruits = ["apple", "banana", "cherry"];
// fruits.forEach(fruit => {
//     console.log("Fruit:", fruit);
// });

// const colors = ["red","green","blue"];
// colors.forEach((color, index, array) => {
//     console.log(`Color at index ${index}: ${color}`);
// });

// const numbers = [1, 2, 3];
// const squared = numbers.map(n => n * n);
// console.log(squared);

// const number = [1, 2, 3];
// const cube = number.map(n => n * n * n);
// console.log(cube);

// console.log("Start");
// setTimeout(function cbT() {
//     console.log("CB SetTimeout");
// }, 5000);
// fetch("http://api.netflix.com")
// .then(function cbF() {
//     console.log("CB Netflix");
// });
// console.log("End");


// const numbers = [1, 2, 3, 4];

// const sum = numbers.reduce((accumulator, current) => {
//   return accumulator + current;
// }, 0);

// console.log(sum);


console.log("Start");
setTimeout(function cb(){
    console.log("Callback");
}, 5000);
console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
}
console.log("While expires");