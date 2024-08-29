const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const dataCrawler = require("./backend/crawlers/dataCrawler");
const dataService = require("./backend/services/dataService");

let mainWindow;

const createWindow = () => {
	mainWindow = new BrowserWindow({
		width: 2560,
		height: 1080,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
			contextIsolation: true,
			nodeIntegration: false,
		},
	});

	mainWindow.loadFile(path.join(__dirname, "frontend", "dist", "index.html"));

	mainWindow.webContents.openDevTools();
	mainWindow.on("closed", () => {
		mainWindow = null;
	});
};

ipcMain.on("start-crawl", async (event, url) => {
	try {
		await dataCrawler(url);

		const crawledData = await dataService.getData();
		// console.log("crawledData:", crawledData);

		event.reply("crawl-success", {
			message: "爬取成功",
			data: crawledData,
		});
	} catch (error) {
		event.reply("craw-error", error.message);
	}
});

app.on("ready", createWindow);
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (mainWindow === null) {
		createWindow();
	}
});
