import { useState } from 'react'
import './index.css'

function App() {
  const [temp, setTemp] = useState(25)

  return (
    <div className="card">
      <h1>Temperature Controller</h1>

      <h2>{temp} °C</h2>

      <h3>
        Status:{" "}
        {temp < 20 ? "❄️ Cold" : temp <= 30 ? "😊 Normal" : "🔥 Hot"}
      </h3>

      <button onClick={() => setTemp(temp - 1)}>Decrease</button>
      <button onClick={() => setTemp(temp + 1)}>Increase</button>
    </div>
  )
}

export default App
