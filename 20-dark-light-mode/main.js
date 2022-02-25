let dark = document.querySelector(".dark")
let light = document.querySelector(".light")
let buttn = document.querySelector(".buttn")

//Giving The Light Button A function To Enable Dark Mode

light.onclick = function (){

    // Make The Light Button To Transfer From 0 To 100% Of Container 
    light.style.cssText = "transform: translateX(100%); color: white; background-color : black;"

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

}

// Making The Same Inverse Things In The Things On Dark Button
dark.onclick = function (){
    if(light.innerHTML = "lightmode"){

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
        
    }
}
