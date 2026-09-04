// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Product video modal
(function () {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoModalIframe");
  if (!modal || !iframe) return;

  function openVideo(videoId) {
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeVideo() {
    modal.hidden = true;
    iframe.src = "";
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".btn-video").forEach((btn) => {
    btn.addEventListener("click", () => openVideo(btn.dataset.videoId));
  });

  modal.querySelectorAll("[data-close-video]").forEach((el) => {
    el.addEventListener("click", closeVideo);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeVideo();
  });
})();
