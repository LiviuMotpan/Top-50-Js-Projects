const smallCups = document.querySelectorAll(".cup-small");
const liters = document.querySelector("#liters");
const percentage = document.querySelector("#percentage");
const remained = document.querySelector("#remained");

updateBigCup();

smallCups.forEach((cup,i)=> {
    cup.addEventListener("click",()=>highlightCups(i))
})

function highlightCups(idx) {

    if(smallCups[idx].classList.contains("full") && !smallCups[idx+1].classList.contains("full")) {
        idx--;
    }

    smallCups.forEach((cup,i)=> {
        if(i <= idx) {
            cup.classList.add("full");
        }else {
            cup.classList.remove("full");
        }
    })
    updateBigCup()
}
function updateBigCup() {
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length;
    const nr = fullCups/totalCups*100;
    if(fullCups == 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = '0';
    }else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${nr}%`;
        percentage.innerHTML = `${nr}%`;
    }
    if(fullCups == totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = '0';
    }else {
        remained.style.visibility = 'visible';
        liters.innerHTML = `${250*totalCups / 1000-250*fullCups / 1000}L`;
    }

}