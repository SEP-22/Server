const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email!");
        }
      },
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    refreshToken: {
      type: String,
      required: false,
    },
    // tokens: [
    //   {
    //     token: {
    //       type: String,
    //       required: true,
    //     },
    //   },
    // ],
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

// userSchema.methods.generateAuthToken = async function () {
//   const user = this;
//   const token = jwt.sign(
    // { _id: user._id.toString() },
//     process.env.ACCESS_TOKEN_SECRET_KEY
//   );

//   user.tokens = user.tokens.concat({ token });

//   console.log(token);
//   await user.save();
//   return token;
// };

const User = mongoose.model("User", userSchema);

module.exports = User;