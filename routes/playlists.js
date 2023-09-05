const { Router } = require("express");
const playlistControllers = require("../controllers/playlistControllers");
const router = new Router();

// Create a new playlist
// Post /api/playlists/
router.post('/', playlistControllers.CreatePlaylist);
// Get all playlists of a specific user
// Get /api/playlists/user/:userId
router.get('/user/:userId', playlistControllers.GetAllplaylist);
// Retrieve a Playlist
// Get /api/playlists/:playlistId
router.get('/:playlistId', playlistControllers.RetrievePlaylist);
// Add Song to Playlist
// patch /api/playlists/:playlistId/add
router.patch('/:playlistId/add', playlistControllers.AddSongPlaylist);
// Remove Song from Playlist
// patch /api/playlists/:playlistId/remove
router.patch('/:playlistId/remove', playlistControllers.RemoveSongPlaylist);
// Delete Playlist
// DELETE /api/playlists/:playlistId
router.delete('/:playlistId', playlistControllers.RemovePlaylist);

module.exports = router;
