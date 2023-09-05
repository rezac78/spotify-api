const Mongoose = require("mongoose");
const Playlist = require("../models/playlist.model");

// Create a new playlist
exports.CreatePlaylist = async (req, res) => {
  const playlist = new Playlist({
    name: req.body.name,
    owner: req.body.ownerId,
    songs: req.body.songs || [],
  });
  try {
    const savedPlaylist = await playlist.save();
    res.status(201).send(savedPlaylist);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Get all playlists of a specific user
exports.GetAllplaylist = async (req, res) => {
  try {
    const userId = req.params.userId;
    const playlists = await Playlist.find({ owner: userId });

    if (playlists.length === 0) {
      return res
        .status(404)
        .send({ message: "No playlists found for this user" });
    }

    res.status(200).send(playlists);
  } catch (err) {
    res.status(500).send({ message: "Server error", error: err });
  }
};

// Retrieve a Playlist
exports.RetrievePlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.playlistId);
    res.status(200).send(playlist);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Add Song to Playlist
exports.AddSongPlaylist = async (req, res) => {
  try {
    const updatedPlaylist = await Playlist.updateOne(
      { _id: req.params.playlistId },
      { $push: { songs: req.body.song } }
    );
    res.status(200).send(updatedPlaylist);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Remove Song from Playlist:
exports.RemoveSongPlaylist = async (req, res) => {
  try {
    const updatedPlaylist = await Playlist.updateOne(
      { _id: req.params.playlistId },
      { $pull: { songs: { _id: req.body.songId } } }
    );
    res.status(200).send(updatedPlaylist);
  } catch (err) {
    res.status(400).send(err);
  }
};

// Delete Playlist
exports.RemovePlaylist = async (req, res) => {
  try {
    const removedPlaylist = await Playlist.remove({
      _id: req.params.playlistId,
    });
    res.status(200).send(removedPlaylist);
  } catch (err) {
    res.status(400).send(err);
  }
};
