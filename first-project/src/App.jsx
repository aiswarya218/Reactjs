// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { Button } from './button'
// import { ButtonSection } from './ButtonSection'
// import { textbox } from './Textbox'
// import './App.css'

// function App() {

//   function notify(msg) {
//     alert(msg)
//   }

//   return (
//     <>
//        <Button color ={"Red"}/>
//        <Button color ={"Green"}/>
//        <Button color ={"Purple"}/>
//     </>
//   )
// }
// export default App


// import React from "react";
// import Greeting from "./Greeting";

// export default function App() {
//   return (
//     <div>
//       <h1>Welcome to My App</h1>
//       <Greeting name = "Aiswarya" />
//       <Greeting name = "John" />
//       <Greeting name = "Sara" />
//     </div>
//   );
// }



// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./home";
// import About from "./about";
// import Contact from "./contact";

// export default function App() {
//   return (
//     <BrowserRouter>
//     <nav style ={{ marginBottom: "20px" }}>
//       <Link to = "/">Home</Link> |{" "}
//       <Link to = "/">About</Link> |{" "}
//       <Link to = "/">Contact</Link>  |{" "}
//     </nav>

//     <Routes>
//       <Route path = "/" element = {<Home />} />
//       <Route path = "/about" element = {<About />} />
//       <Route path = "/contact" element = {<Contact />} />
//     </Routes>
//     </BrowserRouter>
//   );
// }

// import React from "react";
// import Header from "./Header";
// import Message from "./Message";

// export default function App() {
//   return (
//     <div>
//       <Header />
//       <Message />
//     </div>
//   );
// }

// import React, { useState } from "react";
// import Greeting from "./Greeting";

// export default function App() {
//   const [name, setName] = useState("Vamika");

//   const handleChange = (e) => {
//     setName(e.target.value);
//   };

//   return (
//     <div style = {{ padding : "20px" }}>
//       <h1> React jsx</h1>
//       <input type = "text" placeholder = "Enter your name" value = {name}
//       onChange = {handleChange}
//       />
//     </div>
//   );
// }

import React, { useState } from "react";
import Greeting from "./Greeting";

export default function App() {
  const [name, setName] = useState("Aiswarya");

  const handleChange = (e) => {
    setName(e.target.value);
  };


return (
  <div style = {{ padding : "20px" }}>
    <h1> React Examples</h1>

    <input type = "text" placeholder = "Enter your name" value = 
    {name} onChange = {handleChange} />
    <Greeting name = {name} />
  </div>
);
}


