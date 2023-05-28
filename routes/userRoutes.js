const router = require("express").Router();
const { uniqueUser } = require("../middleware/uniqueUser");
const userController = require("../controller/UserController");
const {Authentication,verifyRefreshToken}=require("../middleware/Authentication")

router.post("/signup", uniqueUser, userController.signupUser);
router.post("/login",Authentication,userController.loginUser)
router.get("/refresh", verifyRefreshToken, userController.generateNewToken);

module.exports = router;
