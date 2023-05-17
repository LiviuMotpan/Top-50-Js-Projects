const rangeInput = document.querySelector(".range");
const rangeValue = document.querySelector("#rangeValue");

rangeInput.addEventListener("input",(e)=> {
    rangeValue.innerHTML = rangeInput.value;
})