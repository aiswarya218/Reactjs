// import React, {userState} from 'react'

// const initialState = [
//     {
//         name : 'house',
//         rooms : [
//             {
//                 name: 'room1',
//                 text: 'Room1'
//             }
//         ]
//     },
//     {
//         name: 'car',
//         text: '120'
//     }
// ];

// function RoomName(props) {
//     const {
//         data,
//         onChange
//     } = props;
//     return {
//         <div>
//             <div>Update Room Name</div>
//             <input value={data.text}onChange={onChange}/>
//         </div>
//     }
// }

// function CarName(props) {
//     console.log('CarName');
//     const {
//         data,
//         onChange
//     } = props;
//     return {
//         <div>
//         <div>Update Car Name</div>
//         <input value={data.text} onChange={onChange}/>
//         </div>
//     }
// }

// export default function Test() {

//     const [info,setInfo] = useState(initialState);

//     return {
//         // <div>
//         // <RoomName  data={info[0].rooms[0]} onChange={onRoomChange}/>
//         // <CarName data={info[1]} onChange={onCarChange}/>
//         // </div>

//         const newState = JSON.parse(JSON.stringify(state));
//         newState[0].rooms[0].text = evt.target.value;
//         return newState;
//     });

// }

// const onCarChange =(evt) => {
//     setInfo((state) => {
//         const newState = JSON.parse(JSON.stringify(state));
//         newState[1].text = evt.target.value;

//         return newState;

//     });
// }

// console.log(info);

// return {
//     <div>
//     <RoomName data={info[0].rooms[0]} onChange={onRoomChange}/>
//     <CarName data={info[1]} onChange={onCarChange}/>


//    const obj1 = {
//      age: 100,
//    };
//    const obj2 = {
//      age: 30,
//    };
//       function add(a,b) {

//       }


//    (obj1 + obj2);


// const obj1 ={val:1};
// const obj2 = {val:2};

// function add(obj1, obj2){
//     return add;
// }

// const result = add(obj1,obj2);
// console.log(result);

// const obj1 = {
//     val : 1
// };
// const obj2 = {
//     val : 2
// };

// function add(obj1, obj2){
//     return add;
// }
// const result = add(obj1, obj2);
// console.log(result);


// const name = 'My Array Library';

// const options = {
//     version : '1.1',
//     author : 'Code Malayalam'
// }

// export function addAll(arr = []) {
//     log('addAll');
//     return arr.reduce((total, item) => total + item, 0)
// }

// export function findMax(arr = []) {
//     log('findMax');
//     return Math.max(...arr);
// }

// function log(val) {
//     console.log('INSIDE', val);
// }



// import {test1} from './lib2.js';

// const name = 'My Array Library';

// const options {
//     version : '1.1';
//     author : 'Code Malayalam';
// }

// function addAll(arr = []) {
//     log('addAll');
//     return arr.reduce((total, item) => total + item, 0)
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
// };

// export * as myName from './lib2.js';


// import {createButton} from './widget.js';

// createButton('Feature 1', () => {
//     alert('feature 1');
// });
// createButton('Feature 2',() => {

//     import('./feature2.js');
//     createButton('Start Disco', changeBg);
//     createButton('Stop Disco', stopChangingBg);
// });

// await import('./feature2.js');


// const radius = [3, 1, 2, 4];
// const area = function (radius) {
//     return Math.PI * radius * radius;
// };
// const circumference = function (radius) {
//     return 2 * radius;
// };
// const diameter = function (radius) {
//     return 2 * radius;
// };
// Array.prototype.calculate = function (arr, logic) {
//     const output = [];
//     for (let i = 0; i < arr.length; i++) {
//         output.push(logic(arr[i]));
//     }
//     return output;
// };
// // const calculate = function (radius, logic) {
// //     const output = [];
// //     for (let i =0; i < radius.length; i++) {
// //         output.push(logic(radius[i]));
// //     }
// //     return output;
// // };
// // console.log(calculate(radius, area));
// // console.log(calculate(radius, circumference));
// // const calculateArea = function (radius) {
// //     const output = [];
// //     for (let i = 0; i < radius; i++) {
// //         output.push(Math.PI * radius[i] * radius[i]);
// //     }
// //     return output;
// // };

// console.log(radius.map(area));

// console.log(calculate(radius, area));
// // console.log(calculate(radius, circumference));
// // console.log(calculate(radius, diameter));



// const arr = [5, 1, 3, 2, 6];
// function greaterThan4(x) {
//     return x > 4;
// }
// const output = arr.filter(isEven);
// console.log(output);


// const arr = [5, 1, 3, 2, 6];
// function findSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// console.log(findSum(arr));
// const output = arr.reduce(function (acc, curr) {
//     acc = acc + curr;
//     return acc;
// }, 0);
// console.log(output);


// const users = [
//     { firstName: "akshay", lastName: "sajini", age: 26},
//     { firstName: "donald", lastName: "trump", age: 75},
//     { firstName: "elon", lastName: "musk", age:50},
//     { firstName: "deepika", lastName: "padukone", age:34},
// ];

// acc = { 26 : 1, 75 : 1, 50 : 1 }

// const output = users.reduce(function (acc, curr) {
//     if (acc[curr.age]) {
//         acc[curr.age] = ++acc[curr.age];
//     }
//     else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {});
// console.log(output);

// const output = 

// users.filter((x) => x.age < 30)
// .map((x) => x.firstName);
// console.log(output);

// setTimeout(function () {
//     console.log("timer");
// }, 500);
// function x(y) {
//     console.log("x");
// }
// x(function y() {
//     console.log("y");
// });




// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers
//       .filter(num => num % 2 === 0)
//       .map(num => num * 2)
//       .reduce((acc, num) => acc + num);
// console.log(result);

// var a = 10;
// function b() {
//     var x = 10;
// }
// console.log(window.a);
// console.log(a);
// console.log(x);


var a;
console.log(a);
a = 10;
if (a === undefined) {
    console.log("a is undefined")
}
else {
    console.log("a is not undefined");
}