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

//create new shopping list
const createShoppingList = async (req,res) => {
  const{userId,dietPlanId,foodList} = req.body

  try{
    const shoppingList = await ShoppingList.create({userId,dietPlanId,foodList})
    res.status(200).json(shoppingList)
  }catch(error){
    res.status(400).json({error:error.message})
  }
}
//get shopping list by id
const getShoppingList = async (req,res) => {
  //const{id} = req.params
  const id = "63665977f62887348b27717d"
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such shopping list'})
  }
  const shoppingList = await ShoppingList.findById(id).populate("foodList.foodId");
  const foodList = shoppingList.foodList;
  
  if(!shoppingList){
    return res.status(404).json({error:'No such shopping list'}) 
  }
  res.status(200).json(foodList)
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
    createShoppingList,
    getShoppingList
};