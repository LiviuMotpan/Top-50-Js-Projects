const btn = document.querySelector("#button");
const toasts = document.querySelector("#toasts");

const messages = [
    "Message 1",
    "Message 2",
    "Message 3",
    "Message 4",
]

const types = [
    "info",
    "succes",
    "error"
]

btn.addEventListener("click",() => createNotification());

function createNotification(message = null,type = null) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    // toast.classList.add(type == null ? "info" : type);
    toast.classList.add(types[Math.floor(Math.random()*types.length)])
    toast.innerText = message == null ? `${messages[Math.floor(Math.random()*messages.length)]}` : message;
    toasts.appendChild(toast);
    setTimeout(()=> {
        toast.remove();
    },3000);
}