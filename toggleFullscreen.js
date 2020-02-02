// IIFE that toggles full screen on the current page
// using https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
(function() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
})();
