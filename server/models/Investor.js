const mongoose = require("mongoose");
const UserSignupSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const InvestorModel = mongoose.model("investors", UserSignupSchema);
module.exports = InvestorModel;
