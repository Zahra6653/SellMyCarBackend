const router = require("express").Router();
const { uniqueUser } = require("../middleware/uniqueUser");
const userController = require("../controller/UserController");
const {Authentication}=require("../middleware/Authentication")

router.post("/signup", uniqueUser, userController.signupUser);
router.post("/login",Authentication,userController.loginUser)

module.exports = router;
