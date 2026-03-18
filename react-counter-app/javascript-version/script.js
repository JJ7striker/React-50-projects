const countEl = document.getElementById("count");

let count = 0;


function increment() {
    count += 1
    countEl.textContent = count;
}

function decrement() {
     if (count > 0) {
    count -= 1;
    countEl.textContent = count;
     }
     return
}  

function reset() {
    count = 0;
    countEl.textContent = count;
}