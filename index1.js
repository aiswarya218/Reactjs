// let errorParagraph = document.getElementById("error")
// console.log(errorParagraph)



// function purchase(){
//     console.log("button clicked")
//     errorParagraph.textContent = "Something went wrong, please try again"
// }


// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

// largeCountries.pop()
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China")
// console.log(largeCountries)

// let dayOfMonth = 13
// let weekday = "Friday"

// if (dayOfMonth === 13 && weekday === "Friday"){
//     console.log("fear emoji")
// }


// let hands =["rock", "paper", "scissor"]
//    function getHand(){
//        let randomIndex = Math.floor( Math.random() * 3)
//        return hands[randomIndex]
//    }
// console.log( getHand() )

// let basePrice = 500
// let discount = 200
// let shippingCost = 20
// let shippingTime = "5-20 days"
// shippingCost = 15
// shippingTime = "10-25 days"

// let fullPrice = basePrice - discount + shippingCost
// console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)

// var obj = {
//     name : 'Alice',
//     mark : 77,
//     place : 'Wayanad',
//     subject : {
//         teacher : 'John'
//     }
// }

// var arr = [
//     {
//         name : 'Songsi',
//         mark : 96,
//         place : 'Ernakulam',
//         subject : {
//             teacher : 'Lara'
//         }
//     }
//     ,43,67];

// var[{
//     subject: {
//         teacher
//     }
// }] = arr;

// console.log(teacher);



// var obj = {
//     name : 'Sophia',
//     mark : 55,
//     place : 'Kannur',
// }
// var {
//     subject : {
//         teacher
//     } = {}
// } = obj;

// console.log(teacher);


// var student1 = {
//     name : 'Manav',
//     dob : 2004,
//     getAge: function () {
//         return new Date().getFullYear() - this.dob;
//     },
//     getName: function() {
//         return this.name;
//     }
// };

// var student2 = {
//     name: 'Manoharan',
//     dob: 2004,
//     getAge: function() {
//         return new Date().getFullYear() - this.dob;
//     },
//     getName: function() {
//         return this.name;
//     }
// };

// var student3 = {
//     name: 'Arjun',
//     dob: 2003,
//     getAge: function() {
//         return new Date().getFullYear() - this.dob;
//     },
//     getName: function() { 
//         return this.name;
//     }
// };

// console.log(student1.getName(), student1.getAge());
// console.log(student2.getName(), student2.getAge());
// console.log(student3.getName(), student3.getAge());


// var student1 = {
//     name : 'Alexi',
//     yob : 1997,
//     getAge : function () {
//         return new Date().getFullYear() - this.yob;
//     },
//     getName : function() {
//         return this.name;
//     }
// };

// var student2 = {
//     name : 'Sunny',
//     yob : 200,
//     getAge : function() {
//         return new Date().getFullYear() - this.yob;
//     },
//     getName : function() {
//         return this.name;
//     }
// };
// var student3 = {
//     name: 'Singh',
//     yob : 175,
//     getAge : function() {
//          return new Date().getFullYear() - this.yob;
//     },
//     getName : function() {
//         return this.name;
//     }
// }


// class Student {
//     name;
//     yob;
//     constructor(name, yob) {
//         this.name = name;
//         this.yob =yob;
//     }

//     static printMinYob(...args) {
//         var arr = args.map((item => DataTransferItemList.yob));
//         console.log(Math.min(...arr));
//     }

//     getAge() {
//         return new Date().getFullYear() - this.yob;
//     };
//     getName() {
//         return this.name;
//     };
// }

// var student1 = new Student('Alexy', 1996);
// var student2 = new Student('Miffy', 2001);
// var student3 = new Student('Daniela', 2004);

// console.log(student1, student1.getName(), student1.getAge());
// console.log(student2, student2.getName(), student2.getAge());
// console.log(student3, student3.getName(), student3.getAge());

// Student.printMinYob(student1, student2, student3);


// function main() {
//     var button = document.getElemenetById('hello');
//     button.style.background = 'green';
//     buttton.onclick = () => {
//         console.log(button.innerHTML);
//     }
// }
// main();


// (function () {
//     var button = document.getElementById('bye');
//     button.style.background = 'red';
//     button.onclick = () => {
//         console.log(button.innerHTML);
//     }
// });

// console.log('started');

// $.ajax({
//     type: 'GET',
//     url: 'http://jsonplaceholder.typicode.com/todos/1',
//     success: (msg) => {
//         console.log(msg);
//     },
//     error: (xhr, statusText) => {
//         console.log(statusText);
//     },
// });

// console.log('ended');



// const name = 'My Array Library';

// const options = {
//     version: '1.1',
//     author: 'Code Malayalam'
// }

// function addAll(arr = []) {
//     log('addAll');
//     return arr.reduce((total,item) => total + item, 0)
// }

// function findMax(arr = []) {
//     log('findMax');
//     return Math.max(...arr);
// }

// function log(val){
//     console.log('INSIDE' , val);
// }

// export {
//     name as LibraryName,
//     options,
//     addAll,
//     findMax
// };

// <html></html>
// import * as libObj from './variable.js';

// console.log(libObj)
// const max = libObj.findMax([1,4,2]);
// console.log(max);

const regexObj = /[k-z0-1]at/i;

const str1 = "Lulu is Claire's cat";
const str2 = "He is such a foodie";
const str3 = "He loves food, Chuchu and adventures";

var result1 = regexObj.test(str1);
console.log(result1);

var result2 = regexObj.test(str2);
console.log(result2);

var result3 = regexObj.test(str3);
console.log(result3);