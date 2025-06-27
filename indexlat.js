// const config = (() => {
//     const env = "production";
//     const apiUrl = env === "production" ? "http://netninja.com" : "http://localhost:3000";
//     return {
//         env,
//         apiUrl
//     };
// }) ();

// import { jsx } from "react/jsx-runtime";

// // console.log(config.apiUrl);

// (function() {
//     document.getElementById("basic").textContent = "Basic IIFE executed!";
// })();

// (function(name) {
//     document.getElementById("param").textContent = `Hello, ${name}!`;
// })("Aiswarya");

// (async () => {
//     try {
//         const response = await fetch("http://jsonplaceholder.typicode.com/todos/1");
//         const data = await response.json();
//         document.getElementById("async").textContent = `Fetched title: ${data.title}`;
//     }
//     catch (error) {
//         document.getElementById("async").textContent = "Failed to fetch data";
//     }
// }) ();

// const config = (() => {
//     const mode = "production";
//     const api = mode === "production" ? "http://api.example.com" : "http://localhost:3000";
//     return {
//         mode,
//         api
//     };
// })();

// document.getElementById("config").textContent = `App running in ${config.mode} mode, API: ${config.api}`;


// let name = "Annu";
// const age = 32;
// let isStudent = true;
// console.log(`Name: ${name}, Age: ${age}, Student: ${isStudent}`);

// function greet(name) {
//     return `Hello, ${name}!`;
// }
// const greetArrow = (name) => `Hi, ${name}!`;
// console.log(greet("Aiswarya"));
// console.log(greetArrow("Aiswarya"));


// let score = 85;
// if (score >= 90) {
//     console.log("A grade");
// }
// else if {
//     console.log("B grade");
// }
// else {
//     console.log("C grade");
// }


// let numbers = [1, 2, 3, 4];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
// numbers.forEach(num => console.log(num));


// let student = {
//     name : "Aiswarya",
//     age : 21,
//     skills: ["HTML", "CSS", "JAVASCRIPT"]
// };
// console.log(student.name);
// console.log(student.skills[1]);


// document.getElementById("myBtn").addEventListener("click", function() {
//     alert("Button Clicked!");
// });


// setTimeout(() => {
//     console.log("Runs after 2 seconds");
// }, 2000);
// let count = 0;
// let timer =setInterval(() => {
//     console.log("Counting: ", ++count);
//     if (count === 5) clearInterval(timer);
// }, 1000);


// async function fetchUser() {
//     let response = await fetch("http://jsonplaceholder.typicode.com/users/1");
//     let data = await response.json();
//     console.log(data);
// }

// fetchUser();


let nums = [1, 2, 3, 4, 5];

let squared = nums.map(n => n * n);
let even = nums.filter(n => n % 2 === 0);
let sum = nums.reduce((acc, val) => acc + val, 0);
console.log(squared);
console.log(even);
console.log(sum);