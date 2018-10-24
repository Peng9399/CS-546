const express = require("express");
const router = express.Router();
const checker = require("../checker")

router.post("/", async(req , res) => {
    let wordTest = req.body["text-to-test"];
    if(wordTest) {
        const validPalindrome = checker(wordTest); 
        if(validPalindrome) {
            res.render("palindrome/results", {
                title: "The Palindrome Results!" ,
                class: "success",
                textToTest: wordTest,
                statusMessage: "This Phrase IS a Palindrome" 
            });
        } else {
            res.render("palindrome/results", {
                title: "The Palindrome Results!" ,
                class: "failure",
                textToTest: wordTest,
                statusMessage: "This Phrase is NOT a Palindrome" 
        });       
        }
    } else {
        res.status(400)
        res.render("palindrome/error", {
            title: "The Palindrome Results!" ,
            class: "error",
            errorMessage: "ERROR: No phrase was provided, please go back and provide a valid phrase!"             
        });
    }
});



module.exports = router;