import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");

    const handleClick = (value) => {
      setInput ((prev) => prev + value);

    };
    const clearInput = () => {
      setInput("");
    };
    const calculate = () => {
      try {
        setInput(eval(input).toString());
      }
      catch {
        setInput("Error");
      }
    };


    const buttonStyle = {
      padding : "20px",
      margin : "5px",
      fontSize : "20px",
      width : "60px",
      cursor : "pointer",
    };

    return (
      <div style = {{ textAlign : "center", marginTop : "50px" }}>
      <h2>🧮 React Calculator</h2>
      <input type = "text"
          value = {input}
          style = {{
            width : "250px",
            height : "40px",
            fontSize : "20px",
            marginBottom : "20px",
            textAlign : "right",
            paddingRight : "10px",
          }}
          readOnly 
          />
          <br />
          <div>
          {["7", "8", "9", "/","4","5","6","*","1","2","3","-","0",".","=","+"].map((btn) => (
           <button key = {btn}
           style = {buttonStyle} onClick = {() => (btn === "=" ? calculate() : handleClick(btn))}
           >
           {btn}
           </button> 
          ))}
          <button onClick = {clearInput} style = {{ ...buttonStyle, width:"250px" }}>
          C
          </button>
          </div>
          </div>
        );
      }
  export default App;