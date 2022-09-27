const { Router } = require("express");
const { getFoods, addfood, editFood, deleteFood, } = require("../controller/food.controller");

const router = Router();

router.post("/newFood", addfood);
router.patch("/editFood/:id", editFood);
router.delete("/deleteFood/:id", deleteFood);
router.get("/", getFoods);


module.exports.foodRouter = router;