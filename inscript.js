// //Async/Await Version

import { createContext } from "react";

// const axios = require('axios');

// const BASE_URL = 'http://code-malayalam.github.io/school-test-api/';

// async function getTotalStudentsAs(clsName) {
//     try{
//         const classData = await axios(`${BASE_URl}/class/${clsName}.json`);
//         const classTeacher = classData.data.classTeacher;

//         const staffData = await axios(`${BASE_URL}/staff/${classTeacher}.json`);
//         const classes = staffData.data.classes;

//         const promiseArr = classes.mao((element) => {
//             return axios(`${BASE_URL}/class/${element}.json`);
//         });

//         const dataArr = await Promise.all(promiseArr);

//         const totalStudents = dataArr.reduce((total, item) =>{
//             return total + item.data.numbersOfStudents;
//         }, 0);

//             return totalStudents;
//     }
//         catch (e) {
//             console.error('Error in getTotalStudentsAs:', e);
//             throw e;
//         }
    
//     }



//     //Promise-based Version

// function getTotalStudentsPr(clsName, success, failure) {
//     axios(`${BASE_URL}/class/${clsName}.json`)
//     .then((response) => {
//         const classTeacher = response.data.classTeacher;
//         return axios(`${BASE_URL}/staff/${classTeacher}.json`);
//     })
//     .then((response) => {
//         const classes = response.data.classes;
//         const promiseArr = classes.map((element) => {
//             return axios(`${BASE_URL}/class/${element}.json`);
//         });
//         return Promise.all(promiseArr);
//     })
//     .then((responses) => {
//         const total = responses.reduce((sum, item) => {
//             return sum + item.data.numberOfStudents;
//         }, 0);
//         success(total);
//     })
//     .catch((err) => {
//         failure(err);
//     });
// }


// //Callback-based Version

// function getTotalStudents(clsName, success, failure) {
//     getTotalStudents(`${BASE_URL}/class/${clsName}.json`, (classData) => {
//         const classTeacher = classData.classTeacher;

//     getTotalStudents(`${BASE_URL}/staff/${classTeacher}.json`, (staffData) => {
//         const classes = staffData.classes;
//         let count = 0;
//         let sum = 0;
//         let hasError = false;

//         classes.forEach((element) => {
//             getTotalStudents(`${BASE_URL}/class/${element}.json`, (classInfo) => {
//                 sum += classInfo.numberOfStudents;
//                 count++;

//                 if (count === classes.length && !hasError) {
//                     success(sum);
//                 }
//             }, (err) => {
//                 if (!hasError) {
//                     hasError = true;
//                     failure(err);
//                 }
//             });
//         });
//     }, failure);
//  }, failure);
// }


//defined and undefined
const fruits = ["apple", ,"banana"];
console.log("fruits[1] =", fruits[1]);
var score;
console.log("score =", score);
function showDetails(name, age) {
    console.log("Name:", name);
    console.log("Age:", age);
}
showDetails("Anusree");
const user = { username: "admin"};
if (user.password === undefined) {
    console.log("Password is not set");
}
user.password = "1234";
if (user.password != undefined) {
    console.log("Password is now defined:", user.password);
}



// var a;
// console.log(a);
// a = 10;
// if (a === undefined) {
//     console.log("a is undefined");
// }
// else {
//     console.log("a is not undefined");
// }

// var a;
// console.log(a);
// a = 10;
// if (a === undefined) {
//     console.log("a is undefined");
// } else {
//     console.log("a is not defined");
// }


// var a;
// console.log(a);
// a = 10;
// console.log(a);
// a = "Hello World!";
// console.log(a);
// a = undefined;
// console.log(a);

// let a;
// const b;
// b = 1000;
// a = 10;
// console.log(a);


// console.log(y);
// let a = 1900;
// const b = 100;
// a = 10;
// console.log(a);



// const button = document.getElementsByid("myButton");
// button.addEventListener("click", function() {
//     document.getElementById("output").textContent = "You clicked the button!";
// });



// function checkScope() {
//     let output = "";
//     {
//         let a = 10;
//         const b = 20;
//         var c = 30;
//         output += "Inside block:\n";
//         output += "a = " + a + "\n";
//         output += "b = " + b + "\n";
//         output += "c = " + c + "\n";
//     }
//     output += "\nOutside block:\n";

//     try {
//        output += "a = " + a + "\n"; 
//     }
//     catch (err) {
//         output += "a is not accessible (let is block scoped)\n";
//     }
//     try {
//         output += "b = " + b + "\n";
//     }
//     catch (err) {
//         output += "b is not accessible (const is block scoped)\n";
//     }

//     output += "c = " + c + " (var is NOT block scoped)\n";
//     document.getElementById("output").textContent = output;
// }


// function outerFunction() {
//     let outerVariable = "I am from outer function";
//     function innerFunction() {
//         console.log(outerVariable);
//     }
//     return innerFunction;
// }
// const myClosure = outerFunction();
// myClosure();


// function createCounter() {
//     let count = 0;
//     return function() {
//         count++;
//         console.log("Current count:", count);
//     };
// }
// const counter = createCounter();
// counter();
// counter();
// counter();


// function outer() {
//     let message = "Hello from outer!";
//     function inner() {
//         console.log(message);
//     }
//     return inner;
// }
// const myFunc = outer();
// myFunc();


// function createSecret() {
//     let secret = "JavaScript Rocks!";
//     return {
//         getSecret: function() {
//             return secret;
//         },
//         setSecret: function(newSecret) {
//             secret = newSecret;
//         }
//     };
// }
// const secretHolder = createSecret();
// console.log(secretHolder.getSecret());
// secretHolder.setSecret("New secret value");
// console.log(secretHolder.getSecret());



// //closure with settimeout
// function greetLater(name) {
//     let message = "Hello, " + name + "!";

//     setTimeout(function() {
//         console.log(message);
//     }, 2000);
// }
// greetLater("Ananya");



// //loop without closure fix
// for (var i = 1; i <= 3; i++) {
//     setTimeout(function() {
//         console.log("Count:", i);
//     }, i * 1000);
// }

// for (let i = 1; i <= 3; i++) {
//     setTimeout(function() {
//         console.log("Count:", i);
//     }, i * 1000);
// }

// for (var i = 1; i <= 3; i++) {
//     (function(currentI) {
//         setTimeout(function() {
//             console.log("Count:", currentI);
//         }, currentI * 1000);
//     })(i);
// }


let message = "Hello, World!";
console.log(message);

let text = "javascript";
console.log(text.length);

let firstName = "George";
let lastName = "Mathew";
let fullName = firstName + " " + lastName;
console.log(fullName);

let name = "Answara";
let greeting = `Hi, ${name}! Welcome to JavaScript`;
console.log(greeting);

let str = "Hello";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let lang = "JavaScript";
console.log(lang.slice(0, 4));

let sentence = "I love cauliflowers, mushrooms, paneer and brocoli";
let newSentence = sentence.replace("brocoli","lentils");
console.log(newSentence);

let quote = "All is well";
console.log(quote.includes("All"));

let names = "Anna, John, Leo";
let nameArray = names.split(",");
console.log(nameArray);

let messy = "   hello world   ";
console.log(messy.trim());

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));

function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}
console.log(isPalindrome("Madam"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));


function countCharacters(str) {
    return str.length;
}
console.log(countCharacters("Javascript"));

function countVowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
console.log(countVowels("Programming"));


function capitalizeWords(str) {
    return str.split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("hello world"));