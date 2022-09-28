const { Router } = require("express");
const { getFoods, addfood, editFood, deleteFood, foodsByCategory, } = require("../controller/food.controller");

const router = Router();

router.post("/newFood", addfood);
router.patch("/editFood/:id", editFood);
router.delete("/deleteFood/:id", deleteFood);
router.get("/allfoods", getFoods);
router.get("/foodbycategory", foodsByCategory);


module.exports.foodRouter = router;