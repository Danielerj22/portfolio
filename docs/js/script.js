const song = new Audio('assets/audio/harry_maguire_sound.mp3');
const playButton = document.getElementById("play");

playButton.addEventListener('click', ()=> {
  song.play()
})