// myFunction(100);
// fn(200);

// function myFunction(val) {
//     console.log("Hello Me ", val);
// }
// const fn = function(val) {
//     console.log("Hello World = ", val);
// }

// const fn = function (a,b) {
//     return a * b;
// }

// const fn2 = (a, b) => a + b;
// const add = fn2(3, 2)
// const mult = fn(3, 2);

// console.log(add, mult);

// const obj = {
//     a: 100,
//     b: 200,
//     myFun: function() {
//         return this.a + this.b;
//     }
// }
// console.log(obj.myFun());

// const myObj = {
//     a: 1,
//     b: 2,
//     c: function() {
//         console.log(this);
//     }
// };
// myObj.c = myObj.c.bind(myObj);

// const yourObj = {
//     k : 12,
//     j : 22
// };

// var aa = myObj.c;
// myObj.c()



// class MyClass {
//     myFunction = () => {
//         console.log(this)
//     }
// }
// const myc = new MyClass();

// const k = myc.myFunction;
// k()


// function one() {
//     var a = {
//         value: 100
//     };
//     throw(a);
//     console.log('one', a.value);
// }

// function two(a){
//     a.value = a.value + 1;
//     console.log('two', a.value);
// }
//    one();      

// console.log('started');

// $.ajax(
//     {
//         type:"GET",
//         url: 'http://jsonplaceholder.typicode.com/todos/1',
//         success: function(msg){
//             console.log(msg);
//         },
//         error: function(xhr, statusText) {
//             console.log(statusText);
//         },
//     });

//     const pr = myFetch('http://jsonplaceholder.typicode.com/todos/1');

//     function buttonClick() {
//         console.log('clicked');
//         pr.then((data) => {
//             console.log(data);
//         }, (err) => {
//             console.log(err);
//         });
//     }
// console.log('ended');


// console.log('Requesting 1');
// const pr = myFetch('http://jsonplaceholder.typicode.com/todos/1');

// pr.then((data) => {
//     console.log(data);

//     console.log('Requesting 2');
//     const pr = myFetch('http://jsonplaceholder.typicode.com/2');

//     pr.then((data) => {
//         console.log(data);

//         console.log('Requesting 3');
//         const pr = myFetch('http://jsonplaceholder.typicode.com/todos/3');

//         pr.then();
//     });
// });


// import {test1} from './button.js';

// const name = 'My Array Library';

// const options = {
//     version : '1.1',
//     author : 'Code Bro'
// }

// function addAll(arr = []) {
//     log('addAll');
//     return arr.reduce((total, item) => total + item, 0);
// }

// function findMax(arr = []) {
//     log('findMax');
//     return Math.max(...arr);
// }
// function log(val) {
//     console.log('INSIDE', val);
// }
// export default () => {
//     console.log('hello');
// }
// export {
//     name as LibraryName,
//     options,
//     addAll,
//     findMax,
//     test1
// };

// export * as myName from './variable.js';



// function textOnChange(arg) {
//      const label = document.getElementById('validation-label');
//      const error = validate(arg.value);
//      if (error) {
//         label.innerText = error;
//      } else {
//         label.innerText = '';
//      }
// }

// function validate(value) {
//     const regex = /^(?:[012]?\d|3[01])-([0]?\d|1[012])-(\d{4})$/i;
//     const result = value.match(regex);
//     console.log(result);
//     if(result === null) {
//         return 'Invalid String';
//     } else {
//         return '';
//     }
// }


// var button = document.getElementById('hello');
// button.style.background = 'green';
// button.onClick = () => {
//     console.log(button.innerHTML);
// }

getJson('http://jsonplaceholder.typicode.com/todos/1')
     .then((data) => {
        console.log(data);
     })
     .catch((data) => {
        console.log(data);
     })

Promise.all([
    getJson('http://jsonplaceholder.typicode.com/todos/1'),
    getJson('http://jsonplaceholder.typicode.com/todos/2'),
    getJson('http://jsonplaceholder.typicode.com/todos/3')
])
.then((data) => {
    console.log(data);
});

Promise.race([
    getJson('http://jsonplaceholder.typicode.com/todos/1'),
    getJson('http://jsonplaceholder.typicode.com/todos/2'),
    getJson('http://jsonplaceholder.typicode.com/todos/3')
])
.then((data) => {
    console.log(data);
});