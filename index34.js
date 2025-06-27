// const buttons = document.querySelectorAll('.ripple')

// buttons.forEach(button => {
//     button.addEventListener('click', function (e) {
//         const x = e.pageX
//         const y = e.pageY

//         const buttonTop = e.target.offsetTop
//         const buttonLeft = e.target.offsetLeft

//         const xInside = x - buttonLeft
//         const yInside = y - buttonTop

//         const circle = document.createElement('span')
//         circle.classList.add('circle')
//         circle.style.top = yInside + 'px'
//         circle.style.left = xInside + 'px'

//         this.appendChild(circle)

//         setTimeout(() => circle.remove(), 500)
//     })
// })


// let isGreen = true;
// let handle = null;
// export function changeBg() {
//     if(!handle) {
//         handle = setInterval(() => {
//             document.body.style.background = isGreen ? 'green' : 'blue';
//             isGreen = !isGreen;
//         }, 500);
//     }
// }

// export function stopChangingBg() {
//     if(handle) {
//         clearInterval(handle);
//         handle = null;
//         document.body.style.background = 'none';
//     }
// }

// function verify() {
//     document.getElementById("txt").innerHTML = "";
//     if (document.getElementById("pass").value != document.getElementById("confirm").value) 
//     {
//         document.getElementById("txt").innerHTML += "Password and confirm password must be same.";
//     }
//     if (document.getElementById("pass").value.length < 8)
//     {
//         document.getElementById("txt").innerHTML += "<br />Password must be greater than 8 characters.";
//     }
// }


// class Person {
//     constructor(firstName, lastName) {
//         this._firstName = firstName;
//         this._lastName = lastName;
//     }

//     get fullName() {
//         return `${this._firstName} ${this._lastName}`;
//     }
// }

// const person1 = new Person('John', 'Doe');
// console.log(person1.fullName);


// class Person {
//     constructor(firstName, lastName) {
//         this._firstName = firstName;
//         this._lastName = lastName;
//     }

//     get fullName() {
//         return `${this._firstName} ${this._lastName}`;
//     }

//     set fullName(value) {
//         const parts = value.solit(' ');
//         this._firstName = parts[0];
//         this._lastName = parts[1];
//     }
// }

// const person2 = new Person('Jane', 'Smith');
// person2.fullName = 'Alice Wonderland';
// console.log(person2.fullName);
// console.log(person2._firstName);
// console.log(person2._lastName);



// const  student = {
//     firstName : 'Monica',

//     get getName() {
//         return this.firstName;
//     }
// };

// console.log(student.firstName);
// console.log(student.getName);



// const student = {
//     firstName : 'Monica',

//     set changeName(newName) {
//         this.firstName = newName;
//     }
// };

// console.log(student.firstName);

// student.changeName = 'Sarah';

// console.log(student.firstName);


// function myDisplay(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;

//     if (x == 0) {
//         myResolve("OK");
//     }
//     else {
//         myReject("Error");
//     }
// });

// myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
// );


// const count = true;

// let countValue = new Promise(function (resolve, reject) {
//     if (count) {
//         resolve("There is a count value.");
//     }
//     else {
//         reject("There is no count value.");
//     }
// });

// console.log(countValue);


// let countValue = new Promise(function (resolve, reject) {
//     resolve("Promise resolved");
// });

// countValue
//   .then(function successValue(result) {
//     console.log(result);
//   })

//   .then(function successValue1() {
//     console.log("You can call multiple functions this way.");
//   });


// let countValue = new Promise(function (resolve, reject) {
//     reject('Promise rejected');
// });

// countValue.then(
//     function successValue(result) {
//         console.log(result);
//     },
// )

// .catch (
//     function errorValue(result) {
//         console.log(result);
//     }
// );

// const a = [10, 20, 30, 40]

// console.log("Example 1");
// const [x, y, z, w] = a;
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(w);

// const [p, q, , r] = a;
// console.log("Example 2");
// console.log(p);
// console.log(q);
// console.log(r);

// const [s, t] = a;
// console.log("Example 3");
// console.log(s);
// console.log(t);


// let [fst, , ...last] = ["a", "b", "c", "d"];

// console.log(fst);
// console.log(last);


// let [fst, , ...last] = ["a", "b", "c", "d"];

// console.log(fst);
// console.log(last);


// let x = 10, y = 20;

// [x, y] = [y, x]; 

// console.log(x);
// console.log(y); 


// let marks = { x: 21, y: -34, z:47 };

// const { x, y, z} = marks;
// console.log(x);
// console.log(y);
// console.log(z);


// const marks = {
//     section1: { alpha: 15, beta: 16},
//     section2: { alpha:-31, beta: 19}
// };
// const { section1: { alpha: alpha1, beta:
//     beta1 } } = marks;
// console.log(alpha1, beta1);


function average(a = b, b = a + 100) {
    console.log(a, b);
    const avg = (a + b) / 2;
    return avg;
}

function getDefault() {
    return 100;
}

const avg = average();
console.log(avg);  


async function getWeather() {
    const city = document.getElementById("cityInput").ariaValueMax;
    const apiKey = "your_api_key_here";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("City not fouund");

        const data = await res.json();
        const weatherInfo = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>Temp: ${data.main.temp}degree celsius</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;

        document.getElementById("weatherInfo").innerHTML = weatherInfo;
    }
    catch (error) {
        document.getElementById("weatherInfo").innerHTML = `<p style = "color:red;">${error.message}</p>`;
    }
}