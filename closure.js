// function add(a, b){
//     function myAdd() {
//         const c = a + b;
//         return c;
//     }
//     return myAdd;
// }

// function main(){
//     const res = add(3, 4);
//     const val = res();
//     console.log(val);
// }
// main();


// var objs = [
//     {
//         name: 'One',
//         msg: 'Hello I am one'
//     },
//     {
//         name: 'Two',
//         msg: 'Hello I am two'
//     },
//     {
//         name: 'Three',
//         msg: 'Hello I am three'
//     },
// ];

// function main() {
//     objs.forEach((item) => {
//         const bt = document.createElement('button');
//         bt.innerHTML = item.name;
//         bt.onclick = myCallback;
//         document.body.appendChild(bt);
//     });
// }
// function myCallback(arg) {
//     return function(){
//        alert(arg)
//     }
// }
// main();


// var objA = {
//     a: 1,
//     b: 2,
//     c: 'Hello'
// }
// var objB = {
//     a1: 1,
//     b1: 2,
//     c: 'Hello 2'
// }
// var obj2 = {
//     ...objA,
//     ...objB,
//     Z:32
// };

// console.log(obj2);


// var obj1 = {
//     a : 1,
//     b : 2,
//     c : {
//         name : 'Seetha',
//         age : 45
//     }
// }

// var obj2 = {...obj1};
// obj1.d = 44;
// obj1.c.name = 'Raman';

// console.log(obj1,obj2);

// var arr = [1, 2, 33, 49, 15, 6];
// var a = Math.max(...arr);
// console.log(a);


// const obj1 = {
//     name : 'Code Malayalam',
//     place : ' Kerala',
//     rank : 1000
// };

// const marks = [1,4,6,7,12];

// function myFunction(){
//     const {
//         name,
//         ...others
//     } = obj1;

//     console.log(name, others);
// }

// myFunction();


// var obj1 = {
//     name : 'Code Malayalam',
//     place : 'Kerala'
// }
// var obj2 = {
//     name : 'Bob',
//     place : 'America'
// }

// function abc(){
//     var {
//         name,
//         place
//     } = obj1;
//     var {
//         name : name2,
//         place : place2
//     } = obj2;

//     console.log(name, place, name2, place2);
// }

// abc();


// function verify() {
//         document.getElementById("txt").innerHTML = "";
//     if( document.getElementById("pass").value != document.getElementById("confirm").value) {
//         document.getElementById(txt).innerHTML += "Password and confirm password must be same.";
//     }
//     if(document.getElementById("pass").value.length < 8)
//     {
//         document.getElementById("txt").innerHTML += "<br/> Password must be greater than 8 characters."
//     }


// let Obj = {
//     "1_prop": "1_val",
//     "2_prop": "2_val",
//     "3_prop": "3_val"
// };

// console.log(JSON.stringify(Obj));
// function GFG_Fun() {
//     console.log("The last key = '" +
//         Object.keys(Obj)[Object.keys(Obj).length - 1]
//         + "' Value = '"
//         + Obj[Object.keys(Obj)
//             [Object.keys(Obj).length - 1]]
//         + " ' ");
// }
// GFG_Fun()

// const name = 'My Array Library';

// const options = {
//     version : '1.1',
//     author : 'Code Malayalam'
// }

// function addAll(arr = []) {
//     log('addAll');
//     return arr.reduce((total, item) => total + item, 0)
// }

// export default function findMax(arr = []) {
//     log('findMax');
//     return Math.max(...arr);
// }

// function log(val) {
//     console.log('INSIDE', val);
// }

// export {
//     name as LibraryName,
//     options,
//     addAll,
//     findMax
// };


// function calculateArea(width = 10, height = 5) {
//     return width * height;
// }

// console.log(calculateArea(4, 3));
// console.log(calculateArea(4));
// console.log(calculateArea());


// function getUser() {
//     return "Anonymous";
// }

// function greetUser(user = getUser()) {
//     console.log(`Welcome, ${user}!`);
// }

// greetUser("Aiswarya");
// greetUser();





//   function fetchUser(id) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`Fetched user ${id}`);
//             resolve({ id, name: "Mano"});
//         }, 1000);
//     });
//   }    
  
//   function fetchPosts(user) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`Fetched posts for $;{user.name}`);
//             resolve(["Post 1", "Post 2"])
//         }, 1000)''
//     });
//   }

//   fetchUser(1)
//    .then(user => fetchPosts(user));
//    .then(posts => console.log("Posts:", posts))
//    .catch(err => console.error("Error:", err)); 



//     async function loadUserData() {
//     try {
//         const user = await fetchUser(1);
//         const posts = await fetchPosts(user);
//         console.log("Posts:", posts);
//     }
//     catch (error) {
//         console.error("Error : ", error);
//     }
//    }

//    loadUserData(); 

//    async function loadUserData() {
//     try {
//         const user = await fetchUser(1);
//         const posts = await.fetchPosts(user);
//         console.log("Posts:", posts);
//     }
//     catch(error) {
//         console.error("Error : ", error);
//     }
//    } 


let myPoints = 3
function add3Points() {
    myPoints += 3
}
function remove1Points() {
    myPoints -= 1
}
add3Points()
add3Points()
add3Points()
remove1Points()
remove1Points()
console.log(myPoints)

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")

function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum:" + result 
}
function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Sum:" + result
}
function divide() {
    let result = num1 / num2
    sumEl.textContent = "Sum:" + result
}
function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Sum:" + result
}