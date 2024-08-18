var arr = [
  { songName: "Sabka Badshah Hussain Hain", url: "./songs/Sabka Badshah.mp3", img: "https://i.ytimg.com/vi/CK3_2EKJaQ4/mqdefault.jpg" },
  {
    songName: "Dhoom Macha Di",
    url: "./songs/Dhoom Macha.mp3",
    img: "https://i.ytimg.com/vi/pgfzZ7JJHJY/mqdefault.jpg",
  },
  {
    songName: "Hussain Ke Nana",
    url: "./songs/Hussain ke Nana.mp3",
    img: "https://i.ytimg.com/vi/j0Sgd8uCkTg/mqdefault.jpg",
  },
  {
    songName: "Nana Bhi Bemisal",
    url: "./songs/Nana bhi Bemisal.mp3",
    img: "https://i.ytimg.com/vi/DZXlZxGMHqg/mqdefault.jpg",
  },
  {
    songName: "Ek Sar Hi Nahi",
    url: "./songs/Ek sar hi nahi.mp3",
    img: "https://i.ytimg.com/vi/ZwGt7140Rn0/mqdefault.jpg",
  },
  {
    songName: "Sare Bolo Ya Ali",
    url: "./songs/Sare Bolo Ya Ali.mp3",
    img: "https://i.ytimg.com/vi/aEOhWUf-n9I/mqdefault.jpg",
  },
  {
    songName: "Tu Hai Sultano Ka Sultan Hussain",
    url: "./songs/tu hai sultano.mp3",
    img: "https://i.ytimg.com/vi/jSvmezbbt28/mqdefault.jpg",
  },
  {
    songName: "Husain Zindabaad Rahega",
    url: "./songs/Husain Zindabaad Rahega.mp3",
    img: "https://i.ytimg.com/vi/Ko-Eby_s4ks/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABbJsJmlXIxLna-LoqdCJLYNLSNQ",
  },
];
var allSongs = document.querySelector("#all-songs");
var poster = document.querySelector("#left");

var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");

let audio = new Audio();
let selectedSong = 0

function mainFunction() {
    let clutter = "";

  arr.forEach((elem, index) => {
    clutter += `<div class="song-card" id=${index}>
    <div class="part1">
        <img src=${elem.img} alt="">
        <h2>${elem.songName}</h2>
    </div>
    <h6>3:56</h6>
</div>`;

    audio.src = arr[selectedSong].url
    poster.style.backgroundImage = `url("${arr[selectedSong].img}")`
    allSongs.innerHTML = clutter;
  });
}

function playAudio(){
    allSongs.addEventListener("click",(dets)=>{
        selectedSong = dets.target.id
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        flag = 1
        mainFunction()
        audio.play();
    })
}

function playUsingButton(){
    let flag = 0;
play.addEventListener("click",()=>{
    if(flag === 0){
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        mainFunction()
        audio.play()
        flag = 1
    }else{
        play.innerHTML = `<i class="ri-play-mini-fill"></i>`
        mainFunction()
        audio.pause()
        flag = 0
    }
})
}
function nextButton(){
    forward.addEventListener("click",()=>{
        if(selectedSong <= arr.length - 1){
            selectedSong ++
            mainFunction()
            audio.play()
        }else{
            forward.style.opacity = 0.4
        }
    })
}

function backbButton(){
    backward.addEventListener("click",()=>{
        if(selectedSong >= 0 ){
            selectedSong --
            mainFunction()
            audio.play()
        }else{
            backward.style.opacity = 0.4
        }
    })
}

nextButton()
backbButton()
playUsingButton()
mainFunction()
playAudio();