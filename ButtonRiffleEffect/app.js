const btns = document.querySelectorAll(".ripple");

btns.forEach((btn)=> {
    btn.addEventListener("click",(e)=> {
        const x = e.clientX;
        const y = e.clientY;

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;
        const circle = document.createElement("span");
        circle.classList.add("circle");
        circle.style.top = y - buttonTop + "px";
        circle.style.left = x - buttonLeft + "px";
        btn.appendChild(circle);
        setTimeout(()=> {
            btn.innerHTML = 'Click Me';
        },500);
    })
})