//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");
const button = document.querySelector(".sizes").querySelectorAll("button")


//Moving Animation Event
container.addEventListener("mousemove", (e) => {
   let xAxis = (window.innerWidth / 2 - e.pageX) / 25 ;
   let yAxis = (window.innerHeight / 2 - e.pageY) / 25 ;
   card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

  });


//Animate In
container.addEventListener("mouseenter" , (e) => {
    card.style.transition = "0.05s ease-in-out"

    
title.style.transform = "translateZ(50px) scale(1.1)";
sneaker.style.transform = "translateZ(150px) rotateZ(-15deg) ";
description.style.transform = "translateZ(50px) scale(1.1)";
sizes.style.cssText = "transform : scale(1.1);";
purchase.style.transform = "scale(1.1)"

})


//Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "0.9s ease-in-out";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  

    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "scale(1)";
    purchase.style.transform = "scale(1)";
  });




button[0].onclick = function (){
  button[0].classList.toggle("active")
  button[1].classList.remove("active")
  button[2].classList.remove("active")
  button[3].classList.remove("active")

}

button[1].onclick = function (){
  button[1].classList.toggle("active")
  button[0].classList.remove("active")
  button[2].classList.remove("active")
  button[3].classList.remove("active")

}

button[2].onclick = function (){
  button[2].classList.toggle("active")
  button[1].classList.remove("active")
  button[0].classList.remove("active")
  button[3].classList.remove("active")

}

button[3].onclick = function (){
  button[3].classList.toggle("active")
  button[1].classList.remove("active")
  button[2].classList.remove("active")
  button[0].classList.remove("active")

}