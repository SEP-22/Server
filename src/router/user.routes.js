const { Router } = require("express");
const { signUp, signIn,signOut, getUsers, setPreferedFoods,haveActiveDietPlan,updateActiveDietPlan, } = require("../controller/user.controller");
const auth = require("../middleware/auth");


const router = Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.post("/signOut",auth, signOut);
router.get("/users",auth, getUsers);
router.post("/preferedfoods", setPreferedFoods)
router.post("/activeplan", haveActiveDietPlan)
router.post("/updateactiveplan", updateActiveDietPlan)

module.exports.userRouter = router;
