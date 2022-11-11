const DietPlan = require("../models/dietPlan");
const Diet = require("../models/diet");
const mongoose = require("mongoose");
const { PythonShell } = require("python-shell");
const Food = require("../models/food");
const User = require("../models/user")

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

const generateDietPlan = async (req, res) => {
  const _id = req.body.dietPlan_Id;
  // const _id = "636e0e799667497b2a0f4426"

  console.log(_id);

  const dp = await DietPlan.findById(_id);
  console.log(dp)
  //prefered foods update
  const foods = await Food.find({});
  let dietplan = [
    dp.dob.toISOString(),
    dp.gender,
    dp.activity,
    dp.intention,
    dp.height.toString(),
    dp.weight.toString(),
    dp.diabetics.toString(),
    dp.bloodpressure.toString(),
    dp.cholesterol.toString(),
  ].join(",");
  let fd = [];
  for (let i in foods) {
    f = foods[i];
    fd.push(
      [
        f._id,
        f.cal_per_gram.toString(),
        f.diabetics.toString(),
        f.bloodpressure.toString(),
        f.cholesterol.toString(),
        f.category,
        f.image,
        f.name,
      ].join(",")
    );
  }
  PythonShell.run(
    "algo.py",
    { args: [_id, dietplan, fd.join("~")] },
    function (err, results) {
      if (err) {
        console.log(err);
      } else {
        res.json({
          status: true,
          message: results.toString(),
        });
      }
    }
  );

};
//get user diet plans
const getDietPlanByUserId = async (req, res) => {
  const _id = req.params.id;

  try {
    const dietPlan = await DietPlan.find({user_Id:_id}).populate("dietIDs");

    if (!dietPlan) {
      res.status(404).send({ success: false });
    }
    res.status(200).send(dietPlan);
  } catch (error) {
    res.status(400).send({ success: false });
  }
};
const getNonActivePlans = async(req,res) => {
  const _id = req.params.id;
  //const activePlanId = req.body.activePlanId;
  try {
    const user = await User.findById(_id);
    const activePlanId = user.activeDietPlan;
    const dietPlan = await DietPlan.find({user_Id:_id ,_id:{$ne:activePlanId}}).populate("dietIDs");
    if (!dietPlan) {
      res.status(404).send({ success: false });
    }else{
      
      res.status(200).send(dietPlan);
    }
  } catch (error) {
    res.status(400).send({ success: false });
  }
};
const getActivePlans = async(req,res) => {
  const _id = req.params.id;
  //const activePlanId = req.body.activePlanId;
  try {
    const user = await User.findById(_id);
    const activePlanId = user.activeDietPlan;
    const dietPlan = await DietPlan.find({user_Id:_id ,_id:activePlanId}).populate("dietIDs");
    if (!dietPlan) {
      res.status(404).send({ success: false });
    }else{
      
      res.status(200).send(dietPlan);
    }
  } catch (error) {
    res.status(400).send({ success: false });
  }
}

module.exports = {
  getInputs,
  getDietPlanById,
  generateDietPlan,
  getDietPlanByUserId,
  getNonActivePlans,
  getActivePlans,
};
