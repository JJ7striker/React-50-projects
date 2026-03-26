import { useState } from "react";
import Search from "./components/Search";

const names = [
  "Liam",
  "Olivia",
  "Noah",
  "Amelia",
  "Oliver",
  "Charlotte",
  "Theodore",
  "Sophia",
  "Elijah",
  "Ava",
  "Liam",
  "Olivia",
  "Noah",
  "Amelia",
  "Oliver",
  "Charlotte",
  "Theodore",
  "Sophia",
  "Elijah",
  "Ava",
];


function App() {
  const [name, setName] = useState("");

    const filteredState = names.filter((username) => username.toLowerCase().includes(name.toLowerCase()));
  return (
    <div>
      <div className="input_section">
        <Search name={name} setName={setName} />
      </div>

      <div className="list">
        {filteredState.map((name, id) => (
          <h2 key={id}>{name}</h2>
        ))}
      </div>
    </div>
  );
}

export default App;
