import { useState } from "react"
import "./App.css"

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (task.trim() === "") return
    setTasks([...tasks, { id: Date.now(), text: task, done: false }])
    setTask("")
  }

  const toggleTask = id => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    ))
  }

  const deleteTask = id => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const completedCount = tasks.filter(t => t.done).length

  return (
    <div className="page-center">
      <div className="todo-container">
        <h1>📝 To-Do List</h1>
        <p className="counter">
          Total: {tasks.length} | Completed: {completedCount}
        </p>

        <div className="input-box">
          <input
            value={task}
            onChange={e => setTask(e.target.value)}
            onKeyDown={e => e.key === "Enter" && addTask()}
            placeholder="Add a new task..."
          />
          <button onClick={addTask}>Add</button>
        </div>

        {tasks.length === 0 && (
          <p className="empty">No tasks yet. Add one above 👆</p>
        )}

        <ul>
          {tasks.map(t => (
            <li key={t.id} className={t.done ? "done" : ""}>
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggleTask(t.id)}
              />
              <span>{t.text}</span>
              <button className="delete" onClick={() => deleteTask(t.id)}>✕</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
