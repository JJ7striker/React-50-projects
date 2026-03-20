const input = document.getElementById("input");

const generatorBtn = document.getElementById("btn");

function colorGenerator(input) {
    document.body.style.backgroundColor = input;
}

generatorBtn.addEventListener("click", () => {
    colorGenerator(input.value);
});