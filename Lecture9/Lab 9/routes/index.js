const constructorMethod = app => {
    app.use("/", async (req, res) => {
        res.render("palindrome/static", {});
    });

    app.post("/", async(req, res) => {
        res.render("palindrome/server", {});
    });
}

module.exports = constructorMethod;