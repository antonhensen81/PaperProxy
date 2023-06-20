# PaperProxy

Just a project to automate redirects to https://12ft.io/ or https://archive.ph/ because I'm a cheapskate. The plugin 12ft itself offers isn't free and I'm Dutch. Yet I made it mostly because I can. This project was initiated by a question to ChatGPT and I refactored and updated it a bit to be modern and new. It still isn't fancy, yet it does the job and replaces the listed urls in background.js with the paywall free version. See background.js:

<pre>
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
</pre>

## Install

To install download it as a zip and extract it somewhere.

- Open Google Chrome and go to chrome://extensions/
- Enable Developer mode by clicking the toggle switch in the top right corner
- Click the "Load unpacked" button and select the folder where you saved the files
- The extension should now be loaded and ready to use
