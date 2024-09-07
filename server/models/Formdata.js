const mongoose = require("mongoose");

// MongoDB Schema with multiple fields
const formDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dateOfBirth: { type: String }, // Use Date type if you want to store this as a date
  gender: { type: String },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  alternatePhone: { type: String },
  permanentAddress: { type: String },
  farmLocationAddress: { type: String },
  farmName: { type: String },
  farmSize: { type: String },
  soilType: { type: String },
  waterSource: { type: String },
  cropsGrown: { type: String },
  farmingExperience: { type: String },
  equipmentOwned: { type: String },
  bankAccountNumber: { type: String },
  bankName: { type: String },
  branch: { type: String },
  existingLoans: { type: String },
  income: { type: String },
  marketAccess: { type: String },
  salesChannels: { type: String },
  cropInsurance: { type: String },
  governmentSchemes: { type: String },
  identificationProof: { type: String },
  landOwnershipProof: { type: String },
  date: { type: Date, default: Date.now }, // Automatically records the creation date
});

const FormData = mongoose.model("FormData", formDataSchema);

module.exports = FormData;
