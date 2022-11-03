const { Router } = require("express");
const {
  getInputs,
  getDietPlanById,
  generateDietPlan,
} = require("../controller/dietPlan.controller");
const auth = require("../middleware/auth");

const router = Router();

router.post("/quiz", auth, getInputs);
router.get("/:id", getDietPlanById);
router.post("/generatedietplan", generateDietPlan)



module.exports.dietPlanRouter = router;