const router = require("express").Router();

router.use("/user", require("./userRoutes"));
router.use("/inventory", require("./inventoryRoutes"));

module.exports = router;
