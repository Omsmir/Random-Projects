let li = document.querySelector(".bullets ul").querySelectorAll("li a")
let h5 = document.querySelector(".bullets ul").querySelectorAll("li a h5")
let span = document.querySelector(".icon")
let line = document.querySelector(".icon").querySelectorAll(".icon .line")
let image = document.querySelector("#projects").querySelectorAll(".image")
let img = document.querySelector("#projects").querySelectorAll("img")
let div = document.querySelector("#projects").querySelectorAll(".inner")
let over = document.querySelector(".overlay-1")
let Bullets = document.querySelector(".navbar-nav").querySelectorAll("li a")
let row = document.querySelector("section[id='projects'] .container-fluid .row")
let btn = document.querySelector(".Main-Btn")
let home = document.getElementById("Home")
let form = document.querySelector("input[name='name']")



li.forEach((ele) => {
    ele.onclick = function (){
        if(ele.classList.contains("active")){
            ele.classList.remove("active")            
        }else {
           removeAllActive(li)
            ele.classList.add("active")

        }
    if(ele.firstChild.innerText === "DESIGN"){
        rowSlow()
        display(ele)
        defaultAnimate(ele)
    }else {
        div.forEach((ele)=> {
            ele.style.cssText = "opacity: 1; "
            defaultAnimate(ele)

        })
        row.addEventListener("animationstart",bottomHeight(row))

    }
    if(ele.firstChild.innerText === "PROTOTYPE" ){    
            rowSlow()
            display(ele)
            defaultAnimate(ele)
            
    } 

    if(ele.firstChild.innerText === "ANDROID"){
        rowSlow()
        defaultAnimate(ele)
        display(ele)

    }
}
})

btn.onclick = function (){
    removeAllActive(Bullets)
    Bullets[1].classList.add("active")

}
Bullets.forEach((ele) => {
    ele.onclick = function (){
        if(ele.classList.contains("active")){
            ele.classList.remove("active")
            
        }else {
           removeAllActive(Bullets)
            ele.classList.add("active")
          }
        }
})


span.onclick = function (){
    if(span.classList.contains("co")){
        line[0].style.cssText = "transform :rotate(45deg); top: 6px; "
        line[1].style.opacity = "0"
        line[2].style.cssText = "transform :rotate(-45deg); top: -6px; "
        span.classList.remove("co")
       }else {
        line[0].style.cssText = "transform :rotate(0); top: 0px; "
            line[1].style.opacity = "1"
            line[2].style.cssText = "transform :rotate(0deg); top: 0px; "
            span.classList.add("co")
           
       }
}
image[0].onclick = function (){
    over.style.display = "block"
    let col = document.createElement("div")
    let image1 = document.createElement("div")
    let icon = document.createElement("div")
    let svg = document.createElement("i")

    svg.classList = "fa-solid fa-xmark position-absolute"
    icon.className = "icon-1"
    image1.className = "image"
    col.classList =  "col-sm-8 col-md-8 col-lg-12"

    icon.appendChild(svg)

    image1.appendChild(icon)

    image1.appendChild(img[0])

    col.appendChild(image1)

   over.appendChild(col)

   icon.onclick = function (){
    over.style.display = "none"
    image[0].appendChild(img[0])
   }
   
   over.onclick = function (){
    over.style.display = "none"
    image[0].appendChild(img[0])
   }
}

window.onscroll = function (){
    if (window.scrollY <=  665){
      removeAllActive(Bullets)
        Bullets[0].classList.add("active")
    }else if(window.scrollY <= 1358){
        document.querySelector(".navbar").style.cssText = "box-shadow: 1px 2px 15px gray;"
       removeAllActive(Bullets)
        Bullets[1].classList.add("active")


    }else if (window.scrollY <= 2045){
       removeAllActive(Bullets)
        Bullets[2].classList.add("active")


    }else if (window.scrollY <= 2745){
        removeAllActive(Bullets)
        Bullets[3].classList.add("active")

    }
    else if (window.scrollY <= 3150){
        removeAllActive(Bullets)
        Bullets[4].classList.add("active")

    }
    else if (window.scrollY <= 3675){
        removeAllActive(Bullets)
        Bullets[5].classList.add("active")

        
    }
    else if (window.scrollY <= 4315){
        removeAllActive(Bullets)
        Bullets[6].classList.add("active")
        form.focus()

    }
    else {
        document.querySelector(".navbar").style = "box-shadow: none;"

    }
}



function animation (ele){
    ele.animate([
        {top:"25%",opacity:0},
        {top: "0",opacity:1}
    ],{
        iterations: 1,
        duration: 600,
        direction :"alternate",
  
    })
}
function animationTop1 (ele){
    ele.animate([
        {top:"50%",opacity:0},
        {top: "0",opacity:1}
    ],{
        iterations: 1,
        duration: 600,
        direction :"alternate",
  
    })
}
function animation1 (ele){
    ele.animate([
        {left:"25%",opacity:0},
        {left: "0",opacity:1}
    ],{
        iterations: 1,
        duration: 600,
        direction :"alternate",
   
    })
}
function TopHeight(ele){
    ele.animate([
        {height:"450px"},
        {height: "250px"}
    ],{
        iterations: 1,
        duration: 800,
        direction :"alternate",
   
    })
}
function bottomHeight(ele){
    ele.animate([
        {height:"475px"},
        {height: "250px"}
    ],{
        iterations: 1,
        duration: 800,
        direction :"alternate-reverse",
   
    })

}
function animation2 (ele){
    ele.animate([
        {left:"-25%",opacity:0},
        {left: "0",opacity:1}
    ],{
        iterations: 1,
        duration: 600,
        direction :"alternate",
   
    })
}


function defaultAnimate(){
    div[0].addEventListener("animationstart",animation2(div[0]),false)
    div[1].addEventListener("animationstart",animation1(div[1]),false)

    div[2].addEventListener("animationstart",animation1(div[2]),false)
    div[3].addEventListener("animationstart",animation(div[3]),false)
    div[4].addEventListener("animationstart",animationTop1(div[4]),false)

    div[5].addEventListener("animationstart",animation(div[5]),false)
    div[6].addEventListener("animationstart",animation1(div[6]),false)
    div[7].addEventListener("animationstart",animationTop1(div[7]),false)

    
}

function display(ele){
if(ele.firstChild.innerText === "PROTOTYPE"){
    div.forEach((ele) => {
        ele.style.cssText = "opacity: 0; display:none"
    })
    div[0].style.opacity = "1"
    div[0].style.display = "block"
    div[2].style.opacity = "1"
    div[2].style.display = "block"
    div[3].style.opacity = "1"
    div[3].style.display = "block"
}
if(ele.firstChild.innerText === "ANDROID"){
    div.forEach((el) => {
        el.style.opacity = "0"
        el.style.display = "none"
    })
    div[4].style.opacity = "1"
    div[4].style.display = "block"
    div[6].style.opacity = "1"
    div[6].style.display = "block"
    div[7].style.opacity = "1"
    div[7].style.display = "block"
}else if(ele.firstChild.innerText === "DESIGN"){
    div.forEach((ele) => {
        ele.style.cssText = "opacity: 0; display:none;"
    })
    div[1].style.opacity = "1"
    div[1].style.display = "block"

  div[5].style.opacity = "1"
  div[5].style.display = "block"

}
}

function rowSlow(){
    row.addEventListener("animationstart",TopHeight(row))
}

window.onload = function(){
    window.scrollTo({
        top:0
    })
}

function removeAllActive(ele){
    ele.forEach((el)=>{
        el.classList.remove("active")
    })
}