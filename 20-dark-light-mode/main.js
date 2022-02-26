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

// Store The background-color Of The Body In the Local Storage
window.localStorage.setItem("background-color" , document.body.style.backgroundColor)

// Store The color In The Local Storage
window.localStorage.setItem("color", document.querySelector("h3").style.color )

//Store The Img In the Local Storage
window.localStorage.setItem("img",document.querySelector(".dark-img").style.display )

//Store The Img In the Local Storage
window.localStorage.setItem("img1",document.querySelector(".light-img").style.display)

//Store The display In the Local Storage
window.localStorage.setItem("display", dark.style.display)

//Store The background-color of buttn In the Local Storage
window.localStorage.setItem("color1" , buttn.style.backgroundColor)

//Store The Position Of Light Button In The Local Storage
window.localStorage.setItem("position", light.style.transform)

//Store The H3 InnerText In The Local Storage 
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

// Giving Condition To Prove If The Background-color , color , text , display , position Are Avaliable to Callback And Get It From Local Storage 
if(window.localStorage.getItem("background-color") && window.localStorage.getItem("color1")  && window.localStorage.getItem("display") && window.localStorage.getItem("color") && window.localStorage.getItem("img") && window.localStorage.getItem("img1")){
    if(window.localStorage.getItem("position") && window.localStorage.getItem("h3")){

    }
    // Getting The Background-color From The Local Storage
    document.body.style.backgroundColor = window.localStorage.getItem("background-color")

    // Getting The Color From Local Storage
    document.querySelector("h3").style.color =  window.localStorage.getItem("color")

    // Getting The color Of p From The LS
    document.querySelector("p").style.color = window.localStorage.getItem("color")

    // Getting The Color Of H1 From LS
    document.querySelector("h1").style.color = window.localStorage.getItem("color")

    // Getting The img Stored In the LS
    document.querySelector(".dark-img").style.display = window.localStorage.getItem("img")

    // Getting The img Stored In The Local Storage But This Time In the Dark Button Click 
    document.querySelector(".light-img").style.display = window.localStorage.getItem("img1")

    // Getting The Display Of Dark Button From LS
    dark.style.display = window.localStorage.getItem("display")

    // Getting The Buttn Background Stored
    buttn.style.backgroundColor = window.localStorage.getItem("color1")

    // Getting The Light Real Position
    light.style.transform = window.localStorage.getItem("position")

    // Getting The Stored InnerText
    document.querySelector("h3").innerHTML = window.localStorage.getItem("h3")

// Giving a Simple Condition To Prevent The Two Images From Been Displayed At The Same Time
    if( document.querySelector(".light-img").style.display = "block" && document.querySelector(".dark-img").style.display == "none"){

        //When The Condition Get True The Light Button Transform Will Be In It's Origin Position
        light.style.transform = "translateX(0)"

    }

}


