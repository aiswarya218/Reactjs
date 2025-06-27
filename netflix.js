// let featuredPosts = [
//     "Check out my Netflix clone",
//     "Here's the code for my project",
//     "I've just relaunched my portfolio"
// ]

// console.log(featuredPosts.length)
// console.log( featuredPosts[1])

// let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

// console.log(experience[1])
// console.log(experience[2])

// let cards = [7,4]
// cards.push(6)

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good.Been working on my portfolio lately."
// ]
// let newMessage = "Same here!"
// messages.push(newMessage)
// console.log(messages)

// messages.pop()
// console.log(messages)

// for( let count =10; count < 21; count += 2){
//     console.log(count)
// }

// for(let i = 10; i< 101; i+=10){
//     console.log(i)
// }


// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!",
//     "Great to hear"
// ]
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])

// for( let i=0;i<5;i+=1){
//     console.log(i)
// }


// const recipient ="Arjun"
// const sender = "Niki"

// const email = `Hey ${recipient}! How is it going? Cheers ${sender}`

// console.log(email)


// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]
// largeCountries.pop()
// largeCountries.push("Pakistan")
// console.log(largeCountries)

// let castle = {
//     title:"Live like a king in my castle",
//     price:190,
//     isSuperHost:true,
//     images:["img/cap.jpg", "img/space.jpg"]
// }

// console.log(captureOwnerStack.price)
// console.log(captureOwnerStack.isSuperHost)


// let age = 21
// if(age < 6){
//     console.log("free")
// } else if(age < 18){
//     console.log("child discount")
// } else if(age < 27){
//     console.log("student discount")
// } else if(age < 67){
//     console.log("full price")
// } else{
//     console.log("senior citizen discount")
// }

// const credits = 10000

// if(""){
//     console.log("Let's play")
// } else {
//     console.log("Sorry, you have no credits")
// }


// let currentViewers = null
// currentViewers = ["Jane", "George"]
// currentViewers = []

// if(currentViewers){

//     console.log("We have viewers")
// }

// let currentViewers 
// console.log(currentViewers.randomKey)


// const number = parseInt(prompt("Enter a number:"));
// if(number>0){
//     console.log("The number is positive");
// }

// else if(number == 0){
//     console.log("The number is zero");
// }
// else{
//     console.log("The number is negative");
// }


// const baseValue = prompt('Enter the base of a triangle:');
// const heightValue = prompt('Enter the height of a triangle:');

// const areaValue =(baseValue * heightValue) / 2;
// console.log(`The area of the triangle is ${areaValue}`);

// const side1 = parseInt(prompt('Enter side1: '));
// const side2 = parseInt(prompt('Enter side2: '));
// const side3 = parseInt(prompt('Enter side3: '));

// const s = (side1 + side2 + side3) / 2;
// const araeValue = Math.sqrt( s * (side - side1) * (s - side2) * (s - side3));

// console.log( `The area of the triangle is ${areaValue}` 
// );

// let randomNumber = Math.floor(Math.random() * 6) + 1
// console.log(randomNumber)


// function rollDice(){
//     let randomNumber = Math.floor( Math.random() * 6 ) + 1
//     return randomNumber
// }

// console.log( rollDice() )

// const credits = 0

// if("") {
//     console.log("Let's play")
// } else {
//     console.log("Sorry, you have no credits")
// }

// let currentViewers = ["Priya"]
// console.log(currentViewers[5])


// console.log( Boolean("") )  //false
// console.log( Boolean("0") )  //true
// console.log( Boolean(100) )  //true
// console.log( Boolean(null) )  //false
// console.log( Boolean([0]) )  //true
// console.log( Boolean(-0) )  //false


// const imgs = [
//     "images/computer_science.png",
//     "images/information_technology.png",
//     "images/social_sciences.png"
// ]
// const container = document.getElementById("container")
// function renderImages(){
//     for( let i = 0; i<imgs.length; i++){
//         container.innerHTML += `<img class="team-img src ="${imgs[i]}">`
//     }
// }
// renderImages()

// const playerName = "Ann"
// let credits = 45

// credits = credits - 10
// playerName = "something else"

// console.log('One')

// const a = [3,4,5,6,7,8,9];
// function myFunction(arg){
//     console.log(arg);
// }
// a.forEach(myFunction);
// console.log('Two')

// const arr = [
//     {
//         name : 'Alice',
//         mark : 35,
//         place: 'Kannur'
//     },
//     {
//         name:'Bobby',
//         mark : 23,
//         place : 'Kozhikode'
//     },
//     {
//         name: 'Keziya',
//         mark : 78,
//         place: 'Kollam'
//     },
//     {
//         name: 'Henry',
//         mark: 61,
//         place: 'Trivandrum'
//     }
// ];

// var found = arr.reduce((item) => {
//     return {
//         ...item,
//         country: 'India'
//     };
// });

// var value = arr.reduce((total, item) => {
//     return total + item.mark;
// }, 0);

// console.log(value);

// function createButton(name, fn){
//     const btn = document.createElement('button');
//     btn.innerText = name;
//     btn.onClick = fn;
//     btn.style.margin ='5px'
//     document.body.appendChild(btn);

 var button = document.getElementById('mybutton');
 button.onclick = () => {
    console.log('started click event');
    var arr = [];
    $.ajax({
        url:'http://jsonplaceholder.typicode.com/todos/1',
        success: (data) => {
            console.log('ajax1 started', data.title);
            arr.push(data.title);
            console.log('ajax1 ended');
        },
        async: false
    });
    document.getElementById('mytext').value=arr.join('\n');
    console.log('ended click event');
 }