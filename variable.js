// let firstName = "Ameesha"
// let lastName = "Patel" 

// let fullName = firstName + " " +  lastName

// console.log(fullName)



// let together = document.getElementById("together")
// let name = "Linda"
// let greeting = "Hi there"

// together.innerText = greeting + "," + " " + Linda + "!"


// let name = "Linda"
// let greeting = "Hi there"

// function greetLinda(){
//     console.log(greeting + "," + name + "!")
// }

// greetLinda()




// let myPoints =3

// function add3Points() {
//     myPoints += 3
// }

// function remove1Points(){
//     myPoints -= 1
// }

// add3Points()
// add3Points()
// add3Points()
// remove1Points()
// remove1Points()

// console.log(myPoints)


// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2

// let sumEl = document.getElementById("sum-el")

// function add(){
//     let result = num1 + num2
//     sumEl.textContent = "Sum:" + result
// }
// function subtract(){
//     let result = num1 - num2
//     sumEl.textContent = "Sum:" + result
// }
// function divide(){
//     let result = num1 / num2
//     sumEl.textContent = "Sum:" + result
// }
// function multiply(){
//     let result = num1 * num2
//     sumEl.textContent = "Sum:" + result
// }



// const player = "Annu"
// const opponent = "George"
// const game = "AmazingFighter"

// let points = 0
// let hasWon = false

// points += 100
// hasWon = true

// if (hasWon) {
//      console.log(`${player} got ${points} points and won the ${game} game!`)
// } else {
//     console.log(`The winner is ${opponent}! ${player} lost the game`)
// }




// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// function logItems(arr){
//     for(let i = 0; i< arr.length; i++){
//         console.log(arr[i])
//     }
// }

// logItems(myCourses)

// let box = document.getElementById("box")
// box.addEventListener("click", function(){
//    console.log("I want to open the box!")
// })


// function add(a,b){
//    function myAdd(){
//       const c = a + b;
//       return c;
//    }
//    return myAdd();
// }

// function main() {
//    const res = add(3,4);
//    const val = res();
//    console.dir(res);
// }
// main();


// var objs = [
//    {
//       name : 'One',
//       msg : 'Hello i am one'
//    },
//    {
//       name : 'Two',
//       msg : 'Hello i am two'
//    },
//    {
//       name : 'Three',
//       msg : 'Hello i am three'
//    },
// ];

// function main() {
//    objs.forEach((item) => {
//       const bt = document.createElement('button');
//       bt.innerHTML = item.name;
//       bt.onclick = getCallBack(item.msg);
//       document.body.appendChild(bt);
//    });
// }
// function getCallBack(arg){
//    return function() {
//       alert(arg)
//    }
// }
// main();


// var b1 = {
//    init(name) {
//       this.button = document.createElement('button');
//       this.button.innerHTML = name;
//       document.body.appendChild(this.button);
//    },

//    set width(width){
//       this.button.style.width = width + 'px';
//    },

//    set height(height){
//       this.button.style.height = height + 'px';
//    },

//    get width(){
//       return parseInt(this.button.style.width, 10);
//    },

//    get height(){
//       return parseInt(this.button.style.height, 10);
//    },
// }

// b1.init('click');
// b1.width = 100;



// class Button {
//    constructor(name) {
//       this.button = document.createElement('button');
//       this.button.innerHTML = name;

//       document.body.appendChild(this.button);
//    }

//    onClick(fn){
//       this.button.onclick = fn;
//    }
// }

// class GreenButton  extends Button{
//    constructor(name) {
//       super(name);
//    }

//    onClick(fn) {
//       this.button.onclick = function() {
//       super.onClick(function() {
//          this.button.style.background = 'green';
//          fn();
//       }.bind(this));
//    }
// }

// var b1 = new GreenButton('GButton');
// b1.onClick(function() {
//    console.log('Clicked');
// });

// var button = document.getElementById('hello');
// button.style.background = 'green';
// button.onClick = () => {
//    console.log(button.innerHTML);
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

 

