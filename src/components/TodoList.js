// src/components/TodoList.js
import React from "react";

const TodoList = ({ tasks, onToggle, onDelete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className="task">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="task_check"
          />
          <span className="task_title">{task.title}</span>
          <button className="task_btn" onClick={() => onDelete(task.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
