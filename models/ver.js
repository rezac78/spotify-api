const mongoose = require("mongoose");

const vetSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  fullname: {
    type: String,
    trim: true,
  },
  information: {
    type: String,
    trim: true,
  },
  radio: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Ver", vetSchema);
