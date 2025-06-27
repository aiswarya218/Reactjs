const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10
let isPressed = false
colorEl.value = 'black'
let color = colorEl.value
let x 
let y

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

document.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc (x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

function updateSizeOnScreen() {
    sizeEL.innerText = size
}

increaseBtn.addEventListener('click', () => {
    size += 5

    if(size > 50){
        size = 50
    }
    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 5

    if(size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

colorEl.addEventListener('change', (e) => color = e.targrt.value)

clearEl.addEventListener('click', () => ctx.clearReact(0,0, canvas.width,canvas.clientHeight))



// console.log('Started');
// var aa = getValue()
// .then((data) => {
//     console.log(data);
// })

// console.log('Ended');

// async function getValue() {
//     const data = await fetch('http://jsonplaceholder.typicodesad.com/todos/1');
//     const jsonDat = await data.json();
//     return jsonData;
// }


// async function fetchUserData(userId) {
//     try {
//         const response = await fetch(`http://jsonplaceholder.typicode.com/users/${userId}`);
//         const user = await response.json();
//         console.log("User Data:", user);
//     }
//     catch (error) {
//         console.error("Error fetching user daat: ", error);
//     }
// }

// fetchUserData(1);


// const toggles = document.qurtySelectorAll('.toggle')
// const good = document.querySelector('#good')
// const cheap = document.querySelector('#cheap')
// const fast = document.querySelector('#fast')

// toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

// function doTheTrick(theClickedOne) {
//     if(good.checked && cheap.checked && fast.checked) {
//         if(good === theClickOne) {
//             fast.checked = false
//         }

//         if(cheap === theClickedOne) {
//             good.checked = false
//         }

//         if(fast === theClickedOne) {
//             cheap.checked = false
//         }
//     }
// }


// const addBtn = document.getElementById('add')

// const notes = JSON.parse(localStorage.getItem('notes'))

// if(notes) {
//     notes.forEach(note => addNewNote())
// }
// addBtn.addEventListener('click', () => addNewNote())

// function  addNewNote(text = '') {
//     const note = document.createEleemnt('div')
//     note.classList.add('note')

//     note
// }


// const name = 'My Array Library';

// const options = {
//     version : '1.1',
//     author : 'Code Malayalam'
// }

// function addAll(arr = [])
// {
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
//     findMax,
// };


// import * as libObj from './libs.js';
// console.log(libObj);
// const max = libObj.findMax([1, 4, 2]);
// console.log(max);


// console.log('started');

// const pr = myFetch('http://jsonplaceholder.typicode.com/todos/1');

// function buttonClick() {
//     pr.then((data) => {
//         console.log(data);
//     });

// function removeItemFromArray(array, n) {
//     const index = array,indexOf(n);
//     if (index > -1) {
//         array,splice(index, 1);
//     }
//     return array;
// }
// const result = removeItemFromArray([1, 2, 3, 4, 5], 2);
// console.log(result);


// function removeItemFromArray(array, n) {
//     const newArray = [];
//     for ( let i = 0; i < array.length; i++) {
//         if(array[i] !== n) {
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// }
// const result = removeItemFromArray([1, 2, 3, 4, 5], 2);
// console.log(result);


// function insertObject(arr, obj) {
//     arr.push(obj);
//     console.log(arr);
// }
// let array = [1, 2, 3];
// let object = {x: 12, y: 8};
// insertObject(array, object);


const radius = [3, 1, 2, 5];
const area = function (radius) {
    return Math.PI * radius * radius;
};
const circumference = function (radius) {
    return 2 * Math.PI * radius;
};
const diameter = function (radius) {
    return 2 * radius;
};
const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
};
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));