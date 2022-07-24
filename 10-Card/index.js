

let signUp = document.querySelectorAll(".col-right .sign")

let right = document.querySelector(".container .col-right")

let left = document.querySelector(".container .col-left")


let text = document.querySelectorAll(".col-right aside .text")




signUp.forEach((ele) => {
    
ele.addEventListener("click",() => {

    right.classList.toggle("left")
    left.classList.toggle("right")

    text.forEach((el) => {
        el.classList.toggle("index")
    })



})

})



