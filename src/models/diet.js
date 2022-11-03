const { ObjectId } = require("bson");
const mongoose = require("mongoose");

const deitSchema = new mongoose.Schema(
  {
    dietPlan_Id: {
      type: ObjectId,
      required: true,
      trim: true,
    },
    breakfast: [
      {
        type: Array,
        required: true,
      },
    ],
    lunch: [
      {
        type: Array,
        required: true,
      },
    ],
    dinner: [
      {
        type: Array,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Diet", deitSchema);
