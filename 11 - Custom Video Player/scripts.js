// Get the player
console.log("test");
// console.log(player);
// console.log(player2);


const player = document.querySelector('.player');

const video = player.querySelector('.player__video');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const volume = player.querySelectorAll('[type]');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


//BUild out functions

function togglePlay(){
    // only paused property there is no play property. 
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
    console.log('updating button');
}

function skipVideo(){
    // console.log(this.);
    // console.log(video.currentTime);
    // video.currentTime = video.currentTime + 5;
    console.log("skipped 5 seconds");
    video.currentTime = video.currentTime + parseFloat(this.dataset.skip);
    // video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    console.log("sumini");
    video[this.name] = this.value;;
}

function updateProgressBar(){
    let percentage = (video.currentTime * 100) / video.duration;
    console.log(percentage);
    progressBar.style.flexBasis = `${percentage}%`;
}

function moveProgressBar(e){
    console.log(e);
    e.offsetX;
    toFill = progress
    total = 100;
    percentage = (e.offsetX/progress.offsetWidth) * 100;
    console.log(progress.offsetWidth);
    video.currentTime = (video.duration*percentage)/100;
    console.log(video.currentTime);
    // progressBar.style.flexBasis = `${percentage}%`;
}

// Hook it up to the eventlisteners. 

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', updateProgressBar);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(skipButton =>{
    skipButton.addEventListener('click', skipVideo);  
})

// ranges.forEach(range => {
//     range.addEventListener('change', handleRangeUpdate);
// })
// ranges.forEach(range => {
//     range.addEventListener('mouseMove', handleRangeUpdate);
// })

let mouseDown = false;
progress.addEventListener('click', moveProgressBar);




progress.addEventListener('mousemove', ()=>{
    if (mouseDown){
        moveProgressBar();
    }
}
);

// Alternatiely using a mousemove boolean check and moveporgressbar. 
// progress.addEventListener('mousemove', (e)=> mouseDown && moveProgressBar(e));

progress.addEventListener('mouseup', () => mouseDown = false);
progress.addEventListener('mousedown', ()=> mouseDown = false);


// TODO: Make the video go full screen.




const player2 = document.getElementsByClassName('player');


player.querySelectorAll('.player__video');
console.log("test");
console.log(player);
console.log(player2);
//
