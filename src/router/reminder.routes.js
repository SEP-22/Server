const { Router } = require("express");
const {
  newReminder,

} = require("../controller/reminder.controller");
const auth = require("../middleware/auth");

const router = Router();

router.post("/newReminder", newReminder);



module.exports.reminderRouter = router;