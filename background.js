chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  const sites = [
	"https://www.volkskrant.nl/", 
	"https://www.ad.nl/",
	"https://www.parool.nl/",
	"https://www.trouw.nl/",
	];
  for (const site of sites){
	  if (tab.url && tab.url.startsWith(site)) {
		const url = new URL(tab.url);
		const newUrl = "https://12ft.io/proxy?q=" + encodeURIComponent(url.href);
		chrome.tabs.update(tabId, {url: newUrl});
	  }
  }
});