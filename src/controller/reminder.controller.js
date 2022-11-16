const Reminder = require("../models/reminder");
const mongoose = require("mongoose");

const newReminder = async (req, res) => {
  const user_id = req.body.user_Id;

  try {
    const newReminder = await Reminder.create({ user_Id: user_id });
    res.status(200).json(newReminder);
  } catch (e) {
    console.log(e);
    res.status(400).send({ e, success: false });
  }
};

const updateBreakfast = async (req, res) => {
  const _id = req.body._id;
  const conditions = {
    breakfastMinute: req.body.breakfastMinute,
    breakfastHour: req.body.breakfastHour,
    breakfastOn: req.body.breakfastOn,
  };

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).json({ error: "Invalid Reminder ID" });
  }

  const reminder = await Reminder.findByIdAndUpdate({ _id }, conditions, {
    new: true,
  });

  if (!reminder) {
    return res.status(400).json({ error: "No such reminder" });
  }

  res.status(200).json(reminder);
};

const updateLunch = async (req, res) => {
  const _id = req.body._id;
  const conditions = {
    lunchMinute: req.body.lunchMinute,
    lunchHour: req.body.lunchHour,
    lunchOn: req.body.lunchOn,
  };

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).json({ error: "Invalid Reminder ID" });
  }

  const reminder = await Reminder.findByIdAndUpdate({ _id }, conditions, {
    new: true,
  });

  if (!reminder) {
    return res.status(400).json({ error: "No such reminder" });
  }

  res.status(200).json(reminder);
};

const updateDinner = async (req, res) => {
  const _id = req.body._id;
  const conditions = {
    dinnerMinute: req.body.dinnerMinute,
    dinnerHour: req.body.dinnerHour,
    dinnerOn: req.body.dinnerOn,
  };

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).json({ error: "Invalid Reminder ID" });
  }

  const reminder = await Reminder.findByIdAndUpdate({ _id }, conditions, {
    new: true,
  });

  if (!reminder) {
    return res.status(400).json({ error: "No such reminder" });
  }

  res.status(200).json(reminder);
};

const getReminder = async (req, res) => {
  try {
    const reminder = await Reminder.find({
      user_Id: req.body.user_Id,
    });

    res.status(200).json(reminder);
  } catch (error) {
    res.status(400).json(error);
  }
};


module.exports = {
  newReminder,
  updateBreakfast,
  updateLunch,
  updateDinner,
  getReminder
};
