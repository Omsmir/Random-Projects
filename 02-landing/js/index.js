let li = document.querySelector("ul").querySelectorAll("li a")

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