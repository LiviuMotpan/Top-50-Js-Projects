window.addEventListener("load",(e) => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const listEl = document.querySelector("#tasks");

    form.addEventListener("submit",(e) => {
        e.preventDefault();
        if(input.value == "") {
            alert('Please fill out the task');
            return;
        }
        const taskEl = document.createElement("div");
        taskEl.classList.add("task");
        taskEl.innerHTML = `
        <div class="content">
            <input type="text" class="text" value="${input.value}" readonly>
        </div>
        <div class="actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
        `;
        listEl.appendChild(taskEl);
        input.value = "";
        const editBtn = taskEl.querySelector(".edit");
        const inputText = taskEl.querySelector(".text");
        const deleteBtn = taskEl.querySelector(".delete");
        editBtn.addEventListener("click",(e)=> {
            if(editBtn.innerHTML.toLowerCase() == "edit") {
                inputText.removeAttribute("readonly");
                inputText.focus();
                editBtn.innerHTML = "Save";
            }else {
                inputText.setAttribute("readonly",true);
                editBtn.innerHTML = "Edit";
            }
        })

        deleteBtn.addEventListener("click",(e)=> {
            taskEl.remove();
        })
    })
})