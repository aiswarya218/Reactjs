import React, { useState } from "react";

function AddTask() {
  const [title, setTitle] = useState("");

  const addTask = () => {
    if (!title.trim()) return;
    fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title })
    }).then(() => {
      setTitle("");
      window.location.reload(); // refresh after add
    });
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={title}
        placeholder="Enter new task"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTask}>➕ Add</button>
    </div>
  );
}

export default AddTask;