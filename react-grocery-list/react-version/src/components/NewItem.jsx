import { useState } from "react";

const NewItem = ({item, deleteBtn, complete}) => {
    const [completed, setCompleted] = useState(false);
    return (
        <li className={completed ? "completed" : ""}>
            <span>{item.task}</span>
            <button onClick={() => {
                complete(item.id)
                setCompleted(!item.completed)
            }
                }>Completed</button>
            <button onClick={() => deleteBtn(item.id)}>Delete</button>
        </li>

    )
}

export default NewItem;