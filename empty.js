// function emptyArray(arr) {
//     arr = [];
//     return arr;
// }
// const array = [1, 2, 3];
// console.log(array);
// const result = emptyArray(array);
// console.log(result);

import { jsx } from "react/jsx-runtime";


// function emptyArray(arr) {
//     arr.splice(0, arr.length);
//     return arr;
// }
// const array = [1, 3, 5];
// console.log(array);
// const result = emptyArray(array);
// console.log(result);


// const message = 'hello world';
// const number = 10;
// function multiplyNumbers(a, b) {
//     return a * b;
// }
// export { message, number, multiplyNumbers };



// console.log(8);
// console.log('hello');
// const x = 'hello';
// console.log(x);
// function sayName() {
//     return 'Hello John'
// }
// console.log(sayName());
// const name = 'John';
// console.log('hello' + name);
// let obj = {
//     name: 'John',
//     age : 28
// }
// console.log(obj);



// function greet() {
//     console.log('Hello World');
// }
// setTimeout(greet, 3000);
// console.log('This message is hown first');

// function greet() {
//     console.log('HELLO WORLD');
// }
// setTimeout(greet, 3000);
// console.log('This message is shown first');


// function greet(x, y) {
//     console.log(x);
//     console.log(y);
// }
// setTimeout(greet, 3000, 'hello', 'world');
// console.log('This message is shown first');


// console.log(8);
// console.log('hello');
// const x = 'hello';
// console.log(x);
// function sayName() {
//     return 'Hello John';
// }
// console.log(sayName());
// const name = 'John';
// console.log('Hello ' + name);
// let obj = {
//     name : 'John',
//     age : 23
// }
// console.log(obj);


// function greet() {
//     return 'Hello';
// }
// function name(user, func)
// {
//     const message = func();

//     console.log(`${message} ${user}`);
// }
// name('John', greet);
// name('Jack', greet);
// name('Sara',  greet);



// function sum() {
//     if (arguments.length == 0) {
//         console.log('You have not passed any argument');
//     }
//     else if (arguments.length == 1) {
//         console.log('pass at least two arguments');
//     }
//     else {
//         let result = 0;
//         let length = arguments.length;

//         for(i = 0; i < length; i++) {
//             result = result + arguments[i];
//         }
//         console.log(result);
//     }
// }
// sum();
// sum(5);
// sum(5, 9);
// sum(1, 2, 3, 4, 5, 6, 7, 8, 9);



// function sum() {
//     switch (arguments.length) {
//         case 0 :
//             console.log('You have not passed any argument');
//             break;
//         case 1 :
//             console.log('Pass at least two arguments');
//             break;
//         default :
//         let result = 0;
//         let length = arguments.length;
//         for (i = 0; i < length; i++) {
//             result = result + arguments[i];
//         }
//         console.log(result);
//         break;
//     }
// }


// class Stack {
//     constructor() {
//         this.items = [];
//     }
//     add(element) {
//         return this.items.push(element);
//     }
//     remove() {
//         if(this.items.length > 0) {
//             return this.items.pop();
//         }
//     }
//     peek() {
//         return this.items[this.items.length - 1];
//     }
//     isEmpty() {
//         return this.items.length == 0;
//     }
//     size() {
//         return this.items.length;
//     }
//     clear() {
//         this.items = [];
//     }
// }
// let stack = new Stack();
// stack.add(1);
// stack.add(2);
// stack.add(6);
// stack.add(3);
// console.log(stack.items);

// stack.remove();
// console.log(stack.items);
// console.log(stack.peek());
// console.log(stack.isEmpty());
// console.log(stack.size());

// stack.clear();
// console.log(stack.items);



// function greet(name) {
//     return `Hello, ${name}!`;
// }
// function processUserInput(callback) {
//     const name = "Shaji";
//     console.log(callback(name));
// }
// processUserInput(greet);


// function greet(name) {
//     return `Hello, ${name}!`;
// }
// function processUserInput(callback)  {
//     const name = "Shaji";
//     console.log(callback(name));
// }
// processUserInput(greet);

// function multiplier(factor) {
//     return function (number) {
//         return number * factor;
//     };
// }
// const double = multiplier(2);
// console.log(double(5));



// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled);
// const evens = numbers.filter(num => num % 2 === 0);
// console.log(evens);
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum);


// const products = [
//     { name: "Laptop", price: 50000},
//     { name: "Phone", price: 35000},
//     { name: "Tablet", price: 40000},
// ];
// const affordable = products.filter(product => product.price < 40000);
// console.log(affordable);


// function sendEmail(messageFunction, name) {
//     const message = messageFunction(name);
//     console.log(`Sending email: ${message}`);
// }
// function welcomeMessage(name) {
//     return `Hi ${name}, welcome to our service!`;
// }
// sendEmail(welcomeMessage, "Shaji");

// function sendEmail(messageFunction, name) {
//     const message = messageFunction(name);
//     console.log(`Sending email: ${message}`);
// }
// function welcomeMessage(name) {
//     return `Hi ${name}, welcome to our service!`;
// }
// sendEmail(welcomeMessage, "Shaji");

// function sendEmail(messageFunction, name) {
//     const message = messageFunction(name);
//     console.log(`Sending email: ${message}`);
// }
// function welcomeMessage(name) {
//     return `Hi ${name}, Welcome to our service!`;
// }
// sendEmail(welcomeMessage, "Manon");

// const visitors = [
//     { name: "Anu", duration: 30},
//     { name: "Rahul", duration: 45},
//     { name: "Sita", duration: 20}
// ];
// const durations = visitors.mao(visitor => visitor.duration);
// console.log(durations);


// const cart = [
//     { item: "Book", price: 250},
//     { item: "Pen", price: 50},
//     { item: "Bag", price: 1200}
// ];
// const total = cart.reduce((sum, product) => sum + product.price, 0);
// console.log(`Total: ${total}`);

const katseyemembers  = [
    { name : "MANON", yob : 2002},
    { name : "SOPHIA", yob : 2003},
    { name : "DANIELA", yob : 2004},
    { name : "LARA", yob : 2005},
    { name : "MEGHAN", yob : 2006},
    { name : "YOONCHAE", yob : 2007}
];
console.log(katseyemembers);

// const users = [
//     { name : "Scoups", yob : 1995 },
//     { name : "Jeonghan", yob : 1995 },
//     { name : "Joshuva", yob : 1995},
//     { name : "Wonwoo", yob : 1996},
//     { name : "Jun", yob : 1996},
//     { name : "Hoshi", yob : 1996},
//     { name : "Woozi", yob : 1996},
//     { name : "Mingyu", yob : 1997},
//     { name : "The8", yob : 1997},
//     { name : "DK", yob : 1997},           
//     { name : "Vernon", yob : 1998},
//     { name : "Seungkwan", yob : 1998},
//     { name : "Dino", yob : 1999}
// ];
// console.log(sortedUsers);