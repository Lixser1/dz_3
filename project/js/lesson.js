// PHONE CHECKER
const phoneInput = document.querySelector("#phone_input")
const phoneButton = document.querySelector("#phone_button")
const phoneResult = document.querySelector("#phone_result")
const regExp = /^\+996 [2579]\d \d{2}-\d{2}-\d{2}$/
phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = "OK"
        phoneResult.style.color = "green"
    } else {
        phoneResult.innerHTML = "NOT OK"
        phoneResult.style.color = "red"
    }

}
//tab slider


let tabItems = document.querySelectorAll(".tab_content_item");
let tabParent = document.querySelector(".tab_content_items");
let contentBlocks = document.querySelectorAll(".tab_content_block");
const hideTabContent = () => {
    contentBlocks.forEach(item => {
        item.style.display = "none"
    })
    tabItems.forEach(item => {
        item.classList.remove("tab_content_item_active")
    })
}
const showTabContent = (index = 0) => {
    contentBlocks[index].style.display = "block"
    tabItems[index].classList.add('tab_content_item_active')
}
hideTabContent()
showTabContent()
let tabindex = 0
tabParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((item, index) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(index)
                tabindex = index
            }
        })
    }
}

setInterval(()=> {
    if (tabindex < 4) {
        tabindex++
    }else {
        tabindex = 0
    }
    hideTabContent()
    showTabContent(tabindex)
}, 5000)



