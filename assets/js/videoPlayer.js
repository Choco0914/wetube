const videoContainer = document.querySelector("#jsVideoPlayer");
const videoPlayer = videoContainer.querySelector("video");
const playBtn = videoContainer.querySelector("#jsPlayButton");

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
}

function init() {
  playBtn.addEventListener("click", handlePlayClick);
}

if (videoContainer) {
  init();
}
