const express = require("express");
const router = express.Router();
const aboutMe = {
    "name": "Jonathan Fishkin",
    "cwid": "10394200",
    "biography": "I am currently a 5/5 co-op stevens student studying computer engineering. Inside computer engineering I have taken a lot of technical electives concentrated in computer science because im looking to go into software development. I have commuted to Stevens for all my 5 years of being here. I am russian, my parents immigrated from russia but i was born and raised in New York City. \n I also enjoy playing video games and hanging out with my friends. I also enjoy taking pictures as I am into photography. One of my other favorite hobbies is to help my dad when it comes to building things around the house. We always enjoy building new hardware and building stools and tables, its a fun and enjoyable time for me and my dad. The last thing about me is that I am completely left handed and do everything lefty.",
    "favoriteShows": ["WestWorld", "Supernatural", "Daredevil", "Ozark", "The 100"],
    "hobbies": ["Tennis", "Skiing", "Fishing"]
}

router.get("/", async (req, res) => {
    res.json(aboutMe);
})

module.exports = router;
      
