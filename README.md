# PaperProxy

Just a project to automate redirects to https://12ft.io/ because I'm a cheapskate. The plugin 12ft itself offers isn't free and I'm Dutch. But I made it mostly because I can. This project was initiated by a question to ChatGPT and I refactored and updated it a bit to be modern and new. It still isn't fancy, yet it does the job and replaces the listed urls in background.js with the paywall free version. See background.js:

<pre>
const sites = [
	"https://www.volkskrant.nl/", 
	"https://www.ad.nl/",
	"https://www.parool.nl/",
	"https://www.trouw.nl/",
	];
</pre>

## Install

To install download it as a zip and extract it somewhere.

- Open Google Chrome and go to chrome://extensions/
- Enable Developer mode by clicking the toggle switch in the top right corner
- Click the "Load unpacked" button and select the folder where you saved the files
- The extension should now be loaded and ready to use
