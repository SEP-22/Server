const DietPlan = require("../models/dietPlan");
const mongoose = require("mongoose");

//save inputs from user
const getInputs = async (req, res) => {
  const {
    user_Id,
    dob,
    gender,
    activity,
    intention,
    height,
    weight,
    diabetics,
    cholesterol,
    bloodpressure,
  } = req.body;

  try {
    const dietPlan = await DietPlan.create({
      user_Id,
      dob,
      gender,
      activity,
      intention,
      height,
      weight,
      diabetics,
      cholesterol,
      bloodpressure,
    });
    res.status(200).json(dietPlan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getInputs,
};
