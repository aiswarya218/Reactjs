import React, { useState } from "react";
import { evaluate } from "mathjs";


function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const calculate = () => {
    try {
      setInput(evaluate(input).toString());
    }
    catch (error) {
      setInput("Error");
    }
  };

  return (
    <div style = {{ padding : 40, fontFamily : "Arial", textAlign : "center"}}>
      <h1>  Counter + Calculator</h1>
      <div style = {{ marginBottom : 40}}>
        <h2>Counter</h2>
        <h3>{count}</h3>
        <button onClick = {() => setCount(count - 1)}>-</button>
        <button onClick = {() => setCount(0)} style = {{ margin : "0 10px" }}>Reset</button>
        <button onClick = {() => setCount(count + 1)}>+</button>
      </div>

      <div>
        <h2>Calculator</h2>
        <input type = "text" value = {input} onChange = {(e) => setInput(e.target.value)}
        style = {{ fontSize : 20, width : "60%", padding : 10}}
        placeholder = "Enter calculation e.g. 4*5"
        />
        <br /><br />
        <button onClick = {calculate}>=</button>
        <button onClick = {() => setInput("")} style = {{ marginLeft : 10}}>
          C
        </button>
      </div>
    </div>
  );
}

export default App;