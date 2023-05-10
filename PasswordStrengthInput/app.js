const inputPassword = document.querySelector("#password");
const backgroundEl = document.querySelector("#background");

let blurDecrease = 1;

inputPassword.addEventListener("input",(e)=> {
    backgroundEl.style.filter = `blur(calc(20px - ${inputPassword.value.length*blurDecrease}px))`;
})