let searchBtn = document.querySelector("#search")
let search = document.querySelector(".srv.search")
let input = document.querySelector("[name='search']")
let h3 = document.querySelectorAll("h3")
let p = document.querySelector(".text .para")
let icon = document.querySelector(".icon")
let toolip = document.querySelector(".toolip")
const second = document.querySelector(".second")
const prop = document.querySelector(".prop")
let li = document.querySelector("ul").querySelectorAll("li")
let container = document.querySelector(".container")
let co = document.querySelector("header .co .core")



toolip.classList.add("appear")
icon.onclick = function (){
    toolip.classList.toggle("appear")

}
second.onclick = function () {    
    toolip.classList.toggle("appear" , true)


}
prop.onclick = function () {    
    toolip.classList.toggle("appear" , true)


}

container.classList.remove("container-2")


li[0].onclick = function (){
    second.style.display = "flex"
    prop.style.display = "none"
    li[1].classList.remove("active")
    li[0].classList.add("active")
    container.classList.remove("container-2")
    co.style.background = "#36393b"
    toolip.classList.toggle("appear" , true)

}

li[1].onclick = function (){
    second.style.display = "none"
    prop.style.display = "flex"
    li[0].classList.remove("active")
    li[1].classList.add("active")
    container.classList.add("container-2")
    co.style.background = "rgba(63, 2, 2, 0.842)"
    toolip.classList.toggle("appear" , true)


}





searchBtn.onclick = function (){
 searchBtn.style.display = "none"
 search.style.display = "flex"

}
h3[0].classList.remove("first")
h3[1].classList.remove("first")
h3[2].classList.remove("first")
p.classList.remove("para")




input.addEventListener("keyup" , function(){
    if(input.value == "l" || input.value == "o" || input.value == "c" || input.value == "t" || input.value == "i" || input.value == "n"){
            h3[0].classList.add("first")
            if(input.value == "t" ){
                p.classList.add("para")

            }

    }else if (input.value == ""){
        h3[0].classList.remove("first")
        h3[1].classList.remove("first")
        h3[2].classList.remove("first")
        p.classList.remove("para")


    }
    if(input.value != ""){
        search.style.background = "rgba(221, 67, 11, 0.877)"

    }else {
        search.style.background = "rgba(243, 92, 36, 0.877)"
    }
  
    if(input.value == "t"){
        h3[1].classList.add("first")
        p.classList.add("para")


    }
    if(input.value == "p"){
        h3[2].classList.add("first")


    }
})


input.onblur = function (){
    input.value = ""
    search.style.display = "none"
    searchBtn.style.display = "flex"
    h3[0].classList.remove("first")
    h3[1].classList.remove("first")
    h3[2].classList.remove("first")
    p.classList.remove("para")
}

