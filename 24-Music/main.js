let playing = document.querySelector(".playing")
let photo = document.querySelector(".photo")
let name2 = document.querySelector(".name")
let artist = document.querySelector(".artist")
let player = document.querySelector(".player")
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

let new1 = Array.from(stroke)




let curr_track = document.createElement('audio');

let isPlaying = false
let track_index = 0
let updatetimer

ro.classList.remove("ro")

let musicList = [
    {
        img: "imgs/faded.png",
        song: "songs/Faded.mp3",
        artist: "Alan Walker",
        name: "faded"
    },
    {
        img: "imgs/fallingdown.jpg",
        song: "songs/fallingdown.mp3",
        artist: "Wid Cards",
        name: "falling down"
    },
    {
        img : 'imgs/ratherbe.jpg',
        name : 'Rather Be',
        artist : 'Clean Bandit',
        song : 'songs/Rather Be.mp3'
    },{
        img : 'imgs/stay.png',
        name : 'Stay',
        artist : 'The Kid LAROI, Justin Bieber',
        song : 'songs/stay.mp3'
    }
]
loadTrack()

function loadTrack(){
    clearInterval(updatetimer)
    
    curr_track.src = musicList[track_index].song

    curr_track.load()

    playing.innerHTML = `playing ${track_index+1} of ${musicList.length}`

    photo.style.background = `url('${musicList[track_index].img}')`

    name2.textContent = `${musicList[track_index].name}`

    artist.innerHTML = `${musicList[track_index].artist}`

    updatetimer = setInterval(setUpdate,1000)

    curr_track.addEventListener("ended",nextTrack)
 
random_bg_color()
}


function nextTrack(){
    if(track_index < musicList.length - 1){
        track_index++

    }else {
        track_index = 0
    }

    loadTrack()
    playTrack()
}

function prevTrack(){
    if(track_index > 0){
        track_index--

    }else {
        track_index = musicList.length - 1
    }

    loadTrack()
    playTrack()
}

function playTrack(){
    curr_track.play()
    isPlaying = true

    playPause.innerHTML = `<i class="fa fa-pause-circle fa-5x"></i>`

    for(let i = 0 ; i < stroke.length ; i ++){
        new1[i].classList.add("stroke")
    }
    ro.classList.add("ro")

}

function pause(){
    curr_track.pause()
    isPlaying = false 
    playPause.innerHTML = `<i class="fa fa-play-circle fa-5x"></i>`

    for(let i = 0 ; i < stroke.length ; i ++){
        new1[i].classList.remove("stroke")
    }
    ro.classList.remove("ro")
}

function playPauseTrack(){
    isPlaying ? pause() : playTrack()
}

function repeatTrack (){
    loadTrack()
    playTrack()
    // reset()
   
}

function seekTo(){
    let loading = curr_track.duration * (seek.value / 100)

    curr_track.currentTime = loading
}

function setUpdate(){
    let seekPosition = curr_track.currentTime * (100 / curr_track.duration)
    seek.value = seekPosition
    if(curr_track.duration){
        let currentMinutes = Math.floor(curr_track.currentTime / 60)
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60)
        let durationMinutes = Math.floor(curr_track.duration / 60)
        let durationSeconds = Math.floor(curr_track.duration -  durationMinutes  * 60)

        if(currentMinutes < 10 ){currentMinutes = "0" + currentMinutes}
        if(currentSeconds < 10 ){currentSeconds = "0" + currentSeconds}
        if(durationMinutes < 10 ){durationMinutes = "0" + durationMinutes}
        if(durationSeconds < 10 ){durationSeconds = "0" + durationSeconds}

        curr_time.innerHTML = currentMinutes + ":" + currentSeconds
        total_duration.innerHTML = durationMinutes + ":" + durationSeconds
    }
}

// function reset (){
    
//     for(let i = 0 ; i < stroke.length ; i++){
//         new1[i].classList.toggle("stroke")
//     }
// }

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
        let x = Math.floor(Math.random() * 14)
        // console.log(x)
        let y = hex[x]
        // console.log(y)
        // console.log(Math.random() * 14)
        a += y
    }


    return a ;
   }
   let Color1 = populate('#');
   let Color2 = populate('#');


   let gradient = 'linear-gradient(' + " to top left " + ',' + Color1 + ', ' + Color2 +  ")";
   player.style.background = gradient;
   console.log(gradient)

}



