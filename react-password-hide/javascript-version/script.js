const inputEl = document.getElementById("input");
const heading = document.querySelector(".heading");

const hidePassword = () => {
    if (inputEl.type === "password") {
        inputEl.type = "text";
        heading.textContent = "Show"
    } else {
        inputEl.type = "password";
        heading.textContent = "Hide"
    }
}