const TodoItem = ({task, deleteItem, toggleCompleted}) => {
    return (
         <li>
              <span className={task.completed ? "active" : ""}>{task.todoItem}</span>
              <div className="btns">
              <button onClick={() => toggleCompleted(task.id)}>Completed</button>
              <button onClick={() => deleteItem(task.id)}>Delete</button>
              </div>
            </li>
    )
}

export default TodoItem;