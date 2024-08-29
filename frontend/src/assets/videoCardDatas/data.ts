
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
        
            const videoCardDetails: VideoCardDetail[] = [
    {
        "id": 1,
        "src": "https://i2.hdslb.com/bfs/archive/8727a3e2c42def81b481335ce495798258a6e2a8.jpg@672w_378h_1c_!web-home-common-cover",
        "href": "https://www.bilibili.com/video/BV1rT421z77z",
        "playVolume": "58.9万",
        "commentVolume": "98",
        "duration": "01:00",
        "title": "商家：本来割得好好的…你又整这出！！",
        "author": "进度条-软装抠搜指南",
        "authorUrl": "https://space.bilibili.com/640152752",
        "date": "· 8-23"
    },
    {
        "id": 2,
        "src": "https://i1.hdslb.com/bfs/archive/66f1a6ba4d0d2a2333b7181c16275ca49b6aa0b4.jpg@672w_378h_1c_!web-home-common-cover",
        "href": "https://www.bilibili.com/video/BV12S411w71J",
        "playVolume": "248.2万",
        "commentVolume": "642",
        "duration": "06:24",
        "title": "这种游戏极其适合和朋友一起玩 #4",
        "author": "楠方a",
        "authorUrl": "https://space.bilibili.com/1829045",
        "date": "· 8-20"
    },
    {
        "id": 3,
        "src": "https://i0.hdslb.com/bfs/archive/489312c74d2f675bccd460569aec94983a5d2f2c.jpg@672w_378h_1c_!web-home-common-cover",
        "href": "https://www.bilibili.com/video/BV1PyWMeJEsb",
        "playVolume": "56.5万",
        "commentVolume": "731",
        "duration": "11:27",
        "title": "【黑神话悟空】超详细的第二章隐藏boss路线以及打法指南",
        "author": "良小明",
        "authorUrl": "https://space.bilibili.com/592302042",
        "date": "· 8-21"
    },
    {
        "id": 4,
        "src": "https://i2.hdslb.com/bfs/archive/7077806dd6e1020188408748a425444e1b53db9d.jpg@672w_378h_1c_!web-home-common-cover",
        "href": "https://www.bilibili.com/video/BV1CZ42157C3",
        "playVolume": "28.2万",
        "commentVolume": "3745",
        "duration": "10:15",
        "title": "穿越成为亚波人 又做了艾斯的人间体P7",
        "author": "磷火动漫",
        "authorUrl": "https://space.bilibili.com/1415483599",
        "date": "· 8-23"
    },
    {
        "id": 5,
        "src": "https://i1.hdslb.com/bfs/archive/b3d2f08f35b93d5e7036a3d1e1cbc35e939a2131.jpg@672w_378h_1c_!web-home-common-cover",
        "href": "https://www.bilibili.com/video/BV17r421M7HM",
        "playVolume": "186.4万",
        "commentVolume": "810",
        "duration": "08:51",
        "title": "狂疯嗓！UP主配音时的表情能有多疯？！",
        "author": "狂风桑",
        "authorUrl": "https://space.bilibili.com/1893045",
        "date": "· 8-20"
    },
    {
        "id": 6,
        "src": "https://i0.hdslb.com/bfs/archive/c58b30a503dfee4de1e2b59070ec707d5f2ffb7a.jpg@672w_378h_1c_!web-home-common-cover",
        "href": "https://www.bilibili.com/video/BV1SBWYebEMZ",
        "playVolume": "120.3万",
        "commentVolume": "501",
        "duration": "03:37",
        "title": "如果没人保护我，那我就自己保护自己",
        "author": "一直可矮的修勾",
        "authorUrl": "https://space.bilibili.com/437979684",
        "date": "· 8-21"
    },
    {
        "id": 7,
        "src": "https://i0.hdslb.com/bfs/archive/ea5264c433987b7bdeb396140c561c077fc84210.jpg@672w_378h_1c_!web-home-common-cover",
        "href": "https://www.bilibili.com/video/BV1oZ421T795",
        "playVolume": "446.2万",
        "commentVolume": "516",
        "duration": "00:16",
        "title": "午睡不能睡太久，要不会感觉后背发凉。(作者：张林、窦泽林、李嘉盟、俸万军；编辑：韩咏轩)#兵哥哥 #午休 #站岗",
        "author": "北部联勤兵",
        "authorUrl": "https://space.bilibili.com/1444608162",
        "date": "· 8-19"
    },
    {
        "id": 8,
        "src": "https://i1.hdslb.com/bfs/archive/018198cbddd1086b4a1263bfaf0fb24c69a11dad.jpg@672w_378h_1c_!web-home-common-cover",
        "href": "https://www.bilibili.com/video/BV1NypmeZEaN",
        "playVolume": "211.7万",
        "commentVolume": "207",
        "duration": "00:44",
        "title": "这一团面够我吃一晚上夜宵啦",
        "author": "豆沙泡泡",
        "authorUrl": "https://space.bilibili.com/1395814113",
        "date": "· 8-19"
    },
    {
        "id": 9,
        "src": "https://i2.hdslb.com/bfs/archive/0464c958afc7cb80298d80b450dd950ffc2b3fc5.jpg@672w_378h_1c_!web-home-common-cover",
        "href": "https://www.bilibili.com/video/BV1jZ421K77t",
        "playVolume": "28.5万",
        "commentVolume": "658",
        "duration": "13:06",
        "title": "根治墙面起皮脱落返碱发霉，搞定渗水漏水",
        "author": "4AM居士",
        "authorUrl": "https://space.bilibili.com/1310639484",
        "date": "· 8-21"
    },
    {
        "id": 10,
        "src": "https://i0.hdslb.com/bfs/archive/de698f4681b8e726604b3bf96c57ae3b917d5069.jpg@672w_378h_1c_!web-home-common-cover",
        "href": "https://www.bilibili.com/video/BV1z1421t7bT",
        "playVolume": "175万",
        "commentVolume": "9067",
        "duration": "35:16",
        "title": "老戴《黑神话 悟空》06 黄风岭（2/6）主线【石先锋】【鼠司空】【虎先锋】",
        "author": "老戴在此",
        "authorUrl": "https://space.bilibili.com/2142762",
        "date": "· 8-20"
    },
    {
        "id": 11,
        "src": "https://i1.hdslb.com/bfs/archive/eee0ca27158f6c19dce9bb1da86660ce8669a9e6.jpg@672w_378h_1c_!web-home-common-cover",
        "href": "https://www.bilibili.com/video/BV1qU411m7Mj",
        "playVolume": "14.6万",
        "commentVolume": "2293",
        "duration": "43:59",
        "title": "《黑神话：悟空》全流程、剧情讲解梳理、4K最高画质攻略【第二回：风起黄昏】04",
        "author": "紫雨carol",
        "authorUrl": "https://space.bilibili.com/9064879",
        "date": "· 7小时前"
    },
    {
        "id": 12,
        "src": "https://i1.hdslb.com/bfs/archive/3af15837d2e8315b67be9ed3770b2a6224babe7d.jpg@672w_378h_1c_!web-home-common-cover",
        "href": "https://www.bilibili.com/video/BV1yz421e7JY",
        "playVolume": "48.5万",
        "commentVolume": "3374",
        "duration": "13:32",
        "title": "早期贝爷路子野！生吃骆驼 炭烤蝰蛇 羊宝刺身吃到爽《荒野求生》",
        "author": "沫子瞪片",
        "authorUrl": "https://space.bilibili.com/348989367",
        "date": "· 8-22"
    },
    {
        "id": 13,
        "src": "https://i1.hdslb.com/bfs/archive/a1faf8bf7074c5187b97baf2870f194d930298bc.jpg@672w_378h_1c_!web-home-common-cover",
        "href": "https://www.bilibili.com/video/BV1Vm42137aM",
        "playVolume": "55.4万",
        "commentVolume": "1831",
        "duration": "28:16",
        "title": "【柯南】服部和工藤新一首次相遇，却吓得没敢和对方打招呼，西瓜带你回顾柯南超经典漫改案件《服部平次vs工藤新一 滑雪场的推理对决》",
        "author": "西瓜说柯南",
        "authorUrl": "https://space.bilibili.com/57608186",
        "date": "· 8-19"
    },
    {
        "id": 14,
        "src": "https://i1.hdslb.com/bfs/archive/fe3761a8d69b221ddc44734ecb02c752b14ba16a.jpg@672w_378h_1c_!web-home-common-cover",
        "href": "https://www.bilibili.com/video/BV18f421e7kD",
        "playVolume": "38.6万",
        "commentVolume": "2145",
        "duration": "12:32",
        "title": "【爆肝】你能从一个方块上通关我的世界吗？",
        "author": "喜欢旅拍的阿玮",
        "authorUrl": "https://space.bilibili.com/44222886",
        "date": "· 昨天"
    },
    {
        "id": 15,
        "src": "https://i1.hdslb.com/bfs/archive/8d4c5200bf28f7cf5be00db0b4d96cfe1a075e3e.jpg@672w_378h_1c_!web-home-common-cover",
        "href": "https://www.bilibili.com/video/BV1nrWme9EmE",
        "playVolume": "6.3万",
        "commentVolume": "7",
        "duration": "02:44",
        "title": "38度XG成都场馆外 连跳6首是什么体验？！",
        "author": "Zoey狐狸",
        "authorUrl": "https://space.bilibili.com/250067078",
        "date": "· 8-23"
    },
    {
        "id": 16,
        "src": "https://i1.hdslb.com/bfs/archive/e4cf8b852b86239336a3719c08d55cb2552f98e6.jpg@672w_378h_1c_!web-home-common-cover",
        "href": "https://www.bilibili.com/video/BV1Af421B7h9",
        "playVolume": "33.4万",
        "commentVolume": "4825",
        "duration": "22:53",
        "title": "西方人反犹却为何必须留着犹太人？【中世纪的犹太人】",
        "author": "卢格杜努姆的奥古斯丁",
        "authorUrl": "https://space.bilibili.com/1346921",
        "date": "· 8-24"
    },
    {
        "id": 17,
        "src": "https://i1.hdslb.com/bfs/archive/71a9b256b892223edc267e5af3c55bc82c618855.jpg@672w_378h_1c_!web-home-common-cover",
        "href": "https://www.bilibili.com/video/BV15n4y1Z7ms",
        "playVolume": "63.7万",
        "commentVolume": "7395",
        "duration": "41:21",
        "title": "【万字拆解】末日降临！灾难片独一档的存在《2012》，看好莱坞是怎么手搓世界末日！——趁着末日赶紧爱",
        "author": "迷影区间",
        "authorUrl": "https://space.bilibili.com/245069296",
        "date": "· 8-24"
    },
    {
        "id": 18,
        "src": "https://i1.hdslb.com/bfs/archive/f7ae95a895b3de904cbe78c9bf0c3d5b2437d55d.jpg@672w_378h_1c_!web-home-common-cover",
        "href": "https://www.bilibili.com/video/BV1b74y1m7bD",
        "playVolume": "31.6万",
        "commentVolume": "377",
        "duration": "01:23",
        "title": "看！国产大飞机首次“身披”五星红旗",
        "author": "央视新闻",
        "authorUrl": "https://space.bilibili.com/456664753",
        "date": "· 8-23"
    },
    {
        "id": 19,
        "src": "https://i1.hdslb.com/bfs/archive/732677e43b384c4711436d195c46c7e8650448cd.jpg@672w_378h_1c_!web-home-common-cover",
        "href": "https://www.bilibili.com/video/BV13W421X7zo",
        "playVolume": "13.4万",
        "commentVolume": "17",
        "duration": "00:35",
        "title": "欢迎XG第八位成员登场",
        "author": "yyNoyy歪歪",
        "authorUrl": "https://space.bilibili.com/1049355617",
        "date": "· 8-23"
    },
    {
        "id": 20,
        "src": "https://i1.hdslb.com/bfs/archive/0fe0d9394b568ff7e429cd6216aad35f160c5f8d.jpg@672w_378h_1c_!web-home-common-cover",
        "href": "https://www.bilibili.com/video/BV1eW421X7JK",
        "playVolume": "157万",
        "commentVolume": "4.2万",
        "duration": "01:17:06",
        "title": "黑神话悟空 第四期",
        "author": "鲤鱼Ace",
        "authorUrl": "https://space.bilibili.com/15634833",
        "date": "· 8-24"
    },
    {
        "id": 21,
        "src": "https://i1.hdslb.com/bfs/archive/a509eab0a9c84e87cc50f35abd40a90680434d22.jpg@672w_378h_1c_!web-home-common-cover",
        "href": "https://www.bilibili.com/video/BV1Cb42147DP",
        "playVolume": "18.4万",
        "commentVolume": "2859",
        "duration": "25:27",
        "title": "香港电影竟如此丧心病狂54：大娱乐家王晶出，左手泡妞右手赌",
        "author": "王知无",
        "authorUrl": "https://space.bilibili.com/1920253",
        "date": "· 23小时前"
    }
];

            export default videoCardDetails;
            