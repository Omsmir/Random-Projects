let li = document.querySelectorAll("nav ul li a")
let image = document.querySelectorAll("#images .pic img")

let headerImage = document.querySelector("header img")

let section = document.querySelectorAll("section")


let minus = document.querySelector(".more .minus")
let plus = document.querySelector(".more .plus")
let num = document.querySelector(".more .num")

let About = document.getElementById("About")

let nav = document.querySelector(".navbar")

let years = document.querySelectorAll(".years ul li")

let circle = document.querySelector(".circle article h2")

let cart = document.querySelector(".cart")

let shoppingCart = document.querySelector(".shopping-cart")

let over = document.querySelector(".over")

let exit = document.querySelector(".exit")

let inner = document.querySelector(".innerLayer")

let addToCartButton = document.querySelector(".checkout")

let head = document.querySelectorAll(".shopping-cart .innerLayer .head-1")

var sumPrice = document.querySelector(".notification")

productInCart = JSON.parse(localStorage.getItem("items"))

if(!productInCart){
    productInCart = []
}

function sumPriceInCart(product){
    let sum = 0

    productInCart.forEach((ele) =>{
        sum += ele.price
    })
    return (sum).toFixed(1)
}
const updateproductInHtml = () => {
    localStorage.setItem("items",JSON.stringify(productInCart))
    if(productInCart.length > 0){
        let result = productInCart.map((product)=>{
            return `
            <div class="head-1">
            <span class="list fw-bold justify-content-start" id="Product">
                <div class="content d-flex flex-row justify-content-center align-items-center">
                    <img src="${product.image}" class="rounded-2" id="product-img">
                    <p class="text-black-50 text-capitalize mb-0 ms-3" id="desc">${product.name}</p>
                </div>
            </span>
            <span class="list fw-bold" id="Price">$${(product.price).toFixed(1)}</span>
            <span class="list fw-bold d-flex justify-content-center align-items-center" id="Quantity">
            <span class="minus bg-danger me-2" data-id="${product.id}">
                <i class="fa-solid fa-minus"></i></span> ${product.count} 
                <span class="plus bg-success ms-2" data-id="${product.id}">
                    <i class="fa-solid fa-plus"></i>
                </span>   
        </span>
            <span class="list fw-bold" id="Remove">
                <div class="delete remove rounded-circle d-flex justify-content-center align-items-center" data-id="${product.id}">
                <svg class="svg-inline--fa fa-trash-can remove" aria-hidden="true" focusable="false" data-id="${product.id}" data-prefix="fas" data-icon="trash-can" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" class="remove" d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" data-id="${product.id}"></path></svg>                </div>
            </span>
        </div>`
        })
        inner.innerHTML = result.join("")
        sumPrice.innerHTML = "$" + sumPriceInCart()

    }else {
        inner.innerHTML = ""
        sumPrice.innerHTML = "$"
    }
}

console.log(productInCart.length)

function updateProductsInCart(product){
    for(let i = 0; i < productInCart.length; i++){
        if(productInCart[i].id == product.id){
            productInCart[i].count += product.count
            productInCart[i].price = product.basePrice * productInCart[i].count
            productInCart[i].image = product.image
            return 
        }

    }
    productInCart.push(product)
}

addToCartButton.addEventListener("click" ,() => {
    const productID = document.querySelector("#productName").attributes["data-product-id"].value
    const productName = document.querySelector("#productName").innerHTML
    const productCount = document.querySelector("#productCount").innerHTML
    const productPrice = document.querySelector("#productPrice").innerHTML
    const productImage = document.querySelector("#productImage").src
    let products = {
        id:productID,
        name:productName,
        count:+productCount,
        image: productImage,
        price: +productPrice,
        basePrice: +productPrice
    }

    updateProductsInCart(products)
    updateproductInHtml()

})

inner.addEventListener("click" ,(e) =>{
    const plusButton = e.target.classList.contains("plus")
    const minusButton = e.target.classList.contains("minus")

    const id = e.target.dataset.id
    const remove = e.target.classList.contains("remove")
    for(let i = 0; i < productInCart.length; i++){
        if(productInCart[i].id == id){
            if(plusButton || minusButton){
                if(plusButton){
                    productInCart[i].count += 1

                }
                if(minusButton){

                    productInCart[i].count -= 1

                }

                productInCart[i].price = productInCart[i].basePrice * productInCart[i].count
            }
            if(productInCart[i].count <= 0){
                productInCart.splice(i,1)
            }
            if(remove){
                productInCart.splice(i,1)
            }
        }
        updateproductInHtml()
    }
})
updateproductInHtml()


li.forEach((ele) => {
   ele.addEventListener("click" ,() => {
    if(ele.classList.contains("active")){
        return true

    }else {
       removeAllActive()
        ele.classList.add("active")
    }
   })
})




image.forEach((ele) => {
let productName = document.querySelector("#productName")

let productText = document.querySelector("#productText")

let productPrice = document.querySelector('#productPrice')

let productCount = document.querySelector("#productCount")

const name = ele.attributes["data-name"]
const text = ele.attributes["data-text"]
const price = ele.attributes["data-price"]
const productid = ele.attributes["data-product-id"]


ele.addEventListener("click" ,() => {
        if(ele.classList.contains("active")){
            return true
        }else {
            removeAllActive(image)
            ele.classList.add("active")
            headerImage.src = "imgs/" + ele.classList[0] + ".jpg"
            productName.innerHTML = name.value
            productName.setAttribute("data-product-id",productid.value)
            productText.innerHTML = text.value
            productPrice.innerHTML = price.value
            productCount.innerHTML = 1
        }
    })
})


minus.addEventListener("click",() => {
    let n = Number(num.textContent)
if(n < 10 && n >= 2){
    n--
}else if(n == 10){
    n--

}
num.textContent = n
})

plus.addEventListener("click",() => {
    let n = Number(num.textContent)
    if(n < 10 ){
        n++

    }else if(n == 10){
        return false
    }
    num.textContent = n
})



  AOS.init();

console.log(section[2].offsetTop)

 onscroll = function(){

    let position = document.documentElement.scrollTop

        if(position >= section[1].offsetHeight ) {
                nav.classList.add("back");
        }else {
            nav.classList.remove("back")
        }

  



    section.forEach((ele) => {
        if(position >= ele.offsetTop - ele.offsetHeight * .25 && 
            position < ele.offsetTop + ele.offsetHeight -ele.offsetHeight * .25) {
                let currentId = ele.attributes.id.value

                removeAllActive(li)
                addActive(currentId)

            }
    })
}

var removeAllActive = function(para){
    para.forEach((ele) => {
        ele.classList.remove("active")
    })
  }


  var addActive = function(id){
    let select = `.navbar-nav li a[href="#${id}"]`


    document.querySelector(select).classList.add("active")
  }




  let ctx = document.getElementById('myChart')
  let myChart = new Chart(ctx, {
      type: 'bar',
     data: {
        labels:["Jul","Aug",'Sep',"Oct","Nov","Dec"],
        datasets: [{
            label:"Last 6 Months",
            data: [185, 1825, 500 ,1400 ,815 ,745],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            barThickness: 50,
            borderRadius: 5,
            hoverBackgroundColor: '#0593F9',

        }]
     },
      options: {
        animations: {
            borderColor: {
              duration: 1000,
              easing: 'easeInOut',
              from: 1,
              to: 5,
              loop: true
            }
          },
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  
  console.log(circle)

    years.forEach((ele) => {
        ele.addEventListener("click" , () =>{
            if(ele.classList.contains("active")){
                GenerateData(ele)
                console.log(ele.attributes.id.value)
                
            }else {
              removeAllActive(years)
                ele.classList.add("active")
                GenerateData(ele)
                circle.innerText = `Our Sales ${ele.attributes.id.value}`

            }
        })
    })



function GenerateData(id){
    let select = id.attributes["data-attr"].value
    
    
    let array = select.split(" ").map((ele) => Number(ele))
    let data = myChart.config.data;

    data.datasets[0].data = array;  
    
    myChart.update()
 }



 let windw = window.matchMedia("(max-width:1198px")


function match(x){
    let nodata = myChart.config.data;

    if(x.matches){

        nodata.datasets[0].barThickness = 25

    }else {
        nodata.datasets[0].barThickness = 50
    }
    myChart.update()

}


windw.addListener(match)


var typed = new Typed('span.auto', {
    // Waits 1000ms after typing "First"
    strings: ['First ^1000 sentence.', 'healthy',"Nice"],
    typeSpeed:200,
    backSpeed: 200,
    loop: true,
    smartBackspace: true 
  });


let opened = false
  function openCart(){
   cart.onclick = function (){
    if(shoppingCart.classList.contains("active") && over.classList.contains("active")){
        shoppingCart.classList.remove("active")
        over.classList.remove("active")
        opened = false
    }else {
        shoppingCart.classList.toggle("active")
        over.classList.toggle("active")
        opened = true
    }
   
   }

  }

  function CloseCart(){
    exit.onclick = function () {
        if(opened){
            shoppingCart.classList.remove("active")
            over.classList.remove("active")
        }
    }
    over.onclick = function (){
        if(opened){
            shoppingCart.classList.remove("active")
            over.classList.remove("active")
        }
    }
  }

  CloseCart()
openCart()

let submit = document.querySelector("#submit")



function sendEmail(){
    const name = document.querySelector("#name")
    const email = document.querySelector("#email")
    const message = document.querySelector("#message")

    var params = {
        from_name: name.value,
        email_id: email.value,
        message: message.value
    }
    
    emailjs.send("service_gxdke58","template_7p655vp",params,"dASWGnjlwksvJNrJE").then(function(res,rej){
        if(res ){
          
            alert("Message Delivered")
            name.value = ""
            email.value = ""
            message.value = ""
            
          
        }
        if(rej){
            console.log(Error)
           }
    })
}

submit.onsubmit = sendEmail()