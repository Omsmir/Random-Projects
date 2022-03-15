let playing = document.querySelector(".playing")
let photo = document.querySelector(".photo")
let name2 = document.querySelector(".name")
let artist = document.querySelector(".artist")

let playPause = document.querySelector(".playpause-track")
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek = document.querySelector(".seek")
let volumer = document.querySelector(".volumer")

let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let randomIcon = document.querySelector('.fa-random');
let stroke = document.querySelectorAll(".stroke")
let ro = document.querySelector(".photo.ro")



ro.classList.remove("ro")


let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;


let music_list = [
    {
        img : 'imgs/stay.png',
        name : 'Stay',
        artist : 'The Kid LAROI, Justin Bieber',
        music : 'songs/stay.mp3'
    },
     {
        img : 'imgs/fallingdown.jpg',
        name : 'Falling Down',
        artist : 'Wid Cards',
        music : 'songs/fallingdown.mp3'
    },
    {
        img : 'imgs/faded.png',
        name : 'Faded',
        artist : 'Alan Walker',
        music : 'songs/Faded.mp3'
    },
    {
        img : 'imgs/ratherbe.jpg',
        name : 'Rather Be',
        artist : 'Clean Bandit',
        music : 'songs/Rather Be.mp3'
    }
  
]

loadTrack(track_index)

function loadTrack (){
    clearInterval(updateTimer)

    curr_track.src = music_list[track_index].music ;
    curr_track.load();
    

    photo.style.background = "url("+ music_list[track_index].img + ")"
    name2.textContent = music_list[track_index].name 
    artist.textContent = music_list[track_index].artist
    playing.textContent = "playing " + (track_index + 1) + "of" + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color()



}

playPause.addEventListener("click" ,(ele) => {
    ele.onclick = playpauseTrack()

})



function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}

function playTrack(){
    curr_track.play();
    isPlaying = true;
    playPause.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
    for(let i = 0 ; i < stroke.length ; i ++){
        new1[i].classList.add("stroke")
    }
ro.classList.add("ro")


}


function nextTrack(){
   if(track_index < music_list.length - 1){
       track_index = track_index + 1


   }else {
       track_index = 0

   }
   loadTrack(track_index)
   playTrack()

}

function prevTrack(){
    if( track_index > 0){
        track_index = track_index - 1
    } else {
        track_index = music_list.length  - 1
    }
    
    loadTrack(track_index)
    playTrack()
 

}

function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    playPause.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
    for(let i = 0 ; i < stroke.length ; i ++){
        new1[i].classList.remove("stroke")
    }
ro.classList.remove("ro")


}


function seekTo (){
    let loadin = curr_track.duration * (seek.value / 100 )
    curr_track.currentTime = loadin
}



function setUpdate(){
    let seekPosition = 0;
    if((curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek.value = seekPosition;
       
       let currentMinutes = Math.floor(curr_track.currentTime / 60)
       let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60 )
       let durationMinutes = Math.floor(curr_track.currentTime / 60)
       let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60 )

       if (currentMinutes < 10 ){currentMinutes = "0" + currentMinutes}
       if(currentSeconds < 10){currentSeconds = "0" + currentSeconds}
       if(durationMinutes < 10){durationMinutes = "0" + durationMinutes}
       if(durationSeconds < 10){ durationSeconds = "0" + durationSeconds}
       curr_time.textContent = currentMinutes + ":" + currentSeconds 
       total_duration.textContent = durationMinutes + ":" + durationSeconds

    }
}


function repeatTrack (){
    loadTrack(track_index)
    playTrack()
    // reset()
   
}


function reset (){
    
    for(let i = 0 ; i < stroke.length ; i ++){
        new1[i].classList.toggle("stroke")
    }
}

let new1 = Array.from(stroke)
for(let i = 0 ; i < stroke.length ; i ++){
    new1[i].classList.remove("stroke")
}

volumer.onchange = function(){
    curr_track.volume = volumer.value / 100
}

function random_bg_color(){
    let hex = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"]

   function populate(a){
    for(let i = 0; i < 6 ; i++) {
        let x = Math.round(Math.random() * 14)
        let y = hex[x]
        // console.log(y)

        a = a + y
    }
    return a ;
   }
   let Color1 = populate('#');
   let Color2 = populate('#');
   var angle = 'to right';

   let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
   document.body.style.background = gradient;
//    console.log(gradient)

}