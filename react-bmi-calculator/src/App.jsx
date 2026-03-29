import { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [calculate, setCalculate] = useState(0);
  const [checkSize, setCheckSize] = useState("");

  const userCalculate = () => {
    if (weight === "" && height === "") {
      alert(`Please enter  a value in the respective fields`);
      return;
    }

    if (weight === "" || height === "") {
      alert("Please enter a value in the respective field");
      return;
    }

    const userWeight = Number(weight);
    const userHeight = Number(height);
    const calculatedValue = userWeight / userHeight ** 2;

    setCalculate(calculatedValue);

    if (calculatedValue < 18.5) {
      setCheckSize("Under weight");
    } else if (calculatedValue <= 24.9) {
      setCheckSize("Healthy Weight");
    } else if (calculatedValue > 29.9) {
      setCheckSize("Overweight");
    }
  };

  return (
    <div className="body">
      <h2>Calculate your BMI</h2>

      <div>
        <div className="measure weight">
          <h2>Weight</h2>
          <div className="input1">
          <input
            type="number"
            id="number"
            className="weight-number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="0"
          />{" "}
          <span>kg</span>
          </div>
        </div>

        <div className="measure height">
          <h2>Height</h2>
          <div>
          <input
            type="number"
            id="number"
            className="height-number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="0"
          />{" "}
          <span>m</span>
          </div>
        </div>

        <button onClick={userCalculate}>Calculate</button>
      </div>

      <span className="value">BMI: {calculate % 1 !== 0 ? calculate.toFixed(2) : calculate} kg/m2</span>
      <span className="result">
        {checkSize}
      </span>
    </div>
  );
}

export default App;
