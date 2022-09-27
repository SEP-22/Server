const Food = require('../models/food');
const mongoose = require('mongoose')

// get all food
const getFoods = async (req, res) => {
    const foods = await Food.find({})

    res.status(200).json(foods)
}


// add new food
const addfood = async (req, res) => {
    const {name, cal_per_gram, category, diabetics, cholesterol, bloodpressure, protein, fat, fiber, carbs, image } = req.body

    try {
        const food = await Food.create({name, cal_per_gram, category, diabetics, cholesterol, bloodpressure, protein, fat, fiber, carbs, image })
        res.status(200).json(food)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// edit food
const editFood = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such food'})
    }
  
    const food = await Food.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!food) {
      return res.status(400).json({error: 'No such food'})
    }
  
    res.status(200).json(food)
  }


// delete food
const deleteFood = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such food'})
    }
  
    const food = await Food.findOneAndDelete({_id: id})
  
    if(!food) {
      return res.status(400).json({error: 'No such food'})
    }
  
    res.status(200).json(food)
  }

module.exports = {
    getFoods,
    addfood,
    editFood,
    deleteFood,
  };
