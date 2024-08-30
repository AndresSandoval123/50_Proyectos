let open = document.getElementById("open");
let close = document.getElementById("close");
let contenedor = document.getElementById("contenedor");
let nav = document.getElementById("nav");

open.addEventListener("click", ()=>{
    contenedor.classList.add("activo")
    open.classList.add("activo")
    close.classList.add("activo")
    nav.classList.add("activo")
})

close.addEventListener("click", ()=>{
    contenedor.classList.remove("activo")
    open.classList.remove("activo")
    close.classList.remove("activo")
    nav.classList.remove("activo")
})