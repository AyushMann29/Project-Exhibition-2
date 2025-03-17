document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.local.get({ trackers: {} }, (data) => {
      const trackers = data.trackers;
      const list = document.getElementById("tracker-list");
      if (Object.keys(trackers).length === 0) {
        list.innerHTML = "<li>No trackers detected.</li>";
      } else {
        list.innerHTML = Object.entries(trackers)
          .map(([hostname, count]) => `<li>${hostname}: ${count} hits</li>`)
          .join("");
      }
    });
  });