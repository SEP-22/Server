const { Router } = require("express");
const { userRouter } = require("./user.routes");
const { foodRouter } = require("./food.routes");
const { imageRouter } = require("./image.routes");


const router = Router();

router.use("/user", userRouter);
router.use("/food", foodRouter);
router.use("/image", imageRouter);

module.exports = router;
