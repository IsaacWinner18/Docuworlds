const mongoose = require("mongoose");
const Documentation = require("../models/documentation");

// get all workout

const getAllDocu = async (req, res) => {
  const documentations = await Documentation.find({}).sort({ createdAt: -1 });
  res.status(200).json(documentations);
};

// get a single workout

const getDocu = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: "id is not valid"})
  }

  const documentations = await Documentation.findById(id);
  if (!documentations) {
    return res.status(404).json({ error: "No such documentation" });
  }
  res.status(200).json(documentations);
};

//create new workout

const createDocu = async (req, res) => {
  const { title, url } = req.body;

  try {
    const documentation = await Documentation.create({ title, url });
    res.status(200).json(documentation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete the workout

// update the workout

module.exports = {
  createDocu,
  getAllDocu,
  getDocu,
};
