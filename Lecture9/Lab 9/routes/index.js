const constructorMethod = app => {
    app.use("/", async (req, res) => {
        res.render("palindrome/static", {
            title: "Palindrome checker"
        });
    });
}

module.exports = constructorMethod;