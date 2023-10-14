chrome.tabs.onCreated.addListener(function(tab) {
	console.log(tab)
  console.log("New tab created. URL: " + tab.url);
});
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.url) {
  	console.log(tabId, changeInfo, tab)
    console.log("URL in tab " + tabId + " changed to: " + changeInfo.url);
    var url = changeInfo.url
    const regex = /^https:\/\/www\.facebook\.com\/$/;

	if (regex.test(url)) {

	  	console.log('URL matches www.facebook.com');
    	chrome.tabs.remove(tabId);
	} else {
	  console.log('URL does not match www.facebook.com');
	}
  }
});