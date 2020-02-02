# fullscreen

**Browser extension for toggling fullscreen on any website.**

This extension provides a minimal interface to the Living Standard [Element.requestFullscreen() Web API](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen), so any page can be toggled to fullscreen.

Unlike other extensions available on extension stores, this extension acts like a typical video-fullscreen operation: it removes titlebars and other browser UI until Esc is pressed. Great for reading online without distractions.

Thanks to [Mark Tiedemann](https://github.com/MarkTiedemann/fullscreen) who developed the initial idea: a no-nonsense fullscreen extension.

This fork refactored the original significantly:
1. Refactor from `<all_urls>` permission to the less intrusive `activeTab` permission
2. Refactor custom key listeners to out-of-the-box WebExtension Command API shortcuts

## License

[Blue Oak](https://blueoakcouncil.org/license/1.0.0)
