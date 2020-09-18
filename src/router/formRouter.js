const express = require("express");
const FormModel = require("../models/formModel");
const FormRouter = express.Router();

FormRouter.get("/", async (req, res) => {
  // res.status(404).send("not found");
  try {
    const formData = await FormModel.find({});
    res.status(200).json({
      formData
    });
  } catch (e) {
    console.error(e);
    res.status(500).send("Internal Server Error!");
  }
}).post("/", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      gender,
      age,
      notes,
      phoneNumber,
      profilePic
    } = req.body;

    const result = await new FormModel({
      firstName,
      lastName,
      email,
      gender,
      age,
      notes,
      phoneNumber,
      profilePic
    });
    result.save();
    res.status(200).json({
      result
    });
  } catch (e) {
    console.error(e);
    res.status(500).send("Error while inserting");
  }
});

module.exports = FormRouter;
