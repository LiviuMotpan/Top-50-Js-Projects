const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener("click",(e)=> {
    if(clickTime == 0) {
        clickTime = new Date().getTime();
    }else {
        if((new Date().getTime() - clickTime < 800)) {
            createHeart(e);
            clickTime = 0;
        }else {
            clickTime = new Date().getTime();
        }
    }
})

const createHeart = (e)=> {
    const heart = document.createElement("i");
    heart.classList.add("fa-solid");
    heart.classList.add("fa-heart");

    const x = e.x;
    const y = e.y;
    const valX = x - loveMe.offsetLeft;
    const valY = y - loveMe.offsetTop;
    heart.style.top = valY+"px";
    heart.style.left = valX + "px";
    loveMe.appendChild(heart);
    setTimeout(()=> {
        heart.remove();
    },600)
    times.innerHTML = ++timesClicked;
}