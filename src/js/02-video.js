import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.getElementById('vimeo-player');
const VIDEO_STORAGE_KEY = 'videoplayer-current-time';
const player = new Player(iframe);
if (localStorage.key(VIDEO_STORAGE_KEY))
  player.setCurrentTime(localStorage.getItem(VIDEO_STORAGE_KEY));
player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(VIDEO_STORAGE_KEY, data.seconds);
  }, 1000)
);