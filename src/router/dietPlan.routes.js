const { Router } = require("express");
const {
  getInputs,
  getDietPlanById,
  generateDietPlan,
  getDietPlanByUserId,
  getNonActivePlans,
  getActivePlans,
} = require("../controller/dietPlan.controller");
const {saveDietPlans, getDietPlans} = require("../controller/diet.controller")
const auth = require("../middleware/auth");

const router = Router();

router.post("/quiz", getInputs);
router.get("/getplans/getDietPlans",getDietPlans);
router.get("/:id", getDietPlanById);
router.post("/generatedietplan", generateDietPlan);
router.post("/savedietplan", saveDietPlans);
router.get("/getUserDietPlans/:id",getDietPlanByUserId);
router.get("/getuserplans/nonactive/:id",getNonActivePlans);
router.get("/getuserplans/active/:id",getActivePlans);


module.exports.dietPlanRouter = router;