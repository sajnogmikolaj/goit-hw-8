import Player from '@vimeo/player';
const player = new Player(iframe);

const iframe = document.getElementById('vimeo-player');
const VIDEO_STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(throttled(data), 1000));

function throttled(data) {
    //   console.log('Percentage watched: ' + data.seconds);
    localStorage.setItem(`${VIDEO_STORAGE_KEY}`, data.seconds);
}
player.setCurrentTime(localStorage.getItem("VIDEO_STORAGE_KEY"))

throttled(data)
