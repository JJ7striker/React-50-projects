import { useState } from 'react'



function App() {
  const [minInput, setMinInput] = useState("");
  const [maxInput, setMaxInput] = useState("");
  const [random, setRandom] = useState(0);

  const randomValue = () => {
    if (minInput === "" || maxInput === "") {
      return;
    }

    const min = Number(minInput);
    const max = Number(maxInput);

    if (min > max) {
      alert("Minimum number should be lower than Maximum")
    }

    const randomInput = Math.floor(Math.random() * (max - min + 1) + min);
    setRandom(randomInput);
  }

  return (
    <div className='card'>
      <h2>Random Number Generator</h2>
      <label htmlFor="min">Minimum number: <input type="number" id='min' value={minInput} onChange={(e) => setMinInput(e.target.value)} /></label>
      <label htmlFor="max">Minimum number: <input type="number" id='max' value={maxInput} onChange={(e) => setMaxInput(e.target.value)} /></label>
      <button onClick={randomValue} id='btn'>Generate Button</button>
      <h2 id='value'>{random}</h2>
      </div>
  )
}

export default App
