const mongoose = require("mongoose");
const UserSignupSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const AgentModel = mongoose.model("agents", UserSignupSchema);
module.exports = AgentModel;
