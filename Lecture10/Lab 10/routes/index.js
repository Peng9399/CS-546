const uuid = require("node-uuid");
const bcrypt = require("bcrypt");
const users = require("../users");

const constructorMethod = app => {
    app.get("/", (req, res, next) => {
        if(req.cookies.AuthCookie){               //checks to see if there is a cookie with value token
            res.redirect("/private")
         } else {
            res.render("authentication/static", {}); //if no cookie it will render this page
        }
    });

    app.get("/private", async (req, res, next) => {
        try {
            let session = req.cookies.AuthCookie._id
            const userElement = await users.find(element => {
                return element.id === session;
            })
            if(userElement) {
                res.render("authentication/private", {
                    id: userElement.id,
                    userName: userElement.username,
                    firstName: userElement.first_name,
                    lastName: userElement.last_name
                });
            } else {
                res.status(403).send("You are not logged in!");  
            }
        } catch (error) {
            res.status(403).send("You are not logged in!");  
        }
    });

    app.get("/logout", (req, res, next) => {
        res.clearCookie("AuthCookie");
        res.render("authentication/logout", {});
    });

    app.post("/login", async (req, res, next) => {
        const userName = req.body["username"];
        const passWord = req.body["password"];
        const sessionId = uuid.v4();
        let comparePassword = false;

        try {
            const userElement = await users.find(element => {
                return element.username === userName;
            })

            comparePassword = await bcrypt.compare(passWord, userElement.hashed_password)   //compares the hashed password

            if(comparePassword === true) {
                userElement._id = sessionId;
                res.cookie("AuthCookie", {session: userElement._id}); //creates a new cookie with value of AuthCookie
                res.redirect("/private");           
            } else {
                res.redirect("/");
            }
        } catch (error) {
            res.redirect("/");
        }
    });
}

module.exports = constructorMethod;