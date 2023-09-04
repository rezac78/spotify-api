const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    duration: Number,
    listeners: {
        type: Number,
        default: 0
    },
    album: String,
    release_date: Date,
    genre: [String],
}, {
    timestamps: true
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
