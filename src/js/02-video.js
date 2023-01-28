import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

player.on(
  "timeupdate",
  throttle(function (data) {
    const time = data.seconds;
    console.log(time);
    localStorage.setItem("videoplayer-current-time", time);
  }, 1000)
);
const time = localStorage.getItem("videoplayer-current-time");

if (localStorage.length === 0) {
  return;
}
player.setCurrentTime(time);
