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
  getFoodById,
} = require("../controller/food.controller");
const auth = require("../middleware/auth");

const router = Router();

router.post("/newFood", auth, addfood);
router.patch("/editFood/:id", auth, editFood);
router.delete("/deleteFood/:id", auth, deleteFood);
router.get("/allfoods",auth, getFoods);
router.get("/foodbycategory", auth, foodsByCategory);
router.get("/foodforbloodpressure",auth,foodForHighBloodPressure)
router.get("/foodfordiabetics", auth,foodForDiabetics)
router.get("/foodforcholesterol",auth,  foodForCholesterol)
router.get("/foodById/:id",getFoodById);

module.exports.foodRouter = router;
