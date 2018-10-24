const routes = require("./allRoutes");


const constructorMethod = app => {
    app.use("/results", routes);
    app.get("/", async (req, res) => {
        res.render("palindrome/index", {
            title: "The Best Palindrome Checker in the World!"
        })
    })
}