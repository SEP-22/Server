const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    cal_per_gram: {
      type: Number,
      required: true,
    },
    diabetics: {
      type: Boolean,
      required: true,
    },
    cholesterol: {
      type: Boolean,
      required: true,
    },
    bloodpressure: {
      type: Boolean,
      required: true,
    },
    category: {
      type: String,
      enum: [
        "Vegetables",
        "Fruits",
        "Starchy food",
        "Proteins",
        "Dairy",
        "Fats and Sugar",
      ],
      required: true,
    },
    protein: {
      type: Number,
      required: true,
    },
    fat: {
      type: Number,
      required: true,
    },
    fiber: {
      type: Number,
      required: true,
    },
    carbs: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Food", foodSchema);
