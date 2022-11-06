const { Router } = require("express");
const {
  getInputs,
  getDietPlanById,
  generateDietPlan,
} = require("../controller/dietPlan.controller");
const {saveDietPlans} = require("../controller/diet.controller")
const auth = require("../middleware/auth");

const router = Router();

router.post("/quiz", auth, getInputs);
router.get("/:id", getDietPlanById);
router.post("/generatedietplan", generateDietPlan)
router.post("/savedietplan", saveDietPlans)



module.exports.dietPlanRouter = router;