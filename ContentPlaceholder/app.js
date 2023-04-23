const header = document.querySelector("#header");
const title = document.querySelector("#title");
const excerpt = document.querySelector("#excerpt");
const profile_img = document.querySelector("#profile_img");
const name = document.querySelector("#name");
const date = document.querySelector("#date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData,2500);

function getData() {
    header.innerHTML = '<img src="https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">';
    title.innerHTML = `Lorem ipsum dolor sit amet.`;
    excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, earum?`;
    profile_img.innerHTML = `<img src="https://images.pexels.com/photos/7988089/pexels-photo-7988089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">`;
    name.innerHTML = "John Doe";
    date.innerHTML = "Oct 08, 2020";

    animated_bgs.forEach(bg => bg.classList.remove("animated-bg"));
    animated_bg_texts.forEach(bg => bg.classList.remove("animated-bg-text"));
}