const { Router } = require("express");
const {
  newReminder,
  updateBreakfast,
  updateLunch,
  updateDinner,
  getReminder

} = require("../controller/reminder.controller");
const auth = require("../middleware/auth");

const router = Router();

router.post("/newreminder", newReminder);
router.post("/updatebreakfast", updateBreakfast);
router.post("/updatelunch", updateLunch);
router.post("/updatedinner", updateDinner);
router.post("/getreminder", getReminder);

module.exports.reminderRouter = router;