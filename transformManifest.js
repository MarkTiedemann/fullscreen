#!/usr/bin/env node
// node script to produce specific manifest.json files for Chrome and Firefox from a common source

const fs = require("fs");

const browsers = ["chrome", "firefox"];

const manifestTemplate = JSON.parse(fs.readFileSync("./manifest.json"));

function buildBrowserManifest(browser) {
  let manifestOut;

  if (browser === "chrome") {
    // Chrome version
    manifestOut = { ...manifestTemplate };
    // mark as an Event page (only supported in Chrome as of now)
    manifestOut.background = {
      ...manifestTemplate.background,
      persistent: false
    };
  } else if (browser === "firefox") {
    // Firefox version
    manifestOut = { ...manifestTemplate };
  }
  return manifestOut;
}

function main() {
  browsers.forEach(function(browser) {
    fs.writeFileSync(
      `./manifest-${browser}.json`,
      JSON.stringify(buildBrowserManifest(browser), null, 4)
    );
  });
}

main();
