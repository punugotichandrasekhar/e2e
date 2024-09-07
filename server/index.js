const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const FarmerModel = require("./models/Slice");
const AgentModel = require("./models/Agent");
const InvestorModel = require("./models/Investor");
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
  status: { type: String },
  date: { type: Date, default: Date.now }, // Automatically records the creation date
});

const FormData = mongoose.model("FormData", formDataSchema);

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/Slice");
app.post("/signin", (req, res) => {
  const { email, password } = req.body;
  FarmerModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json(email);
        console.log(email);
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("user not exists.");
    }
  });
});
app.post("/api/formdata", async (req, res) => {
  try {
    const formData = new FormData(req.body);

    // Validate the form data before saving (simple example)
    if (!formData.name || !formData.phone || !formData.email) {
      return res
        .status(400)
        .json({ error: "Name, phone, and email are required fields." });
    }

    await formData.save();
    res.status(201).json({ message: "Form data saved successfully!" });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "Failed to save form data." });
  }
});
app.get("/api/userdata/:email", async (req, res) => {
  const email = req.params.email;
  try {
    const data = await FarmerModel.find({ email: email });
    res.status(200).json(data); // Make sure this is an array
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});
app.get("/api/agentdata/:email", async (req, res) => {
  const email = req.params.email;
  try {
    const data = await AgentModel.find({ email: email });
    res.status(200).json(data); // Make sure this is an array
  } catch (error) {
    res.status(500).json({ error: "Failed to fetching data" });
  }
});
app.get("/api/investordata/:email", async (req, res) => {
  const email = req.params.email;
  try {
    const data = await InvestorModel.find({ email: email });
    res.status(200).json(data); // Make sure this is an array
  } catch (error) {
    res.status(500).json({ error: "Failed to fetching data" });
  }
});

app.post("/asignin", (req, res) => {
  const { email, password } = req.body;
  AgentModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json(email);
        console.log(email);
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("user not exists.");
    }
  });
});
app.post("/isignin", (req, res) => {
  const { email, password } = req.body;
  InvestorModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json(email);
        console.log(email);
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("user not exists.");
    }
  });
});

app.get("/", (req, res) => {
  res.status(200).send({ msg: "hello" });
});

app.post("/register", (req, res) => {
  FarmerModel.create(req.body)
    .then((farmers) => res.join(farmers))
    .catch((err) => res.json(err));
});

app.post("/agentregister", (req, res) => {
  AgentModel.create(req.body)
    .then((agents) => res.join(agents))
    .catch((err) => res.json(err));
});
app.post("/investorregister", (req, res) => {
  InvestorModel.create(req.body)
    .then((investors) => res.join(investors))
    .catch((err) => res.json(err));
});
app.post("/form", (req, res) => {
  FormModel.create(req.body)
    .then((formdata) => res.join(formdata))
    .catch((err) => res.json(err));
});

app.post("home", async (request, response) => {});

app.get("/api/formdata/:email", async (req, res) => {
  const email = req.params.email;
  try {
    const data = await FormData.find({ email: email });
    res.status(200).json(data); // Make sure this is an array
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.put("/api/formdata/:email", async (req, res) => {
  const email = req.params.email;
  const { status } = req.body;
  try {
    const data = await FormData.findOneAndUpdate(
      { email: email },
      { status: status },
      { new: true } // Return the updated document
    );
    if (!data) {
      return res.status(404).json({ error: "Email not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to update data" });
  }
});

app.get("/api/formdata", async (req, res) => {
  try {
    const data = await FormData.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.get("/api/acceptformdata", async (req, res) => {
  try {
    const data = await FormData.find({ status: "accepted" });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});
app.get("/api/rejectformdata", async (req, res) => {
  try {
    const data = await FormData.find({ status: "rejected" });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.get("/home", async (request, response) => {
  const dataOfPerson = await FarmerModel.findOne({ email: email });
  console.log(dataOfPerson.name, dataOfPerson.email);
  const { name, email } = dataOfPerson;
  const ar = { name: name, email: email };
  console.log(ar);
  response.json(ar);
});

app.listen(3000, () => {
  console.log("server is running");
});
