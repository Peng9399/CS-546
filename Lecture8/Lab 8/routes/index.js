const result = require("./result");
const path = require("path");


const constructorMethod = app => {
    app.use("/result", result);
    app.get("/", async (req, res) => {
        res.render("palindrome/index", {
            title: "The Best Palindrome Checker in the World!"
        });
    });
    app.get("/public/site.css", async(req, res) => {
        res.sendFile(path.resolve("public/site.css"));
    });
}

module.exports = constructorMethod;