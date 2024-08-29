const carouseCrawler = async (page) => {
	const carouseData = await page.evaluate(async () => {
		const imgs = [];

		const getCurrentImage = async () => {
			const currentFooterTextSelector =
				"#i_cecream > div.bili-feed4 > main > div.feed2 > div > div.container.is-version8 > div.recommended-swipe.grid-anchor > div > div.recommended-swipe-body > div > div > div > div > div.carousel-footer > div.carousel-footer-text";
			const currentFooterTextElement = document.querySelector(
				currentFooterTextSelector
			);
			// 鼠标先悬停，不让图片轮播
			// 创建 mouseover
			const mouseOverEvent = new MouseEvent("mouseover", {
				bubbles: true,
				cancelable: true,
				view: window,
			});

			// 模拟鼠标悬停
			currentFooterTextElement.dispatchEvent(mouseOverEvent);

			const currentFooterMaskSelector =
				"#i_cecream > div.bili-feed4 > main > div.feed2 > div > div.container.is-version8 > div.recommended-swipe.grid-anchor > div > div.recommended-swipe-body > div > div > div > div > div.carousel-footer > div.carousel-footer-mask";
			const currentFooterMaskElement = document.querySelector(
				currentFooterMaskSelector
			);

			const currentImgSelector =
				"#i_cecream > div.bili-feed4 > main > div.feed2 > div > div.container.is-version8 > div.recommended-swipe.grid-anchor > div > div.recommended-swipe-body > div > div > div > div > div.vui_carousel__slides > div.vui_carousel__slide--next > div > div > a > picture > img";

			const currentImgElements =
				document.querySelectorAll(currentImgSelector);

			const currentImgElement =
				currentImgElements[currentImgElements.length - 1];

			const currentImg = {
				src: currentImgElement ? currentImgElement.src : "",
				alt: currentImgElement ? currentImgElement.alt : "",
				href: currentImgElement
					? currentImgElement.parentElement.parentElement.getAttribute(
							"data-target-url"
					  )
					: "",
				backgroundColor: currentFooterMaskElement.style.backgroundColor,
				mask: "linear-gradient(0, #2f3238 11%, transparent 20%)",
				text: currentFooterTextElement.innerText,
			};

			// 检查是否已经存在这个图片
			const exists = imgs.some((img) => img.text === currentImg.text);
			if (!exists) {
				imgs.push(currentImg);
			}
		};

		await getCurrentImage();

		while (imgs.length < 9) {
			const nextButtonSelector =
				"#i_cecream > div.bili-feed4 > main > div.feed2 > div > div.container.is-version8 > div.recommended-swipe.grid-anchor > div > div.recommended-swipe-body > div > div > div > div > div.carousel-arrows > button:nth-child(2)";
			const nextButton = document.querySelector(nextButtonSelector);

			nextButton.click(); // 点击下一页按钮
			await new Promise((resolve) => setTimeout(resolve, 100));
			await getCurrentImage();
		}

		console.log(imgs); // 打印获取到的图片数组

		return imgs; // 返回获取到的图片数组
	});

	return carouseData;
};

module.exports = carouseCrawler;
