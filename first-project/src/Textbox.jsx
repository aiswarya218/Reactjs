// import { useState } from "react"

// export function Textbox() {
//     const [text, setText] = useState("")
    
//     return (
//         <>
//         <input onChange = {(e) => setText(e.target.value): void}></input>
//         <p>{text}</p>
//         </>
//     )
// }


import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onclick = {increment}>Increase</button>
        </div>
    );
}

// import { useState } from "react";

// export default function MultiStateExample() {
//     const [count, setCount] = useState(0);

//     const [name, setName] = useState("Aiswarya");

//     const [user, setUser] = useState({
//         email : "aiswarya123@gmail.com",
//         age : 20
//     });

//     const [hobbies, setHobbies] = useState(["Reading","Coding"]);
//     return (
//         <div style = {{padding : "20px"}}>
//             <h2>Hello, Angela</h2>
//             <p>Email : angela12@gmail.com</p>
//             <p>Age : 20</p>

//             <h3>Count : {count}</h3>
//             <button onClick = {() => setCount(count + 1)}>Increase</button>

//             <h3>Hobbies : </h3>
//             <ul>
//                 {hobbies.mao((hooby, index) => (
//                     <li key = {index}>{hobby}</li>
//                 ))}
//             </ul>
//             <button 
//             onClick = {() => setHobbies([...hobbies, "New Hobby"])}
//             style = {{ marginTop : "10px"}}
//             >
//                 Add Hobby
//             </button>
//         </div>
//     );
// } 


// import React from "react";
// import Greeting from "./Greeting";

// export default function App() {
//     return (
//         <div>
//             <h1>Welcome to My App</h1>
//             <Greeting name = "Aiswarya" />
//             <Greeting name = "John" />
//             <Greeting name = "Sara" />
//         </div>
//     );
