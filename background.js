chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	let int = 0;
	const ftsites = [
		"https://www.volkskrant.nl/",
		"https://speld.nl/"
	];
	const archsites = [
		"https://www.ad.nl/",
		"https://www.parool.nl/",
		"https://www.trouw.nl/",
		"https://www.telegraaf.nl"
	];

	for (const site of ftsites.concat(archsites)) {
		// return use12ft(site) || useArchive(site);
		
		if(int < ftsites.length) {
			int++;
			use12ft(site)
		} else {
			useArchive(site);
		}
	}

	function useArchive(urltobypass) {
		if (tab.url && tab.url.startsWith(urltobypass)) {
			const url = new URL(tab.url);
			const newUrl = "https://archive.ph/submit/?anyway=1&url=" + encodeURIComponent(url.href);
			chrome.tabs.update(tabId, { url: newUrl });
		}
	}

	function use12ft(urltobypass) {
		if (tab.url && tab.url.startsWith(urltobypass)) {
			const url = new URL(tab.url);
			const newUrl = "https://12ft.io/proxy?q=" + encodeURIComponent(url.href);
			chrome.tabs.update(tabId, { url: newUrl });
		}
	}
});