import { useState } from "react";
import NewItem from "./components/NewItem";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addItem = (task) => {
    if (task.trim() === "") {
      alert("Please input a grocery item");
      return;
    }
    const taskObj = {
      task: task,
      id: crypto.randomUUID(),
      completed: false,
    };

    setList((prevTask) => {
      return [...prevTask, taskObj];
    });

    setTask("")
  };

  const deleteBtn = (id) => {
    const filteredItem = list.filter((item) => item.id !== id);
    setList(filteredItem);
  };

  const deleteAll = () => {
    setList((prevList) => prevList.filter((item) => item.completed === false));
  };

  const flippedComplete = (id) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id == id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  const itemsLeft = list.filter((item) => item.completed === false).length;
  return (
    <div className="grocery_card">
      <div className="input_section">
        <input
          type="text"
          placeholder="Enter an Item"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={() => addItem(task)}>Add Item</button>
        <button onClick={() => setList([])}>Clear</button>
        <button onClick={deleteAll}>Clear All Completed Tasks</button>
      </div>

      <ul className="list-section">
        {list.map((item) => (
          <NewItem
            item={item}
            key={item.id}
            deleteBtn={deleteBtn}
            complete={flippedComplete}
          />
        ))}
      </ul>

      <h2>{itemsLeft} {itemsLeft > 1 ? "tasks" : "task"}</h2>
    </div>
  );
}

export default App;
