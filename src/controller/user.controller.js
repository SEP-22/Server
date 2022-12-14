const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const mongoose = require("mongoose");
const validator = require("validator");
const DietPlan = require("../models/dietPlan");
const Reminder = require("../models/reminder");


const ACCESS_TOKEN_SECRET_KEY = process.env.ACCESS_TOKEN_SECRET_KEY;
const REFRESH_TOKEN_SECRET_KEY = process.env.REFRESH_TOKEN_SECRET_KEY;
const JWT_AT_ET = process.env.JWT_AT_ET || "60s";
const JWT_RT_ET = process.env.JWT_RT_ET || "24h";

const signUp = async (req, res) => {
  const user = new User(req.body);
  try {
    const newUser = await user.save();
    const reminder = await Reminder.create({user_Id: newUser._id});
    // const token = await user.generateAuthToken();
    res.status(201).send({ newUser, success: true });
  } catch (e) {
    console.log(e);
    res.status(400).send({ e, success: false });
  }
};

const signIn = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await User.findOne({ email: username });

    if (user) {
      let isMatched = await bcrypt.compare(password, user.password);

      if (isMatched) {
        const currentUser = {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
        const accessToken = jwt.sign(currentUser, ACCESS_TOKEN_SECRET_KEY, {
          expiresIn: JWT_AT_ET,
        });
        // console.log(accessToken);
        const refreshToken = jwt.sign(currentUser, REFRESH_TOKEN_SECRET_KEY, {
          expiresIn: JWT_RT_ET,
        });
        // console.log(refreshToken);
        const newU = await User.findByIdAndUpdate(
          user._id,
          { refreshToken },
          { new: true }
        );

        const newCurrentUser = {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          token:accessToken,
        };

        res.header("x-access-token", accessToken);
        res.header("x-refresh-token", refreshToken);
        res.send({ message: "success", user: newCurrentUser });
      } else {
        res.send({ message: "invalid email or password" });
      }
    } else {
      res.send({ message: "invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ ...error });
  }
};

const signOut = async (req, res) => {
  try {
    const user = req.user;
    User.findOne({ email: user.email }, async (err, result) => {
      if (err) return res.status(500).json({ message: err });
      await User.findByIdAndUpdate(result._id, { refreshToken: "" });
      res.status(200).json({ message: "success" });
    });
  } catch (error) {
    res.send(500);
  }
};

//get prefered foods
const getPreferedFoods = async (req, res) => {
  const _id = req.body.user_Id;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).json({ error: "No such user" });
  }

  const user = await User.findById(_id);
  if (!user || user === null) {
    return res.status(400).json({ error: "Failed to find prefered foods" });
  }
  res.status(200).json({ preferedFoods: user.preferedFoods });
};

//save the prefered foods selected by the users - array of food _ids
const setPreferedFoods = async (req, res) => {
  const _id = req.body.user_Id;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).json({ error: "No such user" });
  }

  const user = await User.findByIdAndUpdate(
    { _id },
    { preferedFoods: req.body.foods },
    { new: true }
  );
  if (!user) {
    return res.status(400).json({ error: "Failed to update prefered foods" });
  }
  res.status(200).json(user);
};

//check whether user has an active diet plan - if yes returns true and Active Plan _id - if no returns false
const haveActiveDietPlan = async (req, res) => {
  const _id = req.body.user_Id;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).json({ error: "No such user" });
  }

  try {
    const user = await User.findById(_id);

    if (!user || user === null) {
      return res.status(400).json({ error: "User not found" });
    } else {
      if (!user.activeDietPlan || user === null) {
        data = { active: false };
      } else {
        const dp = await DietPlan.findById(user.activeDietPlan);
        if (!dp || !dp.dietIDs || dp.dietIDs.length === 0) {
          data = { active: false };
        } else {
          data = { active: true, activePlan_Id: user.activeDietPlan };
        }
      }
      res.status(200).json(data);
    }
  } catch (err) {
    return res.status(400).json(err);
  }
};


//update active plan _id
const updateActiveDietPlan = async (req, res) => {
  const _id = req.body.user_Id;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).json({ error: "No such user" });
  }

  const user = await User.findByIdAndUpdate(
    { _id },
    { activeDietPlan: req.body.activePlan_Id },
    { new: true }
  );

  if (!user) {
    return res.status(400).json({ error: "Failed to update active plan" });
  }
  res.status(200).json(user);
};

//update userprofile details
const editName = async (req, res) => {
  const _id = req.body.userId;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({ error: "No such user" });
  }
  const user = await User.findByIdAndUpdate(
    { _id },
    { name: req.body.name },
    { new: true }
  );
  if (!user) {
    return res.status(400).json({ error: "Failed to update profile details" });
  }
  res.status(200).json(user);
};

const editPhone = async (req, res) => {
  const _id = req.body.userId;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({ error: "No such user" });
  }
  const user = await User.findByIdAndUpdate(
    { _id },
    { phone: req.body.phone },
    { new: true }
  );
  if (!user) {
    return res.status(400).json({ error: "Failed to update profile details" });
  }
  res.status(200).json(user);
};

const editEmail = async (req, res) => {
  const _id = req.body.userId;
  const _email = req.body.email;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({ error: "No such user" });
  }
  if (!validator.isEmail(req.body.email)) {
    return res.status(400).json({ error: "Invalid Email" });
  } else {
    const existingUser = await User.findOne({ email: _email });

    if (!existingUser) {
      const user = await User.findByIdAndUpdate(
        { _id },
        { email: _email },
        { new: true }
      );
      if (!user) {
        return res
          .status(400)
          .json({ error: "Failed to update profile details" });
      }
      res.status(200).json(user);
    } else {
      return res.status(404).json({ error: "This email address is already in use. Please pick a different email address!" });
    }
  }
};
const editPassword = async (req, res) => {
  const _id = req.body.userId;
  const _password = await bcrypt.hash(req.body.password, 8);
  // _password = await bcrypt.hash(_password, 8);
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({ error: "No such user" });
  }
  const user = await User.findByIdAndUpdate(
    { _id },
    { password: _password },
    { new: true }
  );
  if (!user) {
    return res.status(400).json({ error: "Failed to update the password" });
  }
  res.status(200).json(user);
};
//////////////////////// ING ////////////////////////

const users = [
  {
    name: "jimmy",
  },
  {
    name: "gimhan",
  },
];

const getUsers = async (req, res) => {
  try {
    res.send(users);
  } catch (error) {
    res.send("error");
  }
};

const getUserByID = async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.findById(_id).populate("activeDietPlan");
    res.send(user);
  } catch (error) {
    res.send("error");
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.findOne({email});
    if (user) {
      res.send(user);
    }else{
      res.send({});
    }
  } catch (error) {
    res.send("error");
  }
};

const getASingleUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await User.findById(_id, {
      name: true,
      email: true,
      password: true,
      phone: true,
    });
    res.status(200).json(user);
  } catch {
    res.status(404).json({ error: "No such user exists" });
  }
};

//////////////////////// TESTING ////////////////////////

module.exports = {
  signUp,
  signIn,
  signOut,
  getUsers,
  setPreferedFoods,
  haveActiveDietPlan,
  updateActiveDietPlan,
  getPreferedFoods,
  getUserByID,
  getASingleUser,
  editName,
  editPhone,
  editEmail,
  editPassword,
  getUserByEmail,
};
