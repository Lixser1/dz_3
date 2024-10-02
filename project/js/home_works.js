//проверка на email
let inputGmail = document.querySelector("#gmail_input")
let buttonGmail = document.querySelector("#gmail_button")
let resultGmail = document.querySelector("#gmail_result")
const regExpGmail = /@gmail.com/
buttonGmail.onclick = () => {
    if (regExpGmail.test(inputGmail.value)) {
        resultGmail.innerHTML = "you are registration successful!"
        resultGmail.style.color = "green"
    } else {
        resultGmail.innerHTML = "you not registration"
        resultGmail.style.color = "red"
    }
}
//перемешение одного блока внутри его родителя
let child = document.querySelector(".child_block");
let num = 0
const counter = () => {
    num++
    child.style.left=`${num}px`
    if (num < 448){
        requestAnimationFrame(counter)
    }
    // counter()
}
counter()

