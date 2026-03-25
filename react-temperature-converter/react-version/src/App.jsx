import { useState } from "react";

function App() {
  const [trackedInput, setTrackedInput] = useState("");
  const [dropdown, setDropdown] = useState("celsius");
  const [trackedNum, setTrackedNum] = useState(0);

  const convertToFahrenheit = (input) => {
    // Formula for celcius to fahrenheit F = (C * 5/9) + 32
    const fahrenheit = input * (9 / 5) + 32;
    return fahrenheit;
  };

  const convertToCelcius = (input) => {
    // Formula for fahrenheit to celsius F = (C - 32) * 5/9
    const celsius = (input - 32) * (5 / 9);
    return celsius;
  };

  const createConverter = () => {
    if (trackedInput === "" || isNaN(trackedInput)) {
      alert("Enter a number");
      return;
    }
    const numberInput = Number(trackedInput);
    if (dropdown === "celsius") {
      setTrackedNum(convertToFahrenheit(numberInput));
    }

    if (dropdown === "fahrenheit") {
      setTrackedNum(convertToCelcius(numberInput));
    }
  };

  return (
    <div className="body">
      <div className="card">
        <h1>Temperature</h1>

        <div className="input_section">
          <input
            type="number"
            id="input"
            placeholder="0"
            value={trackedInput}
            onChange={(e) => setTrackedInput(e.target.value)}
          />
        </div>

        <div>
          <select
            name="temp"
            id="temp"
            onChange={(e) => {
              setDropdown(e.target.value);
              setTrackedNum(0);

            }}
            value={dropdown}
          >
            <option value="celsius">°C</option>
            <option value="fahrenheit">°F</option>
          </select>
        </div>

        <h2>
          {`${trackedNum % 1 !== 0 ? trackedNum.toFixed(2) : trackedNum}`}{" "}
          {dropdown === "celsius" ? "°F" : "°C"}
        </h2>
        <div class="btns">
          <button id="convert" onClick={createConverter}>
            Convert
          </button>
          <button
            id="reset"
            onClick={() => {
              setTrackedNum(0);
              setTrackedInput("");
              setDropdown("celsius")
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
