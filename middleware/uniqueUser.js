const User = require("../model/User");

const uniqueUser = async (req, res, next) => {
  try {
    let { email } = req.body;
    let user = await User.find({ email: email });

    if (user.length > 0) {
      res.status(404).send({
        status: "failed",
        message: "Account already exists with this mail",
      });
    } else {
      req.user = user[0];
      next();
    }
  } catch (e) {
    res.status(400).send({
      status: "failed",
      message: "Registration failed",
      error: e,
    });
  }
};

module.exports = { uniqueUser };
