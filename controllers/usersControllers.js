const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

// register User
exports.RegisterUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      roles: req.body.roles || ["user"],
      password: hashedPassword,
    });
    await user.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    if (err.code === 11000 && err.keyPattern && err.keyPattern.email) {
      return res.status(400).json({ error: "Email is already registered." });
    }
    res.status(500).json({ error: err.message });
  }
};

// login User
exports.LoginUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ message: "User not found" });
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign(
    { _id: user._id, roles: user.roles },
    process.env.SECRET_KEY,
    {
      expiresIn: "1h",
    }
  ); // 'SECRET_KEY' should be stored securely, not as plain text
  res.json({ token, roles: user.roles, message: "Login successfully! " });
};

// logout User
exports.logoutUser = (req, res) => {
  req.logout();
  res.redirect("/login");
};

// Reset Password
exports.ResetPassword = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const hashedPassword = await bcrypt.hash(req.body.newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.json({ message: "Password reset successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Profile
exports.Profile = (req, res) => {
  res.json({ content: "Profile information" });
};

// ProfileEdit
exports.ProfileEdit = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select("-password"); // Exclude password from the results
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
};

// ProfileEditPut
exports.ProfileEditPut = async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.userId },
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
        },
      }
    );
    res.status(200).send(updatedUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

// DeletedUser
exports.DeletedUser = async (req, res) => {
  try {
    const removedUser = await User.remove({ _id: req.params.userId });
    res.status(200).send(removedUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

// AdminUser

exports.AdminUser = async (req, res) => {
  try {
    res.send("hiiiiiiiiii")
  } catch (err) {
    res.status(400).send(err);
  }
};