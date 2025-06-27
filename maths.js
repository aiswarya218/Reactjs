//add two numbers
const num1 = 5;
const num2 = 3;
const sum = num1 + num2;
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);


//sqr root of no
const number = prompt('Enter the number: ');
const result = Math.sqrt(number);
console.log(`The square root of ${number} is ${result}`);


//area of triangle
const side1 = parseInt(prompt('Enter side1: '));
const side2 = parseInt(prompt('Enter side2: '));
const side3 = parseInt(prompt('Enter side3: '));
const s = (side1 + side2 + side3) / 2;
const areaValue = Math.sqrt( s * (s - side1) * (s - side2) * (s - side3));
console.log(`The area of the triangle is ${areaValue}`);

const areaValue = (baseValue * heightValue) / 2;



//celsius to fahrenheit
const celsius = prompt("Enter a celsius value: ");
const fahrenheit = (celsius * 1.8) + 32
console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);


//+ve, -ve, 0
const num = prompt("Enter a number: ");
if (number >= 0) {
    if (number == 0) {
    console.log("The number is zero");
}
else {
    console.log("The number is positive");
}
}
else {
     console.log("The number is negative");
}


//odd or even
const numb = prompt("Enter a number: ");
if (number % 2 == 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.")
}


//prime number
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
else if (number >  1) {
    for (let i = 2; i <= number/2; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}  
else {
    console.log("The number is not a prime number.");
}


//factorial
const numm = parseInt(prompt('Enter a positive integer: '));
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}


//fibonacci
const nmb = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;
console.log('Fibonacci Series:');
for (let i =1; i<= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}


//multiplication to range
const nu = parseInt(prompt('Enter an integer: '));
const range = parseInt(prompt('Enter a range: '));
for (let i = 1; i <= range; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}


//factors of +ve nos
const numbr = prompt('Enter a positive number: ');
console.log(`The factors of ${num} is: `);
for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        console.log(i);
    }
}



//decimal to binary
const number3 = parseInt(prompt('Enter a decimal number: '));
const result = number.toString(2);
console.log('Binary:' + '' + result);


//leap year
function checkLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    }
    else {
        console.log(year + ' is not a leap year');
    }
}

const year = prompt('Enter a year: ');
checkLeapYear(year);

//LCM while loop & if statement
const num3 = prompt('Enter a first positive integer: ');
const num4 = prompt('Enter a second positive integer: ');
let min = (num1 > num2) ? num1 : num2;
while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}


//hcf or gcd of 2 integers
let hcf;
const number5 = parseInt(prompt('Enter a first positive integer: '));
const number6 = parseInt(prompt('Enter a second positive integer: '));
for (let i =1; i <= number1 && i <= number2; i++) {
    if (number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}
console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);


//armstrong number
const number7 = prompt("Enter a positive integer");
const numberOfDigits = number.length;
let sum = 0;

let temp = number;
while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder ** numberOfDigits;
    temp = parseInt(temp / 10);
}
if (sum == number) {
    console.loh(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}


//quadratic equation
let root1, root2;
let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");
let discriminant = b * b - 4 * a * c;
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b + Math.sqrt(discriminant)) / (2 * a);
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}
else {
    let realPart = (-b / (2 *a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    console.log(
        `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
    );
}


//generate random no
const a1 = Math.random();
console.log(a);


// km to miles
const kilometers = prompt("Enter value in kilometers: ")
const factor = 0.621371
const miles = kilometers * factor
console.log(`${kilometers} kilometers is equal to ${miles} miles.`);


// calculator
const operator = prompt('Enter operator ( either +, -, * or /): ');
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));
let result;
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}
console.log(`${number1} ${operator} ${number2} = ${result}`);


//sum of natural nos
const number8 = parseInt(prompt('Enter a positive integer: '))
let sum = 0;
for (let i =1; i <= number; i++) {
    sum += i;
}
console.log('The sum of natural numbers: ', sum);


//check last digit
const a = prompt('Enter a first integer: ');
const b = prompt('Enter a second integer: ');
const c = prompt('Enter a third integer: ');
const result1 = a % 10;
const result2 = b % 10;
const result3 = c % 10;
if (result1 == result2 && result1 == result3) {
    console.log(`${a}, ${b} and ${c} have the same last digit.`);
}
else {
    console.log(`${a}, ${b} and ${c} have different last digit.`);
}


//shuffle deck of cards
const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
];
let deck = [];
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);
    }
}
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}
console.log('The first five cards are: ');
for (let i = 0; i < 5; i++) {
    console.log(`${deck[i].Value} of ${deck[i].Suit}`)
}


//format nos as currency string
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});
formatter.format(2500);

const number = 1234.5678;
const result = '$' + number.toFixed(2);
console.log(result);


//display date and time
const date = new Date(2017, 2, 12, 9, 25, 30);
const n = date.toDateString();
const time = date.toLocaleTimeString();
console.log('Date: ' + n);
console.log('Time: ' + time);


//display current date
const date = new Date;
const n = date.toDateString();
const time = date.toLocaleTimeString();
console.log('Date: ' + n);
console.log('Time: ' + time);



//format date
let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();
if (day < 10) {
    day = '0' + day;
}
if (month < 10) {
    month = '0' + month;
}
const formattedDate1 = month + '/' + day + '/' + year;
console.log(formattedDate1);
const formattedDate2 = month + '-' + day + '-' + year;
console.log(formattedDate2);
const formattedDate3 = month + '/' + day + '/' + year;
console.log(formattedDate3);
const formattedDate4 = month + '-' + day + '-' + year;
console.log(formattedDate4);


//compare value of 2 dates
const d1 = new Date();
const d2 = new Date();
const compare1 = d1 < d2;
console.log(compare1);
const compare2 = d1 > d2;
console.log(compare2);
const compare3 = d1 <= d2;
console.log(compare3);
const compare4 = d1 >= d2;
console.log(compare4);
const compare5 = d1.getTime() === d2.getTime();
console.log(compare5);
const comparee6 = d1.getTime() !== d2.getTime();
console.log(compare6);


//using regex find no is float or integer
function checkNumber(x) {
    let regexPattern = /^-?[0-9]+$/;
    let result = regexPattern.test(x);
    if (result) {
        console.log(`${x} is an integer.`);
    }
    else {
        console.log(`${x} is a float value.`)
    }
}

checkNumber(44);
checkNumber(-44);
checkNumber(3.4);
checkNumber(-3.4);


//union operation
function union(a, b) {
    let unionSet = new Set(a);
    for (let i of b) {
        unionSet.add(i);
    }
    return unionSet
}
const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['grapes', 'apple', 'banana']);
const result = union(setA, setB);
console.log(result);


//intersection operation
function intersection(setA, setB) {
    let intersectionSet = new Set();
    for (let i of setB) {
        if (setA.has(i)) {
            intersectionSet.add(i);
        }
    }
    return intersectionSet;
}
const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['grapes', 'apple', 'banana']);
const resukt = intersection(setA, setB);
console.log(result);

//set difference
function difference(setA, setB) {
    let differenceSet = new Set(setA)
    for (let i of setB) {
        differenceSet.delete(i)
    }
    return differenceSet
}
const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['grapes', 'apple', 'banana']);
const result = difference(setA, set);
console.log(result);


//subset operation
function subset(setA, setB) {
    for (let i of setB) {
        if (!setA.has(i)) {
            return false
        }
    }
    return true
}
const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['apple', 'orange']);
const result = subset(setA, setB);
console.log(result);


const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['apple', 'orange']);
const result = subset(setA, setB);
console.log(result);


//check undefimed or null
function checkVariable(variable) {
    if(variable == null) {
        console.log('The variable is undefined or null');
    }
    else {
        console.log('The variable is neither undefined nor null');
    }
}
let newVariable;
checkVariable(5);
checkVariable('hello');
checkVariable(null);
checkVariable(newVariable);


//bin to dec
console.log(bin_to_dec('110011'));
console.log(bin_to_dec('100'));


//min in array
console.log(min([12, 24, 56, 1]));
console.log(min([-12, -34, 0 ,-56 , -1]));


//power of 2
console.log(power_of_2(16));
console.log(power_of_2(256));


//pythagorean theorem
console.log(pythagorean_theorem(2, 4));
console.log(pythagorean_theorem(3, 4));


//add float nos
let val = parseFloat('2.3') + parseFloat('2.4');
console.log("2.3 + 2.4 = " + val);
function gfg_Run() {
console.log("2.3 + 2.4 = " 
    + (parseFloat('2.3') +
parseFloat('2.4')).toFixed(2));
}
