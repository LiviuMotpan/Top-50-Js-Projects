const container = document.querySelector(".content");
let baseURL = "https://source.unsplash.com/random/";
const rows = 7;

async function getSrc() {
    const res = await fetch("https://api.unsplash.com/photos/random?client_id=qePw61HNjXuY_A6ygI0iYcXB7VuV0V3Tx7odWMA7OuI")
    const data = await res.json();
    return data.urls.regular;
}


for(let i = 0;i<rows*3;i++) {
    const img = document.createElement("img");
    img.src = getSrc();
    container.appendChild(img);
}

function randomNumber() {
    return Math.floor(Math.random()*10)+300;
}

function randomSize() {
    return `${randomNumber()}x${randomNumber()}`
}
