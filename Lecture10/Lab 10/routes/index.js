const uuid = require("node-uuid");
const bcrypt = require("bcrypt");
const users = require("../users");

const constructorMethod = app => {
    app.get("/", (req, res, next) => {
        // if(req.cookies.AuthCookie){               //checks to see if there is a cookie with value token
        //     console.log("There is a cookie")
        // } else {
            res.render("authentication/static", {}); //if no cookie it will render this page
    //    }
    });

    app.get("/private", (req, res, next) => {

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

            comparePassword = await bcrypt.compare(passWord, userElement.hashedPassword)   //compares the hashed password

            if(comparePassword === true) {
                userElement._id = sessionId;
                res.cookie("AuthCookie", {session: userElement._id}); //creates a new cookie with value of AuthCookie
                next();
                console.log(userElement);
                console.log(req.cookies)                
            } else {
                res.redirect("/");
            }
        } catch (error) {
            res.redirect("/");
        }
    });
}

module.exports = constructorMethod;