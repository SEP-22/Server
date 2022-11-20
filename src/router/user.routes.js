const { Router } = require("express");
const { signUp, signIn,signOut, getUsers,getUserByEmail, setPreferedFoods,haveActiveDietPlan,updateActiveDietPlan,getPreferedFoods,getUserByID, getASingleUser,editName,editPhone,editEmail,editPassword,} = require("../controller/user.controller");
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
router.get("/singleEmail/:email", getUserByEmail);
router.get("/profileDetails/:id", getASingleUser);
router.post("/editName", editName);
router.post("/editPhone",editPhone);
router.post("/editEmail",editEmail);
router.post("/editPassword",editPassword);

module.exports.userRouter = router;
