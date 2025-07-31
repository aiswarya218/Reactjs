import React from "react";
import TaskList from"./TaskList";
import AddTask from "./AddTask";
import { kbd } from "framer-motion/client";

function App() {
  return (
    <div style = {{ textAlign: "center", padding: "20px" }}>
      <h1>Mini Task Manager</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;