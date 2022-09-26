const { Router } = require("express");
const { signUp, signIn,signOut, getUsers } = require("../controller/user.controller");
const auth = require("../middleware/auth");


const router = Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.post("/signOut",auth, signOut);
router.get("/users",auth, getUsers);

module.exports.userRouter = router;
