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


module.exports = { 
  saveDietPlans,
  getDietPlans,
};
