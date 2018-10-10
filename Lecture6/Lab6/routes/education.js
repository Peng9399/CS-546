const express = require("express");
const router = express.Router();
const education =   {
    "schoolName": "IS 34 Middle School",
    "degree": "Middle School Degree",
    "favoriteClass": "Favorite class in school was Math",
    "favoriteMemory": "My favorite memory was the 8th grade prom"
  }


  router.get("/education", async (req, res) => {
    res.json(education);
  })