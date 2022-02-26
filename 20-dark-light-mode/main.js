let dark = document.querySelector(".dark")
let light = document.querySelector(".light")
let buttn = document.querySelector(".buttn")

//Giving The Light Button A function To Enable Dark Mode

light.onclick = function (){

    // Make The Light Button To Transfer From 0 To 100% Of Container 
    light.style.cssText = " color: white; background-color : black;"

    light.style.transform = "translateX(100%)"

// Giving The Light Button Value Darkmode To Switched To The Dark Button And Stick In 100% Of Buttn 
light.innerHTML = "Darkmode"

// Let The Buttn Backgriund-Color Be White  
buttn.style.backgroundColor = "#eee"

document.body.style.backgroundColor = "rgb(24, 20, 41)"

//Call H3 And Change It's Color To White To Appear On Darkmode Theme
document.querySelector("h3").style.color = "white" 

// Change The Text Of H3 To Fit The Darkmode Theme
document.querySelector("h3").innerHTML = "Darkmode Is On"

// Make The Same Thing With The P
document.querySelector("p").style.color = "white"

document.querySelector("h1").style.color = "white"

// Change The Images That Been Displayed On Dark Mode Theme
document.querySelector(".dark-img").style.display = "block"

document.querySelector(".light-img").style.display = "none"

// Make The Dark Button Displayed
dark.style.display = "block"

window.localStorage.setItem("background-color" , document.body.style.backgroundColor)

window.localStorage.setItem("color", document.querySelector("h3").style.color )

window.localStorage.setItem("img",document.querySelector(".dark-img").style.display )

window.localStorage.setItem("img1",document.querySelector(".light-img").style.display)

window.localStorage.setItem("display", dark.style.display)

window.localStorage.setItem("color1" , buttn.style.backgroundColor)

window.localStorage.setItem("position", light.style.transform)

window.localStorage.setItem("h3", document.querySelector("h3").innerHTML)



}



// Making The Same Inverse Things In The Things On Dark Button
dark.onclick = function (){
    if(light.innerHTML = "Lightmode"){

        dark.style.display = "none"

        light.style.cssText = "color : black "

        buttn.style.backgroundColor = "black"

        document.body.style.backgroundColor ="white"

        document.querySelector("h3").style.color = "Black"

        document.querySelector("p").style.color = "black"

        document.querySelector("h1").style.color = "black" 

        document.querySelector("h3").innerHTML = "Lightmode Is On"

        document.querySelector(".dark-img").style.display = "none"

        document.querySelector(".light-img").style.display = "block"

        window.localStorage.setItem("background-color" , document.body.style.backgroundColor)
        
        window.localStorage.setItem("color", document.querySelector("h3").style.color )

        window.localStorage.setItem("img1", document.querySelector(".light-img").style.display )

        window.localStorage.setItem("img" ,document.querySelector(".dark-img").style.display  )

        // window.localStorage.setItem("position",)

        window.localStorage.setItem("color1" , buttn.style.backgroundColor)

        window.localStorage.setItem("display" , dark.style.display)

        window.localStorage.setItem("h3", document.querySelector("h3").innerHTML)



        
    }
}

if(window.localStorage.getItem("background-color") && window.localStorage.getItem("color1")  && window.localStorage.getItem("display") && window.localStorage.getItem("color") && window.localStorage.getItem("img") && window.localStorage.getItem("img1")){
    if(window.localStorage.getItem("position") && window.localStorage.getItem("h3")){

    }
    document.body.style.backgroundColor = window.localStorage.getItem("background-color")

    document.querySelector("h3").style.color =  window.localStorage.getItem("color")

    document.querySelector("p").style.color = window.localStorage.getItem("color")

    document.querySelector("h1").style.color = window.localStorage.getItem("color")

    document.querySelector(".dark-img").style.display = window.localStorage.getItem("img")

    document.querySelector(".light-img").style.display = window.localStorage.getItem("img1")

    dark.style.display = window.localStorage.getItem("display")

    buttn.style.backgroundColor = window.localStorage.getItem("color1")

    light.style.transform = window.localStorage.getItem("position")

    document.querySelector("h3").innerHTML = window.localStorage.getItem("h3")


    if( document.querySelector(".light-img").style.display = "block" && document.querySelector(".dark-img").style.display == "none"){
        light.style.transform = "translateX(0)"

    }
  

  

}


