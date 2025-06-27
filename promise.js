// console.log('started');

// let a; 

// try{
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

// function getVal1() {
//     console.log('inside getVal1');
//     var obj = undefined;
//     return obj.value;
// }

// function getVal2() {
//     console.log('inside getVal2');
//     return 22;
// }
// function processValues(a, b) {
//     return a + b;
// }


// console.log('Started');
// var aa = getValue();
// aa.then((data) => {
//     console.log(data);
// });
// console.log('Ended');

// async function getValue() {
//     // fetch('http://jsonplaceholder.typicode.com/todos/1')
//     // .then((data) => {
//     //  return data.json();
//     //  })
//     //  .then((data) => {
//     //     console.log(data);
//     // });

// const data = await fetch('http://jsonplaceholder.typicode.com/todos/1');
// const jsonData = await data.json();
// return jsondata;
// }


// console.log('Started');
// var aa = getValue()
//    .then((data) => {
//      console.log(data);
//    });
// console.log('Ended');

// async function getValue() {
//     try{
//     const data = await fetch('http://jsonplaceholder.typicodesadd.com/todos/1');
//     const jsonData = await data.json();
//     return jsonData;
//     }
//     catch(e) {
//         console.log('Handled');
//         return {};
//     }
// }


// function submit() {
//   const items = document.getElementsByClassName('data');
//   const data = {};
//     for ( let item of items) {
//       data[item.name] = item.value;
//     }
//     console.log(data);
// }


// function average(a = b, b=a + 100) {
//   console.log(a, b);
//   const avg = (a + b) / 2;
//   return avg;
// }

// function getDefault() {
//   return 100;
// }

// const avg = average();
// console.log(avg);


// function average(a = b, b = a + 100) {
//   console.log (a, b);
//   const avg = (a + b) / 2;
//   return avg;
// }

// function getDefault() {
//   return 100;
// }

// const avg = average();
// console.log(avg);


// const textEl = document.getElementById('text')
// const speedEl = document.getElementById('speed')
// const text = 'We Love Programming!'
// let idx = 1
// let speed = 300 / speedEl.ariaValueMax

// writeText()

// function writeText() {
//   textEl.innerText = text.slice(0, idx)

//   idx++

//   if(idx > text.length) {
//     idx = 1
//   }

//   setTimeout(writeText, speed)

// }

// speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)

// //addition
// const add = function(a, b) {
//   return a + b;
// };
// console.log(add(3, 4));

// //square
// const numbers = [1, 2, 3];
// const squared = numbers.map(function(num) {
//   return num * num;
// });
// console.log(squared);

// //subtraction
// const sub = function(a, b) {
//   return a - b;
// };
// console.log(sub(5,2));

// //cube
// const number = [2, 4, 6];
// const cube = number.map(function(num) {
//   return num * num * num;
// });
// console.log(cube);

// //multiplication
// const mult = function(a, b) {
//   return a * b;
// };
// console.log(mult(22,2));

// //division
// const div = function(a, b) {
//   return a / b;
// };
// console.log(div(69,3));



{
  let a = 10;
  const b =20;
  var c = 30;

  console.log("Inside block:");
  console.log("a =", a);
  console.log("b =", b);
  console.log("c =", c);
}
console.log("Outside block:");
try {
  console.log("a =", a);
}
catch (error) {
  console.log("a is not accessible");
}
try {
  console.log("b =", b);
}
catch (error) {
  console.log("b is not accessible");
}
console.log("c =", c);


function runLoopDemo() {
  let output = "";
  for (let i =0; i < 3; i++) {
    output += "Inside loop with let: i = " + i + "\n";
  }
  try {
    output += "Outside loop: i = " + i + "\n";
  }
  catch (err) {
    output += "Outside loop: i is not accessible (let is block scoped)\n";
  }
  output += "\n";

  for (var j = 0; j <3; j++) {
    output += "Inside loop with var: j = " + j + "\n";
  }
  output += "Outside loop: j = " + j + " (var is not block scoped)\n";

  document.getElementById("output").textContent = output;
}

  function sum(num) {
    if (num > 0){
      return num + sum(num - 1);
    }
    else {
      return num;
    }
  }
    const number = parseInt(prompt('Enter a positive integer: '));
    const result = sum(number);
    console.log(`The sum is ${result}`);



    function factorial(x) {
      if (x == 0) {
        return 1;
      }
      else {
        return x * factorial(x - 1);
      }
    }
    const num = prompt('Enter a positive number: ');
    if (num >= 0) {
      const result = factorial(num);
      console.log(`The factorial of ${num} is ${result}`);
    }
    else {
      console.log('Enter a positive number: ');
    }



  //  function sum(num) {
  //   if (num > 0){
  //     return num + sum(num - 1);
  //   }
  //   else {
  //     return num;
  //   }
  //  } 
  //  const number = parseInt(prompt('Enter a positive integer: '));
  //  const result = sum(number);
  //  console.log(`the sum is ${result} `);



  //  const string = 'Mr Red has a red house and a red car';
  //  const newText = string.replace('red', 'blue');
  //  console.log(newText);
   
   
  //  const string = 'Mr Red has a red house and a red car';
  //  const regex = /red/g;
  //  const newText = string.replace(regex, 'blue');
  //  console.log(newText);
