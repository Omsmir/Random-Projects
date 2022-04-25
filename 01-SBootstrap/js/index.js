let li = document.querySelector(".bullets ul").querySelectorAll("li a")
li.forEach((ele) => {
    ele.onclick = function (){
        if(ele.classList.contains("active")){
            ele.classList.remove("active")
        }else {
            li.forEach((ele) => {
                ele.classList.remove("active")
            })
            ele.classList.add("active")
        }
    }
})
