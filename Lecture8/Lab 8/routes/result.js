const express = require("express");
const router = express.Router();
const checker = require("../checker")

router.post("/", async(req , res) => {
    let wordTest = req.body["text-to-test"];
    const validPalindrome = checker(wordTest); 
    if(validPalindrome) {
        res.render("palindrome/results", {
            title: "The Palindrome Results!" ,
            class: success 
        })
    }
})


module.exports = router;