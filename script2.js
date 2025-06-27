// export function addArray(arr1, arr2) {
//     return arr1.concat(arr2);
// }
// const productName = "Pencil";

import { createContext } from "react";
import { jsx } from "react/jsx-runtime"

// const price = 50;
// const value = `The ${productName} is ${price} Rs`
// const msg = `The product is ${price > 10 ? 'Costly' :  'Cheap'}`
// console.log(value);
// console.log(msg);


// console.log(' === Requesting 1');
// getJson('http://jsonplaceholder.typicode.com/todos/1')
// .then((data) => {
//     console.log(data);
//     console.log(' === Requesting 2');
//     return getJson("http://jsonplaceholder.typicode.com/todos/2");
// }, (err) => {
//     console.log('ERROR:', err);
// })
// .then((data) => {
//     console.log(data);
//     console.log(' === Requesting 3');
//     return getJson('http://jsonplaceholder.typicode.com/todos/3');
// })
// .then((data) => {
//     console.log(data);
// });



// var a = 10;
// var b = false;
// var c = 'code malayalam';
// var d= ['code','malayalam'];
// var e = {
//     name : 'code malayalam',
//     age : 5,
//     topic : [CSS,HTML,C++,PYTHON],
//     caption : 'programming is hard'
// };

// var f = null;

// var jsonE =
// {
//     "name" : 'code malayalam',
//     "age" : 5,
//     "topic" : ['javascript','java','python','html'],
//     "caption" : 'source programming code'
// }


// function fetchData(callback) {
//     console.log("Fetching data...");

//     setTimeout(() => {
//         const data = { id: 1, name: "Aiswarya"};
//         console.log("Data Fetched");
//         callback(data);
//     }, 2000);
// }

// function displayData(data) {
//     console.log("Displaying data:", data);
// }
// fetchData(displayData);



// function getTodo(callback) {
//     fetch('http://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => {
//         callback(null, data);
//     })
//     .catch(error => {
//         callback(error, null);
//     });
// }

// getTodo((err, todo) => {
//     if (err) {
//         console.log("Error:", err);
//     }
//     else {
//         console.log("Todo:", todo);
//     }
// });


// function fetchData(callback) {
//     console.log("Fetching data...");

//     setTimeout(() => {
//         const data = { id: 1, name: "Aiswarya"};
//         console.log("Data Fetched");
//         callback(data);
//     }, 2000);
// }

// function displayData(data) {
//     console.log("Displaying data:", data);
// }

// fetchData(displayData);


// const productName = "Laptop";
// const price = 50000;

// const value = `The ${productName} is ${price} Rs`;
// const msg = `The product is ${`Hello ${price}`}`
// console.log(value);
// console.log(msg);


// async function getData() {
//     const output = document.getElementById('output');
//     output.textContent = "Loading...";

//     try {
//         const response = await fetch('http://jsonplaceholder.typicode.com/posts/1');
//         const data = await response.json();

//         output.textContent = `Title: ${data.title}\n\nBody: ${data.body}`;
//     }
//     catch (error)
//     {
//         output.textContent = "Error fetching data: " + error.message;
//     }
// }


// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve,ms));
// }

// async function showMessage() {
//     document.getElementById('result').textContent = 'Waiting...';
//     await delay(3000);
//     document.getElementById('result').textContent = 'This message appeared after 3 seconds!';
// }



// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve,ms));
// }

// async function run() {
//     const out = document.getElementById('output');
//     out.textContent = "Step 1...\n";
//     await delay(1000);

//     out.textContent += "Step 2...\n";
//     await delay(1000);

//     out.textContent += "Step 3 completed!\n";
// }


// const person = {
//     name: 'Jack',
//     age : 26
// }
// const student = {
//     gender : 'male'
// }
// const newObj = Object.assign(person, student);
// console.log(newObj);



// const person = {
//     name : 'Jack',
//     age : 27
// }
// const student = {
//     gender : 'male'
// }
// const newObj = {...person, ...student};
// console.log(newObj);


// const person = {
//     name : 'Monica',
//     age : 22,
//     gender : 'female'
// }
// person.height = 5.4;
// console.log(person);


// const student = {
//     name : 'John',
//     age : 23,
//     hobbies : ['reading', 'games', 'coding'],
// };
// let count = 0;
// for (let key in student) {
//     ++count;
// }
// console.log(count);


// const student = {
//     name : 'John',
//     age : 25,
//     hobbies : ['reading', 'games', 'coding'],
// };
// const person = {
//     gender : 'male'
// }
// student._proto_ = person;
// let count = 0;
// for ( let key in student ) {
//     ++count;
// }
// console.log(count);



// const string1 = 'JavaScript Program';
// const string2 = 'javascript program';
// const result = string1.toUpperCase() === string2.toUpperCase();
// if(result) {
//     console.log('The strings are similar.');
// }
// else {
//     console.log('The strings are not similar.');
// }



// const string1 = 'JAVASCRIPT PROGRAM';
// const string2 = 'javascript program';
// const pattern = new RegExp(string1, "gi");
// const result = pattern.test(string2)
// if (result) {
//     console.log('The strings are similar.');
// }
// else {
//     console.log('The strings are not similar.');
// }



// const string1 = 'Javascript Program';
// const string2 = 'javascript program';
// const result = string1.localeCompare(string2, undefined, { sensitivity: 'base'});
// if(result == 0) {
//     console.log('The strings are similar.');
// }  else {
//     console.log('The strings are not similar.');
// }