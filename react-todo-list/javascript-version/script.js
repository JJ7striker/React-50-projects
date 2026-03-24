const input = document.querySelector("input");
const taskSection = document.querySelector(".todo_section");
const createTaskBtn = document.querySelector(".create_btn");
const clearBtn = document.querySelector(".clear_btn");

function createTask(input) {
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  li.textContent = input;
  li.append(deleteBtn);
  taskSection.append(li);
  deleteBtn.addEventListener("click", () => {
    li.remove();
  })
  clearBtn.addEventListener("click", () => {
    li.remove();
  });
}

createTaskBtn.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("please enter something");
    return;
  }
  createTask(input.value);

  input.value = "";
});
