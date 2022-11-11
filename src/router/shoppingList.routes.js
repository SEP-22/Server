const { Router } = require("express");
const { createShoppingList,getShoppingList} = require("../controller/shoppingList.controller");
const { createTempShoppingList, createAndSaveShoppingList, getShoppingListsFromUserId } = require("../controller/tempShoppingList.controller");
const auth = require("../middleware/auth");

const router = Router();

//router.get("/getShoppingList", getShoppingList);
//router.get("/getLists" , getLists)
//router.get("/testwithfood", gettestsl)
router.post('/createsl',createShoppingList)
router.get('/getShoppingList',getShoppingList)
router.post('/createTempSL',createTempShoppingList)
router.post('/createAndSaveShoppingList',createAndSaveShoppingList)
router.get('/getShoppingListsFromUserId',getShoppingListsFromUserId)

module.exports.shoppingListRouter = router;