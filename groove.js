// (function (a, b) {
//     console.log(a,b);
// })(12,20);

const { useLayoutEffect } = require("react");
const { jsx } = require("react/jsx-runtime");


$.ajax({
    type : 'GET',
    url : 'http://jsonplaceholder.typicode.com/todos/1',
    success : (msg) => {
        console.log(msg);
    },
    error : (xhr, statusText) => {
        console.log(statusText);
    },
});
console.log('ended');

$.ajax({
    type : 'GET',
    url : 'http://jsonplaceholder.typicode/todos/1',
    success : (msg) => {
        console.log(msg);
    },
    error : (xhr, statusText) => {
        console.log(statusText);
    },
});
console.log('ended');

$.ajax({
    type : 'GET',
    url : 'http://jsonplaceholder.typicode/todos/1',
    success : (msg) => {
        console.log(msg);
    },
    error : (xhr, statusText) => {
        console.log(statusText);
    },
});
console.log('ended');

$.ajax({
    type : 'GET',
    url : 'http://jsonplaceholder.typicode/todos/1',
    success : (msg) => {
        console.log(msg);
    },
    error : (xhr, statusText) => {
        console.log(statusText);
    },
});
console.log('ended');

$.ajax ({
    type : 'GET',
    url : 'http://jsonplaceholder.typicode/todos/1',
    success : (msg) => {
        console.log(msg);
    },
    error : (xhr, statusText) => {
        console.log(statusText);
    },
});
console.log('ended');



