let li = document.querySelectorAll("ul li a")
let image = document.querySelectorAll("#images .pic img")

let headerImage = document.querySelector("header img")

let section = document.querySelectorAll("section")


let minus = document.querySelector(".more .minus")
let plus = document.querySelector(".more .plus")
let num = document.querySelector(".more .num")


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

console.log(section)


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


minus.addEventListener("click",() => {
    let n = Number(num.textContent)
if(n < 10 && n > 0){
    n--
}else if(n == 10){
    n--

}
num.textContent = n
})

plus.addEventListener("click",() => {
    let n = Number(num.textContent)
    if(n < 10 ){
        n++

    }else if(n == 10){
        return false
    }
    num.textContent = n
})

