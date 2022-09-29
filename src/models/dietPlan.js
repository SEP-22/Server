const { ObjectId } = require("bson");
const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const deitPlanSchema = new mongoose.Schema(
  {
    user_Id: {
      type: ObjectId,
      required: true,
      trim: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: [
        "female",
        "male",
      ],
    },
    activity: {
        type: String,
        required: true,
        enum: [
          "verylight",
          "light",
          "moderate",
          "heavy",
          "veryheavy",
        ],
    },
    intention: {
        type: String,
        required: true,
        enum: [
          "loose",
          "maintain",
          "gain",
        ],
    },
    height: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    // active: {
    //   type: Boolean,
    // },
    // dietIDs : {
    //   type: ObjectId
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DietPlan", deitPlanSchema);