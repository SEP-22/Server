const multer = require("multer");

const upload = multer({
	limits: {
		//TODO: limit size
		fileSize: 1000000,
	},
});

module.exports = upload;
