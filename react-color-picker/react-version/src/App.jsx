import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("");
  const [currentColor, setCurrentColor] = useState("white");

  const generateColor = (color) => {
    setCurrentColor(color);
  }

  return (
    
    <div className='app' style={{backgroundColor: currentColor, height: "100vh"}}>
      <input type="text" id='input' placeholder='Type Color Here...' value={color} onChange={(e) => setColor(e.target.value)} />
      <button onClick={() => generateColor(color)}>Generate Button</button>
    </div>
  )
}

export default App
