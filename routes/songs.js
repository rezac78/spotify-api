const { Router } = require("express");
const songsControllers = require("../controllers/songsControllers");
const router = new Router();

// Add a new song
// Post /api/songs/
router.post('/', songsControllers.AddSong);
// Get all songs
// Get /api/songs/
router.get('/', songsControllers.AllSong);
// Get details of a specific song
// Get /api/songs/:songId
router.get('/:songId', songsControllers.SpecificSong);
// Update Song
// PUT /api/songs/:songId
router.put('/:songId', songsControllers.UpdateSong);
// Delete Song
// DELETE /api/songs/:songId
router.delete('/:songId', songsControllers.DeleteSong);


module.exports = router;
