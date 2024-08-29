import HeaderBar from "./HeaderBar.tsx";
import HeaderBanner from "./HeaderBanner.tsx";
import HeaderChannel from "./HeaderChannel.tsx";
export default function Header() {
	return (
		<div className="bili-header">
			<HeaderBar />
			<HeaderBanner />
			<HeaderChannel />
		</div>
	);
}
