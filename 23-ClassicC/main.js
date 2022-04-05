const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");
const button = document.querySelector(".sizes").querySelectorAll("button")


container.addEventListener("mousemove", (e) => {
   let xAxis = (window.innerWidth / 2 - e.pageX) / 20 ;
   let yAxis = (window.innerHeight / 2 - e.pageY) / 20 ;
   card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

  });


container.addEventListener("mouseenter" , (e) => {
    card.style.transition = "none"

    
title.style.transform = "translateZ(50px) scale(1.1)";
sneaker.style.transform = "translateZ(150px) rotateZ(-15deg) ";
description.style.transform = "translateZ(50px) scale(1.1)";
sizes.style.cssText = "transform : scale(1.1);";
purchase.style.transform = "scale(1.1)"

})


container.addEventListener("mouseleave", (e) => {
    card.style.transition = "0.9s ease-in-out";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  

    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "scale(1)";
    purchase.style.transform = "scale(1)";
  });

button.forEach((ele) =>{
  ele.addEventListener("click",(e)=>{
    if(e.target.classList.contains("active")){
      e.target.classList.remove("active")
    }else {
      button.forEach((ele) => {
        ele.classList.remove("active")
      })
      e.target.classList.add("active")
    }
  })
})


// button[0].addEventListener("click",(ele) =>{

//   if(ele.target.classList.contains("active")){
//     ele.target.classList.remove("active")
//   }else {
//     button.forEach((ele) =>{
//       ele.classList.remove("active")
//     })
//     ele.target.classList.add("active")

//   }

// })

// button[1].addEventListener("click",(ele) =>{

//   if(ele.target.classList.contains("active")){
//     ele.target.classList.remove("active")
//   }else {
//     button.forEach((ele) =>{
//       ele.classList.remove("active")
//     })
//     ele.target.classList.add("active")

//   }

// })

// button[2].addEventListener("click",(ele) =>{

//   if(ele.target.classList.contains("active")){
//     ele.target.classList.remove("active")
//   }else {
//     button.forEach((ele) =>{
//       ele.classList.remove("active")
//     })
//     ele.target.classList.add("active")

//   }

// })

// button[3].addEventListener("click",(ele) =>{

//   if(ele.target.classList.contains("active")){
//     ele.target.classList.remove("active")
//   }else {
//     button.forEach((ele) =>{
//       ele.classList.remove("active")
//     })
//     ele.target.classList.add("active")

//   }

// })
