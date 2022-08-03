let Slider = document.querySelector('.slider-container');
let innerSlider = document.querySelector('.inner');

let pressed = false;
let startX;
let x;

Slider.addEventListener("mousedown",(e)=>{
    pressed = true

    startX = e.offsetX - innerSlider.offsetLeft

    Slider.style.cursor = "grabbing"
})


Slider.addEventListener("mouseenter",()=>{
    Slider.style.cursor = "grab"

})

Slider.addEventListener("mouseup",() => {
    Slider.style.cursor = "grab"
    pressed = false
})


Slider.addEventListener("mousemove",(e) => {
    if(!pressed) return

    x = e.offsetX 

    innerSlider.style.left = `${x -startX}px`


    check()
})



const check = () => {
    let inner = innerSlider.getBoundingClientRect()
    var outer = Slider.getBoundingClientRect()

    if(parseInt(innerSlider.style.left) > 0){
        innerSlider.style.left = "0px"

    }

    if(inner.right < outer.right){
        innerSlider.style.left =  `-${inner.width - outer.width}px`
    }
}