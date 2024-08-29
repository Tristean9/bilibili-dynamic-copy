import { useState, useEffect } from "react";
import "./Carousel.css";

interface CarouselImage {
	src: string;
	href: string;
	backgroundColor: string;
	text: string;
}

export default function Carousel() {
	const [images, setImages] = useState<CarouselImage[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [loaded, setLoaded] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
    

    const handleNext = () => {
		setCurrentIndex((prevIndex: number) => {
			if (prevIndex === images.length - 1) {
				return 0;
			}
			return (prevIndex + 1) % images.length;
		});
	};
	const handlePrev = () => {
		setCurrentIndex((prevIndex: number) => {
			if (prevIndex === 0) {
				return images.length - 2;
			}
			return (prevIndex - 1) % images.length;
		});
	};

	useEffect(() => {
		const imageDetails = [
			{
				imageName: "image1",
				href: "https://www.bilibili.com/bangumi/play/ep833566",
				backgroundColor: "rgb(95, 76, 69)",
				text: "宫崎骏主题客定本翻翻看！",
			},
			{
				imageName: "image2",
				href: "https://www.bilibili.com/bangumi/play/ep833566",
				backgroundColor: "rgb(82, 79, 122)",
				text: "万元奖池寻找新中式美学传承人，一起见证中式新生！",
			},
			{
				imageName: "image3",
				href: "https://www.bilibili.com/bangumi/play/ep833566",
				backgroundColor: "rgb(67, 57, 53)",
				text: "狼，已露出爪牙",
			},
			{
				imageName: "image4",
				href: "https://www.bilibili.com/bangumi/play/ep833566",
				backgroundColor: "rgb(75, 101, 95)",
				text: "物灵少女X工匠少年，携手共赴奇幻冒险！",
			},
			{
				imageName: "image5",
				href: "https://www.bilibili.com/bangumi/play/ep833566",
				backgroundColor: "rgb(150, 126, 105)",
				text: "万元奖池征集仿妆cos爱好者集合啦！！",
			},
			{
				imageName: "image6",
				href: "https://www.bilibili.com/bangumi/play/ep833566",
				backgroundColor: "rgb(55, 60, 89)",
				text: "来和MIKU一起过17岁生日吧！",
			},
			{
				imageName: "image7",
				href: "https://www.bilibili.com/bangumi/play/ep833566",
				backgroundColor: "rgb(46, 40, 82)",
				text: "少年，你渴望力量吗？",
			},
			{
				imageName: "image8",
				href: "https://www.bilibili.com/bangumi/play/ep833566",
				backgroundColor: "rgb(45, 48, 31)",
				text: "手枪局输了我还活几毛啊，跳了",
			},
			{
				imageName: "image9",
				href: "https://www.bilibili.com/bangumi/play/ep833566",
				backgroundColor: "rgb(110, 5, 0)",
				text: "学习贯彻党的二十届三中全会精神",
			},
			{
				imageName: "image1",
				href: "https://www.bilibili.com/bangumi/play/ep833566",
				backgroundColor: "rgb(95, 76, 69)",
				text: "宫崎骏主题客定本翻翻看！",
			},
		];
		const preloadImages = async () => {
			const loadedImages = await Promise.all(
				imageDetails.map(async (detail) => {
					const img = await import(
						`@/assets/carousel/${detail.imageName}.png`
					);
					return {
						src: img.default, // 使用 img.default 获取图片地址
						href: detail.href,
						backgroundColor: detail.backgroundColor,
						text: detail.text,
					};
				})
			);
			setImages(loadedImages);
			setLoaded(true);
		};

		preloadImages();
	}, []);

	useEffect(() => {
		if (!loaded || isHovered) return;
		const interval = setInterval(
			() => {
				setCurrentIndex((prevIndex: number) => {
					if (prevIndex === images.length - 1) {
						return 0;
					}
					return (prevIndex + 1) % images.length;
				});
			},
			3000
		);

		return () => clearInterval(interval);
	}, [loaded, isHovered, images.length, ]);

	if (!loaded) {
		return <div>Loading...</div>;
	}

	return (
		<div
			className="carousel"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="carousel-container">
				<div className="vui_carousel vui_carousel--bottom vui_carousel--show-arrow">
					<div
						className="vui_carousel__slides"
						style={{
							transform: `translateX(-${currentIndex * 100}%)`,
							transition:
								currentIndex === 0
									? "none"
									: "transform 0.5s ease",
						}}
					>
						{images.map((image, index) => (
							<div className="vui_carousel__slide" key={index}>
								<div className="carousel-area">
									<div className="carousel-area-img">
										<div className="extension-tips-v2"></div>
										<a
											className="carousel-item"
											href={image.href}
										>
											<picture className="v-img carousel-inner__img">
												<img src={image.src} />
											</picture>
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="carousel-footer">
						<div
							className="carousel-footer-mask"
							style={{
								backgroundColor:
									images[currentIndex].backgroundColor,
							}}
						></div>
						<div className="carousel-footer-text">
							<a href={images[currentIndex].href} target="_blank">
								<span> {images[currentIndex].text} </span>
							</a>
						</div>
						<div className="carousel-dots">
							<ul className="carousel-dots-list">
								{Array.from({ length: 9 }, (_, i) => (
									<li
										key={i}
										className={`carousel-dots-dot ${
											currentIndex === i ||
											(currentIndex === 9 && i === 0)
												? "is-active"
												: ""
										}`}
									>
										<div className="before"></div>
										<div className="after"></div>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="carousel-arrows">
						<button onClick={handlePrev}>
							<svg
								style={{ transform: "rotate(180deg)" }}
								viewBox="0 0 1024 1024"
							>
								<path
									fill="none"
									strokeLinejoin="round"
									strokeLinecap="round"
									strokeWidth="145.067"
									stroke="currentColor"
									d="m341.333 170.667 341.334 341.332-341.334 341.335"
								></path>
							</svg>
						</button>
						<button onClick={handleNext}>
							<svg viewBox="0 0 1024 1024">
								<path
									fill="none"
									strokeLinejoin="round"
									strokeLinecap="round"
									strokeWidth="145.067"
									stroke="currentColor"
									d="m341.333 170.667 341.334 341.332-341.334 341.335"
								></path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
