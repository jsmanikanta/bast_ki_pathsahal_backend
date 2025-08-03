// Importing Express
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

// Importing dotenv for MongoDB
dotenv.config();
const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(cors());

// Importing body-parser
const bodyparser = require("body-parser");

// Importing mongoose for MongoDB
const mongoose = require("mongoose");
mongoose
  .connect(process.env.database) // database --> name given in .env file
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
const register = require("./router"); 
app.use("/basti_ki_pathshala", register);  

// creating server
const port = process.env.PORT || 3000;

// Creating server
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

app.get("/", (req, res) => {
  console.log("opened");
  res.send("first");
});
