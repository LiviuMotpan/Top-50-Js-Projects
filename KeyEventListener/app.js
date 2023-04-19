let position = 1;
let lenght = 0;


window.addEventListener("keydown", e => {
    switch(e.code) {
        case "ArrowLeft":
            if(lenght > 0) {
                moveLeft();
            }
        break;
        case "ArrowRight":
            if(lenght > 0) {
                moveRight();
            }
        break;
        case "Space":
            addBox();
            break;
        case "Backspace":
            if(lenght > 0) {
                removeBox();
            }
        break;

    }
})

function addBox() {
    const newDiv = document.createElement("div");
    const section = document.querySelector("section");
    section.append(newDiv);

    if(lenght === 0) {
        newDiv.classList.add("active");
    }

    lenght++;
    console.log(lenght);
}

function removeBox() {
    if(position === lenght) {
        moveLeft();
    }
    document.querySelector("div:last-child").remove();
    lenght--;
}

function moveLeft() {
    document.querySelector(`div:nth-of-type(${position})`).classList.remove('active');
    position--;

    if(position < 1) {
        position = lenght;
    }

    document.querySelector(`div:nth-of-type(${position})`).classList.add('active');
}


function moveRight() {
    document.querySelector(`div:nth-of-type(${position})`).classList.remove('active');
    position++;

    if(position > lenght) {
        position = 1;
    }

    document.querySelector(`div:nth-of-type(${position})`).classList.add('active');
}
