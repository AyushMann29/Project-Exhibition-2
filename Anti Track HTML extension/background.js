console.log("Background script running...");

// Message listener for tracker alerts
chrome.runtime.onMessage.addListener((req) => {
  if (req.type === "trackerDetected") {
    storeTracker(req.hostname);
  }
});

// Tracker storage logic
function storeTracker(hostname) {
  chrome.storage.local.get({ trackers: {} }, (data) => {
    const trackers = data.trackers;
    trackers[hostname] = (trackers[hostname] || 0) + 1;
    chrome.storage.local.set({ trackers });
  });
}