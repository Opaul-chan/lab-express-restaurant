//import express
const express = require("express");

//import data
const restaurants = require("../data");

//create router
const router = express.Router();

// Render URL
router.get("/", (req, res) => {
  res.render("index", { restaurants });
});

//export router
module.exports = router;
