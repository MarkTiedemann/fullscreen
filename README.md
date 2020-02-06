# fullscreen

**Browser extension for toggling fullscreen on any website.**

This extension provides a minimal interface to the Living Standard [Element.requestFullscreen() Web API](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen), so any page can be toggled to fullscreen.

Unlike other extensions available on extension stores, this extension acts like a typical video-fullscreen operation: it removes titlebars and other browser UI until Esc is pressed. Great for reading online without distractions.

## Installation

- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/fullscreen-any-site)
- [Chrome](https://chrome.google.com/webstore/detail/fullscreen/fkbigbddainndbfabdcmbhgionobgina)

## Development

This root extension directory can be loaded into browsers, but the manifest may be incomplete.

To generate a copy with adjusted specific manifests for Firefox/Chrome, run `make`.

There will be folders and .zip files generated in `/dist`. These can also be used for publishing.

## Contributors

- [Mark Tiedemann](https://github.com/MarkTiedemann)
- [Thor Galle](https://github.com/th0rgall)

## License

[Blue Oak](https://blueoakcouncil.org/license/1.0.0)
