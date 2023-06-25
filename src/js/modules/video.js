document.addEventListener("DOMContentLoaded", () => {
  const videoPlayer = document.querySelector("#video-player");
  const playButton = document.getElementById("play-button");
  const playLogo = document.querySelector(".video__logo");

  // Налаштування плеєра
  videoPlayer.controls = false;
  videoPlayer.autoplay = false;

  playButton.addEventListener("click", toggleVideoPlayback);

  function toggleVideoPlayback() {
    if (videoPlayer.paused) {
      videoPlayer.play();
      playButton.classList.add("hide");
      videoPlayer.controls = true;
      playLogo.style.display = "none";
    } else {
      videoPlayer.pause();
      playButton.classList.remove("hide");
      videoPlayer.controls = false;
    }
  }

  videoPlayer.addEventListener("play", () => {
    playButton.classList.add("hide");
  });

  videoPlayer.addEventListener("pause", () => {
    playButton.classList.remove("hide");
  });

});
