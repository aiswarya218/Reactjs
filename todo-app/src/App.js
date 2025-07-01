import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, todo]);
    setTodo("");
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style = {{ maxWidth : 400, margin : "50px auto", textAlign : "center" }}>
      <h2> 📝 Simple Todo List</h2>
      <input
         type = "text"
         placeholder = "Enter todo"  value = {todo} onChange = {(e) => setTodo(e.target.value)}
         style = {{ padding : 8, width : "70%" }}
         />
         <button onClick = {addTodo} style = {{ padding : 8, marginLeft : 8 }}>
          Add
         </button>
         <ul style = {{ textAlign : "left", marginTop : 20}}>
          {todos.map((item, index) => (
            <li key = {index}>
              {item}
              <button onClick = {() => removeTodo(index)}
              style = {{
                marginLeft : 10,
                color : "white",
                backgroundColor : "red",
                border : "none",
                cursor : "pointer",
              }}
              >
               ❌
              </button>
            </li>
          ))}
         </ul>
             </div>
  );
}

export default App;