const mongoose = require("mongoose");
const UserSignupSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const FarmerModel = mongoose.model("farmers", UserSignupSchema);
module.exports = FarmerModel;
