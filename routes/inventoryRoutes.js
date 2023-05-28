const router = require("express").Router();
const InventoryController = require("../controller/InventoryController")
const {verifyAuthToken} = require("../middleware/Authentication")

router.get("/allModelsByNameAndYear",verifyAuthToken,InventoryController.allModelNames)
router.get("/getCarSpecsById/:id",verifyAuthToken,InventoryController.displayOEMSpecsByModel)
router.get("/getCarSpecsByNameYear/:name/:year",verifyAuthToken,InventoryController.displayOEMSpecsByModelNameAndYear)
router.post("/postCars",verifyAuthToken,InventoryController.addInventoryCar)
router.get("/getAllcars",verifyAuthToken,InventoryController.getAllCars)
router.get("/getDetails/:id",verifyAuthToken,InventoryController.getCarDetails)
router.get("/postedCarByUser/:id",verifyAuthToken,InventoryController.getAllUsersCar)
router.put("/updateCar/:id",verifyAuthToken,InventoryController.updateCarsById)
router.delete("/deleteUser/:id",verifyAuthToken,InventoryController.deleteCarById)

module.exports = router;
