let Slider = document.querySelector('.slider-container');
let innerSlider = document.querySelector('.inner');


let startx
let x

let pressed = false


Slider.addEventListener("mousedown",(e) => {
    pressed = true

    startx = e.offsetX - innerSlider.offsetLeft

    Slider.style.cursor = "grabbing"

    console.log(innerSlider.offsetLeft)
})

Slider.addEventListener("mouseenter",()=>{
    Slider.style.cursor = "grab"
})


Slider.addEventListener("mouseup",() =>{
    Slider.style.cursor = "grab"
    pressed = false

})


Slider.addEventListener("mousemove",(e) =>{
    if(!pressed) return

    x = e.offsetX 

    innerSlider.style.left = `${x - startx}px`
    
    check()
})



function check(){
    let inner = innerSlider.getBoundingClientRect()
    let outer = Slider.getBoundingClientRect()

    if(parseInt(innerSlider.style.left) > 0){
        innerSlider.style.left = "0px"

    }

    if(inner.right < outer.right){
        innerSlider.style.left = `-${inner.width - outer.width}px`

    }
}
