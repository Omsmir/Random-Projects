let dleft1 = document.querySelector(".double-left-1")
let front = document.querySelector(".front")
let back = document.querySelector(".back")
let left = document.querySelector('.left')
let right = document.querySelector(".right")
let top2 = document.querySelector(".top")
let bottom = document.querySelector(".bottom")
let right1 = document.querySelector(".right-1")
let left1 = document.querySelector(".left-1")
let top1  = document.querySelector(".top-1")
let bottom1 = document.querySelector(".bottom-1")
let face = document.querySelectorAll(".face")

function random_bg_color(){
    num = []
function generate(start ,end){
    for(let i = start ; i <= end ; i++){
        num.push(i)

    }

}
generate(1,255)
    function populate(a){
        for(let i = 0; i < 1 ; i++) {
            let x = Math.floor(Math.random() * 254)
            let y = num[x] 
             a = a + y 
        }
        return a
}
function populate1(a){
    for(let i = 0; i < 1 ; i++) {
        let x = Math.floor(Math.random() * 33)
        let y = num[x] 
         a = a + y 
    }
    return a
}
function populate2(a){
    for(let i = 0; i < 2 ; i++) {
        let x = Math.floor(Math.random() * 7)
        let y = num[x] 
         a = a + y 
    }
    return a
}
let color = populate("")
let color1 = populate1("")
let color2 = populate2("")

let rgba =  "rgba" + "(" + color + ',' + color1 + "," + color2 + "," + "0.57" + ")" ;
console.log(rgba)
 face.forEach((ele)=>{
     ele.style.backgroundColor = rgba

    
 })

}


face.forEach((ele) => {
    ele.addEventListener("click",()=>{
        random_bg_color()
        
    })
    ele.addEventListener("dblclick",()=>{
        backToDefault()

    })
})

function backToDefault(){
    face.forEach((ele) =>{
        ele.style.backgroundColor = "rgba(52, 26, 84, 0.7)";

    })
}



