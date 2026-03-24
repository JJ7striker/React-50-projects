const firstBtn = document.getElementById("btn_1");
const secondBtn = document.getElementById("btn_2");
const thirdBtn = document.getElementById("btn_3");
const firstP = document.getElementById("first_p");
const secondP = document.getElementById("second_p");
const thirdP = document.getElementById("third_p");

firstBtn.addEventListener("click", () => {
    firstP.classList.toggle("toggle");  
    firstBtn.classList.toggle("rotate");
});

secondBtn.addEventListener("click", () => {
    secondP.classList.toggle("toggle");
     secondBtn.classList.toggle("rotate");
})

thirdBtn.addEventListener("click", () => {
    thirdP.classList.toggle("toggle")
    thirdBtn.classList.toggle("rotate");
})