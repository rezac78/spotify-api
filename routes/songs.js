const { Router } = require("express");
const songsControllers = require("../controllers/songsControllers");
const isAdmin = require("../middlewares/isAdmin");
const router = new Router();

// Add a new song
// Post /api/songs/
router.post("/", isAdmin, songsControllers.AddSong);
// Get all songs
// Get /api/songs/
router.get("/", isAdmin, songsControllers.AllSong);
// Get details of a specific song
// Get /api/songs/:songId
router.get("/:songId", isAdmin, songsControllers.SpecificSong);
// Update Song
// PUT /api/songs/:songId
router.put("/:songId", isAdmin, songsControllers.UpdateSong);
// Delete Song
// DELETE /api/songs/:songId
router.delete("/:songId", isAdmin, songsControllers.DeleteSong);

module.exports = router;
