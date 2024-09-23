# b站动态复刻

## 项目目的

本项目以学习`React`, `TypeScript`, `Elecron` 和`puppeter`为主, 使用上述三个技术,动态爬取b站首页的内容, 进行复现。

- 使用`puppeter`爬取b站首页当日的内容
- 使用`React`, `TypeScript`进行复现
- 使用`Elecron`打包成一个应用，无需进行服务器运行，直接在进程间通信

## 效果呈现

项目的静态呈现效果如 `https://tristean9.github.io/bilibili-dynamic-copy/`所示

## 项目结构

```plain
bilibili-dynamic-copy
├─ 📁backend
│  ├─ 📁config
│  │  └─ 📄db.js
│  ├─ 📁crawlers
│  │  ├─ 📄carouselCrawler.js
│  │  ├─ 📄dataCrawler.js
│  │  ├─ 📄downloadImage.js
│  │  └─ 📄videoCardsCrawler.js
│  └─ 📁services
│     └─ 📄dataService.js
├─ 📁frontend
│  ├─ 📁public
│  │  └─ 📄vite.svg
│  ├─ 📁src
│  │  ├─ 📁assets
│  │  │  ├─ 📁backgrounds
│  │  │  │  ├─ 📄image1.png
│  │  │  │  ├─ 📄image10.png
│  │  │  │  ├─ 📄image11.png
│  │  │  │  ├─ 📄image12.png
│  │  │  │  ├─ 📄image13.png
│  │  │  │  ├─ 📄image14.png
│  │  │  │  ├─ 📄image15.png
│  │  │  │  ├─ 📄image16.png
│  │  │  │  ├─ 📄image17.png
│  │  │  │  ├─ 📄image18.png
│  │  │  │  ├─ 📄image2.png
│  │  │  │  ├─ 📄image3.png
│  │  │  │  ├─ 📄image4.png
│  │  │  │  ├─ 📄image5.png
│  │  │  │  ├─ 📄image6.png
│  │  │  │  ├─ 📄image7.png
│  │  │  │  ├─ 📄image8.png
│  │  │  │  └─ 📄image9.png
│  │  │  ├─ 📁carousel
│  │  │  │  ├─ 📄image1.png
│  │  │  │  ├─ 📄image2.png
│  │  │  │  ├─ 📄image3.png
│  │  │  │  ├─ 📄image4.png
│  │  │  │  ├─ 📄image5.png
│  │  │  │  ├─ 📄image6.png
│  │  │  │  ├─ 📄image7.png
│  │  │  │  ├─ 📄image8.png
│  │  │  │  ├─ 📄image9.png
│  │  │  │  └─ 📄index.ts
│  │  │  ├─ 📁videoCardDatas
│  │  │  │  ├─ 📄data.ts
│  │  │  │  ├─ 📄image1.png
│  │  │  │  ├─ 📄image10.png
│  │  │  │  ├─ 📄image11.png
│  │  │  │  ├─ 📄image12.png
│  │  │  │  ├─ 📄image13.png
│  │  │  │  ├─ 📄image14.png
│  │  │  │  ├─ 📄image15.png
│  │  │  │  ├─ 📄image16.png
│  │  │  │  ├─ 📄image17.png
│  │  │  │  ├─ 📄image18.png
│  │  │  │  ├─ 📄image19.png
│  │  │  │  ├─ 📄image2.png
│  │  │  │  ├─ 📄image20.png
│  │  │  │  ├─ 📄image21.png
│  │  │  │  ├─ 📄image3.png
│  │  │  │  ├─ 📄image4.png
│  │  │  │  ├─ 📄image5.png
│  │  │  │  ├─ 📄image6.png
│  │  │  │  ├─ 📄image7.png
│  │  │  │  ├─ 📄image8.png
│  │  │  │  └─ 📄image9.png
│  │  │  ├─ 📄logo.png
│  │  │  └─ 📄react.svg
│  │  ├─ 📁components
│  │  │  ├─ 📄Carousel.css
│  │  │  ├─ 📄Carousel.tsx
│  │  │  ├─ 📄Header.tsx
│  │  │  ├─ 📄HeaderBanner.css
│  │  │  ├─ 📄HeaderBanner.tsx
│  │  │  ├─ 📄HeaderBar.css
│  │  │  ├─ 📄HeaderBar.tsx
│  │  │  ├─ 📄HeaderChannel.css
│  │  │  ├─ 📄HeaderChannel.tsx
│  │  │  ├─ 📄Main.css
│  │  │  ├─ 📄Main.tsx
│  │  │  ├─ 📄VideoCard.css
│  │  │  └─ 📄VideoCard.tsx
│  │  ├─ 📁types
│  │  │  └─ 📄VideoCard.tsx
│  │  ├─ 📄App.css
│  │  ├─ 📄App.tsx
│  │  ├─ 📄index.css
│  │  ├─ 📄main.tsx
│  │  ├─ 📄png.d.ts
│  │  └─ 📄vite-env.d.ts
│  ├─ 📄.gitignore
│  ├─ 📄eslint.config.js
│  ├─ 📄index.html
│  ├─ 📄package.json
│  ├─ 📄pnpm-lock.yaml
│  ├─ 📄tsconfig.app.json
│  ├─ 📄tsconfig.json
│  ├─ 📄tsconfig.node.json
│  └─ 📄vite.config.ts
├─ 📄.env
├─ 📄.gitignore
├─ 📄main.js
├─ 📄package.json
├─ 📄pnpm-lock.yaml
├─ 📄preload.js
└─ 📄README.md
```
