const { Router } = require("express");
const {
  getInputs,
  getDietPlanById,
  generateDietPlan,
  getDietPlanByUserId,
  getNonActivePlans,
  getActivePlans,
  getWeeklyDietPlanActive,
  getWeeklyDietPlansNonActive,
  getAllPlanNamesAndStateByUserId,
  getWeeklyDietPlanById,
  deleteDietPlan,
  updateActiveDietPlan
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
///leftt
router.get("/getWeeklyDietPlan/active/:id",getWeeklyDietPlanActive);
router.get("/getWeeklyDietPlan/nonactive/:id",getWeeklyDietPlansNonActive);
router.get("/getAllPlanNamesAndStateByUserId/:id",getAllPlanNamesAndStateByUserId);
router.get("/getWeeklyDietPlanById/:id",getWeeklyDietPlanById);
router.delete("/deleteDietPlan/:id",deleteDietPlan);
router.post("/updateactiveplan/:id",updateActiveDietPlan);


module.exports.dietPlanRouter = router;