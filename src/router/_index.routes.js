const { Router } = require("express");
const { userRouter } = require("./user.routes");
const { foodRouter } = require("./food.routes");


const router = Router();

router.use("/user", userRouter);
router.use("/food", foodRouter);

module.exports = router;
