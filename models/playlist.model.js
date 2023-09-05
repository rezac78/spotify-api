const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: String,
    artist: String,
    duration: Number,  // in seconds
    // Other attributes like album, genre, etc.
});

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    songs: [songSchema],
}, {
    timestamps: true
});

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;
