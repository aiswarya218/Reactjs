// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// class Student extends Person {
//     constructor(name, age, course) {
//         super(name, age);
//         this.course = course;
//     }

//     greet() {
//         console.log(`Hi, I'm ${this.name}, a student of ${this.course}.`);
//     }

//     study() {
//         console.log(`${this.name} is studying ${this.course}.`);
//     }
// }

// const person1 = new Person("Alice", 30);
// person1.greet();

// const student1 = new Student("Aiswarya", 20, "Computer Science");
// student1.greet();
// student1.study();



// class Employee {

//     #salary;

//     constructor(name, position, salary) {
//         this.name = name;
//         this.position = position;
//         this.#salary = salary;
//     }

//     getSalary() {
//         return this.#salary;
//     }

//     setSalary(newSalary) {
//         if (newSalary > 0) {
//            this.#salary = newSalary;
//         }
//         else {
//             console.log("Invalid salary!");
//         }
//     }

//     get empInfo() {
//         return `${this.name} works as a ${this.position}.`;
//     }

//     set empInfo(info) {
//         const [name, position] = info.split("-");
//         this.name = name;
//         this.position = position;
//     }
// }

// const emp1 = new Employee("Aiswarya", "Developer", 50000);

// console.log(emp1.getSalary());

// emp1.setSalary(60000);
// console.log(emp1.getSalary());

// console.log(emp1.empInfo);

// emp1.empInfo = "Anu-Designer";
// console.log(emp1.empInfo);

// Employee.companyPolicy();

//Above is about oops concept consiting of 
//private properties(# syntax),getters and setters,static methods


// console.log(5 == '5');
// console.log(null == undefined);
// console.log(true == 1);
// console.log(false == 0);

// console.log(5 === '5');
// console.log(true === 1);
// console.log(false === 0);
// console.log(5 === 5);

// const obj1 = { a:1 };
// const obj2 = { a:1 };
// const obj3 = obj1;

// console.log(obj1 == obj2);
// console.log(obj1 === obj3);




// //Equality == & ===
// let userInput = "10";

// if (userInput == 10) {
//     console.log("Loose equality matched");
// }

// if (userInput === 10) {
//     console.log("Strict equality matched");
// }

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// const arr3 = arr1;

// console.log(arr1 == arr2);
// console.log(arr1 === arr3);


// function isAdmin(userType) {
//     if (userType === "admin") {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(isAdmin("admin"));
// console.log(isAdmin("Admin"));
// console.log(isAdmin(123));

// function checkAge(age) {
//     if (age == 18) {
//         console.log("Welcome! (loose)"); 
//     }
//     if (age === 18) {
//         console.log("Welcome! (strict)");
//     }
// }

// checkAge("18");

// const lang = "english";

// if ( lang === "english") {
//     import('./english.js').then((module) => {
//         module.sayHello();
//     });
// }
// else {
//     import('./spanish.js').then((module) => {
//         module.sayHello();
//     });
// }


// document.getElementById('btn').addEventListener('click', async () => {
//     const module = await import('./math.js');
//     alert("2 + 3 = " + module.add(2,3));
// });


// import('./math.js')
// .then((module) => {
//     console.log("Module loaded dynamically.");
//     const result = module.add(5, 3);
//     console.log("Result:", result);
// })
// .catch((error) => {
//     console.error("Failed to load module:", error);
// });

// function maxValue(...nums) {
//     return Math.max(...nums);
// }

// console.log(maxValue(4, 7, 1, 9, 12));


// function introduce(firstName, lastName, ...titles) {
//     console.log(`Name: ${firstName} ${lastName}`);
//     console.log("Titles:", titles);
// }

// introduce("Alice", "in", "wonder", "land");


// var name = "Ameesha";
// console.log(name);

// var name = "Ameena";
// console.log(name);


// if (true) {
//     var x = 10;
// }
// console.log(x);

// let age = 25;
// age = 26;
// console.log(age);

// if (true) {
//     let y = 20;
//     console.log(y);
// }



// function getData() {
//     return new Promise((resolve) => {
//         setTimeout(() =>{
//             resolve("Data received using async/await");
//         }, 1000);
//     });
// }

// async function showData() {
//     const result = await getData();
//     console.log(result);
// }

// showData();


// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data received using Promise");
//         }, 1000);
//     });
// }

// getData().then((result) => {
//     console.log(result);
// });



// //Nested Callbacks
// loginUser("user", () => {
//     getUserProfile(() => {
//         getUserSettings(() => {
//             console.log("All Done");
//         });
//     });
// });

// //Async/Await Version
// async function loadUserData() {
//     await loginUser("user");
//     await getUserProfile();
//     await getUserSettings();
//     console.log("All done");
// }
// loadUserData();


const radius = [3, 1, 2, 4];
const area = function (radius) {
    return Math.PI * radius * radius;
};

const circumference = function (radius) {
    return 2 * Math.PI * radius;
};

const diameter = function (radius) {
    return 2 * Math.PI * radius;
};

const calculate = function (radius, logic) {
    const output = [];
    for(let i = 0; i < radius.length; i ++) {
        output.push(logic(radius(i)));
    }
    return output;
};

// const calculateArea = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// };

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));