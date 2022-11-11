const mongoose = require("mongoose");
const User = require("../models/user");
const DietPlan = require("../models/dietPlan");
const Diet = require("../models/diet");

//get number of diet plans for a user
const getAllDietPlans = async (req, res) => {
    const _id = req.body.user_Id;
  
    try {
      const dietPlan = await DietPlan.find({user_Id: _id});
      
      res.status(200).json({dietPlans : dietPlan.length});
    } catch (error) {
      res.status(400).send();
    }
  };

//get total number of calories from each category - active diet plan
const getTotalCaloriesbyCategory = async (req, res) => {
  const _id = req.body.user_Id;

  try {
    const user = await User.findById(_id);
    const dietPlan = await DietPlan.findById(user.activeDietPlan);
    const diets = await Diet.find({_id : dietPlan.dietIDs })
    
    res.status(200).json(diets);
  } catch (error) {
    res.status(400).send();
  }
};

//get total number of different foods in active diet plan


//get number of days from the user created active diet plan


//get total number of calories 


//get most occuring food items in active diet plan


module.exports = {
    getAllDietPlans,
    getTotalCaloriesbyCategory
  };