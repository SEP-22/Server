const { Router } = require("express");
const { getLists, gettestsl} = require("../controller/shoppingList.controller");

const router = Router();

//router.get("/getShoppingList", getShoppingList);
router.get("/getLists" , getLists)
router.get("/testwithfood", gettestsl)

module.exports.shoppingListRouter = router;