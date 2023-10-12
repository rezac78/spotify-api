const { Router } = require("express");
const dashboardController = require("../controllers/dashboardController");
const verifyRole = require("../middlewares/isAdmin");
const multer = require("multer");
const path = require("path");

const router = new Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "coverPhoto") {
      cb(null, "uploads/covers/");
    } else if (file.fieldname === "songFile") {
      cb(null, "uploads/songs/");
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Admin
// Post /api/dashboard/admin
router.post("/admin", verifyRole("admin"), dashboardController.AdminDash);
// Post /api/dashboard/admin/traditional
router.post(
  "/admin/traditional",
  upload.fields([{ name: "coverPhoto" }]),
  dashboardController.TraditionalDash
);
// Get /api/dashboard/admin/traditional
router.get(
  "/admin/traditional",
  upload.fields([{ name: "coverPhoto" }]),
  dashboardController.getTraditionalDash
);
// Edit /api/dashboard/admin/traditional/:_id
router.get("/admin/traditional/:_id", dashboardController.EditTraditionalDash);
// DELETE /api/dashboard/admin/traditional/:_id
router.delete(
  "/admin/traditional/:_id",
  dashboardController.deletedTraditionalDash
);

// Post /api/dashboard/admin/AddSong
router.post(
  "/admin/AddSong",
  upload.fields([{ name: "songFile" }]),
  dashboardController.AddSong
);
// Get /api/dashboard/admin/traditional/:singerId
router.get(
  "/admin/traditional/:singerId",
  upload.fields([{ name: "songFile" }]),
  dashboardController.getAddSong
);
// User
// Post /api/dashboard/user
router.post("/user", verifyRole("user"), dashboardController.UserDash);

module.exports = router;
