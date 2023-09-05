const Mongoose = require("mongoose");
const Song = require("../models/song.model");

// Add a new song
exports.AddSong = async (req, res) => {
  const song = new Song({
    title: req.body.title,
    artist: req.body.artist,
  });
  try {
    const savedSong = await song.save();
    res.status(201).send(savedSong);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Get all songs
exports.AllSong = async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).send(songs);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Get details of a specific song
exports.SpecificSong = async (req, res) => {
  try {
    const song = await Song.findById(req.params.songId);
    res.status(200).send(song);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Update Song
exports.UpdateSong = async (req, res) => {
  try {
    const updatedSong = await Song.updateOne(
      { _id: req.params.songId },
      {
        $set: {
          title: req.body.title,
          artist: req.body.artist,
        },
      }
    );
    res.status(200).send(updatedSong);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Delete Song
exports.DeleteSong = async (req, res) => {
  try {
    const removedSong = await Song.remove({ _id: req.params.songId });
    res.status(200).send(removedSong);
  } catch (err) {
    res.status(400).send(err);
  }
};