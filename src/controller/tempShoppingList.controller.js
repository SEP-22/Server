const TempShoppingList = require("../models/tempShoppingList");
const DietPlan = require("../models/dietPlan");
const mongoose = require('mongoose');
const { findOneAndUpdate } = require("../models/user");

const createTempShoppingList = async(req,res) => {
    const{dietPlanId,foodList} = req.body
    try{
        const tempShoppingList = await TempShoppingList.create({dietPlanId,foodList});
        res.status(200).json(tempShoppingList)
    }catch(error){
        res.status(400).json({error:error.message})
    }
};
const createAndSaveShoppingList = async(req,res) => {
    const  {plans}  = req.body;
  
    arr = [];
    const dietPlanId = plans[0].dietPlan_Id;
    plans.forEach((e) => {
      arr.push({
        dietPlan_Id: e.dietPlan_Id,
        breakfast: e.breakfast,
        lunch: e.lunch,
        dinner: e.dinner,
      });
    });
    shoppingListArr = [];
    var compDet = {};
  
    const quotient = Math.floor(7/arr.length);
    const remainder = 7 % arr.length;
  
    console.log(quotient,remainder)
    let newArr = [];
    for (let i = 0; i < quotient; i++) {
      newArr = newArr.concat(arr);
    }
    newArr = newArr.concat(arr.slice(0,remainder))
    console.log(newArr.length)
  
    newArr.forEach((e) => {
      breakfastArr = e.breakfast;
      lunchArr = e.lunch;
      dinnerArr = e.dinner;
      breakfastArr.forEach((br) => {
        let amountLen = br[2].length
        let calorieLen = br[1].length
        let amount = br[2].substring(0,amountLen-2)
        let calorie = br[1].substring(0,calorieLen-4)
        let img = br[3]
  
        if(compDet[br[4]]){
          let oldAmount = compDet[br[4]][0];
          let oldCalorie = compDet[br[4]][1];
          let newAmount = oldAmount + amount*1;
          let newCalorie = oldCalorie + calorie*1;
          compDet[br[4]] = [newAmount,newCalorie,img];
        }else{
          compDet[br[4]] = [amount*1,calorie*1,img];
        }
      });
      lunchArr.forEach((br) => {
        let amountLen = br[2].length
        let calorieLen = br[1].length
        let amount = br[2].substring(0,amountLen-2)
        let calorie = br[1].substring(0,calorieLen-4)
        let img = br[3]
  
        if(compDet[br[4]]){
          let oldAmount = compDet[br[4]][0];
          let oldCalorie = compDet[br[4]][1];
          let newAmount = oldAmount + amount*1;
          let newCalorie = oldCalorie + calorie*1;
          compDet[br[4]] = [newAmount,newCalorie,img];
        }else{
          compDet[br[4]] = [amount*1,calorie*1,img];
        }
      });
      dinnerArr.forEach((br) => {
        let amountLen = br[2].length
        let calorieLen = br[1].length
        let amount = br[2].substring(0,amountLen-2)
        let calorie = br[1].substring(0,calorieLen-4)
        let img = br[3]
  
        if(compDet[br[4]]){
          let oldAmount = compDet[br[4]][0];
          let oldCalorie = compDet[br[4]][1];
          let newAmount = oldAmount + amount*1;
          let newCalorie = oldCalorie + calorie*1;
          compDet[br[4]] = [newAmount,newCalorie,img];
        }else{
          compDet[br[4]] = [amount*1,calorie*1,img];
        }
      });
  
    });
    resultArr = []
    for (property in compDet) {
      resultArr.push([property].concat(compDet[property]));
   }
    try{
        const isShoppingList = await TempShoppingList.find({dietPlanId:dietPlanId});
        if(isShoppingList.length){
          console.log(isShoppingList);
          console.log("exists");
          const updatetempShoppingList = await TempShoppingList.findOneAndUpdate({dietPlanId:dietPlanId},{foodList:resultArr},{new:true});
          res.status(200).json(updatetempShoppingList);
        }
        else{
          console.log("Doesn't exist");
          const tempShoppingList = await TempShoppingList.create({dietPlanId:dietPlanId,foodList:resultArr});
          res.status(200).json(tempShoppingList)
        }
        
    }catch(error){
        res.status(400).json({error:error.message})
    }
};
const getShoppingListsFromUserId = async(req,res) =>{
  const userId = req.params.id;
  result = [];
  shopLists = [];
  try{
    const dietPlanIds = await DietPlan.find({user_Id:userId});
    dietPlanIds.forEach((plan) => {
      result.push(plan._id);
    })
    const shoppingLists = await TempShoppingList.find({dietPlanId:{$in:result}}).populate("dietPlanId")
    
    shoppingLists.forEach((eachList) => {
      shopLists.push([eachList.dietPlanId._id,eachList.foodList,eachList.dietPlanId.name])
    })
    res.status(200).json(shopLists);
  }catch(error){
    res.status(400).json({error:error.message})
  }
};
module.exports = {
    createTempShoppingList,
    createAndSaveShoppingList,
    getShoppingListsFromUserId
}