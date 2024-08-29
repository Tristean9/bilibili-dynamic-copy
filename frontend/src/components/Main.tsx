import "./Main.css";
import Carousel from "./Carousel.tsx";
import VideoCard from "./VideoCard.tsx";
import VideoCardData from "../types/VideoCard.tsx";
import { useEffect, useState } from "react";
import videoCardDetails from '../assets/videoCardDatas/data.ts'

export default function Main() {
	const [videoCardDatas, setVideoCardDatas] = useState<VideoCardData[]>([]);
	const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        
		const preloadImages = async () => {
			const loadedImages = await Promise.all(
				videoCardDetails.map(async (detail) => {
					const img = await import(
						`@/assets/videoCardDatas/image${detail.id}.png`
					);
					return {
						id: detail.id,
						src: img.default, // 使用 img.default 获取图片地址
						href: detail.href,
						playVolume: detail.playVolume,
						commentVolume: detail.commentVolume,
						duration: detail.duration,
						title: detail.title,
						author: detail.author,
						authorUrl: detail.authorUrl,
						date: detail.date,
					};
				})
			);
			setVideoCardDatas(loadedImages);
			setLoaded(true);
		};

		preloadImages();
	});

	if (!loaded) {
		return <div>Loading...</div>;
	}

	return (
		<main className="bili-feed4-layout">
			<div className="recommended-container_floor-aside">
				<div className="container">
					<div className="recommended-swipe grid-anchor">
						<div className="recommended-swipe-core">
							<div className="recommended-swipe-body">
								<div className="recommended-swipe-body-normal">
									<Carousel />
								</div>
							</div>
							<div
								className="recommended-swipe-shim"
								data-v-775fbb06=""
							>
								<div className="bili-video-card">
									<div className="bili-video-card__skeleton">
										<div className="bili-video-card__skeleton--cover"></div>
										<div className="bili-video-card__skeleton--info">
											<div className="bili-video-card__skeleton--right">
												<p className="bili-video-card__skeleton--text"></p>
												<p className="bili-video-card__skeleton--text short"></p>
												<p className="bili-video-card__skeleton--light"></p>
											</div>
										</div>
									</div>
								</div>
								<div className="bili-video-card">
									<div className="bili-video-card__skeleton">
										<div className="bili-video-card__skeleton--cover"></div>
										<div className="bili-video-card__skeleton--info">
											<div className="bili-video-card__skeleton--right">
												<p className="bili-video-card__skeleton--text"></p>
												<p className="bili-video-card__skeleton--text short"></p>
												<p className="bili-video-card__skeleton--light"></p>
											</div>
										</div>
									</div>
								</div>
								<div
									className="shim-card"
									data-v-775fbb06=""
								></div>
								<div
									className="shim-card"
									data-v-775fbb06=""
								></div>
							</div>
						</div>
					</div>
					{videoCardDatas.map((item) => (
						<VideoCard videoCardData={item} key={item.id} />
					))}
					{/* <div className="temp">
						{Array.from({ length: 100 }, (_, i) => (
							<div>{i}</div>
						))}
					</div> */}
				</div>
			</div>
		</main>
	);
}
