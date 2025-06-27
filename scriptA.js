// import { addArray } from './script1.js';
// import { addArray as concatArray } from './script2.js';

import { jsx } from "react/jsx-runtime";

// const value = addArray([1,2,3]);
// const value2 = concatArray([1,2,3], [4,5,6]);
// console.log(value);
// console.log(value2);


// function junk(obj) {
//     const ret = {
//         ...obj,
//         test: "Test"
//     };
//     return ret;
// }

// const myObj ={
//     name: 'Code Malayalam'
// };

// var ret = junk(myObj);

// console.log(ret === myObj);


// const cache = {
//     name: 'Code Malayalam'
// };
// function getJson(url) {
//     if(cache) {
//         return cache;
//     }
//     return fetch(url)
//       .then((data) => {
//          return data.json();
//       })
// }
// function converToPromise(data) {
//     return new Promise((res, rej) => {
//         res(data);
//     });
// }



// getJson('http://jsonplaceholder.typicode.com/tools/1')
// .then((data) => {
//     console.log(data);
// })
// .catch((data) => {
//     console.log(data);
// })
// Promise.all([
//     getJson('http://jsonplaceholder.typicode/todos/1'),
//     getJson('http://jsonplaceholder.typicode/todos/2'),
//     getJson('http://jsonplaceholder.typicode/todos/3')
// ])
// .then((data) => {
//     console.log(data);

// });


// Promise.race([
//     getJson('https://jsonplaceholder.typicode.com/todos/1'),
//     getJson('https://jsonplaceholder.typicode.com/todos/2'),
//     getJson('https://jsonplaceholder.typicode.com/todos/3')
// ])
// .then((data) => {
//     console.log(data);
// });


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// let person1 = new Person("Jack", 26);
// let person2 = new Person("Tina", 33);

// person1.greet();
// person2.greet();


// let person = {
//     name: "Jack",
//     age : 29,
//     greet : function() {


//         console.log(`hello, my name is ${this.name} an i am ${this.age} years old.`)
//     }
// };

// person.greet();


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`hello, my name is ${this.name} and i am ${this.age} years old.`);
//     }
// }
//         let person1 = new Person("Jack", 30);
//         let person2 = new Person("Tina", 33);

//         person1.greet();
//         person2.greet();


// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }
// var z = x();
// console.log(x);
// z();


// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// z();


function z() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {
           console.log(a, b);
        }
        a = 100;
        return y;
    }
}


// function z() {
//     var b = 900;
//     function x() {
//         var a = 7;
//         function y() {
//             console.log(a, b);
//         }
//         a = 100;
//         return y;
//     }
// }

// function z() {
//     var b = 900;
//     function x() {
//         var a = 7;
//         function y() {
//             console.log(a, b);
//         }
//         y();
//     }
//     x();
// }
// z();

// var x =7;
// function getName() {
//     console.log("Namaste JavaScript");
// }
// getName();
// console.log(x);
// console.log(getName);



// const greet = function(name) {
//     return "Hello, " + name;
// };

// function callWithName(fn, name) {
//     return fn(name);
// }
// console.log(callWithName(greet, "Aiswarya"));

// function multiplier(x) {
//     return function(y) {
//         return x * y;
//     }
// }
// const double = multiplier(2);
// console.log(double(5));

// const greet = function(name) {
//     return "Hello, " + name;
// };
// function callWithNmae(fn, name) {
//     return fn(name);
// }
// console.log(callWithName(greet, "Aiswarya"));
// function multiplier(x) {
//     return function(y) {
//         return x * y;
//     }
// }
// const double = multiplier(2);
// console.log(double(5));


// let myNumber = 42;
// function greet(name) {
//     return "Hello, " + name;
// }
// console.log(greet("Aiswarya"));


let globalVar = "I am global";
function myFunction() {
    let functionVar = "I am inside a function";
    if (true) {
        let blockVar = "I am inside a block";
        console.log(globalVar);
        console.log(functionVar);
        console.log(blockVar);
    }
    console.log(globalVar);
    console.log(functionVar);
}
myFunction();
console.log(globalVar);