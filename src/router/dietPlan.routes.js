const { Router } = require("express");
const { getInputs } = require("../controller/dietPlan.controller");

const router = Router();

router.post("/quiz", getInputs);



module.exports.dietPlanRouter = router;