const constructorMethod = app => {
    app.get("/", (req, res) => {
        res.render("authentication/static", {});
    });
}

module.exports = constructorMethod;