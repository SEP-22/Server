const { Router } = require("express");
const {
  newReminder,
  updateBreakfast,
  updateLunch,
  updateDinner

} = require("../controller/reminder.controller");
const auth = require("../middleware/auth");

const router = Router();

router.post("/newReminder", newReminder);
router.post("/updatebreakfast", updateBreakfast);
router.post("/updatelunch", updateLunch);
router.post("/updatedinner", updateDinner);


module.exports.reminderRouter = router;