(() => {
  if (window.__tubeTuneLoaded) return;
  window.__tubeTuneLoaded = true;

  const SPEEDS = [1, 1.25, 1.5, 2, 2.5, 3];
  let selectedSpeed = 1;
  let speedButton = null;

  function getVideo() {
    return document.querySelector("video.html5-main-video") || document.querySelector("video");
  }

  function applySpeed(speed) {
    if (!SPEEDS.includes(speed)) return;
    selectedSpeed = speed;
    const video = getVideo();
    if (video) video.playbackRate = speed;
    updateButton();
    chrome.storage.local.set({ preferredSpeed: speed }).catch(() => {});
  }

  function updateButton() {
    if (!speedButton) return;
    speedButton.textContent = `${selectedSpeed}×`;
    speedButton.setAttribute("aria-label", `Playback speed ${selectedSpeed} times. Click to cycle speeds.`);
    speedButton.classList.toggle("tubetune-fast", selectedSpeed > 1);
  }

  function addPlayerControl() {
    const rightControls = document.querySelector(".ytp-right-controls");
    if (!rightControls || rightControls.querySelector("#tubetune-player-speed")) return;
    speedButton = document.createElement("button");
    speedButton.id = "tubetune-player-speed";
    speedButton.className = "ytp-button tubetune-player-speed";
    speedButton.type = "button";
    speedButton.title = "TubeTune: click to cycle playback speeds";
    speedButton.textContent = `${selectedSpeed}×`;
    speedButton.addEventListener("click", event => {
      event.stopPropagation();
      const index = SPEEDS.indexOf(selectedSpeed);
      applySpeed(SPEEDS[(index + 1) % SPEEDS.length]);
    });
    // Add near YouTube's native player controls.
    rightControls.insertBefore(speedButton, rightControls.firstChild);
    updateButton();
  }

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message?.type === "TUBETUNE_SET_SPEED") {
      applySpeed(Number(message.speed));
      sendResponse({ ok: true, speed: selectedSpeed });
    }
    return true;
  });

  // Shift+3 works while the YouTube page is focused. Avoid triggering while typing.
  document.addEventListener("keydown", event => {
    const target = event.target;
    const typing = target instanceof HTMLElement &&
      (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));
    if (typing || !event.shiftKey || event.ctrlKey || event.altKey || event.metaKey) return;
    if (event.code === "Digit3") {
      event.preventDefault();
      applySpeed(3);
    }
  });

  chrome.storage.local.get({ preferredSpeed: 1 }, ({ preferredSpeed }) => {
    selectedSpeed = SPEEDS.includes(preferredSpeed) ? preferredSpeed : 1;
    const video = getVideo();
    if (video) video.playbackRate = selectedSpeed;
    updateButton();
  });

  const observer = new MutationObserver(() => {
    addPlayerControl();
    const video = getVideo();
    if (video && video.dataset.tubetuneBound !== "true") {
      video.dataset.tubetuneBound = "true";
      video.playbackRate = selectedSpeed;
      video.addEventListener("loadedmetadata", () => {
        video.playbackRate = selectedSpeed;
      });
    }
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
  addPlayerControl();
})();