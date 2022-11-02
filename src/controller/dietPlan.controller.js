const DietPlan = require("../models/dietPlan");
const mongoose = require("mongoose");

//save inputs from user
const getInputs = async (req, res) => {
    console.log("hell");
  const { user_Id, dob, gender, activity, intention, height, weight } =
    req.body;

  try {
    const dietPlan = await DietPlan.create({
      user_Id,
      dob,
      gender,
      activity,
      intention,
      height,
      weight,
    });
    res.status(200).json(dietPlan);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDietPlanById = async (req, res) => {
  const _id = req.params.id;

  try {
    const dietPlan = await DietPlan.findById(_id);

    if (!dietPlan) {
      res.status(404).send({ success: false });
    }
    res.status(200).send({ dietPlan, success: true });
  } catch (error) {
    res.status(400).send({ success: false });
  }
};

module.exports = {
  getInputs,
  getDietPlanById,
};
