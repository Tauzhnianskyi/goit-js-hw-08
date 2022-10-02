import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = throttle(data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);

player.on('timeupdate', onPlay);

const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
  player.setCurrentTime(currentTime);
}
