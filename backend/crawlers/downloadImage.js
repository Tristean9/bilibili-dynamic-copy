const axios = require("axios");
const fs = require("fs");
const path = require("path");

const downloadImage = async (url, outputPath) => {
	try {
		const response = await axios({
			url,
			method: "GET",
			responseType: "stream",
		});

		const writer = fs.createWriteStream(outputPath);

		response.data.pipe(writer);

		return new Promise((resolve, reject) => {
			writer.on("finish", resolve);
			writer.on("error", reject);
		});
	} catch (error) {
		console.error("Erro downloading the iamge", error.message);
	}
};

module.exports = downloadImage