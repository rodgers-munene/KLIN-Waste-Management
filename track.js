const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const overview = document.querySelector(".overview")
const pickups = document.querySelector(".pickups")
const help = document.querySelector(".help")

btn1.addEventListener('click', () => {
    btn1.style.backgroundColor = "lightgray"
    btn2.style.backgroundColor = "white"
    btn3.style.backgroundColor = "white"

    overview.style.transform = "translate(0)"
    pickups.style.transform ="translate(-100%)"
    help.style.transform = "translate(-100%)"
})

btn2.addEventListener('click', () =>{
    btn1.style.backgroundColor = "white"
    btn2.style.backgroundColor = "lightgray"
    btn3.style.backgroundColor = "white"

    overview.style.transform = "translate(-100%)"
    pickups.style.transform = "translate(0)"
    help.style.transform = "translate(-100%)"


})

btn3.addEventListener('click', () =>{
    btn1.style.backgroundColor = "white"
    btn2.style.backgroundColor = "white"
    btn3.style.backgroundColor = "lightgray"

    overview.style.transform = "translate(-100%)"
    pickups.style.transform = "translate(-100%)"
    help.style.transform = "translate(0)"
})