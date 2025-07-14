import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset= () => setCount(0);

  return (
    <div style = {{ textAllign : "center", marginTop : "100px", fontFamily : "Arial"}}>
      <h1> 🔢 React Counter App</h1>
      <h2>{count}</h2>
      <div>
        <button onClick = {increment} style = {btnStyle}>+</button>
        <button onClick = {reset} style = {btnStyle}>Reset</button>
        <button onClick = {decrement} style = {btnStyle}>-</button>
      </div>
    </div>
  );
}

const btnStyle = {
  padding : "10px 20px",
  margin : "10px",
  fontSize : "18px",
  cursor : "pointer"
};

export default App;