// src/api.js
const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const getTasks = () =>
  fetch(`${API_BASE_URL}/todos`).then((res) => res.json());

export const addTask = (task) =>
  fetch(`${API_BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  }).then((res) => res.json());

export const updateTask = (taskId, updates) =>
  fetch(`${API_BASE_URL}/todos/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  }).then((res) => res.json());

export const deleteTask = (taskId) =>
  fetch(`${API_BASE_URL}/todos/${taskId}`, {
    method: "DELETE",
  }).then((res) => res.json());
