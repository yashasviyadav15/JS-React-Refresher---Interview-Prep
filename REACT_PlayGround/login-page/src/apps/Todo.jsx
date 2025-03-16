import React from 'react'

const Todo = () => {
  return (
  <div class="todo-container">
  <h1>To-Do List</h1>
  <input type="text" id="task-input" placeholder="Add a new task"/>
  <button id="add-task">Add Task</button>
  <ul id="task-list">
    <li>yes</li>
  </ul>
</div>
  )
}

export default Todo