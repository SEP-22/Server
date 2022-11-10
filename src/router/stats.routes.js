const { Router } = require("express");
const {
  getAllDietPlans,
} = require("../controller/stats.controller");
const auth = require("../middleware/auth");

const router = Router();

router.post("/alldietplans", getAllDietPlans);


module.exports.statsRouter = router;