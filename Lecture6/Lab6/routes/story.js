const express = require("express");
const router = express.Router();
const story =   {
 "storyTitle": "The Time I Fell and Broke My Wrist",
 "story": "I decided to go with my family to the Mont Tremblent in Canada to go skiing. We arrived normally, safely, and we had everything unpacked and ready to go for the following day when we went skiing. The next day comes and my parentsdrop me off at ski school so I can learn how to better myself at skiing because I was around 10 years at the time and had little to no experience.\n Following me entering ski school, we all had to line up together behind the instructor when we were skiing down themountain. I was at the back of the line because I was the youngest in this intermediate group of skiiers. We were skiing for a few hours and I felt fine, nothing seemed to be wrong. Then as I was skiing down, I noticed I had picked up a lot of speed and that I couldn't stop myself. The only way for me to stop myself was to fall down. I fell down, but it was at an extremely bad angle where I landed on my wrist. I broke my wrist and felt the pain immediately. I was still able to ski for the rest of the trip, I just had a cast on and had to be super careful."
}

router.get("/", async (req, res) => {
    res.json(story);
})

module.exports = router;