
let arr = []
let objekt = {
    marka:"mercedes",
    model:"GLC 4Matic",
    il:2022,
    reng:"qara"
}
arr.push(objekt)
let objekt2 = {
    marka:"BMW",
    model:"M6",
    il:2020,
    reng:"qara"
}
arr.push(objekt2)
let objekt3 = {
    marka:"bentley",
    model:"bentayqa",
    il:2023,        
    reng:"qara"
}
arr.push(objekt3)
localStorage.setItem("cars",JSON.stringify(arr))
let buton = document.querySelector(".button")
let stop = document.querySelector(".stop")
function show() {
        $(".div").show(1000)
        $(".button").hide(1000)
        $(".stop").show(1000)
}
buton.addEventListener("click",show)

function hide() {
    $(".div").hide(1000)
    $(".button").show(1000)
    $(".stop").hide(1000)
}
stop.addEventListener("dblclick",hide)
let inputs = document.querySelectorAll("input")
let form = document.querySelector("form")
inputs.forEach(element => {
    form.addEventListener("submit",function () {
        event.preventDefault()
        let div = document.createElement("div")
        let body = document.querySelector("body")
        div.style.backgroundColor = "red"
        div.style.width = "100px"
            
        body.append(div)
    })
});
