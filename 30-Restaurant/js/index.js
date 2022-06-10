let a = document.querySelector("ul").querySelectorAll("ul li a")
let img = document.querySelectorAll(".pizza #order .section .image img")
let child = document.querySelector(".child.child-1")
let child1 = document.querySelector(".child.child-2")

let col = document.querySelectorAll("#col")

let rate = Array.from(document.querySelectorAll("#icon-rate #first-svg"))
let rate1 = Array.from(document.querySelectorAll("#icon-rate #second-svg"))

let dropDown = document.querySelector(".dropdown")

let nav = document.querySelector(".setting-nav")

let add = Array.from(document.querySelectorAll(".core .icon .child.child-1"))

let orders = document.querySelector(".orders")
// console.log(supply)

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







add[0].addEventListener("click",()=>{
    if(productsNumber[0].index == 0){
 addToCart(productsNumber[0].img, productsNumber[0].name,productsNumber[0].price,productsNumber[0].class)
productsNumber[0].index += 1


    }else if (productsNumber[0].index == 1){
        addToCart2(productsNumber[0].price * 2, productsNumber[0].index += 1 )    
    }
})


add[1].addEventListener("click",()=>{
    if(productsNumber[1].index == 0){
        addToCart(productsNumber[1].img, productsNumber[1].name,productsNumber[1].price,productsNumber[1].class)
        productsNumber[1].index += 1
    }else if (productsNumber[1].index == 1){
        addToCart2(productsNumber[1].price * 2,productsNumber[1].index += 1 )
    }

})


add[2].addEventListener("click",()=>{
    if(productsNumber[2].index == 0){
        addToCart(productsNumber[2].img, productsNumber[2].name,productsNumber[2].price,productsNumber[2].class)
        productsNumber[2].index++
    }else if (productsNumber[2].index == 1){
        return false
    }

})




let droped = false

dropDown.onclick = function (){
   if(droped == false){
    nav.classList.add("flex")
    droped = true
   }else {
    nav.classList.remove("flex")
    droped = false
    
   }

}





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


// console.log(document.styleSheets[0].cssRules[1].style.opacity)

let index = 0
child1.onclick = function (){
   if(index == 0){
    col.forEach((ele)=>{
        ele.style.transform = "translateX(120px)"
    })
    document.styleSheets[0].cssRules[1].style.opacity = 1;
    index += 1
   }else if(index == 1){
    col.forEach((ele)=>{
        ele.style.transform = "translateX(240px)"
    })
    index += 1

   }else if (index == 2){
    col.forEach((ele)=>{
        ele.style.transform = "translateX(360px)"
    })
    index += 1
   }else if (index == 3){
    col.forEach((ele)=>{
        ele.style.transform = "translateX(480px)"
    })
    document.styleSheets[0].cssRules[1].style.opacity = 0

    child1.classList.add("disabled")

   }else if (index == -1){
    col.forEach((ele)=>{
        ele.style.transform = "translateX(120px)"
    })
    index = 0

   }else if (index == -2){
    col.forEach((ele)=>{
        ele.style.transform = "translateX(-120px)"
    })
    index = -1

   }else if (index == -3){
    col.forEach((ele)=>{
        ele.style.transform = "translateX(-340px)"
    })
    index = -2
    document.styleSheets[0].cssRules[2].style.opacity = 1;

    child.classList.remove("disabled")

   }

}


child.onclick = function (){

    if(index == 1){
        col.forEach((ele)=>{
            ele.style.transform = "translateX(0px)"
        })
        index = 0
    }else if (index == 2){
        col.forEach((ele)=>{
            ele.style.transform = "translateX(120px)"
        })
        index = 1
    }else if (index == 3){

        col.forEach((ele)=>{
            ele.style.transform = "translateX(240px)"
        })
        index = 2
        document.styleSheets[0].cssRules[1].style.opacity = 1

        child1.classList.remove("disabled")

    }else if (index == 0){
        col.forEach((ele)=>{
            ele.style.transform = "translateX(-120px)"
        })
        index = -1

    }else if(index == -1){
        col.forEach((ele)=>{
            ele.style.transform = "translateX(-340px)"
        })
        index = -2

    }else if(index == -2){
        col.forEach((ele)=>{
            ele.style.transform = "translateX(-480px)"
        })
        child.classList.add("disabled")
        document.styleSheets[0].cssRules[2].style.opacity = 0;

        index = -3

    }
  

}

if(index == -3){
    child.classList.add("disabled")

}


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




a.forEach((ele)=>{
    if(ele.classList.contains("active")){
        ele.parentElement.style.background = "orange"

    }
    ele.onclick = function(){
        if(ele.classList.contains("active")){
            ele.parentElement.style.background = "orange"

            if(ele.parentElement.classList == "last"){
                ele.parentElement.style.background = "#fff"

            }
           
        }else {
            a.forEach((ele)=>{
                ele.classList.remove("active")
                ele.parentElement.style.background = "#fff"

            })
            ele.classList.add("active")
            ele.parentElement.style.background = "orange"
            
            if(ele.parentElement.classList.contains("last")){
                ele.parentElement.style.background = "#fff"

            }


        }

    }
})



