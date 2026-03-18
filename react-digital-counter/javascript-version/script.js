const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec")
const periodEl = document.getElementById("period");

const createTime = () => {
    const date = new Date();

    const newHr = date.getHours();
    const newMin = date.getMinutes();
    const minSec = date.getSeconds();

    const fullHr = checkZeros(newHr);
    const fullMin = checkZeros(newMin);
    const fullSec = checkZeros(minSec);

    let conversion = fullHr % 12 || 12;
    const period = fullHr >= 12 ? "p.m" : "a.m";

    hr.textContent = conversion;
    min.textContent = fullMin;
    sec.textContent = fullSec;
    periodEl.textContent = period;


}

setInterval(() => {
    createTime();
}, 1000)

const checkZeros = (time) => {
    if (time < 10) {
        time = "0" + time
    } 
    return time;
}
