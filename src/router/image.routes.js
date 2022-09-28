const { Router } = require("express");
const router = Router();
const { addImage } = require("../controller/image.controller");
const upload = require("../middleware/fileUpload");

router.post("/", upload.single("image"), addImage);

module.exports.imageRouter = router;
