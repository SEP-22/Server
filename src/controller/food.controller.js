const Food = require("../models/food");

// get all food
const getFoods = async (req, res) => {
  const foods = await Food.find({});

  res.status(200).json(foods);
};

//get all food by category
const foodsByCategory = async (req, res) => {
  const Vegetables_Fruits = await Food.find({
    category: "Fruits and Vegetables",
  });
  const StarchyFood = await Food.find({ category: "Starchy food" });
  const Proteins = await Food.find({ category: "Proteins" });
  const Dairy_Fat = await Food.find({ category: "Dairy and Fats" });
  const Sugar = await Food.find({ category: "Sugar" });

  data = {
    "Fruits and Vegetables": Vegetables_Fruits,
    "Starchy food": StarchyFood,
    "Proteins": Proteins,
    "Dairy and Fats": Dairy_Fat,
    "Sugar": Sugar,
  };

  res.status(200).json(data);
};

// add new food
const addfood = async (req, res) => {
  const {
    name,
    cal_per_gram,
    category,
    diabetics,
    cholesterol,
    bloodpressure,
    protein,
    fat,
    fiber,
    carbs,
    image,
  } = req.body;

  try {
    const food = await Food.create({
      name,
      cal_per_gram,
      category,
      diabetics,
      cholesterol,
      bloodpressure,
      protein,
      fat,
      fiber,
      carbs,
      image,
    });
    console.log(food);
    res.status(200).json(food);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// edit food
const editFood = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such food" });
  }

  const food = await Food.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!food) {
    return res.status(400).json({ error: "No such food" });
  }

  res.status(200).json(food);
};

// delete food
const deleteFood = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such food" });
  }

  const food = await Food.findOneAndDelete({ _id: id });

  if (!food) {
    return res.status(400).json({ error: "No such food" });
  }

  res.status(200).json(food);
};

module.exports = {
  getFoods,
  addfood,
  editFood,
  deleteFood,
  foodsByCategory,
};
