const Diet = require("../models/diet");
const DietPlan = require("../models/dietPlan");
const mongoose = require("mongoose");
const { count } = require("../models/diet");

//save dietplans
const saveDietPlans = async (req, res) => {
  const { plans } = req.body;

  arr = [];
  plans.forEach((e) => {
    arr.push({
      dietPlan_Id: e.dietPlan_Id,
      breakfast: e.breakfast,
      lunch: e.lunch,
      dinner: e.dinner,
    });
  });

  const _id = arr[0].dietPlan_Id;


  try {
    const diet = await Diet.insertMany(arr);
    if (diet) {
      let dietIDs = [];
      for (let index = 0; index < diet.length; index++) {
        let ele = diet[index];
        let diet_id = ele._id.toString();
        dietIDs.push(diet_id);
      }

      const dietPlan = await DietPlan.findByIdAndUpdate(
        { _id },
        { dietIDs: dietIDs },
        { new: true }
      );
      res.status(200).json(dietPlan);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDietPlans = async (req, res) => {
  // console.log("roar");
  // res.status(200).json({msg:"working"});
  const id = "63526d0b8dceb61e22b1da5e";
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such diet plan" });
  }
  const dietPlan = await Diet.find({ dietPlan_Id: id });

  if (!dietPlan) {
    return res.status(404).json({ error: "No such diet plan" });
  }
  //sending only first 3 -- change this later
  const reply = dietPlan.slice(0,3);
  res.status(200).json(reply)
};

const saveShoppingList = async(req,res) => {
  const  plans  = req.body;
  // const plans  = [{dietPlan_Id:1,breakfast:[["bf",1,2],["bf1",1,2]],lunch:[["ln",1,2],["ln1",1,2]],dinner:[["dn",1,2],["dn1",1,2]]},
  //                 {dietPlan_Id:2,breakfast:[["bf2",1,2],["bf21",1,2]],lunch:[["ln2",1,2],["ln21",1,2]],dinner:[["dn2",1,2],["dn21",1,2]]}];

  arr = [];
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


  //creating newarray with 7 dietplans
  let newArr = [];
  for (let i = 0; i < quotient; i++) {
    newArr = newArr.concat(arr);
  }
  newArr = newArr.concat(arr.slice(0,remainder))


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

      if(compDet[br[4]]){
        //console.log("magulaaa",compDet[br[4]])
        let oldAmount = compDet[br[4]][0];
        let oldCalorie = compDet[br[4]][1];
        let newAmount = oldAmount + amount*1;
        let newCalorie = oldCalorie + calorie*1;
        compDet[br[4]] = [newAmount,newCalorie];
      }else{
        compDet[br[4]] = [amount*1,calorie*1];
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

      if(compDet[br[4]]){
        //console.log("magulaaa",compDet[br[4]])
        let oldAmount = compDet[br[4]][0];
        let oldCalorie = compDet[br[4]][1];
        let newAmount = oldAmount + amount*1;
        let newCalorie = oldCalorie + calorie*1;
        compDet[br[4]] = [newAmount,newCalorie];
      }else{
        compDet[br[4]] = [amount*1,calorie*1];
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

      if(compDet[br[4]]){
        //console.log("magulaaa",compDet[br[4]])
        let oldAmount = compDet[br[4]][0];
        let oldCalorie = compDet[br[4]][1];
        let newAmount = oldAmount + amount*1;
        let newCalorie = oldCalorie + calorie*1;
        compDet[br[4]] = [newAmount,newCalorie];
      }else{
        compDet[br[4]] = [amount*1,calorie*1];
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
  res.status(200).json(compDet);
}
module.exports = { 
  saveDietPlans,
  getDietPlans,
  saveShoppingList,
};
