import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import { getTasks, addTask, updateTask, deleteTask } from "./api";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((data) => setTasks(data));
  }, []);

  const handleAddTask = (title) => {
    addTask({ title, completed: false }).then((newTask) => {
      setTasks([...tasks, newTask]);
    });
  };

  const handleToggleTask = (taskId) => {
    const taskToUpdate = tasks.find((task) => task.id === taskId);
    const updatedTask = { ...taskToUpdate, completed: !taskToUpdate.completed };

    updateTask(taskId, updatedTask).then(() => {
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === taskId ? updatedTask : task))
      );
    });
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId).then(() => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    });
  };

  return (
    <div className="app">
      <h1 className="heading">Todo List</h1>
      <div className="container">
        <div className="inputBox">
          <input type="text" placeholder="New task" />
          <button onClick={() => handleAddTask("New Task")}>Add</button>
        </div>
        <TodoList
          tasks={tasks}
          onToggle={handleToggleTask}
          onDelete={handleDeleteTask}
        />
      </div>
    </div>
  );
};

export default App;
