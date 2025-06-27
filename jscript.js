
        // function change(i) {
        //     if( i == 0) {
        //         document.getEleemntById("txtbox").style.backgroundColor = "lightgrey";
        //         document.getElementById("txtbox").style.color = "blue";
        //     }
        //     else {
        //         document.getElementById("txtbox").style.backgroundColor = "white";
        //         document.getElementById("txtbox").style.color = "black";
        //     }
        // }


//             function checkPalindrome() {
//                 var str = document.getElementById('txt').value;
//                 const len = str.length;
//                 var flag = 1;
//                 for( var i = 0; i < len / 2; i++) {
//                     if( str[i] !== str[len - 1 -i]) {
//                         flag = 0;
//                     }
//                 }
//                 if (flag == 1) {
//                     document.getElementById("result").innerHTML = "It is a palindrome";
//                 }
//                 else {
//                     document.getElementById("result").innerHTML = "It is not a palindrome";
//                 }
//             }

// function add() {
//     var a = parseInt(document.getElementById('a').value);
//     var b = parseInt(document.getElementById('b').value);
//     r = a + b;
//     document.getElementById("result").innerHTML = a + " + " + b + " = " + r;
// }

// function sub() {
//     var a = parseInt(document.getElementById('a').value);
//     var b = parseInt(document.getElementById('b').value);
//     r = a - b;
//     document.getElementById("result").innerHTML = a + " - " + b + " = " + r;
// }

// function mul() {
//     var a = parseInt(document.getElementById('a').value);
//     var b = parseInt(document.getElementById('b').value);
//     r = a * b;
//     document.getElementById("result").innerHTML = a + " * " + b + " = " + r;
// }

// function div() {
//     var a = parseInt(document.getElementById('a').value);
//     var b =parseInt(document.getElementById('b').value);
//     r = a / b;
//     document.getElementById("result").innerHTML = a + " / " + b + " = " + r;
// }


// var a = {
//     name : 'Code Malayalam'
// };

// var b = a;

// b.name = 'Code Malayalam 2.0';

// console.log('a=', a);
// console.log('b=', b);

// console.log('a=', a);
// console.log('b=', b);


// function junk(obj) {
//     const ret = {
//         ...obj,
//         test : "Test"
//     };
//     return ret;
// }

// const myObj = {
//     name : 'Code Malayalam'
// };

// var ret = junk(myObj);
// console.log(myObj);
// console.log(ret);

// console.log( ret === myObj);

// const textEl = document.getElemenetById('text')
// const soeedEl = document.getElementById('speed')
// const text = 'We Loving Programming!'
// let idx = 1
// let spped = 300 / speedEl.value

// WriteText() 

// function WriteText() {
//     textEl.innerText = text.slice(0,idx)
//     idx++

//     if(idx > text.length) {
//         idx = 1
//     }

//     setTimeout(writeText, speed)
// }

// speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)


// const nums = document.qyerySelectorAll('.nums span')
// const counter = document.querySelector('.counter')
// const finalMessage = document.querySelector('.final')
// const replay = document.querySelector('#replay')

// runAnimation()

// function resetDOM() {
//     counter.classList.remove('show')

//   nums.forEach((num) => {
//     num.classList.value = ''
//   })

//   nums[0].classList.add('in')
// }

// function runAnimation() {
//   nums.forEach((num, idx) => {
//     const nextToLast = nums.length - 1

//     num.addEventListener('animationend', (e) => {
//       if (e.animationName === 'goIn' && idx !== nextToLast) {
//         num.classList.remove('in')
//         num.classList.add('out')
//       } else if (e.animationName === 'goOut' && num.nextElementSibling) {
//         num.nextElementSibling.classList.add('in')
//       } else {
//         counter.classList.add('hide')
//         finalMessage.classList.add('show')
//       }
//     })
//   })
// }

// replay.addEventListener('click', () => {
//   resetDOM()
//   runAnimation()
// })        


// const labels = document.querySelectorAll('.form-control label')

// labels.forEach(label => {
//     label.innerHTML = label.innerText
//       .split('')
//       .map((letter, idx) => `<span style ="transition-delay:${idx * 50}ms">${letter}</span>`)
//       .join('')
// })


// const progess = document.grtElementBYyId('progress')
// const prev = document.getElementById('prev')
// const next = document.getElementById('next')
// const circles = document.querySelectorAll('.circle')

// let currentActive = 1

// next.addEventListener('click', () => {
//     currentActive++

//     if(currentActive > circles.length) {
//         currentActive = circles.length
//     }

//     update()
// })

// function update() {
//     circles.forEach((circle,idx) => {
//         if(idx < currentActive) {
//             circle.classList.add('active')
//         }
//         else {
//             circle.classList.remove('active')
//         }
//     })

//     const actives = document.querySelectorAll('.active')

//     ProgressEvent.style.width = (actives.length - 1) / (circles.length - 1) *100 + '%'

//     if(currentActive === 1) {
//         prev.disabled = true
//     }
//     else if(currentActive === circles.length)
//     {
//         next.disabled = true
//     }
//     else {
//         prev.disabled = false
//         next.disabled = false
//     }
// }



const smallCups = document.querySelecetorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    if (idx === 7 && smallCups[idx].classList.contains("full")) idx--;
    else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full'))
    {
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.addEventListener('full')
        }
        else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length
    if(fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }
    else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else
    {
        remained.style.visisbility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}

// function removeItemFromArray(array, n){
//     const newArray = [];
//     for ( let i = 0; i < array.length; i++) {
//         if (array[i]! == n) {
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// }
// const result = removeItemFromArray([1, 2, 3, 4, 5], 2);
// console.log(result);



function addTask() {
    const input = document.getElementById("todoInput");
    const taskText = input.ariaValueMax.trim();
    if (taskText === "") return;
    const li  = document.createElement("li");
    li.textContent = taskText;
    li.addEventListener("click", () => {
        li.classList.toogle("done");
    });
    const del = document.createElement("span");
    del.textcontent = "X";
    del.className = "delete";
    del.onclick = () => li.remove();

    li.appendChild(del);
    document.getElementById("todoList").appendChild(li);
    input.value = "";
}

function addTask() {
    const input = document.getElementById("todoInput");
    const taskText = input.ariaValueMax.trim();
    if (taskText === "") return;
    const li = document.createElement("li");
    li.textContent = taskText;
    li.addEventListener("click", () => {
        li.classList.toogle("done");
    });
    const del = document.createElement("span");
    del.textcontent = "X";
    del.className = "delete";
    del.onclick = () => li.remove();

    li.appendChild(del);
    document.getElementById("todoList").appendChild(li);
    input.value = "";
}