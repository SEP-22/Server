const DietPlan = require("../models/dietPlan");
const Diet = require("../models/diet");
const mongoose = require("mongoose");
const { PythonShell } = require("python-shell");
const Food = require("../models/food");
const User = require("../models/user");
const TempShoppingList = require("../models/tempShoppingList");

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
    name,
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
      name,
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
  console.log(dp);
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
    const dietPlan = await DietPlan.find({ user_Id: _id }).populate("dietIDs");

    if (!dietPlan) {
      res.status(404).send({ success: false });
    }
    res.status(200).send(dietPlan);
  } catch (error) {
    res.status(400).send({ success: false });
  }
};
const getNonActivePlans = async (req, res) => {
  const _id = req.params.id;
  //const activePlanId = req.body.activePlanId;
  try {
    const user = await User.findById(_id);
    const activePlanId = user.activeDietPlan;
    const dietPlan = await DietPlan.find({
      user_Id: _id,
      _id: { $ne: activePlanId },
    }).populate("dietIDs");
    if (!dietPlan) {
      res.status(404).send({ success: false });
    } else {
      res.status(200).send(dietPlan);
    }
  } catch (error) {
    res.status(400).send({ success: false });
  }
};

const getActivePlans = async (req, res) => {
  const _id = req.params.id;
  //const activePlanId = req.body.activePlanId;
  try {
    const user = await User.findById(_id);
    const activePlanId = user.activeDietPlan;
    const dietPlan = await DietPlan.find({
      user_Id: _id,
      _id: activePlanId,
    }).populate("dietIDs");
    if (!dietPlan) {
      res.status(404).send({ success: false });
    } else {
      res.status(200).send(dietPlan);
    }
  } catch (error) {
    res.status(400).send({ success: false });
  }
};

const getWeeklyDietPlanActive = async (req, res) => {
  const _id = req.params.id;
  //const activePlanId = req.body.activePlanId;
  try {
    const user = await User.findById(_id);
    const activePlanId = user.activeDietPlan;
    const dietPlan = await DietPlan.find({
      user_Id: _id,
      _id: activePlanId,
    }).populate("dietIDs");
    if (!dietPlan) {
      res.status(404).send({ success: false });
    } else {
      //formatting data
      const formattedData = [];
      dietPlan.forEach((element) => {
        var plan = [];
        var diets = [];
        var sevenDayArr = [];
        const dietPlanData = element.dietIDs;
        plan.push(element._id);
        plan.push(element.name);

        dietPlanData.forEach((diet) => {
          diets.push([diet.breakfast, diet.lunch, diet.dinner]);
        });
        const quotient = Math.floor(7 / dietPlanData.length);
        const remainder = 7 % dietPlanData.length;
        for (let i = 0; i < quotient; i++) {
          sevenDayArr = sevenDayArr.concat(diets);
        }
        sevenDayArr = sevenDayArr.concat(diets.slice(0, remainder));
        plan.push(sevenDayArr);
        formattedData.push(plan);
      });

      res.status(200).send(formattedData);
    }
  } catch (error) {
    res.status(400).send({ success: false });
  }
};

const getWeeklyDietPlansNonActive = async (req, res) => {
  const _id = req.params.id;
  //const activePlanId = req.body.activePlanId;
  try {
    const user = await User.findById(_id);
    const activePlanId = user.activeDietPlan;
    const dietPlan = await DietPlan.find({
      user_Id: _id,
      _id: { $ne: activePlanId },
    }).populate("dietIDs");
    if (!dietPlan) {
      res.status(404).send({ success: false });
    } else {
      const formattedData = [];
      dietPlan.forEach((element) => {
        var plan = [];
        var diets = [];
        var sevenDayArr = [];
        const dietPlanData = element.dietIDs;
        plan.push(element._id);
        plan.push(element.name);

        dietPlanData.forEach((diet) => {
          diets.push([diet.breakfast, diet.lunch, diet.dinner]);
        });
        const quotient = Math.floor(7 / dietPlanData.length);
        const remainder = 7 % dietPlanData.length;
        for (let i = 0; i < quotient; i++) {
          sevenDayArr = sevenDayArr.concat(diets);
        }
        sevenDayArr = sevenDayArr.concat(diets.slice(0, remainder));
        plan.push(sevenDayArr);
        formattedData.push(plan);
      });
      res.status(200).send(formattedData);
    }
  } catch (error) {
    res.status(400).send({ success: false });
  }
};

const getAllPlanNamesAndStateByUserId = async (req, res) => {
  const _id = req.params.id;
  const map = new Map();
  try {
    const user = await User.findById(_id);
    const activePlanId = user.activeDietPlan;
    const activePlanDetails = await DietPlan.findById(activePlanId);
    //console.log(activePlanDetails)
    if (activePlanDetails) {
      map[activePlanId] = [activePlanDetails.name, true];
    }
    const dietPlan = await DietPlan.find({
      user_Id: _id,
      _id: { $ne: activePlanId },
    });
    if (dietPlan) {
      dietPlan.forEach((plan) => {
        map[plan._id] = [plan.name, false];
      });
    }
    res.status(200).json(map);
  } catch (error) {
    res.status(400).send({ success: false });
  }
};
const getWeeklyDietPlanById = async (req, res) => {
  const _id = req.params.id;
  //const activePlanId = req.body.activePlanId;
  try {
    //const user = await User.findById(_id);
    //const activePlanId = user.activeDietPlan;
    const dietPlan = await DietPlan.find({ _id: _id }).populate("dietIDs");
    if (!dietPlan) {
      res.status(404).send({ success: false });
    } else {
      //formatting data
      const formattedData = [];
      dietPlan.forEach((element) => {
        var plan = [];
        var diets = [];
        var sevenDayArr = [];
        const dietPlanData = element.dietIDs;
        plan.push(element._id);
        plan.push(element.name);

        dietPlanData.forEach((diet) => {
          diets.push([diet.breakfast, diet.lunch, diet.dinner]);
        });
        const quotient = Math.floor(7 / dietPlanData.length);
        const remainder = 7 % dietPlanData.length;
        for (let i = 0; i < quotient; i++) {
          sevenDayArr = sevenDayArr.concat(diets);
        }
        sevenDayArr = sevenDayArr.concat(diets.slice(0, remainder));
        plan.push(sevenDayArr);
        formattedData.push(plan);
      });

      res.status(200).send(formattedData);
    }
  } catch (error) {
    res.status(400).send({ success: false });
  }
};
const deleteDietPlan = async (req, res) => {
  const _id = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(400).json({ error: "No such diet plan" });
    }

    const dietPlanDet = await DietPlan.findById(_id, { dietIDs: true });
    //const shoppingList = await TempShoppingList.find({dietPlanId:_id});
    var dietIdList = dietPlanDet.dietIDs;
    var length = dietIdList.length;
    var count = 0;
    const deletePlan = await DietPlan.findOneAndDelete({ _id: _id });
    if (deletePlan) {
      while (count < length) {
        const deleteDiet = await Diet.findByIdAndDelete(dietIdList[count]);
        console.log(dietIdList[0], "deleted");
        count += 1;
      }
      const slDelete = await TempShoppingList.findOneAndDelete({
        dietPlanId: _id,
      });
    }
    if (!deletePlan) {
      return res.status(400).json({ error: "No such diet plan" });
    }
    res.status(200).json({ dietIdList: dietIdList });
  } catch (error) {
    res.status(400).send({ success: false });
  }
};

const updateActiveDietPlan = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such diet plan" });
  }

  const dp = await DietPlan.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
    { new: true }
  );

  if (!dp) {
    return res.status(400).json({ error: "No such diet plan" });
  }

  res.status(200).json(dp);
};

module.exports = {
  getInputs,
  getDietPlanById,
  generateDietPlan,
  getDietPlanByUserId,
  getNonActivePlans,
  getActivePlans,
  getWeeklyDietPlanActive,
  getWeeklyDietPlansNonActive,
  getAllPlanNamesAndStateByUserId,
  getWeeklyDietPlanById,
  deleteDietPlan,
  updateActiveDietPlan,
};
