const { Router } = require("express");
const {
  getFoods,
  addfood,
  editFood,
  deleteFood,
  foodsByCategory,
  foodForCholesterol,
  foodForDiabetics,
  foodForHighBloodPressure,
} = require("../controller/food.controller");
const auth = require("../middleware/auth");

const router = Router();

router.post("/newFood", auth, addfood);
router.patch("/editFood/:id", auth, editFood);
router.delete("/deleteFood/:id", auth, deleteFood);
router.get("/allfoods", getFoods);
router.get("/foodbycategory", auth, foodsByCategory);
router.get("/foodforbloodpressure",foodForHighBloodPressure)
router.get("/foodfordiabetics", foodForDiabetics)
router.get("/foodforcholesterol",  foodForCholesterol)

module.exports.foodRouter = router;
