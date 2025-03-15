$(document).ready(function () {
    $("#add").click(
        function () {
            $("form").toggle(2000)
        }
    )
})
let cars = JSON.parse(localStorage.getItem("cars"))||[]
let form  = document.querySelector("form")
let container = document.querySelector(".container")
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let inputs = document.querySelectorAll("input")
    let car = {
        marka:inputs[0].value,
        model:inputs[1].value,
        year:inputs[2].value,
        price:inputs[3].value,
        color:inputs[4].value,
        image:inputs[5].value
    }
    cars.push(car)
localStorage.setItem("cars",JSON.stringify(cars))
form.reset()
container.innerHTML = ""
carItem()
})




function carItem() {
    cars.forEach(element => {
        
        let div =document.createElement("div")
        div.classList.add("item")
        let img = document.createElement("img")
        img.src = element.image
        let h4 = document.createElement("h4")
        h4.innerText = element.price
        let p1 = document.createElement("p")
        p1.innerText = element.marka
        let p2 = document.createElement("p")
        p2.innerText = element.model
        let p3 = document.createElement("p")
        p3.innerText = element.color
div.append(img,h4,p1,p2,p3)
container.append(div)
    });


}
carItem()