const Food = require("../models/food");
const mongoose = require('mongoose')

// get all food
const getFoods = async (req, res) => {
  try {
    const foods = await Food.find({});

    res.status(200).json(foods);
  } catch (error) {
    res.status(400).send(error);
  }
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
    Vegetables_Fruits: Vegetables_Fruits,
    StarchyFood: StarchyFood,
    Proteins: Proteins,
    Dairy_Fat: Dairy_Fat,
    Sugar: Sugar,
  };

  res.status(200).json(data);
};


//get food good for highbloodpressure
const foodForHighBloodPressure = async (req, res) => {
  const HighBloodPressure = await Food.find({
    bloodpressure: true,
  });

  data = {
    HighBloodPressure: HighBloodPressure,
  };

  res.status(200).json(data);
};


//get food good for diabetics
const foodForDiabetics = async (req, res) => {
  const Diabetics = await Food.find({
    diabetics: true,
  });

  data = {
    Diabetics: Diabetics,
  };

  res.status(200).json(data);
};


//get food good for cholesterol
const foodForCholesterol = async (req, res) => {
  const Cholesterol = await Food.find({
    cholesterol: true,
  });

  data = {
    Cholesterol: Cholesterol,
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
    // console.log(food);
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

const getFoodById = async (req,res) => {
  const  _id  = req.params.id;
  
  if(!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({error: "Food does not exist!"});
  }
  const food = await Food.findById(_id);
  if (!food) {
    return res.status(404).json({error: "Food does not exist!"});
  }
  return res.status(200).json(food);
}

module.exports = {
  getFoods,
  addfood,
  editFood,
  deleteFood,
  foodsByCategory,
  foodForCholesterol,
  foodForDiabetics,
  foodForHighBloodPressure,
  getFoodById,
};
