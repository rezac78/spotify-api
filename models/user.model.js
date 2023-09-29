const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    roles: {
        type: [String],
        default: ["user"],  
        enum: ["user", "admin"]  
    },
    password: {
      type: String,
      required: true,
    },
    playlists: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Playlist",
      },
    ],
  },
  {
    timestamps: true, // Adds "createdAt" and "updatedAt" fields
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
