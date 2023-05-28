const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['dealer', 'buyer'],
    default:"dealer"
  },
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
