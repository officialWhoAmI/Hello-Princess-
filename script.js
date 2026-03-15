const yesButton = document.getElementById("yes")
const noButton = document.getElementById("no")
const success = document.getElementById("success")
const container = document.querySelector(".container")

yesButton.addEventListener("click", () => {

success.style.display = "block"

})

function moveButton(){

const containerRect = container.getBoundingClientRect()

const maxX = containerRect.width - noButton.offsetWidth
const maxY = containerRect.height - noButton.offsetHeight

const randomX = Math.random() * maxX
const randomY = Math.random() * maxY

noButton.style.left = randomX + "px"
noButton.style.top = randomY + "px"

}

noButton.addEventListener("touchstart", moveButton)
noButton.addEventListener("mousedown", moveButton)