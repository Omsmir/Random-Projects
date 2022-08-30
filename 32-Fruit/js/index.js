let li = document.querySelectorAll("ul li a")
let image = document.querySelectorAll("#images .pic img")

let headerImage = document.querySelector("header img")

li.forEach((ele) => {
   ele.addEventListener("click" ,() => {
    if(ele.classList.contains("active")){
        return true

    }else {
        li.forEach((el) => {
            el.classList.remove("active")
        })
        ele.classList.add("active")
    }
   })
})


image.forEach((ele) => {
    ele.addEventListener("click" ,() => {
        if(ele.classList.contains("active")){
            return true
        }else {
            image.forEach((el) => {
                el.classList.remove("active")
            })
            ele.classList.add("active")
            headerImage.src = "imgs/" + ele.classList[0] + ".jpg"

        }
    })
})