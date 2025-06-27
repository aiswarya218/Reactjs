// let myLeads = ["www.awesomelead.com"]

// myLeads = JSON.parse(myLeads)
// myLeads.push("www.lead2.com")
// myLeads = JSON.stringify(myLeads)
// console.log(typ)

// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// const deleteBtn = document.getElementById("delete-btn")
// const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))
// const tabBtn = document.getElementById("tab-btn")
            
// if( leadsFromLocalStorage){
//     myLeads = leadsFromLocalStorage
//     renderLeads(myLeads)
// }

// const tabs = [ {url: "http://www.linkedin.com/in/per-harald-borgen/"}]
//  tabBtn.addEventListener("click", function(){
//     chrome.tabs.query({active: true,currentWindow: true}, function(tabs){

//     }
   
//  })


// inputBtn.addEventListener("click",function() {
//      myLeads.push(inputEl.value)
//      inputEl.value = ""
//      renderLeads()
// })

// let box = document.getElementById("box")

// box.addEventListener("click", function(){
//     console.log("I want to open the box!")
// })

// deleteBtn.addEventListener("dblclick", function(){
//     console.log("double clicked!")
//     localStorage.clear()
//     myLeads = []
//     renderLeads()
// })

// inputBtn.addEventListener("click", function(){
//     myLeads.push(inputEl.value)
//     inputEl.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads))
//     renderLeads()

//     console.log( localStorage.getItem("myLeads"))
// })

// inputBtn.addEventListener("click", function(){
//     myLeads.push(inputEl.value)
//     inputEl.value = ""
//     localStorage.setItems("myLeads", JSON.strinify(myLeads))
//     renderLeads()
// })

// function renderLeads(){
//     let listItems = ""
//     for(let i = 0;i< leads.length; i++){
//         listItems += `
//         <li>
//             <a target='_blank' href='${lead[i]}'>
//             ${lead[i]}
//             </a>
//             </li>
//     }
//     ulEl.innerHtml = listItems 
// }



// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// const deleteBtn = document.getElementById("delete-btn")
// const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
// const tabBtn = document.getElementById("tab-btn")

// if (leadsFromLocalStorage) {
//     myLeads = leadsFromLocalStorage
//     render(myLeads)
// }

// tabBtn.addEventListener("click", function(){    
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//         myLeads.push(tabs[0].url) 
//         localStorage.setItem("myLeads", JSON.stringify(myLeads) )
//         render(myLeads)
//     })
// })

// function render(leads) {
//     let listItems = ""
//     for (let i = 0; i < leads.length; i++) {
//         listItems += `
//             <li>
//                 <a target='_blank' href='${leads[i]}'>
//                     ${leads[i]}
//                 </a>
//             </li>
//         `
//     }
//     ulEl.innerHTML = listItems
// }

// deleteBtn.addEventListener("dblclick", function() {
//     localStorage.clear()
//     myLeads = []
//     render(myLeads)
// })

// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     inputEl.value = ""
//     localStorage.setItem("myLeads", JSON.stringify(myLeads) )
//     render(myLeads)
// })



// import {createButton} from './variable.js';

// createButton('Feature 1', () => {
//     alert('feature 1');
// });
// createButton('Feature 2',() => {
//     createButton('Start Disco', changeBg);
//     createButton('Stop Disco');
// });

// let isGreen = true;
// let handle = null;
// function changeBg() {
//     if(!handle) {
//         handle = setInterval(() => {
//             document.body.style.background = isGreen ? 'green' : 'blue';
//         }, 500);
//     }
// }
// function stopChangingBg() {
//     if(handle) {
//         handle = null;
//         clearInterval(handle);
//     }
// }



// import {createButton} from './index1.js';

// createButton('Feature 1', () => {
//     alert('feature 1');
// });
// createButton('Feature 2', () => {
//     import('./variable.js')
//     .then((obj) => {
//         createButton('Start Disco', obj.changBg);
//         createButton('Stop Disco', obj.stopChangingBg);
//     });

//     const obj = await import('./button.js');
//     createButton('Start Disco', obj.changeBg);
//     createButton('Stop Disco', obj.stopChangingBg);
// });


// const var1 = "Hi.My name is Varma.";
// const var2 = "I am the CEO of Teja Group.";
// const var3 = "We welcome you all to the opening ceremony!";

// console.log(var1);
// console.log(var2);
// console.log(var3);


// const productName = "Pencil box";
// const price ="50 Rs";

// const value = `The ${productName} is ${price}`;
// console.log(value);


// const products = [
//     {
//         productName : 'Pen',
//         price : 10
//     },
//     {
//         productName : 'Book',
//         price : 20
//     }
// ];

// document.body.innerHTML = products.map((item) => {
//     return <div className = "item">
//         <h4>${item.productName}</h4>
//         <div>Price : $(item.price)</div>
//     </div>;
// });

// const productName = "Pen";
// const price = 45;
// const value = `The ${productName} is ${price} Rs`;
// const msg = `The product is ${price > 10 ? 'Costly' : 'Cheap'}`
// console.log(value);
// console.log(msg);



// function average(a = 0, b =0) {
//     console.log(a,b);
//     const avg = (a+b) / 2;
//     return avg;
// }

// const avg = average(5);
// console.log(avg);


// function submit() {
//     const items = document.getElementsByClassName('data');
//     const data = {};
//     for ( let item of items ) {
//         data[item.name] = item.ariaValueMax;
//     }
//     console.log(data);
// }


function textOnChange(arg) {
    const label = document.getElementById('validation-label');
    const error = validate(arg.value);
    if (error) {
        label.innerText = error;
    } else {
        label.innerText = '';
    }
}

function validate(value) {
    const regex = /^[a-z] [a-z0-9_]*$/i;
    const result = regex.test(value);
    if (result) {
        return '';
    } else {
        return 'Invalid String';
    }
}