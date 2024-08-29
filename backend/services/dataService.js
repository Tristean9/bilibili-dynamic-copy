const db = require("../config/db");

const saveData = (data, createTableQuery, insertQuery) => {
	return new Promise((resolve, reject) => {
		// 第一步：创建表（如果不存在）
		db.query(createTableQuery, (createErr) => {
			if (createErr) {
				return reject(createErr);
			}

			// 第二步：插入数据
			db.query(
				insertQuery,
				[data.map((item) => Object.values(item))],
				(insertErr, result) => {
					if (insertErr) {
						return reject(insertErr);
					}

					return resolve(result);
				}
			);
		});
	});
};

const getTableData = async (tableName, counts) => {
	const query = `
    SELECT * FROM ${tableName}
    ORDER BY id DESC
    LIMIT ${counts}`;

	try {
		const results = await new Promise((resolve, reject) => {
			db.query(query, (err, results) => {
				if (err) {
					return reject(err);
				}
				resolve(results);
			});
		});
		return results;
	} catch (error) {
		console.error("获取数据失败:", error);
		throw error;
	}
};

const getData = async () => {
	const carouselData = await getTableData("carousel", 9);
    const videoCardsData = await getTableData("videoCards", 21);
    
    // console.log("carouselData:", carouselData);
    

	return {
		carouselData: carouselData,
		videoCardsData: videoCardsData,
	};
};

module.exports = { saveData, getData };
