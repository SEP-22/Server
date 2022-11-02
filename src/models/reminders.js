const { ObjectId } = require("bson");
const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const remindersSchema = new mongoose.Schema(
  {
    user_Id: {
      type: ObjectId,
      required: true,
      trim: true,
    },
    breakfast: {
      type: Date,
      required: false,
    },
    lunch: {
      type: Date,
      required: false,
    },
    dinner: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reminders", remindersSchema);
