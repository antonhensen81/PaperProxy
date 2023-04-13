# PaperProxy

Just a project to automate https://12ft.io/ because I'm cheap and because I can. The plugin 12ft itself offers costs money and I'm Dutch. This project was initiated by a question to ChatGPT and I refactored and updated it a bit to be modern and new. It still isn't fancy, yet it does the job and replaces the listed urls in background.js with the paywall free version. See background.js:

<pre>
const sites = [
	"https://www.volkskrant.nl/", 
	"https://www.ad.nl/",
	"https://www.parool.nl/",
	"https://www.trouw.nl/",
	];
</pre>
