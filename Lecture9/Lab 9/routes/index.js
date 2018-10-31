const constructorMethod = app => {
    app.get("/", async (req, res) => {
        res.render("palindrome/static", {});
    });

    app.post("/", async(req, res) => {
        res.render("palindrome/server", {});
    });
}

module.exports = constructorMethod;