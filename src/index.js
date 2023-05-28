const app = require("./app");
//const OEM_SpecsModel = require("../model/OEMSpecs");
const mongoose = require('mongoose');
//const data = require('../data/OEM_Specs.json');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Database is connected");

//   OEM_SpecsModel.insertMany(data)
//     .then(() => {
//       console.log("Data inserted successfully");
//       mongoose.disconnect();
//     })
//     .catch((error) => {
//       console.error("Error inserting data:", error);
//       mongoose.disconnect();
//     });
}).catch((err) => {
  console.log(err);
});

// Start the Express server
app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}!`);
});
