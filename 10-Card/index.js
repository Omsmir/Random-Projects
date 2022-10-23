

let signUp = document.querySelectorAll(".col-right .sign")

let right = document.querySelector(".container .col-right")

let left = document.querySelector(".container .col-left")


let text = document.querySelectorAll(".col-right aside .text")


var head = document.querySelectorAll(".head")




signUp.forEach((ele) => {
    
ele.addEventListener("click",(e) => {

    console.log(e.target.classList.contains("in"))
    if(ele.classList.contains("in")){
        head.forEach((el) => {
            if(el.classList.contains("he1")){
                
            }
        })
    }
    right.classList.toggle("left")
    left.classList.toggle("right")



    head.forEach((ele)=> {
        ele.classList.toggle("index")
    })


})

})

$( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
 

      // Run the effect
      
      $(".col-right aside .text" ).toggle( "fadein", 800 );

    };   
    // Set effect from select menu value
    $( ".col-right .sign" ).on( "click", function() {
      runEffect();

    });

  } );




