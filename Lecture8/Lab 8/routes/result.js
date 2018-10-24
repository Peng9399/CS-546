const express = require("express");
const router = express.Router();

router.post("/", async(req , res) => {
    let wordTest = req.body;
    res.json(wordTest)
})


module.exports = router;