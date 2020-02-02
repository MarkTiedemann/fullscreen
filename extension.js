var shift = false;
var meta = false;

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

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
        toggleFullscreen();
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

console.log("Loaded fullscreen!");

toggleFullscreen();
