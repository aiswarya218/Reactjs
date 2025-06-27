// let a = 22;
// let b = 2;
// console.log("Addition:", a + b);
// console.log("Subtraction:", a - b);
// console.log("Multiplication:", a * b);
// console.log("Division:", a / b);
// console.log("Modulus", a % b);

// //Math object
// console.log("Power:", Math.pow(2, 3));
// console.log("Square Root:", Math.sqrt(16));
// console.log ("Pi:", Math.PI);
// console.log("Random (0-1):", Math.random());
// console.log("Round:",Math.round(4.7));
// console.log("Floor:", Math.floor(4.9));
// console.log("Ceil:", Math.ceil(4.1));

// //random no btw 1 and 100
// let randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log("Random Number (1-100):", randomNumber);

// //area circle
// function areaOfCircle(radius) {
//     return Math.PI * Math.pow(radius, 2);
// }
// console.log("Area:", areaOfCircle(5));

// //quadratic eq solver
// function solveQuadratic(a, b, c) {
//     const discriminant = Math.pow(b, 2) - 4 * a * c;
//     if (discriminant < 0) return "No real roots";
//     const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//     const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//     return [root1, root2];
// }
// console.log(solveQuadratic(1, -3, 2));

// //trigonometry 
// const angleInDegrees = 30;
// const angleInRadians = angleInDegrees * (Math.PI / 180);

// console.log("sin(30 degree):", Math.sin(angleInRadians));
// console.log("cos(30 degree):", Math.cos(angleInRadians));
// console.log("tan(30 degree):", Math.tan(angleInRadians));

// //triangle area
// function areaOfTriangle(base, height) {
//     return 0.5 * base * height;
// }
// console.loh("Area of Triangle:", areaOfTriangle(10, 5));

// //rectangle area
// function areaOfRectangle(length, width) {
//     return length * width;
// }
// console.log("Area of Rectangle:", areaOfRectangle(3, 4));

// //basic calculator using if/else
// function calculator(a, b, operator) {
//     if (operator === '+') return a + b;
//     else if (operator === '-') return a - b;
//     else if (operator === '*') return a * b;
//     else if (operator === '/') return b !== 0 ? a / b : "Cannot divide by zero";
//     else return "Invalid operator";
// }
// console.log(calculator(10, 5, '+'));
// console.log(calculator(10, 5, '-'));
// console.log(calculator(10, 5, '*'));
// console.log(calculator(10, 5, '/'));

//scientific calculator
function scientificCalculator(num, operation) {
    switch (operation) {
        case "square": return Math.pow(num, 2);
        case "sqrt": return Math.sqrt(num);
        case "log": return Math.log(num);
        case "sin": return Math.sin(num);
        case "cos": return Math.cos(num);
        default: return "Invalid operation";
    }
}
console.log(scientificCalculator(9, "sqrt"));
console.log(scientificCalculator(90, "sin"));

//math constants
console.log("PI:", Math.PI);
console.log("Euler's number (e):", Math.E);
console.log("LN2 (ln 2):", Math.LN2);
console.log("LN10 (ln 10):", Math.LN10);

//absolute value
console.log("Absolute:", Math.abs(-42));

//max & min
console.log("Max:", Math.max(1, 5, 3));
console.log("Min:", Math.min(1, 5, 3));

//rounding method
console.log("Round:",Math.round(4.5));
console.log("Ceil:", Math.ceil(4.2));
console.log("Floor:", Math.floor(4.9));

//exponents and roots
console.log("2^3:", Math.pow(2, 3));
console.logo("v49", Math.sqrt(49));

//logarithms
console.log("Natural log of 10:", Math.log(10));
console.log("Base 10 log:", Math.log10(1000));

//random float btw 5 and 10
let randFloat = Math.random() * (10 - 5) + 5;
console.log("Random 5.0 - 10.0:", randFloat);

//deg->rad conversion
function toRadians(deg) {
    return deg * (Math.PI / 180);
}
function toDegrees(rad) {
    return rad* (180 / Math.PI);
}
console.log("30° in radians:", toRadians(30));
console.log("π/2 in degrees:", toRadian(Math.PI / 2));


//pythagorean theorem
function hypotenuse(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}
console.log("Hyptenuse:", hypotenuse(3, 4));

//compound interest formula
function compoundInterest(P, r, n, t) {
    return P * Math.pow((1 + r / n), n * t);
}
console.log("Future Value:", compoundInterest(1000, 0.05, 12, 2).toFixed(2));