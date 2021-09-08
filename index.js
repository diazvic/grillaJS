


const array= ["🍇", "🍈" ,"🍉", "🍊","🍋","🍌","🥭" ,"🍍","🍎","🍒","🫐"]


const generarGrilla = (array)=>{
  let resultado =""

  for (let i = 0; i < array.length; i++) {
    resultado = resultado + `<div class="items">${array[i]}</div>`
    
  }


  return resultado
}

const grilla = document.querySelector(".grilla")

grilla.innerHTML= generarGrilla(["🍇", "🍈" ,"🍉", "🍊","🍋","🍉","🍌","🥭" ,"🍍","🍎","🍒","🫐"])