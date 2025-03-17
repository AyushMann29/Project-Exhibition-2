// Track network requests using PerformanceObserver
const knownTrackers = [
    "google-analytics.com",
    "doubleclick.net",
    "facebook.com",
    "adservice.google.com",
    "127.0.0.1"
  ];
  
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      try {
        const url = new URL(entry.name);
        const hostname = url.hostname;
        if (knownTrackers.some(tracker => hostname.includes(tracker))) {
          chrome.runtime.sendMessage({ type: "trackerDetected", hostname });
        }
      } catch (error) {
        console.error("Error parsing URL:", error);
      }
    });
  });
  
  observer.observe({ entryTypes: ["resource"] });