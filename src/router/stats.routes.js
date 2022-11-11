const { Router } = require("express");
const {
  getAllDietPlans,
  getTotalCaloriesbyCategory
} = require("../controller/stats.controller");
const auth = require("../middleware/auth");

const router = Router();

router.post("/alldietplans", getAllDietPlans);
router.post("/totalcalbycategory", getTotalCaloriesbyCategory);

module.exports.statsRouter = router;