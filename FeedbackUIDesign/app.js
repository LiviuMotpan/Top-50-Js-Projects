const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = 'Satisfied';
console.log(ratingsContainer);
ratingsContainer.addEventListener("click", (e) => {
    console.log(e.target.parentNode);
    if(e.target.parentNode.classList.contains("rating")) {
        removeActives();
        e.target.parentNode.classList.add("active");
        selectedRating = e.target.nextElementSibling.innerHTML;
    }
})

sendBtn.addEventListener("click",(e)=> {
    panel.innerHTML = `
        <p class="heart">💖</p>
        <strong>Thank You !</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
    `;
})

function removeActives() {
    for(let i = 0;i<ratings.length;i++) {
        ratings[i].classList.remove("active");
    }
}