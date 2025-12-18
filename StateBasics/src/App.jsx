import { useState } from "react"
import "./App.css"

function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <div className="counter-container">
      <div className="counter-value">{count}</div>
      <div className="counter-buttons">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  )
}

export default Counter
