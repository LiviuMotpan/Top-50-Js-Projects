const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");
const counterValue = document.querySelector("#counterValue");
let counter = 0;

decrementBtn.addEventListener("click",()=> {
    counter++;
    setVal(counter);
})

incrementBtn.addEventListener("click",()=> {
    counter--;
    setVal(counter);
})

function setVal(counter) {
    counterValue.innerHTML = counter;
}