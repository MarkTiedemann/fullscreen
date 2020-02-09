function executeToggleFullscreen(tab) {
  chrome.tabs.executeScript({
    file: "toggleFullscreen.js"
  });
}
// Called when the user clicks on the extension icon
chrome.browserAction.onClicked.addListener(function(tab) {
  executeToggleFullscreen(tab);
});

// Called when the user executes the extension shortcut
chrome.commands.onCommand.addListener(function(command) {
  if (command === "toggle-fullscreen") {
    executeToggleFullscreen();
  }
});
