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

module.exports = { saveDietPlans };
