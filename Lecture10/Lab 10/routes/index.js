const userReferences = require("../data/modules");

const constructorMethod = app => {
  app.use(async (req, res, next) => {   //middleware to validate user information
    if (!req.cookies.AuthCookie) {
      req.user = null;
      next();
    } else {
      let result = await userReferences.getUser(req.cookies.AuthCookie); 

      if (!result) {
        res.clearCookie("AuthCookie");   //if there is no user then the cookie should be cleared
        req.user = null;
        next();

      } else {
        req.user = result;    //if there is, the information gets stored
        next();
      }
    }
  });

  app.get("/", (req, res) => {
    if (req.user) {
      res.redirect("/private");
    } else {
      res.render("authentication/static");
    }
  });

  app.get("/private", (req, res) => {
    if (req.user) {                             //if data is available from cookie we render
      res.render("authentication/private", { 
          userName: req.user.username,
          firstName: req.user.first_name,
          lastName: req.user.last_name,
          profession: req.user.profession,
          bio: req.user.bio
        });
    } else {
      res.status(403).render("authentication/error");
    }
  });

  app.get("/logout", (req, res) => {
    res.clearCookie("AuthCookie")
    res.render("authentication/logout");
  });

  app.post("/login", async (req, res) => {
    let username = req.body["username"];
    let password = req.body["password"];

    let result = await userReferences.userCheck(username, password); //checking if hashed password matched

    if (result) {
      res.cookie("AuthCookie", result)      //cookie will get assigned user if proper login
      res.redirect("/private");
    } else {
      res.render("authentication/static", { err: true });  //error if invlaid username/password combo
    }
  });

  app.use("*", (req, res) => {
    res.redirect("/");
  }); 

};

module.exports = constructorMethod;