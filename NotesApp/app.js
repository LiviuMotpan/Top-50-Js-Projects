const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));

if(notes) {
    notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener("click",(e)=> addNewNote())

function addNewNote(text = "") {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <div class="tools">
            <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="delete"><i class="fa-solid fa-trash"></i></button>
        </div>
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="main ${text ? "hidden"  : "" }"></textarea>
    `;

    const editBtn = note.querySelector(".edit");
    const main = note.querySelector(".main");
    const deleteBtn = note.querySelector(".delete");
    const textarea = note.querySelector("textarea");

    textarea.value = text;
    main.innerHTML = text;

    deleteBtn.addEventListener("click",(e)=> {
        note.remove();
        updateLS()
    })

    editBtn.addEventListener("click",(e)=> {
        main.classList.toggle("hidden");
        textarea.classList.toggle("hidden");
    })

    textarea.addEventListener("input",(e) => {
        const value = e.target.value;

        main.innerHTML = value;

        updateLS()
    })

    document.querySelector("body").appendChild(note);
}

function updateLS() {
    const notesText = document.querySelectorAll("textarea");

    const notes = [];

    notesText.forEach(note => {
        notes.push(note.value)
    })

    localStorage.setItem('notes',JSON.stringify(notes));
}