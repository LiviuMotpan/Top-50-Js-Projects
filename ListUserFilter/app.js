let filterInput = document.getElementById("filterInput");

filterInput.addEventListener("keyup",filterNames);

function filterNames() {

    let filterValue = filterInput.value.toUpperCase();

    let ul = document.getElementById("names");

    let li = ul.querySelectorAll("li.collection-item");

    for(let i = 0;i<li.length;i++) {
        let a = li[i].querySelector("a");
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = "block";
        }else  {
            li[i].style.display = "none";
        }
    }

}