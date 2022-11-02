const { Router } = require("express");
const {
  getInputs,
  getDietPlanById,
} = require("../controller/dietPlan.controller");
const auth = require("../middleware/auth");


const router = Router();

router.post("/quiz", auth, getInputs);
router.get("/:id", getDietPlanById);



module.exports.dietPlanRouter = router;