const mongoose = require("mongoose");

const traditionalSchema = new mongoose.Schema(
  {
    songName: {
      type: String,
      required: true,
    },
    singerName: {
      type: String,
      required: true,
    },
    songType: {
      type: String,
      required: true,
    },
    coverPhoto: {
      type: String,
      required: true,
    },
    songFile: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Traditional = mongoose.model("Traditional", traditionalSchema);

module.exports = Traditional;
