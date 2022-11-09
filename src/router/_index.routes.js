const { Router } = require("express");
const { userRouter } = require("./user.routes");
const { foodRouter } = require("./food.routes");
// const { imageRouter } = require("./image.routes");
const { dietPlanRouter } = require("./dietPlan.routes");
const { shoppingListRouter } = require("./shoppingList.routes")


const router = Router();

router.use("/user", userRouter);
router.use("/food", foodRouter);
// router.use("/image", imageRouter);
router.use("/dietPlan", dietPlanRouter)
router.use("/shoppingList" , shoppingListRouter)

module.exports = router;
