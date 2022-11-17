const mongoose = require("mongoose");
const { ObjectId } = require("bson");

const reminderSchema = new mongoose.Schema(
  {
    user_Id: {
      type: ObjectId,
      required: true,
      trim: true,
    },
    breakfastHour: {
      type: Number,
      required: true,
      default: 8,
    },
    lunchHour: {
      type: Number,
      required: true,
      default: 13,
    },

    dinnerHour: {
      type: Number,
      required: true,
      default: 20,
    },
    breakfastMinute: {
      type: Number,
      required: true,
      default: 0,
    },
    lunchMinute: {
      type: Number,
      required: true,
      default: 0,
    },

    dinnerMinute: {
      type: Number,
      required: true,
      default: 30,
    },

    breakfastOn: {
      type: Boolean,
      required: true,
      default: false,
    },
    lunchOn: {
      type: Boolean,
      required: true,
      default: false,
    },
    dinnerOn: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reminder", reminderSchema);
