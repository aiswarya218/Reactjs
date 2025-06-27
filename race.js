// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime(){
//     if(player1Time < player2Time){
//         return player1Time
//     }else if( player2Time < player1Time){
//         return player2Time
//     }else {
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)


// function getTotalRaceTime(){
//     return player1Time + player2Time
// }

// let totalTime = getTotalRaceTime()
// console.log(totalTime)

// let hasSolvedChallenge = true
// let hasHintsLeft = false


// if(hasSolvedChallenge === false && hasHintsLeft === false){
//     showSolution()
// }
// function showSolution(){
//     console.log("Showing the solution....")
// }

// let hasCompletedCourse = true
// let givesCertificate = true

// if(hasCompletedCourse === true || givesCertificate === false){
//     generateCertificate()
// }
// function generateCertificate(){
//     console.log("Generating certificate...")
// }

// let likesDocumentaries = true
// let likesStartups = true

// if(likesDocumentaries === true || likesStartups === true){
//     recommendMovie()
// }

// function recommendMovie(){
//     console.log("Hey, check out this new film we think you will like!")
// }


// function convertToBinary(x){
//     let bin = 0;
//     let rem, i=1, step =1;
//     while (x! = 0){
//         rem = x % 2;
//         `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
//     );
//     x = parseInt(x / 2);
//     bin = bin + rem * i;
//     i = i * 10;
//     }
//     console.log(`Binary: ${bin}`);
// }

// let number = propmpt('Enter a decimal number:');
// convertToBinary(number);

// const person = {
//     name: 'John',
//     age: 21,
// }

// const clonePerson = object.assign({}, person);
// console.log(clonePerson);

// clonePerson.name='Peter';

// console.log(clonePerson.name);
// console.log(person.name);

// const message = 'This is a long message\n \ that spans across multiple lines\n \ in the code.'
// console.log(message)

// const string1 = 'JavaScript Program';
// const string2 = 'JavaScript Program';

// const result = string1.toUpperCase() === string2.toUpperCase();

// if(result){
//     console.log('The strings are similar.');
// } else {
//     console.log('The strings are not similar.')
// }


// const date = new Date();

// const n = date.toDateString();

// const time = date.toLocaleTimeString();

// console.log('Date:' + n);
// console.log('Time:' + time);

// function getUniqueAfterMerge(arr1, arr2){
//     let arr = arr1.concat(arr2);
//     let uniqueArr = [];

//     for(let i of arr){
//         if(uniqueArr.indexOf(i) === -1){
//             uniqueArr.push(i);
//         }
//     }
//     console.log(uniqueArr);
// }
// const array1 = [1,2,3];
// const array2 = [2,3,5];

// getUniqueAfterMerge(array1, array2);

// function intersection(setA, setB){
//     let intersectionSet = new Set();
//     for(let i of setB){
//         if(setA.has(i)){
//         intersectionSet.add(i);
//     }
// }
//     return intersectionSet;
// }

// const setA = new Set(['apple', 'mango', 'orange']);
// const setB = new Set(['grapes', 'apples', 'banana']);
// const result = intersection(setA,setB);

// console.log(result);


// function validate(email_id){
//     const regex_pattern =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
//     if (regex_pattern.test(email_id)) {
//         console.log('The email address is valid');
//     }
//     else {
//         console.log('The email address is not valid');
//     }
// }

// validateEmail('abc123@gmail.com');
// validateEmail('hello@com');


// function greet(){
//     return 'Hello';
// }
// function name(user, func){
//     const message = func();
//     console.log(`${message} ${user}`);
// }

// name('Sara', greet);
// name('Lara', greet);
// name('Sophia', greet);


// function greet(){
//     console.log('Hello World');
// }

// setTimeout(greet, 3000);
// console.log('This message is shown first');

// const img = new Image();

// img.src = '//cdn.programiz.com/sites/tutorial2program/files/cover-artwork.png';

// img.onload = function(){
//     console.log('width' + this.width)
//     console.log('height' + this.height);
// }

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if(hasSolvedChallenge === true || hasHintsLeft === false){
//     showSolution()
// }

// function showSolution(){
//     console.log("Showing the solution....")
// }

// function recommendMovie(){
//     console.log("Hey, check out this new film we think you will like!")
// }



// let age = 15
// if( age < 6 ){
//     message = "free"
// } else if( 6 <= age >=17){
//     message = "child discount"
// }else if( 18 <= age >= 26){
//     message = "student discount"
// }else if(27 <= age >=66){
//     message = "full price"
// }else{
//     message = "senior citizen discount"
// }
// console.log(age)   


// let myCredits = localStorage.getItem("myCredits")
// console.log(myCredits)

// let trueOfFalse = Boolean("")
// console.log(trueOfFalse)



// function add(num1, num2){
//     return num1+num2
// }
// console.log( add(3,4) )
// console.log( add(9,102) )
// console.log( add(11,11) )


// let player ="Sofia"
// let opponent = "Megan"
// let game = "Amazing Fighter"

// let points = 0
// let hasWon =false

// points += 100
// hasWon = true


// if(hasWon) {
//     console.log(player + " got " + points + " points and won the " + game + " game!")
// } else {
//     console.log("The winner is" + opponent + " !" + player + "lost teh game")
// }


function generateSentence(desc, arr){
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for (let i = 0; i<arr.length; i++){
        if( i === lastIndex){
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "
        }
    }
    return baseString
}

const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
console.log(sentence)

