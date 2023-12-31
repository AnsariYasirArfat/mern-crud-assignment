require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectToDB = require("./config/db.js");

const app = express();

// Express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Initialising connection to DB
connectToDB();

const userRoutes = require("./routes/userRoutes.js");

app.use("/", userRoutes);

module.exports = app;
