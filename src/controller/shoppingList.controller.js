const ShoppingList = require("../models/shoppingList");
const Food = require("../models/food");
const mongoose = require('mongoose')

//getShoppingList
// const getShoppingList = async(req, res) => {
//     try{
//         const shoppingListId = req.body.id;
//         //const shopList = await ShoppingList.findById(mongoose.Types.ObjectId(shoppingListId));
//         res.status(200).json({ message: "success" });
//     }catch(error) {
//         res.send(500);
//     }
    
// }
//////////////////////// TESTING ////////////////////////

const test = [
    {
      name: "jimmy",
    },
    {
      name: "gimhan",
    },
  ];
  
const getLists = async (req,res)=>{
try {
    res.send(test)
} catch (error) {
    res.send("error")
}
}
  
  //////////////////////// TESTING ////////////////////////
// get all food
const getListById = async (req, res) => {
    const foodId = req.query.id;
    const foods = await Food.findById({});
  
    res.status(200).json(foods);
  };
    

module.exports = {
    //getShoppingList,
    getLists,
    gettestsl,
};