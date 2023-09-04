const { Router } = require("express");
const playlistControllers = require("../controllers/playlistControllers");
const router = new Router();

// Create a new playlist
// Post /api/playlists/
router.post('/', playlistControllers.CreatePlaylist);
// Get all playlists of a specific user
// Get /api/playlists/user/:userId
router.get('/user/:userId', playlistControllers.GetAllplaylist);
// Add Song to Playlist
// PUT /api/playlists/:playlistId/add
router.put('/playlists/:playlistId/add', playlistControllers.AddSongPlaylist);
// Remove Song from Playlist
// PUT /api/playlists/:playlistId/remove
router.put('/playlists/:playlistId/remove', playlistControllers.RemoveSongPlaylist);
// Delete Playlist
// DELETE /api/playlists/:playlistId
router.delete('/playlists/:playlistId', playlistControllers.RemovePlaylist);

module.exports = router;
