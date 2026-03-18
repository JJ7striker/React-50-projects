import { useState } from "react"
import "./index.css"

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount( prevCount => prevCount + 1)
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1)
    }
    return;
  }

  const handleReset = () => {
    setCount(0);
  }

  return (
    <div className="counter-card">
      <h2>Counter App</h2>

    <div className="counter_section">
      <button onClick={handleDecrement}>-</button>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>+</button>
    </div>

    <button className="reset" onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App