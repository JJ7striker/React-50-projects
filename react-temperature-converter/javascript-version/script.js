const input = document.getElementById("input");
const dropdown = document.getElementById("temp");
const convertBtn = document.getElementById("convert");
const resetBtn = document.getElementById("reset");
const valueText = document.getElementById("value");

function createConversion() {

    if (dropdown.value === "celsius") {
        const inputNumber = Number(input.value);
        const fah = convertToFahrenheit(inputNumber);
        valueText.textContent = `${fah.toFixed(2)}°F`;
    }

    if (dropdown.value === "fahrenheit") {
        const inputNumber = Number(input.value);
        const cel = convertToCelsius(inputNumber);
        valueText.textContent = `${cel.toFixed(2)}°C`;
    }

    input.value = "";
}

const convertToFahrenheit = (input) => {
    // Formula for celcius to fahrenheit F = (C * 5/9) + 32
    const fahrenheit = (input * (9/5)) + 32;
    return fahrenheit;
}

const convertToCelsius = (input) => {
    // Formula for fahrenheit to celsius F = (C - 32) * 5/9
    const celsius = (input - 32) * (5/9);
    return celsius;
}

convertBtn.addEventListener("click", () => {
    if (input.value === "") {
        alert("Please enter a number");
        return;
    }
    createConversion()
});

resetBtn.addEventListener("click", () => {
    valueText.textContent = "0";
    input.value = '';
});