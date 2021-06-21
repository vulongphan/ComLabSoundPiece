var file = new Audio('audio/sound.mp3');
var play_first_time = false;

function changeBackground() {
    document.body.classList.add("fade");
    document.body.classList.add("reveal");
    document.body.style.backgroundImage = "url('images/birds_and_river2.jpeg')";
    console.log("9s catched");
}

var play_button = document.getElementById('play_button');
play_button.addEventListener('click', ()=>{
    console.log("play button clicked");
    file.play();
    if (play_first_time === false) setTimeout(changeBackground, 9000);
    play_first_time = true;
})

var stop_button = document.getElementById('stop_button');
stop_button.addEventListener('click', () => {
    console.log("stop button clicked");
    file.pause();
    console.log(file.currentTime);
})

file.addEventListener('change', () => {
    if (this.currentTime === 9) {
        console.log("now")
    }
})
