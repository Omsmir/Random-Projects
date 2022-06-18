let link = document.querySelector("ul").querySelectorAll("ul li a")
let img = document.querySelectorAll(".pizza #order .section .image img")
let child1 = document.querySelector(".child.child-1")
let child = document.querySelector(".child.child-2")

let col = document.querySelectorAll("#col")

let rate = Array.from(document.querySelectorAll("#icon-rate #first-svg"))
let rate1 = Array.from(document.querySelectorAll("#icon-rate #second-svg"))

let dropDown = document.querySelector(".dropdown")

let nav = document.querySelector(".setting-nav")

let add = Array.from(document.querySelectorAll(".core .icon .child.child-1"))

let orders = document.querySelector(".orders")
// console.log(supply)

let toggle = document.querySelector(".toggle")
let first = document.querySelector(".first-col")
let second = document.querySelector(".second-col")
let third = document.querySelector(".third-col")

// Input

let input = document.querySelectorAll("label")

console.log(input[0])



// Media Queries Start
const resize = (x) =>  {
    if (x.matches) 
    third.classList.add("none") ,
    second.style.width = "93%"
    else
    third.classList.remove("none"),
    second.style.width = "68%"
}

  const match = window.matchMedia("(max-width: 1198px)")
  
  resize(match);
  
  match.addListener(resize);


const resize1 = (x) => {
    if (x.matches)
    second.style.width = "100%",
    third.classList.add("none") 
    else
    second.style.width = "93%"

}

const match1 = window.matchMedia("(max-width: 767px)")

resize(match1);
  
match1.addListener(resize1);

// Media Queries End
// Pizza Array Object
let productsNumber = [
    {
        img: "imgs/topping.png",
        name: "Topping  pizza",
        price: 7.49,
        index: 0 ,
        class: "top"
    },
    {
        img: "imgs/vegetables.png",
        name: "vegetables pizza",
        price:  4.41,
        index: 0 ,
        class: "veg"
    },
    {
        img: "imgs/pepperoni.png",
        name: "pepperoni pizza",
        price:  8.91 ,
        index: 0 ,
        class: "pep"
    },
    {
        img: "imgs/potato.png",
        name: "potato pizza",
        price:  11 ,
        index: 0 ,
        class: "pot"
    },
    {
        img: "imgs/salami.png",
        name: "salami pizza",
        price:  2.33 ,
        index: 0 ,
        class: "sala"
    }  ,
    {
        img: "imgs/shrimp.png",
        name: "shrimp pizza",
        price:  18.56 ,
        index: 0 ,
        class: "shr"
    } 
] ;



function addToCart(im ,nam,cost,clas ){
    let supply = document.createElement("div")

    supply.className = `supply ${clas}`

    let image = document.createElement("div")

    image.className = "image"

    let img = document.createElement("img")

    img.setAttribute("src",im)

    image.appendChild(img)

    let details = document.createElement("div")

    details.className = "details"

    let h3 = document.createElement("h3")

    h3.className = "text-capitalize"

    h3.appendChild(document.createTextNode(nam))

    let p = document.createElement("p")

    p.innerHTML = "x"

    let span = document.createElement("span")

    span.innerHTML = "1"

    p.appendChild(span)

    let price = document.createElement("div")

    price.className = "price"

    let h = document.createElement("h3")

    h.innerHTML = "$"

    let span1 = document.createElement("span")

    span1.className = `${clas}`

    span1.appendChild(document.createTextNode(cost))

    h.appendChild(span1)
    
    let exit = document.createElement("div")

    exit.className = "exit"

    let img1 = document.createElement("img")


    img1.setAttribute("src","svg/Exit.svg")


    exit.appendChild(img1)

    exit.addEventListener("click",(ele)=>{
        ele.target.parentElement.remove()
        productsNumber.forEach((el)=>{
            el.index = 0
        })

    })

    price.appendChild(h)

    details.appendChild(h3)

    details.appendChild(p)

    supply.appendChild(exit)

    supply.appendChild(image)

    supply.appendChild(details)

    supply.appendChild(price)


    orders.appendChild(supply)

}


function addToCart2(pri,num){

    let supply = Array.from(document.querySelectorAll(".supply "))
    let price = Array.from(document.querySelectorAll(".supply .price span"))
    supply.forEach((ele)=>{
        if(ele.classList.contains("top")){
            price.forEach((el)=>{
                if(el.classList.contains("top")){
                    el.innerHTML = pri
                }
            })
        }
        
        if (ele.classList.contains("veg")){
            price.forEach((e)=>{
                if(e.classList.contains("veg")){
                    let pr = document.querySelector(".supply.veg .price .veg")
                    pr.innerHTML = pri
                }
            })
            
        }
    })
    let span = document.querySelector(".details p span")
    span.innerHTML = num
}


function rewrite(element){
    add.forEach((ele)=> { 
        if(ele.parentElement.classList.contains("top"))
        element = 0
        else if(ele.parentElement.classList.contains("veg")) 
        element = 1
        else if (ele.parentElement.classList.contains("pep"))
        element = 2
    
      }) 
} 


// let int = 0

//  add.forEach((ele)=>{
//     ele.addEventListener("click",()=>{
//         addToCart(productsNumber[int].img)
//     })
//  })




add.forEach((ele)=>{
   ele.addEventListener("click",()=>{
    if(ele.parentElement.classList.contains("top") && productsNumber[0].index == 0)
        addToCart(productsNumber[0].img, productsNumber[0].name,productsNumber[0].price,productsNumber[0].class),
        productsNumber[0].index += 1
    if(ele.parentElement.classList.contains("veg") && productsNumber[1].index == 0)
        addToCart(productsNumber[1].img, productsNumber[1].name,productsNumber[1].price,productsNumber[1].class),
        productsNumber[1].index += 1
    if(ele.parentElement.classList.contains("pep") && productsNumber[2].index == 0)
    addToCart(productsNumber[2].img, productsNumber[2].name,productsNumber[2].price,productsNumber[2].class),
    productsNumber[2].index += 1
})
})


input.forEach((ele) =>{
    if(ele.checked == false){
        
    }
})


// Start The Heart Fill For Rate  

rate.forEach((ele)=>{
    ele.addEventListener("click",()=>{
     ele.nextElementSibling.style.cssText = "z-index: 1;"

    })

})

rate1.forEach((ele) => {
    ele.addEventListener("click",()=>{
        ele.style.cssText = "z-index: -1;"
   
       })
})

// End The Heart Fill For Rate  

// console.log(document.styleSheets[0].cssRules[1].style.opacity)

//  Start The Shadow For The Remaining Scroll For Menu

let droped = false

dropDown.onclick = function (){
   if(droped == false){
    nav.classList.add("anima")
    droped = true
   }else {
    nav.classList.remove("anima")
    droped = false
    
   }
}
//  End The Shadow For The Remaining Scroll For Menu

function transform(ele , width){
    ele.forEach((el)=>{
        el.style.transform = `translateX(${width})`
    })
}

// Start Menu Scrolling Left And Right Function
let index = 0

child.addEventListener("click",()=>{
    if(index == 0)
    transform(col,"160px"),
    index++
    else if(index == 1)
    transform(col,"320px"),
    index++
    else if (index == 2)
    transform(col,"480px"),
    index++,
    document.styleSheets[0].cssRules[1].style.opacity = 0 ,
    child.classList.add("disabled")
    else if(index == -1)
    transform(col,"0"),
    index++
    else if(index == -2)
    transform(col,"-160px"),
    index++
    else if(index == -3)
    transform(col,"-320px"),
    index++,
    child1.classList.remove("disabled"),
    document.styleSheets[0].cssRules[2].style.opacity = 1
})

child1.addEventListener("click",()=>{
    if(index == 0)
    transform(col,"-160px"),
    index--
    else if(index == -1)
    transform(col,"-320px"),
    index--
    else if (index == -2)
    transform(col,"-480px"),
    index--,
    document.styleSheets[0].cssRules[2].style.opacity = 0 ,
    child1.classList.add("disabled")
    else if (index == 1)
    transform(col,"0"),
    index--
    else if(index == 2)
    transform(col,"160px"),
    index--
    else if(index == 3)
    transform(col,"320px"),
    index--,
    child.classList.remove("disabled"),
    document.styleSheets[0].cssRules[1].style.opacity = 1
})
// End Menu Scrolling Left And Right Function
// Col Active Class Add
col.forEach((ele)=>{
    ele.onclick = function(){
        if(ele.classList.contains("active")){
            return true
        }else {
            col.forEach((el)=>{
                el.classList.remove("active")
            })
            ele.classList.add("active")
        }
    }
})
// Col End



link.forEach((ele)=>{
    if(ele.classList.contains("active")){
        ele.parentElement.style.background = "#ffa304"
    }
    ele.onclick = function(){
        if(ele.classList.contains("active")){
            ele.parentElement.style.background = "#ffa304"
            if(ele.parentElement.classList == "last"){
                ele.parentElement.style.background = "#fff"
            }         
        }else {
            link.forEach((ele)=>{
                ele.classList.remove("active")
                ele.parentElement.style.background = "#fff"
            })
            ele.classList.add("active")
            ele.parentElement.style.background = "#ffa304"          
            if(ele.parentElement.classList.contains("last")){
                ele.parentElement.style.background = "#fff"
            }
        }
    }
})



