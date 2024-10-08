import React from "react";
import "./HeaderChannel.css";

interface MenuItem {
	id: number;
	title: string;
	icon?: string;
	url?: string;
	subItems?: Array<MenuSubItem>;
}

interface MenuSubItem {
	id: number;
	title: string;
	url?: string;
}

interface channelIcon {
	id: number;
	title: string;
	url: string;
	className: string;
	icon: string;
}

const ChannelIcons: React.FC = () => {
	const channelIcons: channelIcon[] = [
		{
			id: 1,
			title: "动态",
			url: "https://t.bilibili.com/",
			className: "icon-bg icon-bg__dynamic",
			icon: '<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-bg--icon" data-v-674f5b07=""><path d="M6.41659 15.625C3.88528 15.625 1.83325 13.7782 1.83325 11.5H10.9999C10.9999 13.7782 8.94789 15.625 6.41659 15.625Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.125 16.0827C15.125 18.614 13.2782 20.666 11 20.666L11 11.4993C13.2782 11.4993 15.125 13.5514 15.125 16.0827Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.875 6.91667C6.875 9.44797 8.72183 11.5 11 11.5L11 2.33333C8.72182 2.33333 6.875 4.38536 6.875 6.91667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.5833 7.375C13.052 7.375 11 9.22183 11 11.5H20.1667C20.1667 9.22183 18.1146 7.375 15.5833 7.375Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
		},
		{
			id: 2,
			title: "热门",
			url: "https://www.bilibili.com/v/popular/all",
			className: "icon-bg icon-bg__popular",
			icon: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-bg--icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.89054 17.272L4.89277 17.2742C6.49674 18.8782 8.66472 19.7888 10.9624 19.7888C13.2503 19.7888 15.2113 19.0539 16.6107 17.6108L16.6108 17.6108L16.6128 17.6086C18.0002 16.1345 18.7835 14.182 18.7421 12.1819C18.7852 11.3835 18.6916 9.36321 17.4088 6.75488L17.4082 6.7537C17.209 6.35523 16.8163 6.06598 16.3391 5.96993C15.8904 5.87103 15.4021 6.01997 15.061 6.35741C14.9094 6.48781 14.7796 6.61755 14.6655 6.7317L14.6637 6.73348L14.6329 6.76426C14.2107 3.35588 12.6083 1.7368 11.1654 1.00465C11.148 0.987812 11.1265 0.967972 11.1036 0.950782C11.0775 0.931205 11.0311 0.900467 10.9694 0.888912C10.2276 0.608301 9.41043 1.01168 9.1237 1.77629L9.12314 1.7778C8.50566 3.46558 7.35287 4.62281 6.16627 5.76704C4.51756 7.33121 2.75938 9.03623 2.80163 12.093C2.75906 14.055 3.54464 15.8826 4.89054 17.272ZM3.04999 13.0648C3.01092 12.7459 2.99439 12.4218 3.00168 12.0939C2.95933 9.12977 4.6531 7.47834 6.30453 5.9116C7.49017 4.76831 8.67581 3.58267 9.31098 1.84655C9.56504 1.16904 10.2849 0.830288 10.9201 1.08435C10.9624 1.08435 11.0048 1.1267 11.0471 1.16904C11.9267 1.60884 12.8853 2.39635 13.5753 3.77299C12.8853 2.39633 11.9267 1.6088 11.0471 1.16901C11.0047 1.12666 10.9624 1.08432 10.9201 1.08432C10.2849 0.830251 9.56503 1.16901 9.31097 1.84651C8.6758 3.58263 7.49016 4.76827 6.30452 5.91157C4.65309 7.47831 2.95932 9.12973 3.00166 12.0938C2.99438 12.4218 3.01092 12.7459 3.04999 13.0648ZM14.477 7.18189C14.477 7.1819 14.477 7.18192 14.477 7.18193C14.5828 7.09724 14.6887 6.99138 14.8052 6.87493C14.9216 6.75849 15.0486 6.63146 15.1968 6.50442C15.4932 6.20801 15.9167 6.08098 16.2978 6.16567C16.7212 6.25036 17.06 6.50443 17.2294 6.84318C17.3088 7.0046 17.3835 7.16371 17.4539 7.32035C17.3835 7.1637 17.3087 7.00458 17.2294 6.84314C17.06 6.50439 16.7212 6.25032 16.2978 6.16563C15.9167 6.08094 15.4932 6.20798 15.1968 6.50439C15.0486 6.63142 14.9216 6.75845 14.8051 6.87489L14.8051 6.8749C14.7557 6.92437 14.7081 6.97191 14.6617 7.01675C14.5988 7.07745 14.5379 7.13318 14.477 7.18189ZM12.6977 6.35925C12.8428 7.15476 12.8833 7.97963 12.8679 8.74864C12.8679 8.79032 12.8704 8.8315 12.8754 8.87195C12.8704 8.83151 12.8679 8.79035 12.8679 8.74867C12.8833 7.97966 12.8428 7.15478 12.6977 6.35925ZM16.7358 10.6654C16.8108 11.1478 16.8483 11.6393 16.8483 12.1362V12.1786C16.8483 13.703 16.2978 15.2274 15.2392 16.3283C14.0535 17.4293 12.5291 18.0221 10.9201 17.9374C9.1416 17.9374 7.44783 17.2175 6.21984 15.9472C5.82743 15.5548 5.50448 15.1119 5.25584 14.6331C5.50447 15.1119 5.82743 15.5548 6.21983 15.9472C7.44782 17.2175 9.14159 17.9373 10.9201 17.9373C12.5291 18.022 14.0535 17.4292 15.2392 16.3283C16.2978 15.2273 16.8483 13.7029 16.8483 12.1785V12.1362C16.8483 11.6393 16.8108 11.1478 16.7358 10.6654ZM10.9306 17.7376C12.4802 17.8192 13.9509 17.2497 15.0989 16.1856C16.1154 15.1261 16.6483 13.655 16.6483 12.1785V12.1362C16.6483 10.8624 16.3969 9.6266 15.8955 8.49474C15.2436 9.11663 14.7845 9.49093 14.4179 9.68717C14.2122 9.79725 14.0268 9.85633 13.846 9.86789C13.6644 9.8795 13.5028 9.84219 13.3473 9.78249C12.9207 9.62211 12.6679 9.20129 12.6679 8.74864V8.74464L12.6679 8.74464C12.6889 7.69735 12.6046 6.55594 12.2954 5.53554C12.01 4.59379 11.5372 3.76766 10.7904 3.20655C9.96581 4.94926 8.72521 6.18561 7.58695 7.28323L7.50836 7.35967C5.97191 8.85397 4.81321 9.98087 4.85306 12.1325L4.85313 12.1362H4.85309C4.85309 13.5239 5.38326 14.8277 6.36125 15.8057L6.36365 15.8081L6.36363 15.8082C7.55387 17.0394 9.19573 17.7374 10.9201 17.7374H10.9306L10.9306 17.7376Z" fill="#ffffff"></path></svg>',
		},
	];

	return (
		<div className="channel-icons">
			{channelIcons.map((item) => (
				<a
					key={item.id}
					className="channel-icons__item"
					href={item.url}
					target="_blank"
				>
					<div className={item.className}>
						<span
							dangerouslySetInnerHTML={{ __html: item.icon }}
							className="svg-container"
						></span>
					</div>
					<span className="icon-title"> {item.title} </span>
				</a>
			))}
		</div>
	);
};
const LeftMenu: React.FC = () => {
	const menuItems: MenuItem[] = [
		{
			id: 1,
			title: "番剧",
			url: "https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0",
			subItems: [
				{
					id: 1,
					title: "连载动画",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 2,
					title: "完结动画",
					url: "https://www.bilibili.com/v/anime/finish?spm_id_from=333.1007.0.0",
				},
				{
					id: 3,
					title: "咨询",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 4,
					title: "官方延伸",
					url: "https://www.bilibili.com/v/anime/offical/?spm_id_from=333.1007.0.0",
				},
				{
					id: 5,
					title: "新番时间表",
					url: "https://www.bilibili.com/anime/timeline/?spm_id_from=333.1007.0.0",
				},
				{
					id: 6,
					title: "番剧索引",
					url: "https://www.bilibili.com/anime/index/?spm_id_from=333.1007.0.0",
				},
			],
		},
		{
			id: 2,
			title: "电影",
			url: "https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0",
			subItems: [
				{
					id: 1,
					title: "连载动画",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 2,
					title: "完结动画",
					url: "https://www.bilibili.com/v/anime/finish?spm_id_from=333.1007.0.0",
				},
				{
					id: 3,
					title: "咨询",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 4,
					title: "官方延伸",
					url: "https://www.bilibili.com/v/anime/offical/?spm_id_from=333.1007.0.0",
				},
				{
					id: 5,
					title: "新番时间表",
					url: "https://www.bilibili.com/anime/timeline/?spm_id_from=333.1007.0.0",
				},
				{
					id: 6,
					title: "番剧索引",
					url: "https://www.bilibili.com/anime/index/?spm_id_from=333.1007.0.0",
				},
			],
		},
		{
			id: 3,
			title: "国创",
			url: "https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0",
			subItems: [
				{
					id: 1,
					title: "连载动画",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 2,
					title: "完结动画",
					url: "https://www.bilibili.com/v/anime/finish?spm_id_from=333.1007.0.0",
				},
				{
					id: 3,
					title: "咨询",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 4,
					title: "官方延伸",
					url: "https://www.bilibili.com/v/anime/offical/?spm_id_from=333.1007.0.0",
				},
				{
					id: 5,
					title: "新番时间表",
					url: "https://www.bilibili.com/anime/timeline/?spm_id_from=333.1007.0.0",
				},
				{
					id: 6,
					title: "番剧索引",
					url: "https://www.bilibili.com/anime/index/?spm_id_from=333.1007.0.0",
				},
			],
		},
		{
			id: 4,
			title: "电视剧",
			url: "https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0",
			subItems: [
				{
					id: 1,
					title: "连载动画",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 2,
					title: "完结动画",
					url: "https://www.bilibili.com/v/anime/finish?spm_id_from=333.1007.0.0",
				},
				{
					id: 3,
					title: "咨询",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 4,
					title: "官方延伸",
					url: "https://www.bilibili.com/v/anime/offical/?spm_id_from=333.1007.0.0",
				},
				{
					id: 5,
					title: "新番时间表",
					url: "https://www.bilibili.com/anime/timeline/?spm_id_from=333.1007.0.0",
				},
				{
					id: 6,
					title: "番剧索引",
					url: "https://www.bilibili.com/anime/index/?spm_id_from=333.1007.0.0",
				},
			],
		},
		{
			id: 5,
			title: "综艺",
			url: "https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0",
			subItems: [
				{
					id: 1,
					title: "连载动画",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 2,
					title: "完结动画",
					url: "https://www.bilibili.com/v/anime/finish?spm_id_from=333.1007.0.0",
				},
				{
					id: 3,
					title: "咨询",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 4,
					title: "官方延伸",
					url: "https://www.bilibili.com/v/anime/offical/?spm_id_from=333.1007.0.0",
				},
				{
					id: 5,
					title: "新番时间表",
					url: "https://www.bilibili.com/anime/timeline/?spm_id_from=333.1007.0.0",
				},
				{
					id: 6,
					title: "番剧索引",
					url: "https://www.bilibili.com/anime/index/?spm_id_from=333.1007.0.0",
				},
			],
		},
		{
			id: 6,
			title: "纪录片",
			url: "https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0",
			subItems: [
				{
					id: 1,
					title: "连载动画",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 2,
					title: "完结动画",
					url: "https://www.bilibili.com/v/anime/finish?spm_id_from=333.1007.0.0",
				},
				{
					id: 3,
					title: "咨询",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 4,
					title: "官方延伸",
					url: "https://www.bilibili.com/v/anime/offical/?spm_id_from=333.1007.0.0",
				},
				{
					id: 5,
					title: "新番时间表",
					url: "https://www.bilibili.com/anime/timeline/?spm_id_from=333.1007.0.0",
				},
				{
					id: 6,
					title: "番剧索引",
					url: "https://www.bilibili.com/anime/index/?spm_id_from=333.1007.0.0",
				},
			],
		},
		{
			id: 7,
			title: "动画",
			url: "https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0",
			subItems: [
				{
					id: 1,
					title: "连载动画",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 2,
					title: "完结动画",
					url: "https://www.bilibili.com/v/anime/finish?spm_id_from=333.1007.0.0",
				},
				{
					id: 3,
					title: "咨询",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 4,
					title: "官方延伸",
					url: "https://www.bilibili.com/v/anime/offical/?spm_id_from=333.1007.0.0",
				},
				{
					id: 5,
					title: "新番时间表",
					url: "https://www.bilibili.com/anime/timeline/?spm_id_from=333.1007.0.0",
				},
				{
					id: 6,
					title: "番剧索引",
					url: "https://www.bilibili.com/anime/index/?spm_id_from=333.1007.0.0",
				},
			],
		},
		{
			id: 8,
			title: "游戏",
			url: "https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0",
			subItems: [
				{
					id: 1,
					title: "连载动画",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 2,
					title: "完结动画",
					url: "https://www.bilibili.com/v/anime/finish?spm_id_from=333.1007.0.0",
				},
				{
					id: 3,
					title: "咨询",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 4,
					title: "官方延伸",
					url: "https://www.bilibili.com/v/anime/offical/?spm_id_from=333.1007.0.0",
				},
				{
					id: 5,
					title: "新番时间表",
					url: "https://www.bilibili.com/anime/timeline/?spm_id_from=333.1007.0.0",
				},
				{
					id: 6,
					title: "番剧索引",
					url: "https://www.bilibili.com/anime/index/?spm_id_from=333.1007.0.0",
				},
			],
		},
		{
			id: 9,
			title: "鬼畜",
			url: "https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0",
			subItems: [
				{
					id: 1,
					title: "连载动画",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 2,
					title: "完结动画",
					url: "https://www.bilibili.com/v/anime/finish?spm_id_from=333.1007.0.0",
				},
				{
					id: 3,
					title: "咨询",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 4,
					title: "官方延伸",
					url: "https://www.bilibili.com/v/anime/offical/?spm_id_from=333.1007.0.0",
				},
				{
					id: 5,
					title: "新番时间表",
					url: "https://www.bilibili.com/anime/timeline/?spm_id_from=333.1007.0.0",
				},
				{
					id: 6,
					title: "番剧索引",
					url: "https://www.bilibili.com/anime/index/?spm_id_from=333.1007.0.0",
				},
			],
		},
		{
			id: 10,
			title: "音乐",
			url: "https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0",
			subItems: [
				{
					id: 1,
					title: "连载动画",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 2,
					title: "完结动画",
					url: "https://www.bilibili.com/v/anime/finish?spm_id_from=333.1007.0.0",
				},
				{
					id: 3,
					title: "咨询",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 4,
					title: "官方延伸",
					url: "https://www.bilibili.com/v/anime/offical/?spm_id_from=333.1007.0.0",
				},
				{
					id: 5,
					title: "新番时间表",
					url: "https://www.bilibili.com/anime/timeline/?spm_id_from=333.1007.0.0",
				},
				{
					id: 6,
					title: "番剧索引",
					url: "https://www.bilibili.com/anime/index/?spm_id_from=333.1007.0.0",
				},
			],
		},
		{
			id: 11,
			title: "舞蹈",
			url: "https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0",
			subItems: [
				{
					id: 1,
					title: "连载动画",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 2,
					title: "完结动画",
					url: "https://www.bilibili.com/v/anime/finish?spm_id_from=333.1007.0.0",
				},
				{
					id: 3,
					title: "咨询",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 4,
					title: "官方延伸",
					url: "https://www.bilibili.com/v/anime/offical/?spm_id_from=333.1007.0.0",
				},
				{
					id: 5,
					title: "新番时间表",
					url: "https://www.bilibili.com/anime/timeline/?spm_id_from=333.1007.0.0",
				},
				{
					id: 6,
					title: "番剧索引",
					url: "https://www.bilibili.com/anime/index/?spm_id_from=333.1007.0.0",
				},
			],
		},
		{
			id: 12,
			title: "影视",
			url: "https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0",
			subItems: [
				{
					id: 1,
					title: "连载动画",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 2,
					title: "完结动画",
					url: "https://www.bilibili.com/v/anime/finish?spm_id_from=333.1007.0.0",
				},
				{
					id: 3,
					title: "咨询",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 4,
					title: "官方延伸",
					url: "https://www.bilibili.com/v/anime/offical/?spm_id_from=333.1007.0.0",
				},
				{
					id: 5,
					title: "新番时间表",
					url: "https://www.bilibili.com/anime/timeline/?spm_id_from=333.1007.0.0",
				},
				{
					id: 6,
					title: "番剧索引",
					url: "https://www.bilibili.com/anime/index/?spm_id_from=333.1007.0.0",
				},
			],
		},
		{
			id: 13,
			title: "娱乐",
			url: "https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0",
			subItems: [
				{
					id: 1,
					title: "连载动画",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 2,
					title: "完结动画",
					url: "https://www.bilibili.com/v/anime/finish?spm_id_from=333.1007.0.0",
				},
				{
					id: 3,
					title: "咨询",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 4,
					title: "官方延伸",
					url: "https://www.bilibili.com/v/anime/offical/?spm_id_from=333.1007.0.0",
				},
				{
					id: 5,
					title: "新番时间表",
					url: "https://www.bilibili.com/anime/timeline/?spm_id_from=333.1007.0.0",
				},
				{
					id: 6,
					title: "番剧索引",
					url: "https://www.bilibili.com/anime/index/?spm_id_from=333.1007.0.0",
				},
			],
		},
		{
			id: 14,
			title: "知识",
			url: "https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0",
			subItems: [
				{
					id: 1,
					title: "连载动画",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 2,
					title: "完结动画",
					url: "https://www.bilibili.com/v/anime/finish?spm_id_from=333.1007.0.0",
				},
				{
					id: 3,
					title: "咨询",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 4,
					title: "官方延伸",
					url: "https://www.bilibili.com/v/anime/offical/?spm_id_from=333.1007.0.0",
				},
				{
					id: 5,
					title: "新番时间表",
					url: "https://www.bilibili.com/anime/timeline/?spm_id_from=333.1007.0.0",
				},
				{
					id: 6,
					title: "番剧索引",
					url: "https://www.bilibili.com/anime/index/?spm_id_from=333.1007.0.0",
				},
			],
		},
		{
			id: 15,
			title: "科技",
			url: "https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0",
			subItems: [
				{
					id: 1,
					title: "连载动画",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 2,
					title: "完结动画",
					url: "https://www.bilibili.com/v/anime/finish?spm_id_from=333.1007.0.0",
				},
				{
					id: 3,
					title: "咨询",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 4,
					title: "官方延伸",
					url: "https://www.bilibili.com/v/anime/offical/?spm_id_from=333.1007.0.0",
				},
				{
					id: 5,
					title: "新番时间表",
					url: "https://www.bilibili.com/anime/timeline/?spm_id_from=333.1007.0.0",
				},
				{
					id: 6,
					title: "番剧索引",
					url: "https://www.bilibili.com/anime/index/?spm_id_from=333.1007.0.0",
				},
			],
		},
		{
			id: 16,
			title: "资讯",
			url: "https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0",
			subItems: [
				{
					id: 1,
					title: "连载动画",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 2,
					title: "完结动画",
					url: "https://www.bilibili.com/v/anime/finish?spm_id_from=333.1007.0.0",
				},
				{
					id: 3,
					title: "咨询",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 4,
					title: "官方延伸",
					url: "https://www.bilibili.com/v/anime/offical/?spm_id_from=333.1007.0.0",
				},
				{
					id: 5,
					title: "新番时间表",
					url: "https://www.bilibili.com/anime/timeline/?spm_id_from=333.1007.0.0",
				},
				{
					id: 6,
					title: "番剧索引",
					url: "https://www.bilibili.com/anime/index/?spm_id_from=333.1007.0.0",
				},
			],
		},
		{
			id: 17,
			title: "美食",
			url: "https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0",
			subItems: [
				{
					id: 1,
					title: "连载动画",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 2,
					title: "完结动画",
					url: "https://www.bilibili.com/v/anime/finish?spm_id_from=333.1007.0.0",
				},
				{
					id: 3,
					title: "咨询",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 4,
					title: "官方延伸",
					url: "https://www.bilibili.com/v/anime/offical/?spm_id_from=333.1007.0.0",
				},
				{
					id: 5,
					title: "新番时间表",
					url: "https://www.bilibili.com/anime/timeline/?spm_id_from=333.1007.0.0",
				},
				{
					id: 6,
					title: "番剧索引",
					url: "https://www.bilibili.com/anime/index/?spm_id_from=333.1007.0.0",
				},
			],
		},
		{
			id: 18,
			title: "生活",
			url: "https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0",
			subItems: [
				{
					id: 1,
					title: "连载动画",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 2,
					title: "完结动画",
					url: "https://www.bilibili.com/v/anime/finish?spm_id_from=333.1007.0.0",
				},
				{
					id: 3,
					title: "咨询",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 4,
					title: "官方延伸",
					url: "https://www.bilibili.com/v/anime/offical/?spm_id_from=333.1007.0.0",
				},
				{
					id: 5,
					title: "新番时间表",
					url: "https://www.bilibili.com/anime/timeline/?spm_id_from=333.1007.0.0",
				},
				{
					id: 6,
					title: "番剧索引",
					url: "https://www.bilibili.com/anime/index/?spm_id_from=333.1007.0.0",
				},
			],
		},
		{
			id: 19,
			title: "汽车",
			url: "https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0",
			subItems: [
				{
					id: 1,
					title: "连载动画",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 2,
					title: "完结动画",
					url: "https://www.bilibili.com/v/anime/finish?spm_id_from=333.1007.0.0",
				},
				{
					id: 3,
					title: "咨询",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 4,
					title: "官方延伸",
					url: "https://www.bilibili.com/v/anime/offical/?spm_id_from=333.1007.0.0",
				},
				{
					id: 5,
					title: "新番时间表",
					url: "https://www.bilibili.com/anime/timeline/?spm_id_from=333.1007.0.0",
				},
				{
					id: 6,
					title: "番剧索引",
					url: "https://www.bilibili.com/anime/index/?spm_id_from=333.1007.0.0",
				},
			],
		},
		{
			id: 20,
			title: "时尚",
			url: "https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0",
			subItems: [
				{
					id: 1,
					title: "连载动画",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 2,
					title: "完结动画",
					url: "https://www.bilibili.com/v/anime/finish?spm_id_from=333.1007.0.0",
				},
				{
					id: 3,
					title: "咨询",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 4,
					title: "官方延伸",
					url: "https://www.bilibili.com/v/anime/offical/?spm_id_from=333.1007.0.0",
				},
				{
					id: 5,
					title: "新番时间表",
					url: "https://www.bilibili.com/anime/timeline/?spm_id_from=333.1007.0.0",
				},
				{
					id: 6,
					title: "番剧索引",
					url: "https://www.bilibili.com/anime/index/?spm_id_from=333.1007.0.0",
				},
			],
		},
		{
			id: 21,
			title: "运动",
			url: "https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0",
			subItems: [
				{
					id: 1,
					title: "连载动画",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 2,
					title: "完结动画",
					url: "https://www.bilibili.com/v/anime/finish?spm_id_from=333.1007.0.0",
				},
				{
					id: 3,
					title: "咨询",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 4,
					title: "官方延伸",
					url: "https://www.bilibili.com/v/anime/offical/?spm_id_from=333.1007.0.0",
				},
				{
					id: 5,
					title: "新番时间表",
					url: "https://www.bilibili.com/anime/timeline/?spm_id_from=333.1007.0.0",
				},
				{
					id: 6,
					title: "番剧索引",
					url: "https://www.bilibili.com/anime/index/?spm_id_from=333.1007.0.0",
				},
			],
		},
		{
			id: 22,
			title: "动物圈",
			url: "https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0",
			subItems: [
				{
					id: 1,
					title: "连载动画",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 2,
					title: "完结动画",
					url: "https://www.bilibili.com/v/anime/finish?spm_id_from=333.1007.0.0",
				},
				{
					id: 3,
					title: "咨询",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 4,
					title: "官方延伸",
					url: "https://www.bilibili.com/v/anime/offical/?spm_id_from=333.1007.0.0",
				},
				{
					id: 5,
					title: "新番时间表",
					url: "https://www.bilibili.com/anime/timeline/?spm_id_from=333.1007.0.0",
				},
				{
					id: 6,
					title: "番剧索引",
					url: "https://www.bilibili.com/anime/index/?spm_id_from=333.1007.0.0",
				},
			],
		},
		{
			id: 23,
			title: "VLOG",
			url: "https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0",
			subItems: [
				{
					id: 1,
					title: "连载动画",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 2,
					title: "完结动画",
					url: "https://www.bilibili.com/v/anime/finish?spm_id_from=333.1007.0.0",
				},
				{
					id: 3,
					title: "咨询",
					url: "https://www.bilibili.com/v/anime/serial/?spm_id_from=333.1007.0.0",
				},
				{
					id: 4,
					title: "官方延伸",
					url: "https://www.bilibili.com/v/anime/offical/?spm_id_from=333.1007.0.0",
				},
				{
					id: 5,
					title: "新番时间表",
					url: "https://www.bilibili.com/anime/timeline/?spm_id_from=333.1007.0.0",
				},
				{
					id: 6,
					title: "番剧索引",
					url: "https://www.bilibili.com/anime/index/?spm_id_from=333.1007.0.0",
				},
			],
		},
	];

	return (
		<div className="channel-items__left">
			{menuItems.map((item) => (
				<a
					key={item.id}
					className="channel-link"
					href={item.url}
					target="_blank"
				>
					{item.title}
				</a>
			))}
			<a className="channel-entry-more__link">
				<span>更多</span>
				<svg
					width="10"
					height="10"
					viewBox="0 0 9 9"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="channel-entry-more__link--arrow"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M7.50588 3.40623C7.40825 3.3086 7.24996 3.3086 7.15232 3.40623L4.41244 6.14612L1.67255 3.40623C1.57491 3.3086 1.41662 3.3086 1.31899 3.40623C1.22136 3.50386 1.22136 3.66215 1.31899 3.75978L4.11781 6.5586C4.28053 6.72132 4.54434 6.72132 4.70706 6.5586L7.50588 3.75978C7.60351 3.66215 7.60351 3.50386 7.50588 3.40623Z"
						fill="currentColor"
					></path>
					<path
						d="M7.15232 3.40623L7.50588 3.75978L7.50588 3.75978L7.15232 3.40623ZM7.50588 3.40623L7.15232 3.75978L7.15233 3.75978L7.50588 3.40623ZM4.41244 6.14612L4.05888 6.49967C4.15265 6.59344 4.27983 6.64612 4.41244 6.64612C4.54504 6.64612 4.67222 6.59344 4.76599 6.49967L4.41244 6.14612ZM1.67255 3.40623L2.0261 3.05268L2.0261 3.05268L1.67255 3.40623ZM1.31899 3.40623L0.965439 3.05268L0.965439 3.05268L1.31899 3.40623ZM1.31899 3.75978L1.67255 3.40623V3.40623L1.31899 3.75978ZM4.11781 6.5586L3.76425 6.91215L4.11781 6.5586ZM4.70706 6.5586L4.35351 6.20505L4.70706 6.5586ZM7.50588 3.75978L7.15233 3.40623L7.15232 3.40623L7.50588 3.75978ZM7.50588 3.75978C7.40825 3.85742 7.24996 3.85742 7.15232 3.75978L7.85943 3.05268C7.56654 2.75978 7.09166 2.75978 6.79877 3.05268L7.50588 3.75978ZM4.76599 6.49967L7.50588 3.75978L6.79877 3.05268L4.05888 5.79257L4.76599 6.49967ZM1.31899 3.75978L4.05888 6.49967L4.76599 5.79257L2.0261 3.05268L1.31899 3.75978ZM1.67254 3.75979C1.57491 3.85742 1.41662 3.85742 1.31899 3.75979L2.0261 3.05268C1.73321 2.75978 1.25833 2.75978 0.965439 3.05268L1.67254 3.75979ZM1.67255 3.40623C1.77018 3.50386 1.77018 3.66215 1.67255 3.75978L0.965439 3.05268C0.672546 3.34557 0.672546 3.82044 0.965439 4.11334L1.67255 3.40623ZM4.47136 6.20505L1.67255 3.40623L0.965439 4.11334L3.76425 6.91215L4.47136 6.20505ZM4.35351 6.20505C4.38605 6.1725 4.43882 6.1725 4.47136 6.20505L3.76425 6.91215C4.12223 7.27013 4.70264 7.27013 5.06062 6.91215L4.35351 6.20505ZM7.15232 3.40623L4.35351 6.20505L5.06062 6.91215L7.85943 4.11334L7.15232 3.40623ZM7.15233 3.75978C7.05469 3.66215 7.05469 3.50386 7.15233 3.40623L7.85943 4.11334C8.15233 3.82045 8.15233 3.34557 7.85943 3.05268L7.15233 3.75978Z"
						fill="currentColor"
					></path>
				</svg>
			</a>
		</div>
	);
};

const RightMenu: React.FC = () => {
	const menuItems = [
		{
			id: 1,
			title: "专栏",
			url: "https://www.bilibili.com/read/home?spm_id_from=333.1007.0.0",
			icon: '<svg t="1642646834655" class="icon side-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4061" width="200" height="200"><path d="M810.6496 153.6C843.6736 153.6 870.4 180.3264 870.4 213.3504v597.2992c0 33.024-26.7264 59.7504-59.7504 59.7504H213.3504A59.7504 59.7504 0 0 1 153.6 810.6496V213.3504C153.6 180.3264 180.3264 153.6 213.3504 153.6z m-332.8 460.8H341.3504a34.1504 34.1504 0 0 0 0 68.2496h136.4992a34.1504 34.1504 0 1 0 0-68.2496z m204.8-136.6016H341.3504a34.1504 34.1504 0 0 0 0 68.2496h341.2992a34.1504 34.1504 0 0 0 0-68.2496z m0-136.3968H341.3504a34.1504 34.1504 0 0 0 0 68.2496h341.2992a34.1504 34.1504 0 1 0 0-68.2496z" p-id="4062"></path></svg>',
		},
		{
			id: 2,
			title: "直播",
			url: "https://live.bilibili.com/",
			icon: '<svg t="1642646710703" class="icon side-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3158" width="200" height="200"><path d="M682.6496 204.8512c35.4816 0 64.6656 27.136 67.9424 61.696l0.3072 6.6048V358.4l81.92-61.44a34.2016 34.2016 0 0 1 53.248 17.408l1.024 4.7616 0.3584 5.12v392.5504a34.1504 34.1504 0 0 1-50.2784 30.1056l-4.352-2.7648-81.92-61.4912v68.3008c0 33.1264-23.552 60.7232-54.8352 66.9696l-6.8608 1.024-6.5536 0.256H204.8a68.2496 68.2496 0 0 1-67.9936-61.696l-0.3072-6.5536V273.152c0-35.4816 27.136-64.6656 61.696-67.9936L204.8 204.8512h477.8496zM385.3824 389.12a34.1504 34.1504 0 0 0-34.0992 34.1504v179.6096a34.1504 34.1504 0 0 0 53.0432 28.416l134.7584-89.8048a34.1504 34.1504 0 0 0 0-56.832L404.3264 394.8544a34.1504 34.1504 0 0 0-18.944-5.7344z" p-id="3159"></path></svg>',
		},
		{
			id: 3,
			title: "活动",
			url: "https://www.bilibili.com/blackboard/activity-list.html?",
			icon: '<svg t="1642646844599" class="icon side-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4188" width="200" height="200"><path d="M772.4544 229.2736l2.048 6.4512 87.2448 283.136c8.8576 33.1264-10.24 66.56-41.984 78.4384l-6.5536 2.048-118.1696 31.744a32.768 32.768 0 0 1-8.192 1.0752l-4.096-0.2048-124.672-14.6432-193.3824 51.8144 36.6592 136.704a49.152 49.152 0 0 1-93.184 30.8736l-1.792-5.4272L155.2896 267.264a49.152 49.152 0 0 1 93.184-30.8736l1.792 5.4272 4.096 15.36 188.928-50.6368a32.768 32.768 0 0 1 8.1408-1.0752l4.096 0.2048 124.5184 14.592 112.1792-30.0544c33.4336-8.96 68.1984 7.7824 80.2304 39.0144z" p-id="4189"></path></svg>',
		},
		{
			id: 4,
			title: "课堂",
			url: "https://www.bilibili.com/cheese/?csource=common_hp_channelclass_icon",
			icon: '<svg t="1642669966795" class="icon side-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2862" width="200" height="200"><path d="M749.2096 168.96a102.4 102.4 0 0 1 102.2464 96.3584l0.1536 6.0416v477.8496a102.4 102.4 0 0 1-96.3584 102.2464l-6.0416 0.1536H271.36a102.4 102.4 0 0 1-102.2464-96.3584l-0.1536-6.0416V271.36a102.4 102.4 0 0 1 96.3584-102.2464L271.36 168.96h477.8496z m-69.9392 385.4848a34.1504 34.1504 0 0 0-48.2816 0 170.6496 170.6496 0 0 1-241.3568 0 34.1504 34.1504 0 1 0-48.2816 48.2304 238.9504 238.9504 0 0 0 337.92 0 34.1504 34.1504 0 0 0 0-48.2304zM322.56 339.6608a51.2 51.2 0 0 0-51.2 51.2v34.1504a51.2 51.2 0 1 0 102.4 0v-34.1504a51.2 51.2 0 0 0-51.2-51.2z m375.4496 0a51.2 51.2 0 0 0-51.2 51.2v34.1504a51.2 51.2 0 1 0 102.4 0v-34.1504a51.2 51.2 0 0 0-51.2-51.2z" p-id="2863"></path></svg>',
		},
		{
			id: 5,
			title: "社区中心",
			url: "https://www.bilibili.com/blackboard/activity-5zJxM3spoS.html",
			icon: '<svg t="1642670011510" class="icon side-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3116" width="200" height="200"><path d="M836.3008 170.6496c17.1008 0 31.2832 12.6464 33.7408 29.0816L870.4 204.8v316.16a34.1504 34.1504 0 0 1-29.0816 33.792l-5.0176 0.3584h-102.4v195.7888a34.1504 34.1504 0 0 1-29.1328 33.792l-5.0176 0.3584H386.7648l-127.3344 95.5392a34.2016 34.2016 0 0 1-53.248-17.3568l-1.024-4.8128-0.3584-5.12-0.0512-68.3008H153.6a34.1504 34.1504 0 0 1-32.6656-24.2176l-1.0752-4.8128-0.4096-5.0688v-409.6c0-17.152 12.6464-31.3344 29.0816-33.792L153.6 307.2h174.2336V204.8c0-17.152 12.6464-31.3344 29.1328-33.792l5.0176-0.3584h474.3168z m-477.9008 409.6H256l-5.0688 0.4096a34.1504 34.1504 0 0 0 0 67.4816l5.0688 0.4096h102.4l5.0688-0.4096A34.1504 34.1504 0 0 0 358.4 580.2496z m102.4-136.4992H256l-5.0688 0.4096a34.1504 34.1504 0 0 0 0 67.4816l5.0688 0.4096h204.8l5.0688-0.4096A34.1504 34.1504 0 0 0 460.8 443.7504z m341.2992-204.8512h-406.016v68.2496h303.616c17.152 0 31.3856 12.6464 33.792 29.1328l0.3584 5.0176v145.4592l68.2496 0.0512V238.8992z" p-id="3117"></path></svg>',
		},

		{
			id: 6,
			title: "新歌热榜",
			url: "https://music.bilibili.com/pc/music-center/",
			icon: '<svg t="1642669999866" class="icon side-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2989" width="200" height="200"><path d="M783.36 221.8496a102.4 102.4 0 0 1 102.0928 94.7712l0.3072 7.68v409.6a102.4 102.4 0 0 1-94.72 102.0928l-7.68 0.256H237.2096a102.4 102.4 0 0 1-102.0928-94.72l-0.3072-7.68v-409.6A102.4 102.4 0 0 1 229.5808 222.208l7.68-0.3072H783.36z m-155.5968 81.408a34.1504 34.1504 0 0 0-50.7904 23.6032l-54.1696 203.3152a128 128 0 1 0-108.288 220.8256l6.7584 1.024a128 128 0 0 0 141.5168-104.8576l71.7824-253.7984 47.4624 35.4816 3.2768 2.2016a34.1504 34.1504 0 0 0 37.5808-56.832l-91.8528-68.7616z" p-id="2990"></path></svg>',
		},
	];

	return (
		<div className="channel-items__right">
			{menuItems.map((item) => (
				<a
					key={item.id}
					className="channel-link__right"
					href={item.url}
					target="_blank"
				>
					<span
						dangerouslySetInnerHTML={{ __html: item.icon }}
						className="svg-container"
					></span>
					<span>{item.title}</span>
				</a>
			))}
		</div>
	);
};
export default function HeaderChannel() {
	return (
		<div className="bili-header__channel">
			<ChannelIcons />

			<div className="right-channel-container">
				<LeftMenu />
				<RightMenu />
			</div>
		</div>
	);
}
