let random = Math.round(Math.random() * 10);
let tentativas = 1;

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
//eventos
const buttonTry = document.querySelector("#buttonTry")
const buttonAgain = document.querySelector("#buttonAgain")

buttonTry.addEventListener("click", tentar)
buttonAgain.addEventListener("click", novamente)

function tentar(event){
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")
  if (inputNumber.value == random){
    
    screen1.classList.add("hide")
    screen2.classList.remove("hide")

    document.querySelector(".screen2 h2").innerText = `Acertou em ${tentativas} tentativa.`
  }

  inputNumber.value = ""
  tentativas++
}
function novamente(event){
  event.preventDefault()

  screen1.classList.remove("hide")
  screen2.classList.add("hide")

  tentativas = 1;
  random = Math.round(Math.random() * 10);
}