let circle = document.querySelector(".container .circle")
let span = document.querySelector(".circle span")
let icon = document.querySelectorAll(".icon")
let p = document.querySelectorAll("p")
// var before = window.getComputedStyle(document.querySelector('.container .circle'), ':before').getPropertyValue('Box-shadow') 



const color = document.styleSheets[0].cssRules[1].style.backgroundColor ;

// console.log(color)

if(color){

    circle.style.backgroundColor = color;
    document.styleSheets[0].cssRules[9].style.boxShadow = `5px -11px 0 ${color}`
    document.styleSheets[0].cssRules[10].style.boxShadow = `-4px -11px 0 ${color}`

}
icon[0].onclick = function (){
    circle.style.transform = "translateX(0px)"
    icon.forEach((ele) => {
        ele.style.transform = "translateY(0)"
    })
    icon[0].style.transform = "translateY(-53px)"
    p.forEach((ele) => {
        ele.style.display = "none"
    })

    p[0].style.display = "flex"
    


}



icon[1].onclick = function (){
    circle.style.transform = "translateX(94px)"
    icon.forEach((ele) => {
        ele.style.transform = "translateY(0)"
    })
    icon[1].style.transform = "translateY(-53px)"
    p.forEach((ele) => {
        ele.style.display = "none"
    })
    p[1].style.display = "flex"
}


icon[2].onclick = function (){
    circle.style.transform = "translateX(188px)"
    icon.forEach((ele) => {
        ele.style.transform = "translateY(0)"
    })
    icon[2].style.transform = "translateY(-53px)"
    p.forEach((ele) => {
        ele.style.display = "none"
    })
    p[2].style.display = "flex"

}
icon[3].onclick = function (){
    circle.style.transform = "translateX(282px)"
    icon.forEach((ele) => {
        ele.style.transform = "translateY(0)"
    })
    icon[3].style.transform = "translateY(-53px)"
    p.forEach((ele) => {
        ele.style.display = "none"
    })
    p[3].style.display = "flex"

}
icon[4].onclick = function (){
    circle.style.transform = "translateX(376px)"
    icon.forEach((ele) => {
        ele.style.transform = "translateY(0)"
    })
    icon[4].style.transform = "translateY(-53px)"
    p.forEach((ele) => {
        ele.style.display = "none"
    })
    p[4].style.display = "flex"
}

