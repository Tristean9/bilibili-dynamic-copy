const puppeteer = require("puppeteer");
const dataService = require("../services/dataService");
const carouseCrawler = require("./carouselCrawler");
const videoCardsCrawler = require("./videoCardsCrawler");

const dataCrawler = async (url) => {
	const browser = await puppeteer.launch({
		// headless: false, // 这里设置为 false
		// defaultViewport: null, // 可选：使用默认视口
		// args: ["--start-maximized"],
	}); // 可选：启动时最大化窗口});
	const page = await browser.newPage();
	await page.goto(url);
	const carouselData = await carouseCrawler(page);
	const videoCardsData = await videoCardsCrawler(page);
	// console.log(carouselData);
	// console.log(videoCardsData);

	await browser.close();

	const createCarouselTableQuery = `
        CREATE TABLE IF NOT EXISTS carousel (
            id INT AUTO_INCREMENT PRIMARY KEY,
            src VARCHAR(255),
            alt VARCHAR(255),
            href VARCHAR(255),
            backgroundColor VARCHAR(255),
            mask VARCHAR(255),
            text TEXT
        );
    `;

	const insertCarouselQuery = `
        INSERT INTO carousel (src, alt, href, backgroundColor, mask, text) VALUES ?;
    `;

	await dataService.saveData(
		carouselData,
		createCarouselTableQuery,
		insertCarouselQuery
	);

	const createVideoCardsTableQuery = `
        CREATE TABLE IF NOT EXISTS videoCards (
            id INT AUTO_INCREMENT PRIMARY KEY,
            src VARCHAR(255),
            alt VARCHAR(255),
            href VARCHAR(255),
            backgroundImg VARCHAR(255),
            playVolume VARCHAR(255),
            commentVolume VARCHAR(255),
            duration VARCHAR(255),
            title VARCHAR(255),
            author VARCHAR(255),
            authorUrl VARCHAR(255),
            date VARCHAR(255)
        );
    `;

	const insertVideoCardsQuery = `
        INSERT INTO videoCards (src, alt, href, backgroundImg, playVolume, commentVolume, duration, title, author, authorUrl, date) VALUES ?;
    `;

	await dataService.saveData(
		videoCardsData,
		createVideoCardsTableQuery,
		insertVideoCardsQuery
	);
};

module.exports = dataCrawler;

// dataCrawler("https://www.bilibili.com");
