const slides = document.querySelectorAll(".slide");

slides.forEach(slide => {
    slide.addEventListener("click",()=> {
        removeCurrentActivies();
        slide.classList.add("active");
    })
})

function removeCurrentActivies() {
    slides.forEach(slide => {
        slide.classList.remove("active");
    })
}