const { Router } = require("express");
const {
  getAllDietPlans,
  getTotalCaloriesbyCategory,
  getCountofUsers,
  getCountofDiets,
  getCountofDietPlans,
  getCountADPUsers,
  getCountofMDPUsers,
  getCountofFoods,
  countFoodsbyCategory,
} = require("../controller/stats.controller");
const auth = require("../middleware/auth");

const router = Router();

router.post("/alldietplans", getAllDietPlans);
router.post("/totalcalbycategory", getTotalCaloriesbyCategory);
router.get("/getcountofusers", getCountofUsers);
router.get("/getcountofdiets", getCountofDiets);
router.get("/getcountofdietplans", getCountofDietPlans);
router.get("/getcountoffoods", getCountofFoods);
router.get("/getcountofADPusers", getCountADPUsers);
router.get("/getcountofMDPusers", getCountofMDPUsers);
router.get("/countfoodbycateory", countFoodsbyCategory);





module.exports.statsRouter = router;