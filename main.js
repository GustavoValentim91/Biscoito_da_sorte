const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")
const btnClick = document.querySelector("#btnClick")
const btnReset = document.querySelector("#btnReset")
const messageOne = document.querySelector(".messageOne")
const messageTwo = document.querySelector(".messageTwo")
let randomNumber = Math.round(Math.random() * 10) 

// Eventos
btnClick.addEventListener('click', clickImage)
btnReset.addEventListener('click', btnResetClick)
document.addEventListener('keydown', enterClick)

function clickImage(){
    
    if(randomNumber){
        toggleScreen()
        toggleMessage()
    }else {
        toggleScreen()
        toggleMessage()
    }
    console.log(randomNumber)
}   

function btnResetClick(event) {
    event.preventDefault()
    toggleScreen()
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screenOne.classList.toggle("hide")
    screenTwo.classList.toggle("hide")
}

function toggleMessage() {
    messageOne.classList.toggle("hide")
    messageTwo.classList.toggle("hide")
}

function enterClick(event) {
   if(event.key == 'Enter' && screenTwo.classList.contains('hide')){
        clickImage()
    }
}
