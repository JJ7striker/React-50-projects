const textArea = document.getElementById("text");
const words = document.getElementById("words");
const characters = document.getElementById("char");
const maxChar = document.getElementById("max");
const message = document.getElementById("message");

const maxCharacters = 150;

textArea.addEventListener("input", () => {

    let currentTextLength = textArea.value;
    let currrentWord = currentTextLength.trim();

    let newChars = currentTextLength.replace(/\s/g, "");

    let newWords = currrentWord.split(" ").filter((word) => word.length > 0);

    characters.textContent = newChars.length;

    words.textContent = newWords.length;

    const remainingChars = maxCharacters - newChars.length

    if (newChars.length === maxCharacters) {
        textArea.style.border = "2px solid red";
        message.textContent = "Limit Reached";
    } 

    if (newChars.length < maxCharacters) {
        message.style.display = "none";
        textArea.style.border = "1px solid #000"
    }

    textArea.value = textArea.value.slice(0, maxCharacters);

    maxChar.textContent = remainingChars;
})