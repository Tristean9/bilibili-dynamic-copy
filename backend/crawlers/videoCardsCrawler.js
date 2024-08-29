const videoCardsCrawler = async (page) => {
	const videoCardData = await page.evaluate(async () => {
		const videoCardsContaierSeletor =
			"#i_cecream > div.bili-feed4 > main > div.feed2 > div > div.container.is-version8";
		const videoCardsSeletor = " div.bili-video-card__wrap.__scale-wrap";
		const videoCardsImgSelector = "a > div > div > picture > img";
		const videoCardsMaskSelector =
			"a > div > div.bili-video-card__mask > div.bili-video-card__stats";
		const videoCardsInfoSelector = "div.bili-video-card__info";

		const videoCardDatas = [];
		const existedSrc = [];

		const scrollDelay = 2000;

		const loadMoreData = async () => {
			let lastHeight = 0;

			while (videoCardDatas.length < 21) {
				const videoCards = Array.from(
					document
						.querySelector(videoCardsContaierSeletor)
						.querySelectorAll(videoCardsSeletor)
				);

				console.log(videoCards.length);

				if (videoCards.length > lastHeight) {
					lastHeight = videoCards.length;
				} else {
					break;
				}
				for (let videoCard of videoCards) {
					if (videoCardDatas.length >= 21) {
						break;
					}

					if (
						videoCard.querySelector(videoCardsImgSelector) &&
						videoCard.querySelector(videoCardsMaskSelector) &&
						videoCard.querySelector(videoCardsInfoSelector)
					) {
						const src = videoCard.querySelector(
							videoCardsImgSelector
						).src;
						const href = videoCard.querySelector("a").href;

						// 播放量
						const playVolume = videoCard
							.querySelector(videoCardsMaskSelector)
							.querySelectorAll(
								"span.bili-video-card__stats--text"
							)[0].innerText;
						// 评论数
						const commentVolume = videoCard
							.querySelector(videoCardsMaskSelector)
							.querySelectorAll(
								"span.bili-video-card__stats--text"
							)[1].innerText;
						// 时长
						const duration = videoCard
							.querySelector(videoCardsMaskSelector)
							.querySelector(
								"span.bili-video-card__stats__duration"
							).innerText;
						// 标题
						const title = videoCard
							.querySelector(videoCardsInfoSelector)
							.querySelector("h3").title;
						// 作者
						const author = videoCard
							.querySelector(videoCardsInfoSelector)
							.querySelector(
								"span.bili-video-card__info--author"
							).innerText;
						// 作者url
						const authorUrl = videoCard
							.querySelector(videoCardsInfoSelector)
							.querySelector(
								"a.bili-video-card__info--owner"
							).href;
						// date
						const date = videoCard
							.querySelector(videoCardsInfoSelector)
							.querySelector(
								"span.bili-video-card__info--date"
							).innerText;

						if (
							src &&
							!existedSrc.includes(src) &&
							href &&
							playVolume &&
							commentVolume &&
							duration &&
							title &&
							author &&
							authorUrl &&
							date
						) {
							videoCardDatas.push({
								id: videoCardDatas.length + 1,
								src: src,
								href: href,
								playVolume: playVolume,
								commentVolume: commentVolume,
								duration: duration,
								title: title,
								author: author,
								authorUrl: authorUrl,
								date: date,
                            });
                            existedSrc.push(src)
						}
					}
				}
				window.scrollTo(0, document.body.scrollHeight);
				await new Promise((resolve) =>
					setTimeout(resolve, scrollDelay)
				);
			}
		};

		await loadMoreData();

		console.log(videoCardDatas);
		return videoCardDatas;
	});
	return videoCardData;
};

module.exports = videoCardsCrawler;

const test = async (url) => {
	const fs = require("fs");
	const path = require("path");
	const puppeteer = require("puppeteer");
	const downloadImage = require("./downloadImage");

	const browser = await puppeteer.launch({});
	const page = await browser.newPage();
	await page.goto(url);
	const videoCardsData = await videoCardsCrawler(page);
	console.log(videoCardsData);

	await browser.close();

	for (let i = 0; i < videoCardsData.length; i++) {
		downloadImage(
			videoCardsData[i].src,
			`../../frontend/src/assets/videoCardDatas/image${i + 1}.png`
		);
	}
	// 定义接口字符串
	const interfaceString = `
            interface VideoCardDetail {
                id: number;
                src: string;
                href: string;
                playVolume: string;
                commentVolume: string;
                duration: string;
                title: string;
                author: string;
                authorUrl: string;
                date: string;
            }
        `;

	// 创建字符串，包含接口和数据
	const arrayString = `${interfaceString}
            const videoCardDetails: VideoCardDetail[] = ${JSON.stringify(
				videoCardsData,
				null,
				4
			)};

            export default videoCardDetails;
            `;

	fs.writeFile(
		"../../frontend/src/assets/videoCardDatas/data.ts",
		arrayString,
		(err) => {
			if (err) {
				return console.error("Error writing file:", err);
			}
			console.log("Array has been successfully written to myArray.js!");
		}
	);
};

test("https://www.bilibili.com");
