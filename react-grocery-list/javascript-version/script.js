const inputEl = document.getElementById("input");
const clearBtn = document.getElementById("clear");
const liSection = document.getElementById("list-section");

const createList = () => {
    if (inputEl.value.trim() === "") {
        alert("Please input an item");
        return;
    }

    const li = document.createElement("li");
    const delButton = document.createElement("button");
    const span = document.createElement("span");
    delButton.textContent = "Delete";
    span.textContent = inputEl.value;
    li.append(span);
    li.append(delButton);
    liSection.append(li);

    delButton.addEventListener("click", () => {
        li.remove();
    })
    inputEl.value = "";
}

clearBtn.addEventListener("click", () => {
    liSection.remove();
})