let li = document.querySelector("ul").querySelectorAll("li a")
let li1 = document.querySelector("ul").querySelectorAll("li")
let under = document.querySelector("ul li .under")

li.forEach((ele) => {
    ele.onclick = function (){
        if(ele.classList.contains("active")){
            return true
            
        }else {
            li.forEach((ele)=>{
                ele.classList.remove("active")
            })
        }
        ele.classList.add("active")

    }
 
})


  function myFunction(x) {
    if (x.matches) {
        under.style.left = "45%"
        li1[0].onclick = function(){
            under.style.transform = "translate(15px,0px)"
        }
        li1[1].onclick = function(){
            under.style.transform = "translate(15px,40px)"
        }
        
        li1[2].onclick = function(){
            under.style.transform = "translate(15px,80px)"
        }
        li1[3].onclick = function(){
            under.style.transform = "translate(15px,120px)"
        }
        li1[4].onclick = function(){
            under.style.transform = "translate(15px,160px)"
        }
    } else {
        under.style.left = "15px"
        under.style.transform = "translateX(15px)"

        li1[0].onclick = function(){
            under.style.transform = "translateX(15px)"
        }
        li1[1].onclick = function(){
            under.style.transform = "translateX(105px)"
        }
        
        li1[2].onclick = function(){
            under.style.transform = "translateX(195px)"
        }
        li1[3].onclick = function(){
            under.style.transform = "translateX(285px)"
        }
        li1[4].onclick = function(){
            under.style.transform = "translateX(385px)"
        }
    }
  }
  
  const mmObj = window.matchMedia("(max-width: 988px)")
  
  myFunction(mmObj);
  
  mmObj.addListener(myFunction)