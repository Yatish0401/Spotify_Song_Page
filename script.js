console.log("Welcome To spotify");

// Initilise the variables
let songIndex = 0;
let audioElement = new Audio('songs/3.mp3.mp3');
let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar');   
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [   
   
    {songName: "Maan Meri Jaan ", filepath: "songs/1.mp3", coverPath: "covers/h1.jpeg"},
    {songName: "Moon Rise  ", filepath: "songs/2.mp3", coverPath: "covers/h2.jpeg"},
    {songName: "Tere Pyar Main ", filepath: "songs/3.mp3", coverPath: "covers/h3.jpeg"},
    {songName: "Raatan Lambiyan ", filepath: "songs/4.mp3", coverPath: "covers/h4.jpeg"},
    {songName: "Dekh Dil Ye Humara ", filepath: "songs/5.mp3", coverPath: "covers/h5.jpeg"},
    {songName: "Shyd - Jubin Nautiyal ", filepath: "songs/6.mp3", coverPath: "covers/h6.jpeg"},
    {songName: "Tu Hi Hai Aashiqui ", filepath: "songs/7.mp3", coverPath: "covers/h7.jpeg"},
    {songName: "Zindagi ", filepath: "songs/8.mp3", coverPath: "covers/h8.jpeg"},
    {songName: "Mein Ho Gya Deewana Pehli Barish Mai ", filepath: "songs/9.mp3", coverPath: "covers/h9.jpeg"},
    {songName: "Kya Din The Woh ", filepath: "songs/10.mp3", coverPath: "covers/h10.jpeg"}
]
songItems.forEach((element, i)=>{
    console.log(element, i);    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})


// audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else
    {audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//listen to Events
// audioElement.addEventListener('timeupdate', ()=>{

//     //update Seekbar
//     progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
  
//     document.addEventListener('DOMContentLoaded', function() {
//     myProgressBar.value = progress;
//     })
    
// })

// myProgressBar.addEventListener('change', ()=>{
//     audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
//  
    
// })

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/' + (songIndex + 1) + '.mp3.mp3';
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
         audioElement.play();
         gif.style.opacity = 1;
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');

    })
})
document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = 'songs/' + (songIndex + 1) + '.mp3.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = 'songs/' + (songIndex + 1) + '.mp3.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
})



