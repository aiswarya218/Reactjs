function addArray(arr) {
    return arr.reduce((total, item) => total + item, 0);
}

const products = [
    {
        productName : 'Pen',
        price : 25
    },
    {
        productName : 'Book',
        price : 45
    }
];


document.body.innerHTML = products.map((item) => {
    return 
     <div className = "item">
       <h4>${item.productName}</h4>
       <div>Price : ${item.price}</div>
    </div>;
});


// function  average(a, b = a + 100) {
//     console.log(a, b);
//     const avg = (a + b) / 2;
//     return avg;
// }

// function getDefault() {
//     return 100;
// }

// const avg = average(10);
// console.log(avg);



// function test() {
//     console.log(testVar);
//     testVar = 12;
//     var testVar;
//     console.log(testVar);
// }
// test();


// function test() {
//     const arr = [11, 33, 43, 22];
//     const [a, b, ...rest] = arr;

//     console.log(a, b, rest);
// }
// test();


// function test(...total) {
//     const a = total.reduce((sum, current) => sum + current
//     console.log(a);
// }
// const a = [11, 22, 33, 44, 55];
// test(...a);


// function test({name, age}) {
//     console.log(name, age);
// }

// const obj = {
//     name: 'Code Malayalam',
//     age  : 24
// }

// test(obj);

// function test({
//     name,
//     age
// }) {
//     const {
//         name,
//         age
//     } = a;
//     console.log(name, age);
// }

// const obj = {
//     name : 'Code Malayalam',
//     age : 2
// }

// test(obj);


// var a = 10
// var b = a;

// b = b + 1;

// console.log('a=', a);
// console.log('b=', b);

// console.log('started');

// let a, b, result;

// try{
//     console.log('on try');
//     a = getVal1();
//     b = getVal2();
//     result = processValues(a, b);
// }
// catch(e) {
//     console.log('on catch');
//     result = 0;
// } finally {
//     console.log('In finally');

// }

// console.log(result);
// console.log('ended');

// function getVal() {
//     return  12;
// }
// function getVal2 () {
//     console.log('Inside getVal2');
//     return 32;
// }
// function processValues(a, b) {
//     return a + b;
// }


// function textOnChange(arg) {
//     const label = document.getElementById('validation-label');
//     const error = validate(arg.value);
//     if(error) {
//         label.innerText = error;
//     } 
//     else {
//         label.innerText = '';
//     }
// }

// function validate(value) {
//     const regex = /^([012]?\d|3[01])-([0]?\d|1[012])-\d{4}$/i;
//     const result = value.match(regex);
//     console.log(result);
//     if(result === null) {
//         return 'Invalid String';
//     } else {
//         return '';
//     }
// }


// import {createButton} from './widget.js';

// createButton('Feature 1', () => {
//     alert('feature 1');
// });
// createButton('Feature 2', () => {
//     createButton('Start Disco', changeBg);
//     createButton('Stop Disco', stopChangingBg);
// });

// let isGreen = true;
// let handle = null;
// function changeBg() {
//     if(!handle) {
//         handle = setInterval(() => {
//             document.body.style.background = isGreen ? 'green' : 'blue';
//             isGreen = !isGreen;
//         }, 500);
//     }
// }

// function stopChangingBg() {
//     if(handle) {
//         clearInterval(handle);
//         handle = null;
//         document.body.style.background = 'none';
//     }
// }


// const jokeEl = document.getElementById('joke')
// const jokeBtn = document.getElementById('jokeBtn')

// jokeBtn.addEventListener('click', generateJoke)

// generateJoke()

// async function generateJoke()
//   const config = {
//     headers: {
//         Accept: 'application/json',
//     },
//   }

//   const res = await fetch('http://icanhazdadjoke.com', config) {

//   const data = await res.json()

//   jokeEl.innerHTML = data.jokeBtn
// }



// const contents = document.querySelectorAll('.content')
// const listItems = document.querySelectorAll('nav ul li')

// listItems.forEach((item, idx) => {
//     item.addEventListener('click', () => {
//         hideAllContents()
//         hideAllItems()

//         item.classList.add('active')
//         contents[idx].classList.add('show')
//     })
// })

// function hideAllContents() {
//     contents.forEach(content => content.classList.remove('show'))
// } 
// function hideAllItems() {
//     listItems.forEach(item => item.classList.remove('active'))
// }


// let result;

// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// switch(operator) {
//     case '+' :
//         result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;

//     case '-' :
//         result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;

//     case '*' :
//         result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;

//     case '/' :
//         result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;

//     default : 
//         console.log('Invalid Operator');
//         break;
// }


// function attachEventListeners() {
//     let count = 0;
//     document.getElementById("clickMe").addEventListener("click", function xyz() {
//         console.log("Button Clicked", ++count);
// });
// }
// attachEventListeners();


// setTimeout(function () {
//     console.log("timer");
// }, 5000);

// function x(y) {
//     console.log("x");
//     y();
// }
// x(function y() {
//     console.log("y");
// })


function a() {
    console.log("a called");
}
var b = function (param1, param2) {
    console.log("b called");
}
a();
b();
a
a
a
a

a
a
a
addArrays

satisfies
satisfies
satisfies
satisfies
satisfies
satisfies
satisfies
satisfies
self
else
else
else
else
else
else
else
EvalError
e

EvalErrore
e

e
e
e
MediaElementAudioSourceNode
e

ErrorEventeee
ErrorEventeee
e

ErrorEventeee
ErrorEvent
e

ErrorEvent
e
ErrorEventeee
ErrorEvent
ErrorEventeeeeee
ErrorEventeee
EvalErrore
EvalErroree
EvalError
EvalErrore
EvalErrore
EvalError
EvalError
EvalError
EvalError
EvalErroree
EvalError
ErrorEvent
EvalError
ErrorEvent
EvalErroreee

EvalError
EvalError
EvalError
EvalError
EvalError
EvalError
EvalError
EvalError
EvalError

EvalError
e
EvalErroreee
EvalErrore
EvalError
EvalErroreeee
ErrorEvent
EvalErroree
ErrorEvent
e

e
e

e
e

e
EvalError
exports

satisfiess

satisfiess


satisfiess
satisfies
satisfiesss
satisfiess
satisfiesss
satisfiess

satisfiesss
satisfies
satisfies
satisfiess
satisfies
speechSynthesis
speechSynthesis
satisfiessss
satisfiesss
satisfies
satisfies
satisfies
satisfies
e


ee

document
document

document
document
document

document
document
documentd

documentdd
documentddd

documentd

documentdd
document


