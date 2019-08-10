var shift = false;
var meta = false;

document.addEventListener("keydown", function(event) {
  switch (event.key) {
    case "Shift":
      shift = true;
      break;
    case "Meta":
      meta = true;
      break;
    case "o":
      if (meta && shift) {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      }
      break;
  }
});

document.addEventListener("keyup", function(event) {
  switch (event.key) {
    case "Shift":
      shift = false;
      break;
    case "Meta":
      meta = false;
      break;
  }
});
