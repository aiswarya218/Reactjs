// let player = {
//     name: "Naveen",
//     chips: "250",
//     sayHello: function() {
//          console.log("Hello!")
//     }
// }
// let cards =[]
// let sum = 0
// let hasBlackJack = false
// let isAlive = false
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")
// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + ": $" + player.chips

 
// function getRandomCard(){
    
//     let randomNumber = Math.floor(Math.random() * 13) + 1
//     if ( randomNumber > 10){
//         return 10
//     } else if (randomNumber === 1){
//         return 11
//     }else {
//         return randomNumber
//     }
// }
// function startGame() {
//     isAlive = true
//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()
//     cards = [firstCard, secondCard]
//     sum = firstCard + secondCard


//     renderGame()
// }

// function renderGame(){
//     cardsEl.textContent = "Cards:"
//     for(let i=0; i< cards.length;i++){
//         cardsEl.textContent += cards[i] + " "
//     }
//     sumEl.textContent ="Sum: " + sum
// if (sum<= 20){
//     message = "Do you want to draw a new card?"
// }else if(sum === 21){
//     message = "Wohoo! You have got BlackJack!"
//     hasBlackJack = true
// }else{
//     message = "You are out of the game!"
//     isAlive = false
// }

// messageEl.textContent = message

// }

// function newCard(){
//     if( isAlive == true && hasBlackJack === false){
//         let card = getRandomCard()
//         sum += card
//         card.push(card)
//         console.log(card)
//         renderGame()
//     }
// }

// for(let count = 1;count < 11; count +=2 )
// {
//     console.log(count)
// }


// let age = 22

// if(age <= 20){
//     console.log("You can not enter the club!")
// } else {
//      console.log("Welcome!")
// }

// let age = 100

// if(age < 100){
//     console.log("Not eligble")
// } else if(age===100) { 
//     console.log("Here is your birthday card from the King!")
// } else{
//      console.log("Not eligble, you have already gotten one")
// }



// console.log(4 === 3) //false
// console.log(5 > 2)  //true
// console.log(12 > 12) //false
// console.log(3 < 0)  //false
// console.log(3 >= 3)  //true
// console.log(11 <= 11)  //true
// console.log(3 <= 2)  //false


// const lowerNumber = parseInt(prompt('Enter lower number:'));
// const higherNumber = parseInt(prompt(`Enter higher number:`));

// console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
// for(let i = lowerNumber;i<=higherNumber;i++){
//     let flag=0;

//     for(let j =2;j<i;j++){
//             if(i%j == 0){
//                 flag = 1;
//                 break;
//             }
//         }

//         if(i > 1 && flag == 0){
//             console.log(i);
//     }
// }


// const welcomeEl = document.getElementById("welcome-el")

// function greetUser(greeting, name) {
//     welcomeEl.textContent = `${greeting}, ${name}`
// }

// let hi = "Howdy"
// greetUser("Howdy","James")

// function add(num1, num2){
//   return num1 + num2
// }

// add(3,4)
   

// let data = [
//  {
//     player:"Silva",
//     score: 88
//   },
//   {
//     player:"Mark",
//     score:99
//   }
// ]

//   const janeBtn = document.getElementById("jane-btn")

//   janeBtn.addEventListener("click", function(){
//     console.log(data)
//   })


// var objA = {
//   a : 1,
//   b : 2,
//   c : 'Hello'
// }
// var objB = {
//   a1: 1,
//   b1: 2,
//   c: 'Hello 2'
// }
// var obj2= {
//   ...objA,
//   ...objB,
//   Z: 32
// };

// console.log(obj2);


// var arr = [1, 2, 33, 49, 15, 6];
// var a = Math.max(...arr);
// console.log(a);

// var obj1 = {
//   a: 1,
//   b:2,
//   c: {
//     name:'Raj',
//     age: 25
//   }
// }

// var obj2 = {...obj1};
// obj1.d = 44;
// obj1.c.name = 'Kumar';

// console.log(obj1, obj2);  
// console.log(obj1,obj2);

// const obj1 = {
//     name : 'Code Bro',
//     place : ' Chennai',
//     rank : 500,
// };
// const marks = [1,4,6,7,12];

// function myFunction() {
//   const {
//     name,
//     place,
//     rank,
//     status = false
//   } = obj1;
//   console.log(name, place, rank, status);
// }

// myFunction();



import {createButton} from './widget.js';

  createButton('Feature 1',() => {
    alert('feature 1');
  });
  createButton('Feature 2',() => {
    createButton('Start Disco',changeBg);
    createButton('Stop Disco',stopChangingBg);
  });
let isGreen = true;
let handle = null;
function changeBg() {
  if(!handle) {
    handle = setInterval(() => {
      document.body.style.background = isGreen ? 'green' : 'blue';
    }, 500);
  }
}
export function stopChangingBg() {
  if(handle) {
    clearInterval(handle);
    handle = null;
    document.body.style.background = 'none';
  }
}

