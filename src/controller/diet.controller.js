const Diet = require("../models/diet");
const mongoose = require("mongoose");

//save dietplans
const saveDietPlans = async (req, res) => {
  const { plans } = req.body;

  console.log(plans)

  arr = [];
  plans.forEach((e) => {
    arr.push({
      dietPlan_Id: e.dietPlan_Id,
      breakfast: e.breakfast,
      lunch: e.lunch,
      dinner: e.dinner,
    });
  });
  console.log(arr);

  try {
    const diet = await Diet.insertMany(arr);
    res.status(200).json(diet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getDietPlans = async (req, res) => {
  // console.log("roar");
  // res.status(200).json({msg:"working"});
  const id = "63526d0b8dceb61e22b1da5e"
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such diet plan'})
  }
  const dietPlan = await Diet.find({dietPlan_Id:id});
  
  if(!dietPlan){
    return res.status(404).json({error:'No such diet plan'}) 
  }
  res.status(200).json(dietPlan)
}  
module.exports = { 
  saveDietPlans,
  getDietPlans 
};
