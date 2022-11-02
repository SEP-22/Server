const { Router } = require("express");
const { signUp, signIn,signOut, getUsers, setPreferedFoods,haveActiveDietPlan,updateActiveDietPlan,getPreferedFoods,getUserByID, } = require("../controller/user.controller");
const auth = require("../middleware/auth");


const router = Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.post("/signOut",auth, signOut);
router.get("/users",auth, getUsers);
router.post("/getpreferedfoods", getPreferedFoods);
router.post("/preferedfoods", setPreferedFoods);
router.post("/activeplan", haveActiveDietPlan);
router.post("/updateactiveplan", updateActiveDietPlan);
router.get("/single/:id", getUserByID);

module.exports.userRouter = router;
