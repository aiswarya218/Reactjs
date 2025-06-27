// class Button{
//     constructor(name) {
//         this.button = documentcreateElement('button');
//         this.button.innerHTML = name;

//         document.body.appendChild(this.button);
//     }
// }

// var b1 = new Button('Hello');
// console.log(b1);
// console.log(typeof Button);

// function MyButton(name) {
//     this.button = document.createElement('button');
//     this.button.innerHTML = name;
//     document.body.appendChild(this.button);
// }

// MyButton.prototype.onClick = function (fn) {
//     this.button.onclick = fn;
// }
// var b2 = new MyButton('Yo!')
// b2.onClick(function () {
//     console.log('clicked');
// });
// console.log(b2);


// function MyButton(name) {
//     this.button = document.createElement('button');
//     this.button.innerHTML = name;
//     document.body.appendChild(this.button);
// }

// MyButton.prototype.onClick = function (fn) {
//     this.button.onClick = fn;
// }

// function MyGreenButton(name) {
//     MyButton.call(this, name);
// }

// console.log(Object.create(MyButton.prototype));
// MyGreenButton.prototype = Object.create(MyButton.prototype);
// MyGreenButton.prototype = function (fn) {
//    MyButton.prototype.onClick.call(this, () => {
//     this.button.style.background = 'green';
//     fn();
//    });
// }
// MyGreenButton.prototype.printme = () => {

//     console.log('hello');
// }

// var b2 = new MyGreenButton('Yo!')
// b2.onClick(function () {
//     console.log('clicked');
// });

// console.dir(MyGreenButton);
// console.dir(b2);
// b2.printme();


// var button = document.getElementById('mybutton');
// button.onClick = () => {
//     console.log('started click event');
//     var arr = [];
//     $.ajax({
//         url: 'http://jsonplaceholder.typicode.com/todos/1',
//         success: (data) => {
//             console.log('ajax1 started');
//             arr.push(data,title);
//             console.log('ajax1 ended');
//         },
//         async: false
//     });
//     $.ajax({
//         url: 'http://jsonplaceholder.typicode.com/todos/2',
//         success: (data) => {
//             console.log('ajax1 started');
//             arr.push(data,title);
//             console.log('ajax1 ended');
//         },
//         async: false
//     });
//     console.log('ended click event');
// }

// console.log('started');

// let a, b, result;

// try {
//     console.log('on try');
//     a = getVal1();
//     b = getVal2();
//     result = processValues(a, b);

// } catch(e) {
//     console.log(e instanceof Error);
//     result = 0;
// }

// console.log(result);
// console.log('ended');
// function getVal1() {
//     return 12;
// }

// function getVal2() {
//     console.log('inside getVal2');
//     return 22;
// }

// function processValues(a, b) {
//     return a + b;
// }



console.log('Started');
getValue();
console.log('Ended');

function getValue() {
    fetch('http://jsonplaceholder.typicode.com/todos/1')
    .then((data) => {
        console.log(data);
    });

async function getValue() {
    fetch('http://jsonplaceholder.typicode.com/todos/1')
    .then((data) => {
        return data.json();
    })
    .then((data) => {
        console.log(data);
    });

const data = await fetch('http://jsonplaceholder.typicode.com/todos/1');
const jsonData = await data.json();
console.log(jsonData);
return jsonData;
}
}
