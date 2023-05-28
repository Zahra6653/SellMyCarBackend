const router = require("express").Router();
const InventoryController = require("../controller/InventoryController")

router.get("/allModelsByNameAndYear",InventoryController.allModelNames)
router.get("/getCarSpecsById/:id",InventoryController.displayOEMSpecsByModel)
router.get("/getCarSpecsByNameYear/:name/:year",InventoryController.displayOEMSpecsByModelNameAndYear)
router.post("/postCars",InventoryController.addInventoryCar)
router.get("/getAllcars",InventoryController.getAllCars)
router.get("/getDetails/:id",InventoryController.getCarDetails)
router.get("/postedCarByUser/:id",InventoryController.getAllUsersCar)
router.put("/updateCar/:id",InventoryController.updateCarsById)
router.put("/deleteUser/:id",InventoryController.deleteCarById)
module.exports = router;
