import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);


const saveTime = player.on('timeupdate', throttle(onPlay, 1000))


function onPlay(data){
  localStorage.setItem("currentTime", JSON.stringify(data))
}
console.log(saveTime)
const getTime = localStorage.getItem('currentTime')
const parseTime =  JSON.parse(getTime)
console.log(parseTime.seconds)

player.setCurrentTime(parseTime.seconds).then(function(seconds) {
  // seconds = the actual time that the player seeked to
}).catch(function(error) {
  switch (error.name) {
      case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

      default:
          // some other error occurred
          break;
  }
});