# TubeTune — YouTube Speed Controller

TubeTune is a lightweight browser extension for controlling YouTube playback speed from a popup dashboard, keyboard shortcut, and compact in-player control.

## Features

- Select playback speeds: **1×, 1.25×, 1.5×, 2×, 2.5×, and 3×**
- Popup dashboard for applying a speed to the active YouTube tab
- Press **Shift + 3** while a YouTube page is focused to switch to 3×
- Compact speed button inside YouTube's player controls
- Remembers the preferred playback speed locally using browser extension storage
- Built for Chromium-based browsers such as Google Chrome and Brave

## Installation Guide

TubeTune can be installed in Google Chrome and Brave using Developer Mode.

### Step 1: Download TubeTune

1. Open this GitHub repository.
2. Click the green **Code** button.
3. Select **Download ZIP**.
4. Extract the downloaded ZIP file to a folder on your computer.

### Step 2: Open Extensions

Choose your browser:

- **Google Chrome:** Open `chrome://extensions`
- **Brave:** Open `brave://extensions`

### Step 3: Enable Developer Mode

1. Find the **Developer mode** toggle in the top-right corner.
2. Turn it on.

### Step 4: Load TubeTune

1. Click **Load unpacked**.
2. Select the extracted `TubeTune` folder containing `manifest.json`.
3. TubeTune should now appear in your extensions list.

**Important:** Select the folder containing `manifest.json`, not the ZIP file itself.

### Step 5: Start using TubeTune

1. Open YouTube and play a video.
2. Click the TubeTune icon in your browser toolbar.
3. Select your preferred playback speed: **1×, 1.25×, 1.5×, 2×, 2.5×, or 3×**.
4. Alternatively, press **Shift + 3** while the YouTube page is focused to switch to 3× speed.
5. Use the speed control inside the YouTube player to cycle through available speeds.

### Troubleshooting

- **TubeTune is not visible:** Check that the extension is enabled on the browser's extensions page.
- **The speed button is missing:** Refresh the YouTube page after installing or reloading the extension.
- **The popup does not change playback speed:** Make sure the active tab is a YouTube page and refresh it if necessary.
- **The keyboard shortcut does not work:** Focus the YouTube page and press `Shift + 3`. It is not a global system-wide shortcut.

### Privacy

TubeTune stores your preferred playback speed locally in your browser. It does not require an account or a separate server.

### Disclaimer

TubeTune is an independent browser extension and is not affiliated with or endorsed by YouTube or Google.

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
