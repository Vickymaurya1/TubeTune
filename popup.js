const SPEEDS = [1, 1.25, 1.5, 2, 2.5, 3];
const currentSpeed = document.getElementById("currentSpeed");
const status = document.getElementById("status");
const buttons = [...document.querySelectorAll(".speed-option")];

function label(speed) {
  return `${speed}×`;
}

function paint(speed) {
  currentSpeed.textContent = label(speed);
  buttons.forEach(button => {
    const active = Number(button.dataset.speed) === speed;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

async function getYouTubeTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id || !tab.url?.startsWith("https://www.youtube.com/")) {
    throw new Error("Open a YouTube video first, then choose a speed.");
  }
  return tab;
}

async function applySpeed(speed) {
  paint(speed);
  try {
    const tab = await getYouTubeTab();
    await chrome.tabs.sendMessage(tab.id, { type: "TUBETUNE_SET_SPEED", speed });
    await chrome.storage.local.set({ preferredSpeed: speed });
    status.textContent = `Playback speed set to ${label(speed)}.`;
  } catch (error) {
    status.textContent = error.message.includes("Receiving end")
      ? "Refresh the YouTube tab once, then try again."
      : error.message;
  }
}

buttons.forEach(button => {
  button.addEventListener("click", () => applySpeed(Number(button.dataset.speed)));
});

chrome.storage.local.get({ preferredSpeed: 1 }, ({ preferredSpeed }) => {
  paint(SPEEDS.includes(preferredSpeed) ? preferredSpeed : 1);
});