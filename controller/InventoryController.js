const MarketplaceInventory = require("../model/MarketplaceInventory");
const OEM_SpecsModel = require("../model/OEMSpecs");
const OemSpecs = require("../model/OEMSpecs");

const allModelNames = async (req, res) => {
  try {
    const carModels = await OemSpecs.find(
      {},
      { modelName: 1, yearOfModel: 1, _id: 1 }
    );

    res.status(200).send({
      cars: carModels,
    });
  } catch (e) {
    res.status(404).send({
      message: "Error occured",
      error: e,
    });
  }
};

const displayOEMSpecsByModel = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    if (!id) {
      return res.status(400).send({
        message: "No id ",
        error: e,
      });
    }
    const car = await OEM_SpecsModel.findById(id);
    if (!car) {
      return res.status(400).send({
        message: "No car with such id exists",
        error: e,
      });
    }
    res.status(200).send({
      message: "Succes",
      car: car,
    });
  } catch (e) {
    res.status(404).send({
      message: "Internal Error",
      error: e,
    });
  }
};

const displayOEMSpecsByModelNameAndYear = async (req, res) => {
  try {
    const modelName = req.params.name;
    const year = req.params.year;
    const car = await OEM_SpecsModel.find({
      modelName: modelName,
      yearOfModel: year,
    });
    if (!car) {
      return res.status(400).send({
        message: "No such car exists",
        error: e,
      });
    }
    res.status(200).send({
      message: "Succes",
      car: car,
    });
  } catch (e) {
    res.status(404).send({
      message: "Internal Error",
      error: e,
    });
  }
};

const addInventoryCar = async (req, res) => {
  try {
    const data = req.body;
    const newCar = await MarketplaceInventory.create(data);
    res.status(201).json({
      message: "Car added successfully",
      car: newCar,
    });
  } catch (e) {
    res.status(404).send({
      message: "Internal Error",
      error: e,
    });
  }
};

const getAllCars = async (req, res) => {
  try {
    const cars = await MarketplaceInventory.find();
    if (!cars) {
      return res.status(400).send({
        message: "No car found",
        error: e,
      });
    }
    res.status(200).json({
      message: "Cars retrieved successfully",
      cars: cars,
    });
  } catch (e) {
    res.status(404).send({
      message: "Internal Error",
      error: e,
    });
  }
};

const getCarDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const carDetails = await MarketplaceInventory.findById(id).populate(
      "model"
    );

    if (!carDetails) {
      return res.status(400).send({
        message: "No car found",
        error: e,
      });
    }
    res.status(200).json({
      message: "Cars retrieved successfully",
      carDetails: carDetails,
    });
  } catch (e) {
    res.status(404).send({
      message: "Internal Error",
      error: e,
    });
  }
};

const getAllUsersCar = async (req, res) => {
  try {
    const userId = req.params.id;
    const userCars = await MarketplaceInventory.find({
      postedBy: userId,
    }).populate("model");

    res.status(200).send({
      message: "Cars retrieved succesfully",
      cars: userCars,
    });
  } catch (e) {
    res.status(404).send({
      message: "Internal Error",
      error: e,
    });
  }
};

const updateCarsById = async (req, res) => {
  try {
    const carId = req.params.id;
    const updatedCarData = req.body;
    const updatedCar = await MarketplaceInventory.findOneAndUpdate(
      { _id: carId },
      updatedCarData,
      { new: true }
    );

    if (!updatedCar) {
      return res.status(404).json({ error: "Car not found" });
    }

    res.status(200).send({
      message: "Car Updated succesfully",
      updatedCar: updatedCar,
    });
  } catch (e) {
    res.status(404).send({
      message: "Internal Error",
      error: e,
    });
  }
};

const deleteCarById = async (req, res) => {
  try {
    const carId = req.params.id;
    const updatedCar = await MarketplaceInventory.findByIdAndUpdate(
      carId,
      { deleted: true },
      { new: true }
    );
    if (!updatedCar) {
      return res.status(404).json({ error: "Car not found" });
    }
    res.status(200).send({
      message: "Car deleted succesfully",
    });
  } catch (error) {
    console.error("Error deleting car:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  allModelNames,
  displayOEMSpecsByModel,
  displayOEMSpecsByModelNameAndYear,
  addInventoryCar,
  getAllCars,
  getCarDetails,
  getAllUsersCar,
  updateCarsById,
  deleteCarById,
};
