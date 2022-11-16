const Reminder = require("../models/reminder");
const mongoose = require('mongoose')

const newReminder = async (req, res) => {
    const user_id = req.body.user_Id;
  
    try {
      const newReminder = await Reminder.create({user_Id: user_id });
      res.status(200).json(newReminder);
    } catch (e) {
      console.log(e);
      res.status(400).send({ e, success: false });
    }
  };


module.exports = {
    newReminder,
};
