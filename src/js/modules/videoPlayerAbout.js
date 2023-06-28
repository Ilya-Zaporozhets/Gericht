document.addEventListener("DOMContentLoaded", () => {
  const videoPlayerAbout = document.querySelector(".about-video-player");
  const playButtonAbout = document.querySelector("#about-play-button");
  const aboutVideoElement = document.getElementById("about-video");

  if (!aboutVideoElement) {
    return;
  }

  videoPlayerAbout.controls = false;
  videoPlayerAbout.autoplay = false;

  playButtonAbout.addEventListener("click", toggleVideoPlaybackAbout);

  function toggleVideoPlaybackAbout(event) {
    if (event.target === playButtonAbout) {
      if (videoPlayerAbout.paused) {
        videoPlayerAbout.play();
        playButtonAbout.classList.add("hidden");
        videoPlayerAbout.controls = true;
      } else {
        videoPlayerAbout.pause();
        playButtonAbout.classList.remove("hidden");
        videoPlayerAbout.controls = false;
      }
    }
  }

  videoPlayerAbout.addEventListener("play", () => {
    playButtonAbout.classList.add("hidden");
  });

  videoPlayerAbout.addEventListener("pause", () => {
    playButtonAbout.classList.remove("hidden");
  });
});
