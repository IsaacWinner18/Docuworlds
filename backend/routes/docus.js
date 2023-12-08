const express = require("express");
const {
  createDocu,
  getAllDocu,
  getDocu,
} = require("../controllers/documentationController");
const router = express.Router();

router.get("/", getAllDocu);

router.get("/:id", getDocu);

router.post("/", createDocu);

router.delete("/:id", (req, res) => {
  res.json({ mssg: "Delete a new docu" });
});

router.patch("/:id", (req, res) => {
  res.json({ mssg: "Update a new docu" });
});

module.exports = router;
