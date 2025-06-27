//    document.getElementById("count-el").innerText=5

// let count = 5
// count = count + 1
// console.log(count)



// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// function increment(){
//     console.log("The button was clicked")
// }



// function countdown(){
// console.log(5)
// console.log(4)
// console.log(3)
// console.log(2)
// console.log(1)
// }

// countdown()



// function myLogger() {
//     console.log(42)
// }

// myLogger()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function logLapTime(){
//     let totalTime = lap1+ lap2 + lap3
//        console.log(totalTime)
// }

// logLapTime()



// let lapsCompleted = 0

// function incrementLap(){
//      lapsCompleted = lapsCompleted + 1
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

// let countEl = document.getElementById("count-el")

// console.log(countEl)

// let count = 0

// function increment(){
//     count = count + 1
//     countEl.innerText = count
// }

// function save(){
//     console.log(count)
// }

// save()




// let username = "per"
// let message = "You have tree new notifications"

// let messageToUser = message + "," + username + "!"
// console.log(messageToUser)

// let name = "33"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name

// let points = 4
// let bonusPoints ="10"

// let totalPoints = points + bonusPoints

// console.log(totalPoints)

// console.log(4 + 5) //9
// console.log("2" + "4") //6
// console.assertlog("5" + 1) //51
// console.log(100 + "100") //100100




// let welcomeEl = document.getElementById("welcome-el")

// let name = "Angel Mariya George"
// let greeting = "Welcome Back"

// welcomeEl.innerText = greeting + name

// welcomeEl.innerText += "emoji"




// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// let count = 0


// function increment() {

//     count += 1
//     countEl.textContent = count
// }

// function save(){
//     let countStr = count + " - "
//     saveEl.textContent += countStr
//     countEl.textConetent = 0
//     count = 0 
// }



// const container = document.getElementById("container")
// container.innerHTML = "<button onclick='buy()>Buy!</button>"

// function buy(){
//     container.innerHTML += "<p>Thank you for buying!</p>"
// }



// class Button {
//     constructor(name) {
//         this.button = document.createElement('button');
//         this.button.innerHTML = name;

//         document.body.appendChild(this.button);
//     }

//     set width(width) {
//         this.button.style.width = width + 'px';
//     }

//     set height(height) {
//         this.button.style.height = height + 'px';
//     }
    
//     get width() {
//         return parseInt(this.button.style.width, 10);
//     }

//     get height() {
//         return parseInt(this.button.style.height, 10);
//     }
// }

// var b1 = new Button('Click me');
// b1.width = 100;
// b1.height = 100;
// console.log(b1.width, b1.height);



// console.log('Requesting 1');
// myFetch('http://jsonplaceholder.typicode.com/todos/1')
// .then((data) => {
//     console.log(data);
//     console.log('Requesting 2');
//     return myFetch('http://jsonplaceholder.typicode.com/todos/2');
// })
// .then((data) => {
//     console.log(data);
//     console.log('Requesting 3');
//     return myFetch('http://jsonplaceholder.typicode.com/todos/3');
// })
// .then((data) => {
//     console.log(data);
// });

// const pr2 = pr.then((data) => {
//     console.log(data);
//     console.log('Requesting 2');
//     return myFetch('http://jsonplaceholder.typicode.com/todos/2');
// });

// const pr3 = pr2.then((data) => {
//     console.log(data);
//     console.log('Requesting 3');
//     return myFetch('http://jsonplaceholder.typicode.com/todos/3');
// });

// pr3.then((data) => {
//     console.log(data);
// });





console.log('=== Requesting 1');
getJson('http://jsonplaceholder.typicode.com/todos/1')
.then((data) => {
    console.log(data);
    console.log('=== Requesting 2');
    return getJson('http://jsonplaceholder.typicode.com/todos/2');
})
.catch((err) => {
    console.log('ERROR: ', err);
})
.then((data) => {
    console.log(data);
    console.log('=== Requesting 3');
    return getJson('http://jsonplaceholder.typicode.com/todos/3');
})
.then((data) => {
    console.log(data);
});