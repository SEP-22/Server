const TempShoppingList = require("../models/tempShoppingList");
const DietPlan = require("../models/dietPlan");
const mongoose = require('mongoose')

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
    //console.log(plans);
    // const plans  = [{dietPlan_Id:1,breakfast:[["bf",1,2],["bf1",1,2]],lunch:[["ln",1,2],["ln1",1,2]],dinner:[["dn",1,2],["dn1",1,2]]},
    //                 {dietPlan_Id:2,breakfast:[["bf2",1,2],["bf21",1,2]],lunch:[["ln2",1,2],["ln21",1,2]],dinner:[["dn2",1,2],["dn21",1,2]]}];
  
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
    //creating newarray with 7 dietplans
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
      //breakfast loop
      breakfastArr.forEach((br) => {
        //shoppingListArr.push(br[2]);
  
        //corr start
        // let len = br[2].length
        // if(compDet[br[4]]){
        //   let temp = compDet[br[4]];
        //   compDet[br[4]] = temp*1 + (br[2].substring(0, len-2))*1;
        //   //document.getElementById("demo2").innerHTML = compDet[br[4]];
        // }else{
        //   compDet[br[4]]=(br[2].substring(0, len-2))*1;
        // }
        //corr end
        let amountLen = br[2].length
        let calorieLen = br[1].length
        let amount = br[2].substring(0,amountLen-2)
        let calorie = br[1].substring(0,calorieLen-4)
        let img = br[3]
  
        if(compDet[br[4]]){
          //console.log("magulaaa",compDet[br[4]])
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
        //shoppingListArr.push(br[2]);
  
        //corr start
        // let len = br[2].length
        // if(compDet[br[4]]){
        //   let temp = compDet[br[4]];
        //   compDet[br[4]] = temp*1 + (br[2].substring(0, len-2))*1;
        //   //document.getElementById("demo2").innerHTML = compDet[br[4]];
        // }else{
        //   compDet[br[4]]=(br[2].substring(0, len-2))*1;
        // }
        //corr end
        let amountLen = br[2].length
        let calorieLen = br[1].length
        let amount = br[2].substring(0,amountLen-2)
        let calorie = br[1].substring(0,calorieLen-4)
        let img = br[3]
  
        if(compDet[br[4]]){
          //console.log("magulaaa",compDet[br[4]])
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
        //shoppingListArr.push(br[2]);
  
        //corr start
        // let len = br[2].length
        // if(compDet[br[4]]){
        //   let temp = compDet[br[4]];
        //   compDet[br[4]] = temp*1 + (br[2].substring(0, len-2))*1;
        //   //document.getElementById("demo2").innerHTML = compDet[br[4]];
        // }else{
        //   compDet[br[4]]=(br[2].substring(0, len-2))*1;
        // }
        //corr end
        let amountLen = br[2].length
        let calorieLen = br[1].length
        let amount = br[2].substring(0,amountLen-2)
        let calorie = br[1].substring(0,calorieLen-4)
        let img = br[3]
  
        if(compDet[br[4]]){
          //console.log("magulaaa",compDet[br[4]])
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
  
    // if(compDet[br[4]]){
    //   let temp = compDet[br[4][0]]; //gram
    //   let temp2 = compDet[br[4][1]]; //cal
    //   compDet[br[4]] = [temp*1 + (br[2].substring(0, len-2))*1,temp2*1 + (br[1].substring(0, len2-4))*1];
    //   //document.getElementById("demo2").innerHTML = compDet[br[4]];
    // }else{
    //   compDet[br[4]]=[(br[2].substring(0, len-2))*1,(br[1].substring(0, len2-4))*1];
    // }
  
  
    //res.status(200).json(shoppingListArr);
    resultArr = []
    for (property in compDet) {
      //console.log(`key= ${property} value = ${compDet[property]}`)
      resultArr.push([property].concat(compDet[property]));
      //console.log(resultArr);
      //console.log(dietPlanId);
   }
    //res.status(200).json(compDet);
    //res.status(200).json({dietPlanId:dietPlanId,foodList:resultArr});
    try{
        const tempShoppingList = await TempShoppingList.create({dietPlanId:dietPlanId,foodList:resultArr});
        res.status(200).json(tempShoppingList)
    }catch(error){
        res.status(400).json({error:error.message})
    }
};
const getShoppingListsFromUserId = async(req,res) =>{
  const userId = req.body.userId;
  result = [];
  try{
    const dietPlanIds = await DietPlan.find({user_Id:userId},'_id');
    dietPlanIds.forEach((plan) => {
      result.push(plan._id);
    })
    //res.status(200).json(result);
    const shoppingLists = await TempShoppingList.find({dietPlanId:{$in:result}})
    res.status(200).json(shoppingLists);
  }catch(error){
    res.status(400).json({error:error.message})
  }
};
module.exports = {
    createTempShoppingList,
    createAndSaveShoppingList,
    getShoppingListsFromUserId
}