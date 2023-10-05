const Traditional = require("../models/traditional.model");
// AdminDash
exports.AdminDash = async (req, res) => {
  try {
    res.send("AdminDash");
  } catch (err) {
    res.status(400).send(err);
  }
};
//TraditionalDash
exports.TraditionalDash = async (req, res) => {
  try {
    const { songName, singerName, songType } = req.body;

    const coverPhoto = req.files.coverPhoto[0].filename;
    const songFile = req.files.songFile[0].filename;
    const traditional = new Traditional({
      songName: songName,
      singerName: singerName,
      songType: songType,
      coverPhoto: coverPhoto,
      songFile: songFile,
    });
    await traditional.save();
    res.status(200).json({
      status: "success",
      message: "Song uploaded successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};
//getTraditionalDash
exports.getTraditionalDash = async (req, res) => {
  try {
    const songs = await Traditional.find();

    res.status(200).json({
      status: "success",
      data: songs,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

//EditTraditionalDash
exports.EditTraditionalDash = async (req, res) => {
  try {
    const songId = req.params._id;
    const song = await Traditional.findById(songId);

    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }

    res.status(200).json({ song });
  } catch (error) {
    res.status(500).json({ message: "Failed to update the song.", error });
  }
};

//deletedTraditionalDash
exports.deletedTraditionalDash = async (req, res) => {
  try {
    const songId = req.params._id;
    const result = await Traditional.findByIdAndDelete(songId);
    if (!result) {
      return res.status(404).json({ message: "Song not found." });
    }

    res.status(200).json({ message: "Song deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete the song.", error });
  }
};

// UserDash
exports.UserDash = async (req, res) => {
  try {
    res.send("UserDash");
  } catch (err) {
    res.status(400).send(err);
  }
};
