# TubeTune — YouTube Speed Controller

TubeTune is a lightweight browser extension for controlling YouTube playback speed from a popup dashboard, keyboard shortcut, and compact in-player control.

## Features

- Select playback speeds: **1×, 1.25×, 1.5×, 2×, 2.5×, and 3×**
- Popup dashboard for applying a speed to the active YouTube tab
- Press **Shift + 3** while a YouTube page is focused to switch to 3×
- Compact speed button inside YouTube's player controls
- Remembers the preferred playback speed locally using browser extension storage
- Built for Chromium-based browsers such as Google Chrome and Brave



## How to use

- Click the TubeTune toolbar icon to open the speed dashboard.
- Choose one of the available speeds.
- On a YouTube page, press **Shift + 3** to switch to 3×.
- Use the small speed control in YouTube's player to cycle through the available speeds.

The keyboard shortcut works while the YouTube page is focused and does not run while typing in text fields.

## Project structure

```text
TubeTune/
├── manifest.json
├── popup.html
├── popup.css
├── popup.js
├── content.js
├── style.css
├── icon-16.png
├── icon-48.png
└── icon-128.png
```

## Development

This project uses Manifest V3 and plain HTML, CSS, and JavaScript. No build step is required.

After editing the code, return to the browser's extensions page and click the extension's reload button, then refresh YouTube to test your changes.

## Privacy

The extension stores the preferred playback speed in browser extension storage. It does not require an account or a developer-operated backend. Review the source code and update this statement if the extension's behavior changes.

## Limitations

- YouTube may change its player markup or navigation behavior, which could require updates.
- The shortcut is page-focused, not a global system-wide shortcut.
- This repository provides manual installation instructions; it is not a Chrome Web Store listing.

## Disclaimer

TubeTune is an independent project and is not affiliated with, endorsed by, or sponsored by YouTube or Google.

## License

See [LICENSE](LICENSE).
