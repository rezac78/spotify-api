const { Router } = require("express");
const usersControllers = require("../controllers/usersControllers");
const verifyToken = require('../middlewares/auth');

const router = new Router();
// Register
// Post /api/users/register
router.post("/register", usersControllers.RegisterUser);
// Login
// Post /api/users/login
router.post("/login", usersControllers.LoginUser);
// User logout
// Get /api/users/logout
router.get("/logout", usersControllers.logoutUser);
// Get user profile
// Get /api/users/profile/:userId
router.get("/profile/:userId", usersControllers.ProfileEdit);
// Update User Profile
// PUT /api/users/profile/:userId
router.patch("/profile/:userId", usersControllers.ProfileEditPut);
// Delete User
// DELETE /api/users/:userId
router.delete("/users/:userId", usersControllers.DeletedUser);
// Reset Password
// Post /api/users/reset-password
router.post("/users/reset-password", usersControllers.ResetPassword);
// profile
// get /api/users/profile
router.post("/users/profile", verifyToken, usersControllers.Profile);

module.exports = router;
