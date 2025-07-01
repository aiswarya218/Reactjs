import React, { useState } from "react";
import { jsx } from "react/jsx-runtime";

function App() {
    const [text, setText] = userState("");

    return (
        <div style = {{ maxWidth: 500, margin: "100px auto", textAlign : "center"}}>
            <h1> ✍️ Live Character Counter</h1>
            <textarea
            rows = "6"
            cols = "40"
            placeholder = "Type soething..."
            value = {text}
            onChange = {(e) => setText(e.target.value)}
            style = {{ padding : "10px", fontSize : "16px" }}
            />
            <p>
                 🔢 Characters typed : <strong>{text.length}</strong>
            </p>
        </div>
    );
}

export default App;


