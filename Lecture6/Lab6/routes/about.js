const express = require("exporess");
const router = express.Router();
const aboutMe = {
    "name": "Jonathan Fishkin",
    "cwid": "10394200",
    "biography": "2 biography paragraphs separated by a new line character (\n).",
    "favoriteShows": ["array", "of", "favorite", "shows"],
    "hobbies": ["array", "of", "hobbies"]
}

router.get("/about", async (req, res) => {
    res.json(aboutMe);
})
      
