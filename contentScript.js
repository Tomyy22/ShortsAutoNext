(function () {
  let currentUrl = window.location.href;

  setInterval(() => {
    if (window.location.href !== currentUrl) {
      currentUrl = window.location.href;
      waitForVideo();
    }
  }, 1000);

  function waitForVideo() {
    const intervalId = setInterval(() => {
      const videos = document.querySelectorAll("video");

      if (videos.length > 0) {
        clearInterval(intervalId);
        videos.forEach((video) => {
          video.removeAttribute("loop");
          video.addEventListener("ended", handleVideoEnd);
        });
      } else {
      }
    }, 500);
  }

  function handleVideoEnd() {
    const nextButton = document.querySelector(
      ".yt-spec-button-shape-next--mono[aria-label='Siguiente video']"
    );

    if (
      nextButton &&
      !nextButton.classList.contains("yt-spec-button-shape-next--disabled")
    ) {
      nextButton.click();
      console.log("Botón siguiente encontrado y clickeado.");
    } else {
      console.log("Botón siguiente no encontrado o está deshabilitado.");
    }
  }

  waitForVideo();
})();
