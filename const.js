// const resultEl = document.getEleementId('result')
// const lengthEl = document.getElementById('length')
// const uppercaseEl = document.getElementById('uppercase')
// const lowercaseEl = document.getElementById('lowercase')
// const numbersEl = document.getElementById('numbers')
// const symbolsEl = document.getElementById('symbols')
// const generateEl = document.getElementsById('generate')
// const clipboardEl = document.getElementById('clipboard')

// const randomFunc = {
//     lower : getRandomLower,
//     upper : getRandomUpper,
//     number : getRandomNumber,
//     symbol : getRandomSymbol
// }

// clipboardEl.addEventListener('click',() => {
//     const password = resultEl.innerText;
//     if(!password) {
//         return;
//     }
//     navigator.clipboard.writeText(password);
//      alert('Password copied to clipboard!')
// })

// generateEl.addEventListener('click', () => {
//     const length =+ lengthEl.value
//     const hasLower = lowercaseEl.checked
//     const hasUpper = uppercaseEl.checked
//     const hasNumber = numbersEl.checked
//     const hasSymbol = symbolsEl.checked

//     resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
// })

// function generatePassword(lower, upper, number, symbol, length) {
//     let generatePassword = ''
//     const typesCount = lower + upper + number + symbol
//     const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])

//     if(typesCount === 0) {
//         return ''
//     }

//     for(let i =0; i < length; i += typesCount) {
//         typesArr.forEach(type => {
//             const funcName = Object.keys(type)[0]
//             generatedPassword += randomFunc[funcName]()
//         })
//     }

//     const finalPassword = generatedPassword.slice(0, length)
  
//     return finalPassword
// }

// function getRandomLower() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
// }

// function getRandomUpper() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
// }

// function getRandomNumber() {
//     return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
// }

// function getRandomSymbol() {
//     const symbols = '@#$5^&*(){}[]=<>/,.'
//     return symbols[Math.floor(Math.random() * symbols.length)]
// }


// const open = document.getElementById('open')
// const close = document.getElementById('close')
// const container = document.querySelector('.container')

// open.addEventListener('click', () => container.classList.add('show-nav'))

// close.addEventListener('click', () => container.classList.remove('show-nav'))



// const jokeEl = document.getElementById('joke')
// const jokeBtn = document.getElementById('jokeBtn')

// jokeBtn.addEventListener('click', generateJoke)

// generateJoke()  

// async function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }

//     const res = await fetch('http://icanhazdadjoke.com', config)

//     const dad = await res.json()

//     jokeEl.innerHTML = DataTransfer.jokeBtn
// }

// function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }

//     fetch('http://icanhazdadjoke.com',config)
//       .then((res) => res.json())
//       .then((data) => {
//         jokeEl.innerHTML = data.joke
//       })
// }


// const screens = document.querySelectorAll('screen');
// const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
// const start_btn = document.getElementById('start-btn')
// const game_container = document.getElementById('game-container')
// const timeEl = document.getEleementById('time')
// const scoreEl = document.getElementById('score')
// const message = document.getElementById('message')
// let seconds = 0
// let score = 0
// let selected_insect = {}

// start_btn.addEventListener('click', () => screens[0].classList.add('up'))

// choose_insect_btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         const img = btn.querySelector('img')
//         const src = img.getAttribute('src')
//         const alt = img.getAttribute('alt')
//         selected_insect = { src,alt }
//         screens[1].classList.add('up')
//         setTimeout(createInsect,1000)
//         startGame()
//     })
// })
// function startGame() {
//     setInterval(increaseTime, 1000)
// }

// function increaseTime() {
//     let m =Math.floor(seconds / 60)
//     let s = seconds % 60
//     m = m < 10 ? `0${m}` : m
//     s = s < 10 ? `0${s}` : s
//     timeEl.innerHTML = `Time: ${m}:${s}`
//     seconds++
// }

// function createInsect() {
//     const insect = document.createElement('div')
//     insect.classList.add('insect')
//     const { x, y } = getRandomLocation()
//     insect.style.top = `${y}px`
//     insect.style.left = `${x}px`
//     insect.innerHTML = `<img src = "${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" /`
    
//     insect.addEventListener('click', catchInsect)

//     game_container.appendChild(insect)
// }

// function getRandomLocation() {
//     const width = window.innerWidth
//     const height = window.innerHeight
//     const x = Math.random() * (width - 200) + 100
//     const y = Math.random() * (height - 200) + 100
//     return { x, y }
// }

// function catchInsect() {
//     increaseScore()
//     this.classList.add('caught')
//     setTimeout(() => this.remove(), 2000)
//     addInsects()
// }

// function addInsects() {
//     setTimeout(createInsect, 1000)
//     setTimeout(createInsect, 1500)
// }

// function increaseScore() {
//     score++
//     if(score > 19) {
//         message.classList.add('visible')
//     }
//     scoreEl.innerHTML = `Score: ${score}`
// }



// console.log('started');

// let a;

// try {
//     console.log('on try');
//     a = getVal1();
//     b = getVal2();
//     result = processValues(a, b);
// }
// catch(e) {
//     console.log('on catch');
//     result = 0;
// }
// finally {
//     console.log('In finally');
// }

// console.log(result);

// console.log('ended');

// function getVal() {
//     return 12;
// }

// function getVal2() {
//    console.log('inside getVal2');
//    throw 'Ente error';
//    return 22;
// }

// function processValues(a, b) {
//     return a + b;
// }
  

// var a;
// console.log(a);
// a = 10;
// console.log(a);
// a = "HELLO WORLD!";
// console.log(a);

// a = undefined;
// console.log(a);

// let a;
// console.log("a =", a);
// let b = 10;
// console.log("b =", b);
// const person = {
//     name : "Anusree"
// };
// console.log("person.age =", person.age);

// function greet(name) {
//     console.log("Hello", name);
// }
// greet();
// function doNothing() {

// }
// let result = doNothing();
// console.log("result =", result);

// if (typeof a === "undefined") {
//     console.log("Variable 'a' is undefined");
// }
// else {
//     console.log("Variable 'a' is defined");
// }
// if (typeof b !== "undefined") {
//     console.log("Variable 'b' is defined");
// }


// console.log("Start");
// function cb() {
//     console.log("Callback");
// }
// cb();

// setTimeout(function cb() {
//     console.log("Callback");
// }, 0);
// console.log("End");
