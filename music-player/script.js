const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementsByClassName("progress");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

//Song titles
const songs = ["hey", "summer", "ukulele"];

//keep track of songs
let songIndex = 2;

console.log(musicContainer);

//Initially load song info DOM
loadSong(songs[songIndex]);

//update song details
function loadSong(song) {
  console.log(song);

  title.innerText = song;
  console.log(title.innerText);
  audio.src = `music/${song}.mp3`;

  cover.src = `images/${song}.jpg`;
}

function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  audio.pause();
}

function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  //progress.getElementsByClassName.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  console.log(width);
  const clickX = e.offsetX;
  console.log(clickX);
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

//Event listeners
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  console.log(isPlaying);
  if (isPlaying) {
    pauseSong();
    console.log("The song is playing");
  } else {
    console.log("Paused");
    playSong();
  }
});

//Change

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", updateProgress);

//progressContainer.addEventListener("click", setProgress);
audio.addEventListener("ended", nextSong);
