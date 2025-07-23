// function average(a = getDefault(), b = 0){
//     console.log(a, b);
//     const avg = (a+b) / 2;
//     return avg;
// }

// function getDefault() {
//     return 100;
// }

// const avg = average(2);
// console.log(avg);


// function test() {
//     const arr =[11, 22, 33, 43, 22];
//     const [a, b, c, d, ...rest] = arr;

//     console.log(a, rest);
// }
// test();



// function test(...total) {
//     const a = total.reduce((sum, current) => sum + current;
//     console.log(a);
// }

// const a = [11,44,64,27,66,5,100];
// test(...a);



// function test({name, age}) {
//     console.log(name, age);
// }
// const obj = {
//     name : Parvana,
//     age : 18
// }
// test(obj);


// function test() {
//     console.log(testVar);
//     let testVar;
//     testVar = 12;

//     let testVar;
//     let testVar;
//     let testVar;
// }
// test();


// function test() {
//     const a = [];
//     a.push(12)
//     console.log(a);
// }

// test();

// function test() {
//     let a = 20;
//     if(true) {
//         let a = 100;
//     }
//     console.log(a);
// }
// test();

// function test() {
//     var testVar;
//     console.log(testVar);
//     testVar = 12;
// }
// test();


// var a = 10;
// var b = false;
// var c = 'Codes Bro';
// var d = ['Code', 'Malayalam'];
// var e = {
//     name : 'Codes Bro',
//     age : 25,
//     topic : ['Javascript', 'Python', 'React', 'git', 'aws'],
//     caption : 'Keep calm and program'
// };
// // var jsonE = 
// //     {
// //         name : 'Codes Bro',
// //         age : 25,
// //           topic : ['Javascript', 'Python', 'React', 'git', 'aws'],
// //           caption : 'Keep calm and program'
// //     };

// var f = null;

// var json = JSON.stringify(e);
// console.log(json);


// let Person = {
//     name : "Sreesh",
//     age :24
// }

// console.log('name' in Person)
// console.log('toString' in Person)
// console.log('gender' in Person)



// import React, { useState, useCallback } from 'react';
// import { createStore } from 'redux';
// import produce from 'immer';

// const initialState = {
//     value : 0
// };

// function appReducer(prevState = initialState, action) {
//     switch (action.type) {
//         case 'increment' :
//          return {
//             ...prevState,
//             value: prevState.value + 1
//          };
//          case 'decrement' :
//           return {
//             ...prevState,
//             value: prevState.value - 1
//           };

//           default:
//              return prevState
//     }
// }

// const store = createStore(appReducer);


//  const [info, setInfo] = useState(initialState);

// const onRoomChange = (evt) => {

//     setInfo((state) => {

//         const newState = produce(state, (draft) => {
//             draft[0].rooms[0].text = evt.target.value;
//         });

//         return newState;
//     });
// }

// const onCarChange = useCallback((evt)  => {
//     setInfo((state) => {
//         const newState = produce(state, (draft) => {
//             draft[1].text = evt.target.value;
//         });
//         return newState;
//     });
// }, []);

// console.log(info);

//  return (
//     <div>
//       <div>
//         <div>Update Room Name</div>
//         <input value={info[0].rooms[0].text} onChange={onRoomChange} />
//       </div>
//       <div>
//         <div>Update Car Name</div>
//         <input value={info[1].text} onChange={onCarChange} />
//       </div>
//     </div>
//   );
// }


