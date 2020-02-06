# fullscreen

**Browser extension for toggling fullscreen on any website.**

This extension provides a minimal interface to the Living Standard [Element.requestFullscreen() Web API](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen), so any page can be toggled to fullscreen.

Unlike other extensions available on extension stores, this extension acts like a typical video-fullscreen operation: it removes titlebars and other browser UI until Esc is pressed. Great for reading online without distractions.

## Download & Install

- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/fullscreen-any-site)
- [Chrome](https://chrome.google.com/webstore/detail/fullscreen/fkbigbddainndbfabdcmbhgionobgina)

## Development

This root extension directory can be directly loaded into browsers for testing, but manifest.json may be incomplete or give warnings.

To build and run browser-specific code for your browser, do the following:

1. Run `make` in this directory
2. There will be 2 folders and .zip files generated in `/dist`, respectively for Chrome and Firefox.
3. Load the extension from `dist/fullscreen-<browser>-<version>-src`.

## Contributors

- [Mark Tiedemann](https://github.com/MarkTiedemann)
- [Thor Galle](https://github.com/th0rgall)

## License

[Blue Oak](https://blueoakcouncil.org/license/1.0.0)
