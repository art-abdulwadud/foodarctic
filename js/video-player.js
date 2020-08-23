const videoPlayer = document.querySelector(".video-player");
const video = document.querySelector(".video");
const playerLength = document.querySelector(".player-length");
const videoInfo = document.querySelector(".video-info");
const playBtn = document.querySelector("#play");
const playIcon = document.querySelector("#play-icon");
const currentTime = document.querySelector(".current-time");
const duration = document.querySelector(".duration");
const fastForward = document.querySelector("#forward");
const fastRewind = document.querySelector("#rewind");
const mainPlayBtn = document.querySelector(".main-play-btn");

// Play/Pause video
const togglePlay = () => {
  video.paused ? video.play() : video.pause();
  video.paused
    ? (playIcon.innerHTML = "play_circle_outline")
    : (playIcon.innerHTML = "pause_circle_outline");
  video.paused
    ? animateCSS(
        ".video-info",
        "fadeInRight",
        () => (videoInfo.style.transform = "translateX(0)")
      )
    : animateCSS(
        ".video-info",
        "fadeOutRight",
        () => (videoInfo.style.transform = "translateX(100%) translateX(0)")
      );
  video.paused
    ? (mainPlayBtn.style.display = "flex")
    : (mainPlayBtn.style.display = "none");
};

// Activate toggle function on click
video.addEventListener("click", () => togglePlay());
playBtn.addEventListener("click", () => togglePlay());
videoInfo.addEventListener("click", () => togglePlay());
mainPlayBtn.addEventListener("click", () => togglePlay());

video.addEventListener("timeupdate", () => {
  const videoLenghtPosition = (video.currentTime / video.duration) * 100;
  playerLength.style.width = videoLenghtPosition + "%";
  // Show current time and duration
  const ctRoundedOff = (video.currentTime / 60).toFixed(2);
  duration.innerHTML = (video.duration / 60).toFixed(2);
  currentTime.innerHTML = ctRoundedOff;
});

// Forward or rewind
const forwardRewind = (secs) => {
  let time = video.currentTime + secs;
  video.currentTime = time;
};
fastForward.addEventListener("click", () => forwardRewind(5));
fastRewind.addEventListener("click", () => forwardRewind(-5));
