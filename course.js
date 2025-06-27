// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     creator: "Per Harlad Borgen",
//     length: 63,
//     level: 2,
//     isFree : true,
//     tags: ["html", "css"]
// }

// console.log(course.tags)

// let hands = ["rock", "paper", "scissor"]
  
//   function getHand(){
//       let randomIndex = Math.random()
//       return randomIndex
//   }

//   console.log( getHand())



// let myLeads = `["www.awesomelead.com"]`

// myLeads = JSON.parse(myLeads)

// myLeads.push("www.lead2.com")

// myLeads = JSON.stringify(myLeads)
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatland.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementsById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})


function renderLeads(){
 let listItems = ""
for(let i=0; i< myLeads.length; i++){
   listItems += "<li>" + myLeads[i] + "</li>"
}
ulEl.innerHTML = listItems
}