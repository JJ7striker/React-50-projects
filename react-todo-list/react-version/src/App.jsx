import { useState } from "react";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const toggleCompleted = (id) => { 
    setTodoList(
      todoList.map(item => {
        if (item.id === id) {
          return {...item, completed: !item.completed};
        }
          return item;
  })
    )
  };

  const createItem = (task) => {
    const item = {
      todoItem: task,
      id: crypto.randomUUID(),
      completed: false,
    };

    if (task.trim() === "") {
      alert("please input items in list");
      return;
    }

    setTodoList((prevTodo) => [...prevTodo, item]);

    setTask("");
  };


  const deleteItem = (id) => {
    const filteredArray = todoList.filter((todo) => todo.id !== id);

    setTodoList(filteredArray);
  };

  const itemsRemaining = todoList.filter(item => item.completed === false).length;
  return (
    <div className="app">
      <div className="search_section">
        <input
          type="text"
          placeholder="Type your task..."
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />

        <div className="btn-section">
          <button onClick={() => createItem(task)}>Create Task</button>
          <button onClick={() => setTodoList([])}>Clear</button>
        </div>
      </div>

      <div className="task_section">
        <ul>
          {todoList.map((task) => (
            <TodoItem key={task.id} deleteItem={deleteItem} task={task} toggleCompleted={toggleCompleted} />
          ))}
        </ul>
      </div>
      <h2 className="item_count">Task Left: {itemsRemaining}</h2>
    </div>
  );
};

export default App;
