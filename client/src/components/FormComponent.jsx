import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

function FarmerRegistrationForm() {
  const [formData, setFormData] = useState({
    countryCode: "+91", // Default to India's country code
    phone: "",
    name: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    alternatePhone: "",
    permanentAddress: "",
    farmLocationAddress: "",
    farmName: "",
    farmSize: "",
    soilType: "",
    waterSource: "",
    cropsGrown: "",
    farmingExperience: "",
    equipmentOwned: "",
    bankAccountNumber: "",
    bankName: "",
    branch: "",
    existingLoans: "no",
    income: "",
    marketAccess: "",
    salesChannels: "",
    cropInsurance: "no",
    cropInsuranceDetails: "",
    governmentSchemes: "no",
    governmentSchemeDetails: "",
    status: "Does not taken action",
    identificationProof: null,
    landOwnershipProof: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked ? "yes" : "no",
      });
    } else if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/formdata",
        formData
      );
      console.log(response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="farmer-form">
      <div className="form-column">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
        />

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          placeholder="Date of Birth"
        />

        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="select-dropdown"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="countryCode">Country Code</label>
        <select
          name="countryCode"
          value={formData.countryCode}
          onChange={handleChange}
        >
          <option value="+91">+91 (India)</option>
          <option value="+1">+1 (USA)</option>
          <option value="+44">+44 (UK)</option>
          {/* Add more country codes as needed */}
        </select>

        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          maxLength={10}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <label htmlFor="alternatePhone">Alternate Phone</label>
        <input
          type="text"
          name="alternatePhone"
          value={formData.alternatePhone}
          onChange={handleChange}
          placeholder="Alternate Phone"
        />

        <label htmlFor="permanentAddress">Permanent Address</label>
        <textarea
          name="permanentAddress"
          value={formData.permanentAddress}
          onChange={handleChange}
          placeholder="Permanent Address"
        />

        <label htmlFor="farmLocationAddress">Farm Location Address</label>
        <textarea
          name="farmLocationAddress"
          value={formData.farmLocationAddress}
          onChange={handleChange}
          placeholder="Farm Location Address"
        />

        <label htmlFor="farmName">Farm Name</label>
        <input
          type="text"
          name="farmName"
          value={formData.farmName}
          onChange={handleChange}
          placeholder="Farm Name"
        />

        <label htmlFor="farmSize">Farm Size</label>
        <select
          name="farmSize"
          value={formData.farmSize}
          onChange={handleChange}
          className="select-dropdown"
        >
          <option value="">Select Farm Size</option>
          <option value="small">Small (1-5 acres)</option>
          <option value="medium">Medium (5-20 acres)</option>
          <option value="large">Large (20+ acres)</option>
        </select>

        <label htmlFor="soilType">Soil Type</label>
        <select
          name="soilType"
          value={formData.soilType}
          onChange={handleChange}
          className="select-dropdown"
        >
          <option value="">Select Soil Type</option>
          <option value="sandy">Sandy</option>
          <option value="clay">Clay</option>
          <option value="loam">Loam</option>
          <option value="silt">Silt</option>
        </select>

        <label htmlFor="waterSource">Water Source</label>
        <select
          name="waterSource"
          value={formData.waterSource}
          onChange={handleChange}
          className="select-dropdown"
        >
          <option value="">Select Water Source</option>
          <option value="borewell">Borewell</option>
          <option value="drip">Drip</option>
          <option value="canal">Canal</option>
          <option value="rainwater">Rainwater</option>
        </select>

        <label htmlFor="cropsGrown">Crops Grown</label>
        <textarea
          name="cropsGrown"
          value={formData.cropsGrown}
          onChange={handleChange}
          placeholder="Crops Grown"
        />
      </div>

      <div className="form-column">
        <label htmlFor="farmingExperience">Farming Experience (years)</label>
        <select
          name="farmingExperience"
          value={formData.farmingExperience}
          onChange={handleChange}
          className="select-dropdown"
        >
          <option value="">Select Experience</option>
          <option value="1">1 year</option>
          <option value="2">2 years</option>
          <option value="3">3 years</option>
          <option value="5">5 years</option>
          <option value="10">10 years</option>
        </select>

        <label htmlFor="equipmentOwned">Equipment Owned/Leased</label>
        <select
          name="equipmentOwned"
          value={formData.equipmentOwned}
          onChange={handleChange}
          className="select-dropdown"
        >
          <option value="">Select Option</option>
          <option value="owned">Owned</option>
          <option value="leased">Leased</option>
        </select>

        <label htmlFor="bankAccountNumber">Bank Account Number</label>
        <input
          type="text"
          name="bankAccountNumber"
          value={formData.bankAccountNumber}
          onChange={handleChange}
          placeholder="Bank Account Number"
        />

        <label htmlFor="bankName">Bank Name</label>
        <input
          type="text"
          name="bankName"
          value={formData.bankName}
          onChange={handleChange}
          placeholder="Bank Name"
        />

        <label htmlFor="branch">Branch</label>
        <input
          type="text"
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          placeholder="Branch"
        />

        <label htmlFor="existingLoans">Do you have any loans?</label>
        <input
          type="checkbox"
          name="existingLoans"
          checked={formData.existingLoans === "yes"}
          onChange={handleChange}
        />

        {formData.existingLoans === "yes" && (
          <textarea
            name="existingLoansDetails"
            value={formData.existingLoansDetails}
            onChange={handleChange}
            placeholder="Existing Loans/Debts"
          />
        )}

        <label htmlFor="income">Annual Income from Farming</label>
        <select
          name="income"
          value={formData.income}
          onChange={handleChange}
          className="select-dropdown"
        >
          <option value="">Select Income Range</option>
          <option value="<1">Less than 1 Lakh</option>
          <option value="1-2">1-2 Lakhs</option>
          <option value="2-5">2-5 Lakhs</option>
          <option value=">5">More than 5 Lakhs</option>
        </select>

        <label htmlFor="cropInsurance">Do you have crop insurance?</label>
        <input
          type="checkbox"
          name="cropInsurance"
          checked={formData.cropInsurance === "yes"}
          onChange={handleChange}
        />

        {formData.cropInsurance === "yes" && (
          <textarea
            name="cropInsuranceDetails"
            value={formData.cropInsuranceDetails}
            onChange={handleChange}
            placeholder="Crop Insurance Details"
          />
        )}

        <label htmlFor="governmentSchemes">
          Do you avail government subsidies?
        </label>
        <input
          type="checkbox"
          name="governmentSchemes"
          checked={formData.governmentSchemes === "yes"}
          onChange={handleChange}
        />

        {formData.governmentSchemes === "yes" && (
          <textarea
            name="governmentSchemeDetails"
            value={formData.governmentSchemeDetails}
            onChange={handleChange}
            placeholder="Government Scheme Details"
          />
        )}

        <label htmlFor="identificationProof">Upload Aadhar Card</label>
        <input type="file" name="identificationProof" onChange={handleChange} />

        <label htmlFor="landOwnershipProof">Upload Land Ownership Proof</label>
        <input type="file" name="landOwnershipProof" onChange={handleChange} />

        <label htmlFor="marketAccess">Market Access Details</label>
        <textarea
          name="marketAccess"
          value={formData.marketAccess}
          onChange={handleChange}
          placeholder="Market Access Details"
        />

        <label htmlFor="salesChannels">Sales Channels</label>
        <textarea
          name="salesChannels"
          value={formData.salesChannels}
          onChange={handleChange}
          placeholder="Sales Channels"
        />

        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </form>
  );
}

export default FarmerRegistrationForm;
