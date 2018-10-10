const postRoutes = require("./posts");
const userRoutes = require("./users");

const constructorMethod = app => {
  app.use("/posts", postRoutes);        /// /post is the route you type to get the information.
  app.use("/users", userRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
