const contentImg = document.querySelector(".contentImg");
let img = contentImg.querySelectorAll("img");

const removeactivaClasses = ()=>{
    img.forEach(img =>{
        img.classList.remove("activa")
    })
}


img.forEach(img =>{
    img.addEventListener("click", ()=>{
        removeactivaClasses();
        img.classList.add("activa")
    })
})
