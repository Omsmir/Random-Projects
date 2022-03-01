let input = document.querySelector("[name='search-obj']")
let search = document.getElementById("okay")
let DeleteElement = document.querySelector("#deleteEle")
let tooloop = document.querySelector(".tooloop")
let co = document.querySelector(".co.co2")
let co2 = document.querySelector(".co.c")
let co3 = document.querySelector(".co.co4")
let map1 = document.querySelector(".map.map1")
let map2 = document.querySelector(".map.map-2")
let map3 = document.querySelector(".map.map-3")
let iconEx = document.querySelector(".icon-ex")
let button  = document.querySelector(".button")
let Tweet = document.querySelector(".tweet.hove")
let text = document.querySelector("[name='textarea']")
let inside = document.querySelector(".right .counter .inside")
let cir = document.querySelector(".right .counter .inside #cir .child")
let button2 = document.querySelector("#click")
let p = document.querySelector(".co.co1").querySelectorAll("p")


if(p[6].className == "active"){
    p[6].style.fontWeight = "bold"


    
}

input.onfocus = function (){
    document.getElementById("look").style.fill = "#1487d3";
    search.style.border = "1px solid #1487d3"
    search.style.backgroundColor = "transparent"


}


button.onclick = function (){
    document.querySelector(".tweets-co").style.display = "flex"

    document.querySelector(".over").style.display = "block"
    text.value = ""

    
   
}

button2.onclick = function (){
    document.querySelector(".tweets-co").style.display = "flex"

    document.querySelector(".over").style.display = "block"
    text.value = ""
}
iconEx.onclick = function (){
    document.querySelector(".tweets-co").style.display = "none"
    document.querySelector(".over").style.display = "none"
    tooloop.style.display = "none"
    text.value = ""
    Tweet.disabled = true
    inside.style.display = "none"
    if(Tweet.disabled = true){
        Tweet.classList.remove("hove")

    }

    // map1.classList.toggle("span", true) 
    // map1.style.cursor = "pointer"
    // map2.classList.toggle("span", true) 
    // map2.style.cursor = "pointer"
    // map3.classList.toggle("span", true) 
    // map3.style.cursor = "pointer"
    map1.style.display = "flex"
    map2.style.display = "none"
    map3.style.display = "none"
    document.querySelector(".svg.svg2").style.display = "flex"

    document.querySelector(".svg.svg3").style.display = "none"
    document.querySelector(".svg.svg4").style.display = "none"

}


document.querySelector(".over").onclick = function () {
    tooloop.style.display = "none"
    document.querySelector(".tweets-co").style.display = "none"
    text.value = ""
    Tweet.disabled = true
    inside.style.display = "none"

    if(Tweet.disabled = true){
        Tweet.classList.remove("hove")

    }

    if( document.querySelector(".tweets-co").style.display = "none"){
        document.querySelector(".over").style.display = "none"


    }
    // map1.classList.toggle("span", true) 
    // map1.style.cursor = "pointer"
    // map2.classList.toggle("span", true) 
    // map2.style.cursor = "pointer"
    // map3.classList.toggle("span", true) 
    // map3.style.cursor = "pointer"
    map1.style.display = "flex"
    map2.style.display = "none"
    map3.style.display = "none"
    document.querySelector(".svg.svg2").style.display = "flex"

    document.querySelector(".svg.svg3").style.display = "none"
    document.querySelector(".svg.svg4").style.display = "none"


}

document.querySelector(".over-2").onclick = function (){
    tooloop.style.display = "none"
    if( tooloop.style.display == "none"){
        document.querySelector(".over-2").style.display = "none"
    }
    // map1.classList.toggle("span", true) 
    // map1.style.cursor = "pointer"
    // map2.classList.toggle("span", true) 
    // map2.style.cursor = "pointer"
    // map3.classList.toggle("span", true) 
   document.querySelector(".over-3").style.display = "none"  
}


document.querySelector(".over-3").onclick = function (){
    tooloop.style.display = "none"
    if( tooloop.style.display == "none"){
        document.querySelector(".over-3").style.display = "none"
    }
    // map1.classList.toggle("span", true) 
    // map1.style.cursor = "pointer"
    // map2.classList.toggle("span", true) 
    // map2.style.cursor = "pointer"
    // map3.classList.toggle("span", true) 
    // map3.style.cursor = "pointer"

}


map1.onclick = function (){
    if(tooloop.style.display = "none"){
        tooloop.style.display = "flex"

        if(tooloop.style.display = "flex"){
            // map1.style.cssText = "cursor: context-menu;"  
            // map1.classList.toggle("span", false) 
            document.querySelector(".over-2").style.display = "block"
            document.querySelector(".over-3").style.display = "block"
           
            if(tooloop.style.display == "none"){
                document.querySelector(".over-2").style.display = "none"
                document.querySelector(".over-3").style.display = "none"


            }
        }
        
    }
    
}


map2.onclick = function (){

    if(tooloop.style.display = "none"){
        tooloop.style.display = "flex"

    }
    if(tooloop.style.display = "flex"){
        // map2.style.cssText = "cursor: context-menu;"  
        // map2.classList.toggle("span", false) 
        map2.style.display = "flex"
        document.querySelector(".over-2").style.display = "block"
        document.querySelector(".over-3").style.display = "block"

        if(tooloop.style.display == "none"){
            document.querySelector(".over-2").style.display = "none"
            document.querySelector(".over-3").style.display = "none"


        }

    }
}
map3.onclick = function (){
    if(tooloop.style.display = "none"){
        tooloop.style.display = "flex"
       

    } 
    if(tooloop.style.display = "flex"){
        // map3.style.cssText = "cursor: context-menu;"  
        // map3.classList.toggle("span", false) 
        map3.style.display = "flex"
        document.querySelector(".over-2").style.display = "block"
        document.querySelector(".over-3").style.display = "block"

        if(tooloop.style.display == "none"){
            document.querySelector(".over-2").style.display = "none"
            document.querySelector(".over-3").style.display = "none"


        }

    }
    

}



co.onclick = function () {
    map1.style.display = "flex"
    map3.style.display = "none"
    map2.style.display = "none"
    document.querySelector(".svg.svg2").style.display = "flex"

    document.querySelector(".svg.svg3").style.display = "none"
    document.querySelector(".svg.svg4").style.display = "none"

    // tooloop.style.display = "none"
    // map1.classList.toggle("span", true) 
    map1.style.cursor = "pointer"
    if(tooloop.style.display = "none"){
        document.querySelector(".over-2").style.display = "none"
        document.querySelector(".over-3").style.display = "none"


    }


}
co2.onclick = function () {
    map2.style.display = "flex"
    map1.style.display = "none"
    map3.style.display = "none"
    document.querySelector(".svg.svg3").style.display = "flex"
    document.querySelector(".svg.svg2").style.display = "none"
    document.querySelector(".svg.svg4").style.display = "none"
    tooloop.style.display = "none"
    // map2.classList.toggle("span", true) 
    // map2.style.cursor = "pointer"
    if(tooloop.style.display == "none"){
        document.querySelector(".over-2").style.display = "none"
        document.querySelector(".over-3").style.display = "none"


    }

}
co3.onclick = function () {
    map3.style.display = "flex"
    map2.style.display = "none"
    map1.style.display = "none"
    document.querySelector(".svg.svg3").style.display = "none"
    document.querySelector(".svg.svg2").style.display = "none"
    document.querySelector(".svg.svg4").style.display = "flex"

    tooloop.style.display = "none"
    // map3.classList.toggle("span", true) 
    // map3.style.cursor = "pointer"
    if(tooloop.style.display == "none"){
        document.querySelector(".over-2").style.display = "none"
        document.querySelector(".over-3").style.display = "none"


    }

}


input.addEventListener('keyup', function() {
    if (input.value !== "") {
        DeleteElement.style.display = 'flex';
    }else{
        DeleteElement.style.display = 'none';
    }
});

Tweet.classList.remove("hove")

text.addEventListener("keyup", function() {
    if (text.value !== "") {
        Tweet.classList.add("hove")
        Tweet.disabled = false;
        inside.style.display = "flex"
        
    }else {
        Tweet.disabled = true
        inside.style.display = "none"


        if(Tweet.disabled = true){
            Tweet.classList.remove("hove")

        }
    }
    if(text.value.length <= "2"){
        cir.style.cssText = "stroke-dashoffset: 57.3467px; stroke-dasharray: 56.5487px;"
    }else if(text.value.length <= "4"){
        cir.style.cssText = "stroke-dashoffset: 58.3467px; stroke-dasharray: 56.5487px;"
    }else if(text.value.length <= "6"){
        cir.style.cssText = "stroke-dashoffset: 59.3467px; stroke-dasharray: 56.5487px;"
    }else if(text.value.length <= "8"){
        cir.style.cssText = "stroke-dashoffset: 60.3467px; stroke-dasharray: 56.5487px;"
    }else if(text.value.length <= "10"){
        cir.style.cssText = "stroke-dashoffset: 61.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "12"){
        cir.style.cssText = "stroke-dashoffset: 62.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "14"){
        cir.style.cssText = "stroke-dashoffset: 63.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "16"){
        cir.style.cssText = "stroke-dashoffset: 64.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "18"){
        cir.style.cssText = "stroke-dashoffset: 65.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "20"){
        cir.style.cssText = "stroke-dashoffset: 66.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "22"){
        cir.style.cssText = "stroke-dashoffset: 67.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "24"){
        cir.style.cssText = "stroke-dashoffset: 68.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "26"){
        cir.style.cssText = "stroke-dashoffset: 69.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "28"){
        cir.style.cssText = "stroke-dashoffset: 70.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "30"){
        cir.style.cssText = "stroke-dashoffset: 71.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "32"){
        cir.style.cssText = "stroke-dashoffset: 72.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "34"){
        cir.style.cssText = "stroke-dashoffset: 73.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "35"){
        cir.style.cssText = "stroke-dashoffset: 74.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "36"){
        cir.style.cssText = "stroke-dashoffset: 75.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "38"){
        cir.style.cssText = "stroke-dashoffset: 76.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "40"){
        cir.style.cssText = "stroke-dashoffset: 77.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "42"){
        cir.style.cssText = "stroke-dashoffset: 78.3467px; stroke-dasharray: 56.5487px;"
    }
})
text.addEventListener("keydown", function(){
    if(text.value.length <= "2"){
        cir.style.cssText = "stroke-dashoffset: 57.3467px; stroke-dasharray: 56.5487px;"
    }else if(text.value.length <= "4"){
        cir.style.cssText = "stroke-dashoffset: 58.3467px; stroke-dasharray: 56.5487px;"
    }else if(text.value.length <= "6"){
        cir.style.cssText = "stroke-dashoffset: 59.3467px; stroke-dasharray: 56.5487px;"
    }else if(text.value.length <= "8"){
        cir.style.cssText = "stroke-dashoffset: 60.3467px; stroke-dasharray: 56.5487px;"
    }else if(text.value.length <= "10"){
        cir.style.cssText = "stroke-dashoffset: 61.3467px; stroke-dasharray: 56.5487px;"
    } else if (text.value.length <= "12"){
        cir.style.cssText = "stroke-dashoffset: 62.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "14"){
        cir.style.cssText = "stroke-dashoffset: 63.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "16"){
        cir.style.cssText = "stroke-dashoffset: 64.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "18"){
        cir.style.cssText = "stroke-dashoffset: 65.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "20"){
        cir.style.cssText = "stroke-dashoffset: 66.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "22"){
        cir.style.cssText = "stroke-dashoffset: 67.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "24"){
        cir.style.cssText = "stroke-dashoffset: 68.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "26"){
        cir.style.cssText = "stroke-dashoffset: 69.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "28"){
        cir.style.cssText = "stroke-dashoffset: 70.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "30"){
        cir.style.cssText = "stroke-dashoffset: 71.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "32"){
        cir.style.cssText = "stroke-dashoffset: 72.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "34"){
        cir.style.cssText = "stroke-dashoffset: 73.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "35"){
        cir.style.cssText = "stroke-dashoffset: 74.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "36"){
        cir.style.cssText = "stroke-dashoffset: 75.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "38"){
        cir.style.cssText = "stroke-dashoffset: 76.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "40"){
        cir.style.cssText = "stroke-dashoffset: 77.3467px; stroke-dasharray: 56.5487px;"
    }else if (text.value.length <= "42"){
        cir.style.cssText = "stroke-dashoffset: 78.3467px; stroke-dasharray: 56.5487px;"
    }
})


input.onblur = function (){
    document.getElementById("look").style.fill = "#8899A6"
    search.style.border = "none"
    search.style.backgroundColor = "rgb(40, 53, 63)"


}
DeleteElement.onclick = function (){
    if(input.value == ""){
        DeleteElement.style.display = "flex"
    }else if (input.value !== ""){
        input.value = ""
        DeleteElement.style.display = "none"

    }

}


