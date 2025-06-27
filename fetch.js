// function greetUser(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }

// function showMessage() {
//     console.log("Welcome to the site!");
// }

// greetUser("Aiswarya", showMessage);


// function fetchData(callback) {
//     console.log("Fetching data...");

//     setTimeout(() => {
//         const data = { id: 1, item: "Book" };
//         console.log("Data Fetched!");
//         callback(data);
//     }, 2000);
// }

// function displayData(data) {
//     console.log("Received:", data);
// }

// fetchData(displayData);

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(num) {
//     console.log("Numbers:", num);
// });



// const result = document.getElementById('result');
// const filter = document.getElementById('filter');
// const listItems = [];

// getData();

// filter.addEventListener('input', (e) => filterData(e.target.value));

// async function getData() {
//     const res = await fetch('http://randomuser.me/api?results=50');
//     const { results } = await res.json()


//     result.innerHTML = '';
    
//     results.forEach(user => {
//         const li = document.createElement('li');

//         listItems.push(li);

//         li.innerHTML = `
//              <img src = "${user.picture.large}" alt = "${user.name.first}">
//             <div class = "user-info">
//             <h4>${user.name.first} ${user.name.last}</h4>
//             <p>${user.location.city}, ${user.location.country}</p>
//             </div>
//             `;

//             result.appendChild(li);
//     });
// }

// function filterData(searchTerm) {
//     listItems.forEach(item => {
//         if(item.innerText.toLowerCase().includes(searchTerm.toLoerCase())) {
//             item.classList.remove('hide');
//         } else {
//             item.classList.add('hide');
//         }
//     });
// }


// sayHello();
// function sayHello() {
//     console.log("Hello!");
// }

// console.log(x);
// var x = 10;

// try {
//     console.log(y);
// } catch (error) {
//     console.log("Error  with let:", error.message);
// }
// let y = 20;

// try {
//     console.log(z);
// }
// catch (error) {
//     console.log("Error with const:", error.message);
// }
// const z =30;

// try {
//     sayHi();
// }
// catch (error) {
//     console.log("Error with function expression (var):", error.message);
// }
// var sayHi = function () {
//     console.log("Hi!");
// };

// try {
//     greet();
// }
// catch (error) {
//     console.log("Error with function expression (let):", error.messgae);
// }
// let greet = () => {
//     console.log("Greetings!");
// };


// function comapreArrays(arr1, arr2) {
//     const result = JSON.stringify(arr1) == JSON.stringify(arr2)
//     if (result) {
//         console.log('The arrays have the same elements.');
//     }
//     else 
//     {
//         console.log('The arrays have different elements.');
//     }
// }
// const array1 = [1, 3, 5, 8];
// const array2 = [1, 3, 5, 9];
// comapreArrays(array1, array2);


// function compareArrays(arr1, arr2) {
//     if(arr1.length != arr2.length) {
//         return false;
//     }
//     else {
//         let result = false;

//     for (let i = 0; i <arr1.length; i++) {
//         if(arr1[i] != arr2[i]) {
//             return false;
//         }
//         else {
//             result = truw;
//         }
//     }
//     return result;
//   }
// }
// const array1 = [1, 3, 5, 8];
// const array2 = [1, 3, 5, 8];
// const result = compareArrays(array1, array2);
// if (result) {
//     console.log('The arrays have the same elements.');
// }
// else {
//     console.log('The arrays have different elements.');
// }


// function getUniqueAfterMerge(arr1, arr2) {
//     let arr = arr1.concat(arr2);
//     let uniqueArr = [];
//     for (let i of arr) {
//         if(uniqueArr.indexOf(i) === -1) {
//             uniqueArr.push(i);
//         }
//     }
//     console.log(uniqueArr);
// }
// const array1 = [1, 2, 3];
// const array2 = [2, 4, 6]
// getUniqueAfterMerge(array1, array2);



// function extractValue(arr, prop) {
//     let extractedValue = [];
//     for (let i = 0; i < arr.length ; ++i) {
//         extractedValue.push(arr[i][prop]);
//     }
//     return extractedValue;
// }
// const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];
// const result = extractValue(objArray, 'a');
// console.log(result);



// function extractValue(arr, prop) {
//     let extractedValue = arr.map(item => item[prop]);

//     return extractedValue;
// }
// const objarray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];
// const result = extractValue(objArray, 'a');
// console.log(result);


var x = 10;
function testScope() {
    var x = 20;
    console.log("Inside function, x =", x);
    if (true) {
        var x = 30;
        let y = 40;
        const z = 50;
        console.log("Inside block, x =", x);
        console.log("Inside block, y =", y);
        console.log("Inside block, z =", z);
    }
    console.log("After block, x =", x);
}
testScope();
console.log("Global x =", x);