const videoPlayer = document.querySelector(".video-player");
const video = document.querySelector(".video");
const playerLength = document.querySelector(".player-length");
const videoInfo = document.querySelector(".video-info");
const playBtn = document.querySelector("#play");
const playIcon = document.querySelector("#play-icon");
const currentTime = document.querySelector('.current-time');
const duration = document.querySelector('.duration');

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
};
// Activate toggle function on click
videoPlayer.addEventListener("click", () => togglePlay());

video.addEventListener('timeupdate', () => {
    const videoLenghtPosition = (video.currentTime / video.duration) * 100;
    playerLength.style.width = videoLenghtPosition + '%';
});