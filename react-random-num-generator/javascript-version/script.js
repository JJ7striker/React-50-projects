const minInput = document.getElementById("min");
const maxInput = document.getElementById("max");
const generateBtn = document.getElementById("btn");
const value = document.getElementById("value");

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


generateBtn.addEventListener("click", () => {
  const minInputNum = Number(minInput.value);
  const maxInputNum = Number(maxInput.value);
  
  const randomValue = random(minInputNum, maxInputNum);

  value.textContent = randomValue;
});
