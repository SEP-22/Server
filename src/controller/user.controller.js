const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const ACCESS_TOKEN_SECRET_KEY = process.env.ACCESS_TOKEN_SECRET_KEY;
const REFRESH_TOKEN_SECRET_KEY = process.env.REFRESH_TOKEN_SECRET_KEY;
const JWT_AT_ET = process.env.JWT_AT_ET || "60s";
const JWT_RT_ET = process.env.JWT_RT_ET || "24h";

const signUp = async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    // const token = await user.generateAuthToken();
    res.status(201).send({ user });
  } catch (e) {
    res.status(400).send(e);
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
        };
        const accessToken = jwt.sign(currentUser, ACCESS_TOKEN_SECRET_KEY, {
          expiresIn: JWT_AT_ET,
        });
        console.log(accessToken);
        const refreshToken = jwt.sign(currentUser, REFRESH_TOKEN_SECRET_KEY, {
          expiresIn: JWT_RT_ET,
        });
        console.log(refreshToken);
        const newU = await User.findByIdAndUpdate(user._id, { refreshToken },{new:true});
        res.header("x-access-token", accessToken);
        res.header("x-refresh-token", refreshToken);
        res.status(200).json({ message: "success", user: currentUser });
      } else{
        res.status(401).json({ message: "invalid email or password " });
      }
    }else{
      res.status(404).json({ message: "user not found" });
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

//////////////////////// TESTING ////////////////////////

const users = [
  {
    name: "jimmy",
  },
  {
    name: "gimhan",
  },
];

const getUsers = async (req,res)=>{
  try {
    res.send(users)
  } catch (error) {
    res.send("error")
  }
}

//////////////////////// TESTING ////////////////////////

module.exports = {
  signUp,
  signIn,
  signOut,
  getUsers,
};
