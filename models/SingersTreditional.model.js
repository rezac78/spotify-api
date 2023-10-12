const mongoose = require("mongoose");

const SingersTraditionalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    coverPhoto: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  duration: Number,
  singerId: { type: mongoose.Schema.Types.ObjectId, ref: "SingersTraditional" },
  audioFile: {
    type: String,
    required: true,
  },
});

const SingersTraditional =
  mongoose.models.SingersTraditional ||
  mongoose.model("SingersTraditional", SingersTraditionalSchema);

const Song = mongoose.models.Song || mongoose.model("Song", songSchema);

module.exports = { SingersTraditional, Song };

