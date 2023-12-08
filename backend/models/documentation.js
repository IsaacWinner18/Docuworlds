const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DocuSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doumentation", DocuSchema);
