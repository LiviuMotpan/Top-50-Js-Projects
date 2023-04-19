const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click",()=> {
        closeAll();
        faq.classList.toggle("active")
    })
})

function closeAll() {
    faqs.forEach(faq => {
        faq.classList.remove("active");
    })
}