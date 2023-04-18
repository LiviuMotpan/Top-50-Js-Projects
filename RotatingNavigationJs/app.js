const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector(".container");
const circle = document.querySelector(".circle");
const mainImg = document.getElementById("mainImg");

open.addEventListener("click",()=> {
    container.classList.add('show-menu');
    circle.style.background = "#fde616";
    mainImg.src = 'images/img-2.jpeg';
});

close.addEventListener("click",()=> {
    container.classList.remove('show-menu');
    circle.style.background = "#9b8c0b";
    mainImg.src = 'images/img-1.jpg';
})