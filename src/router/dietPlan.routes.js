const { Router } = require("express");
const { getInputs } = require("../controller/dietPlan.controller");
const auth = require("../middleware/auth");


const router = Router();

router.post("/quiz", auth, getInputs);



module.exports.dietPlanRouter = router;