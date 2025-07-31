import React, { useEffect, useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    fetch("http://localhost:3001/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  };

  const deleteTask = (id) => {
    fetch(`http://localhost:3001/tasks/${id}`, { method: "DELETE" })
      .then(() => fetchTasks());
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>📋 Task List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}{" "}
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
