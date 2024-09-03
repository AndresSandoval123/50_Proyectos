const buscar = document.querySelector(".buscar")
const btn = document.querySelector(".btnBuscar")
const input = document.querySelector(".input")
console.log(btn);

btn.addEventListener("click", ()=>{
    buscar.classList.toggle("activo")
    input.focus()
})