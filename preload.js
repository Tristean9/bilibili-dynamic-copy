const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
	startCrawl: (url) => ipcRenderer.send("start-crawl", url),
	onCrawlSuccess: (callback) =>
		ipcRenderer.on("crawl-success", (event, result) => callback(result)),
	onCrawlError: (callback) => ipcRenderer.on("craw-error", callback),
});
