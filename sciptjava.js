// const { jsx } = require("react/jsx-runtime");

// console.log("Hello, World!");

// function add(a, b) {
//     return a + b;
// }
// console.log(add(5, 3));

// let age = 20;
// if (age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }


// for (let i = 1; i <= 5; i++) {
//     console.log("Count: " + i);
// }


// const fruits = ["apple", "banana", "cherry"];
// fruits.forEach(fruit => console.log(fruit));


// const student = {
//     name : "Aiswarya",
//     age : 21,
//     course : "Computer Science"
// };
// console.log(student.name);


// const multiply = (x, y) => x * y;
// console.log(multiply(4, 6));

//  function changeText() {
//     document.getElementById("demo").innerText = "Hello From Javascript!";
//  }


//  setTimeout(() => {
//     console.log("This appears after 2 seconds");
//  }, 2000);

//  fetch("http://jsonplaceholder.typicode.com/users/1")
//  .then(res => res.json())
//  .then(data => console.log(data.name));

//  fetch("http://jsonplaceholder.typicode/users/1")
//  .then(res => res.json())
//  .then(data => console.log(data.name));

// const a = prompt('Enter a first integer: ');
// const b = prompt('Enter a second integer: ');
// const c = prompt('Enter a third integer: ');
// const result1 = a % 10;
// const result2 = b % 10;
// const result3 = c % 10;

// if(result1 == result2 && result1 == result3) {
//     console.log(`${a}, ${b} and ${c} have the same last digit. `);
// }
// else {
//     console.log(`${a}, ${b} and ${c} havr different last digit.`);
// }



// function checkString(str) {
//     if (str.startsWith('S') && str.endsWith('G')) {
//         console.log('The string starts with S and ends with G');
//     }
//     else if(str.startaWith('S')) {
//         console.log('The string starts with S but does not end with G');
//     }
//     else if(str.endsWith('G')) {
//         console.log('The string starts does not with S but end with G');
//     }
//     else {
//         console.log('The string does not start with S and does not end with G');
//     }
// }
// let string = prompt('Enter a string: ');
// checkString(string);

const message = 'This is a long message\n' +
'that spans across multiple lines\n' + 
'in the code.'
console.log(message);

const msg = `This is a long message
that spans across multiple lines
in the code.`
console.log(msg);

const str = "LEARNING JAVASCRIPT";
const result = window.btoa(str);
console.log(result);
const result1 = window.atob(result);
console.log(result1);

const Base64 = {
    _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode : function (input) {
        let output = "";
        let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        let i = 0;
        input = Base64._utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            }
            else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
            Base64._keyStr.charAt(enc1) + Base64._keyStr.charAt(enc2) +
            Base64._keyStr.charAt(enc3) + Base64._keyStr.charAt(enc4);
        }
        return output;
    },
    decode : function (input) {
        let output = "";
        let chr1, chr2, chr3;
        let enc1, enc2, enc3, enc4;
        let i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
             enc1 = Base64._keyStr.indexOf(input.charAt(i++));
        enc2 = Base64._keyStr.indexOf(input.charAt(i++));
        enc3 = Base64._keyStr.indexOf(input.charAt(i++));
        enc4 = Base64._keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }

    }

    output = Base64._utf8_decode(output);

    return output;

},

// private method for UTF-8 encoding
_utf8_encode : function (string) {
    string = string.replace(/\r\n/g,"\n");
    let utftext = "";

    for (let n = 0; n < string.length; n++) {

        let c = string.charCodeAt(n);

        if (c < 128) {
            utftext += String.fromCharCode(c);
        }
        else if((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
        }
        else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
        }

    }

    return utftext;
},

// private method for UTF-8 decoding
_utf8_decode : function (utftext) {
    let string = "";
    let i = 0;
    let c = c1 = c2 = 0;

    while ( i < utftext.length ) {

        c = utftext.charCodeAt(i);

        if (c < 128) {
            string += String.fromCharCode(c);
            i++;
        }
        else if((c > 191) && (c < 224)) {
            c2 = utftext.charCodeAt(i+1);
            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
            i += 2;
        }
        else {
            c2 = utftext.charCodeAt(i+1);
            c3 = utftext.charCodeAt(i+2);
            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
        }

    }
    return string;
}
}

// define the string
const string = 'Learning JavaScript';

// encode the String
const encodedString = Base64.encode(string);
console.log(encodedString);

// decode the String
const decodedString = Base64.decode(encodedString);
console.log(decodedString);


let countDownDate = new Date().getTime() + 24 * 60 * 60 * 100;
let x = setInterval(function() {
    let now = new Date().getTime();
    let timeLeft = countDownDate - now;
    const days = Math.floor( timeLeft/(1000*60*60*24) );
    const hours = Math.floor( (timeLeft/(1000*60*60)) % 24 );
    const minutes = Math.floor( (timeLeft/100/60) % 60 );
    const seconds = Math.floor( (timeLeft/1000) % 60 );
    console.log(days + "d" + hours + "h" + minutes + "m" + seconds + "s");

    if (timeLeft < 0) {
         clearInterval(x);
         console.log('CountDown Finished');
    }
}, 2000);


const date  = new Date();
const n = date.toDateString();
const time = date.toLocaleTimeString();
console.log('Date: ' + n);
console.log('Time: ' + time);
