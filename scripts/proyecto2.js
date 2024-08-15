let progreso = document.getElementById("progreso"),
  btnNext = document.getElementById("btnNext"),
  btnPrev = document.getElementById("btnPrev"),
  circulo = document.querySelectorAll(".circulo");

let contador = 1;

const actualizar = () => {
  circulo.forEach((circulo, i) => {
    (i < contador)
      ? circulo.classList.add("activo")
      : circulo.classList.remove("activo")
  })
  
  let activo = document.querySelectorAll(".activo");
  
  progreso.style.width = (activo.length - 1) / (circulo.length - 1) * 100 + '%'
  
  if( contador === 1){
    btnPrev.disabled = true
  }
  else if( contador == circulo.length){
    btnNext.disabled = true
  }else{
    btnNext.disabled = false
    btnPrev.disabled = false
  }
}

btnPrev.addEventListener("click", ()=>{
  contador --

  if(contador < 1){
    contador = 1
  }
  actualizar()
})
btnNext.addEventListener("click", ()=>{
  contador ++

  if(contador > circulo.length){
    contador = circulo.length
  }
  actualizar()
})
