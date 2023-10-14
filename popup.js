document.addEventListener("DOMContentLoaded", function() {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function(tabs) {
    const urlDiv = document.getElementById("url");
    urlDiv.textContent = tabs[0].url;
  });
});