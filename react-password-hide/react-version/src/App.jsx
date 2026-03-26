import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [showPassword, setShowPassword] = useState(false);



  return (
    <div className="body">
      <h2>
        Toggle <span class="heading">{checkbox ? "Show" : "Hide"}</span>{" "}
        Password
      </h2>

      <div>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="input"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <input
          type="checkbox"
          id="checkbox"
          onClick={() => {
            setCheckbox(!checkbox);
            setShowPassword((prevState) => !prevState)
          }}
        />
      </div>
    </div>
  );
}

export default App;
