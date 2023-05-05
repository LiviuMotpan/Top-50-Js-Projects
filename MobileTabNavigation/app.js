const imgs = document.querySelectorAll(".content");
const elms = document.querySelectorAll("ul li");

elms.forEach((el ,idx) => {
    el.addEventListener("click", (e) => {
        removeClass();
        imgs[idx].classList.add("show");
        el.classList.add("active");
    })
})

function removeClass() {
    imgs.forEach(img => img.classList.remove("show"));
    elms.forEach(el => el.classList.remove("active"));
}
