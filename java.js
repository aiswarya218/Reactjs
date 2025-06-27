// console.log(`The value of b after swapping: ${b}`);


// const number = parseInt(prompt('Enter an integer: '));
// for(let i = 1; i < 10; i++) {
//     const result = i * number;
//     console.log(`${number} * ${i} = ${result} `);
// }


// const number = parseInt(prompt('Enter an integer: '));
// const range = parseInt(prompt('Enter a range: '));

// for(let i = 1; i<=range; i++) {
//     const result = i * number;
//     console.log(`${number} * ${i} = ${result}`);
// }


// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerms;

// console.log('Fibonacci Series:');

// for ( let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerms = n1 + n2;
//     n1 = n2;
//     n2 = nextTerms;
// }


// function fn1() {
//     var number = 12;
//     console.log(number);
// }

// function fn2() {
//     console.log(number);
// }

// fn1();
// fn2();

// var button = document.getElementById('bye');
// button.style.background = 'red';
// button.onclick =() => {
//     console.log(button.innerHTML);
// }

// function main2() {
//     var button = document.getElementById('bye');s
//     button.style.background = 'red';
//     button.onclick = () => {
//         console.log(button.innerHTML);
//     }
// }
// main2();

// (function (a, b) {
//     console.log(a, b);
// }) (15,20);

// import * as libObj from './closure.js';

// console.log(libObj);

// const max = libObj.findMax([1,4,2]);
// console.log(max);


// const number = parseInt('Enter the number of terms: ');
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');
// console.log(n1);
// console.log(n2);

// nextTerm = n1 + n2;

// while (nextTerm <= number) {
//     console.log(nextTerm);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }



// function fibonacci(num) {
//     if(num < 2) {
//         return num;
//     }
//     else {
//         return fibonacci(num - 1) + fibonacci(num - 2);
//     }
// }

// const nTerms = prompt('Enter the number of terms: ');

// if(nTerms <= 0) {
//     console.log('Enter a positive integer: ');
// }
// else {
//     for(let i = 0; i < nTerms; i++) {
//         console.log(fibonacci(i));
//     }
// }



// function guessNumber() {
//     const random = Math.floor(Math.random() * 10) + 1;

//     let number = parseInt(prompt('Guess a number from 1 to 10:'));
//     while(number !== random) {
//         number = parseInt(prompt('Guess a number from 1 to 10:'));
//     }

//     if(number == random) {
//         console.log('You guessed the correct number.');
//     }
// }
 

// function textOnChange(arg) {
//     const label = document.getElementById('validation-label');
//     const error = validate(arg.value);
//     if (error) {
//         label.innerText = error;
//     }
//     else {
//         label.innerText = '';
//     }
// }

// function validate(value) {
//     const regex = /^\d{1,2}-\d{1-2}-\d{4}$/i;
//     const result = regex.test(value);
//     if(result) {
//         return '';
//     } 
//     else {
//         return 'Invalid String';
//     }
// }


// const regex = /l{4,6}o$/i;
// const string = 'Hello';

// const result = regex.test(string);
// console.log(result);


// function test(...total) {
//     console.log(total);
//     const a = total.reduce((sum, current) => sum + current);
//     console.log(a);

// }

// const a = [11, 44, 64, 22, 66, 31, 98];
// test(a[0], a[1], a[2], a[3], a[4], a[5], a[6]);


// const email = "example@gmail.com";

// const regex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

// if(regex.test(email)) {
//     console.log("Valid email address");
// }
// else {
//     console.log("Invalid email address");
// }

// const str = "The year is 2025";
// const digits = str.match(/\d+/g);
// console.log(digits);

// const phone = "123-456-7890";
// const phoneRegex = /^\{3}-\d{3}-\d{4}$/;

// console.log(phoneRegex.test(phone));

// const pincode = "673592";
// const pinRegex = /^\d{6}$/;

// console.log(pinRegex.test(pincode));

// const str = "The price is 100 rupees";
// const regex = /\d+/;
// console.log(regex.test(str));
// console.log(str.match(regex));
// console.log(str.replace(regex, "200"));

// const input = "ABC-1234";
// const regex = /^[A-Z]{3}-\d{4}$/;

// console.log(regex.test(input));

// function sumAll(...numbers) {
//     let total = 0;
//     for ( let num of numbers) 
//     {
//         total += num;
//     }
//     return total;
// }

// console.log(sumAll(10, 20));
// console.log(sumAll(5, 10, 15, 20));



function greet(first, last, ...titles) {
    console.log(`Hello ${first} ${last}`);
    console.log("Titles", titles);
}

greet("Aiswarya", "M", "Developer","Engineer","Mentor");