const path = require("path");

const express = require("express");
const dotEnv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const userRoutes = require('./routes/users');
const songRoutes = require('./routes/songs');
const playlistRoutes = require('./routes/playlists');

//* Load Config
dotEnv.config({ path: "./config/config.env" });

//* Database connection
connectDB();

const app = express();

//* Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//* Static Folder
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
//* Use Routes
app.use('/api/users', userRoutes);
app.use('/api/songs', songRoutes);
app.use('/api/playlists', playlistRoutes);

console.log(process.env.MONGO_URI)

//* Select a port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
