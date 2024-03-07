const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const dashboard = document.querySelector(".dashboard")
const pickups = document.querySelector(".pickups")
const details = document.querySelectorAll(".details")
const wasteStatus = document.querySelector(".status");
const moreDetails = document.querySelector(".more-details")


btn1.addEventListener('click', () => {
    btn1.style.backgroundColor = "lightgray"
    btn2.style.backgroundColor = "white"

    dashboard.style.transform = "translateX(0)"
    pickups.style.transform ="translateX(-100%)"
})

btn2.addEventListener('click', () =>{
    btn1.style.backgroundColor = "white"
    btn2.style.backgroundColor = "lightgray"

    dashboard.style.transform = "translateX(-100%)"
    pickups.style.transform = "translateX(0)"
})

details.forEach(detail =>{
    detail.addEventListener('click', () =>{
       var displayValue = window.getComputedStyle(moreDetails).getPropertyValue("display");
       if(displayValue === "none"){
        moreDetails.style.display = "block"
       }else if(displayValue === "block"){
        moreDetails.style.display = "none"
       }
    })
})
wasteStatus.addEventListener('click', () =>{
    wasteStatus.innerHTML = "Collected";
    wasteStatus.style.backgroundColor = "green";
})
