module.exports.config = {
	name: "botadmin",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Manage bot admin",
	commandCategory: "config",
	usages: "[list/add/remove] [userID]",
    cooldowns: 5,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.languages = {
    "bn": {
        "listAdmin": '[Admin] Danh sách toàn bộ người điều hành bot: \n\n%1',
        "notHavePermssion": '[Admin] Bạn không đủ quyền hạn để có thể sử dụng chức năng "%1"',
        "addedNewAdmin": '[Admin] Đã thêm %1 người dùng trở thành người điều hành bot:\n\n%2',
        "removedAdmin": '[Admin] Đã gỡ bỏ %1 người điều hành bot:\n\n%2'
    },
    "en": {
        "listAdmin": '[Admin] Admin list: \n\n%1',
        "notHavePermssion": '[Admin] You have no permission to use "%1"',
        "addedNewAdmin": '[Admin] Added %1 Admin :\n\n%2',
        "removedAdmin": '[Admin] Remove %1 Admin:\n\n%2'
    }
}

module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
    const content = args.slice(1, args.length);
    const { threadID, messageID, mentions } = event;
    const { configPath } = global.client;
    const { ADMINBOT } = global.config;
    const { userName } = global.data;
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const mention = Object.keys(mentions);

    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);

    switch (args[0]) {
