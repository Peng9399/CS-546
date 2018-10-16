const recipeRoutes = require("./recipeRoutes");

const constructorMethod = app => {
    app.use("/recipes", recipeRoutes);

    app.use("*", (req, res) => {
        res.sendStatus(404);
      });
}

module.exports = constructorMethod;