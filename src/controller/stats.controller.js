const mongoose = require("mongoose");
const User = require("../models/user");
const DietPlan = require("../models/dietPlan");
const Diet = require("../models/diet");
const Food = require("../models/food");
const { PythonShell } = require("python-shell");

//get number of diet plans for a user
const getAllDietPlans = async (req, res) => {
  const _id = req.body.user_Id;

  try {
    const dietPlan = await DietPlan.find({ user_Id: _id });

    res.status(200).json({ dietPlans: dietPlan.length });
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
    const diets = await Diet.find({ _id: dietPlan.dietIDs });
    const foods = await Food.find({});

    let dp = [];
    for (let j in diets) {
      d = diets[j];
      br = [];
      ln = [];
      dn = [];
      for (let n = 0; n < d.breakfast.length; n++) {
        // br.push([(d.breakfast[n][0], d.breakfast[n][1], d.breakfast[n][2])].join(","));
        br.push(
          [d.breakfast[n][0], d.breakfast[n][1], d.breakfast[n][2]].join(",")
        );
      }
      for (let n = 0; n < d.lunch.length; n++) {
        ln.push([d.lunch[n][0], d.lunch[n][1], d.lunch[n][2]].join(","));
        // console.log([d.lunch[n][0], d.lunch[n][1], d.lunch[n][2]].join(","));
      }
      for (let n = 0; n < d.dinner.length; n++) {
        dn.push([d.dinner[n][0], d.dinner[n][1], d.dinner[n][2]].join(","));
      }
      dp.push([br.join("="), ln.join("="), dn.join("=")].join("%"));
    }

    console.log(dp.join("~"));

    console.log("--------------");

    let fd = [];
    for (let i in foods) {
      f = foods[i];
      fd.push([f._id, f.category].join(","));
    }

    console.log(fd.join("~"));

    // PythonShell.run(
    //   "stats.py",
    //   { args: [ dp, fd.join("~")] },
    //   function (err, results) {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       res.json({
    //         status: true,
    //         message: results.toString(),
    //       });
    //     }
    //   }
    // );

    res.status(200).json(diets);
  } catch (error) {
    res.status(400).send();
  }
};

//get total number of different foods in active diet plan

//get number of days from the user created active diet plan

//get total number of calories

//get most occuring food items in active diet plan

//get total number of users
const getCountofUsers = async (req, res) => {
  User.countDocuments({ role: "user" }, function (err, count) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json({ count: count });
    }
    console.log(count);
  });
};

const getCountofDiets = async (req, res) => {
  Diet.countDocuments({}, function (err, count) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json({ count: count });
    }
    console.log(count);
  });
};

const getCountofDietPlans = async (req, res) => {
  DietPlan.countDocuments({}, function (err, count) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json({ count: count });
    }
    console.log(count);
  });
};

const getCountofFoods = async (req, res) => {
  Food.countDocuments({}, function (err, count) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json({ count: count });
    }
    console.log(count);
  });
};


const getCountADPUsers = async (req, res) => {
  User.countDocuments(
    { activeDietPlan: { $exists: true } },
    function (err, count) {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json({ count: count });
      }
      console.log(count);
    }
  );
};

const getCountofMDPUsers = async (req, res) => {
  try {
    const data = await DietPlan.aggregate([
      {
        $group: {
          _id: "$user_Id",
          count: { $sum: 1 }, // this means that the count will increment by 1
        },
      },
      { $sort: { count: -1 } },
      { $match: { count: { $gt: 1 } } },
    ]);

    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(err);
  }
};

const countFoodsbyCategory = async (req, res) => {
  try {
    const data = await Food.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 }, // this means that the count will increment by 1
        },
      },
    ]);

    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  getAllDietPlans,
  getTotalCaloriesbyCategory,
  getCountofUsers,
  getCountofDiets,
  getCountofDietPlans,
  getCountADPUsers,
  getCountofMDPUsers,
  getCountofFoods,
  countFoodsbyCategory,
};
