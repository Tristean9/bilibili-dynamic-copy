import logo from "@/assets/logo.png";
import "./HeaderBanner.css";
import { useEffect, useState } from "react";

interface Background {
	id: number;
	src: string;
}

export default function HeaderBanner() {
	const [backgrounds, setBackgrounds] = useState<Background[]>([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const backgroundDetails = Array.from({ length: 18 }, (_, i) => {
			return {
				id: i + 1,
				imageName: `image${i + 1}`,
			};
		}).flat();

		const preloadImages = async () => {
			const loadedImages = await Promise.all(
				backgroundDetails.map(async (detail) => {
					const img = await import(
						`@/assets/backgrounds/${detail.imageName}.png`
					);
					return {
						id: detail.id,
						src: img.default, // 使用 img.default 获取图片地址
					};
				})
			);
			setBackgrounds(loadedImages);
			setLoaded(true);
		};

		preloadImages();
	});

	if (!loaded) {
		return <div>Loading...</div>;
	}

	return (
		<div className="bili-header__banner">
			<div className="animated-banner">
				{backgrounds.map((item) => (
					<div className="layer" key={item.id}>
						<img src={item.src}></img>
					</div>
				))}
			</div>
			<div className="header-banner__inner">
				<a href="https://www.bilibili.com/" className="inner-logo">
					<img src={logo} className="logo-img"></img>
				</a>
            </div>
            <div className="taper-line"></div>
		</div>
	);
}
