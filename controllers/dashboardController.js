const Traditional = require("../models/traditional.model");
const { SingersTraditional } = require("../models/SingersTreditional.model");
const { Song } = require("../models/SingersTreditional.model");
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
  console.log(req.files)
  try {
    const { name, bio } = req.body;
    const coverPhoto = req.files.coverPhoto[0].filename;
    const traditional = new SingersTraditional({
      name: name,
      bio: bio,
      coverPhoto: coverPhoto,
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
    const songs = await SingersTraditional.find();
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
    const song = await SingersTraditional.findById(songId);

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
    const result = await SingersTraditional.findByIdAndDelete(songId);
    if (!result) {
      return res.status(404).json({ message: "Song not found." });
    }

    res.status(200).json({ message: "Song deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete the song.", error });
  }
};

// Add Song
exports.AddSong = async (req, res) => {
  try {
    const { title } = req.body;

    const audioFile = req.files.songFile[0].filename;
    const traditional = new Song({
      title: title,
      audioFile: audioFile,
    });
    await Song.save();
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

// Add Song
exports.AddSong = async (req, res) => {
  try {
    const { title } = req.body;

    const audioFile = req.files.songFile[0].filename;
    const traditional = new Song({
      title: title,
      audioFile: audioFile,
    });
    await Song.save();
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

// Get Add Song
exports.getAddSong = async (req, res) => {
  try {
    const singer = await TraditionalSingers.findById(req.params.singerId);
    const songs = await Song.find({ singerId: req.params.singerId });
    res.status(200).send({ singer, songs });
  } catch (error) {
    res.status(500).send(error);
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
