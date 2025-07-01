//button click event

import React from "react";

export default function ClickExample() {
    const handleClick = () => {
        alert("Button clicked!");
    };
return (
    <button onClick = {handleClick}>
    Click Me </button>
);
}

//input change event
import { useState } from "react";

export default function InputExample() {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
        <input type = "text" onChange = {handleChange}/>
        <p>You typed: {text}</p>
        </div>
    );
}

//form submit event
import React, { useState } from "react";

export default function FormExample() {
    const [name, setName] =userState("");

    const handeleSubmit = (e) => {
        e.preventDefault();
        alert(`Form submitted by ${name}`);
    };

    return (
        <form onSubmit = {handleSubmit}>
        <input type = "text"
               value = {name}
               onChange = {(e) => setName(e.target.value)} />
               <button type = "submit">Submit</button>
               </form>
    );
}