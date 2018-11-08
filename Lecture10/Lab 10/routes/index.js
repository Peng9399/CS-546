const bcrypt = require("bcrypt");
const users = require("../users");

const constructorMethod = app => {
    app.get("/", (req, res) => {
        if(req.cookies.AuthCookie){               //checks to see if there is a cookie with value token
            res.redirect("/private")
         } else {
            res.render("authentication/static", {}); //if no cookie it will render this page
        }
    });

    app.get("/private", async (req, res) => {
   //     console.log(req.cookies.AuthCookie)
        try {
            let session = req.cookies.AuthCookie.session
            console.log(session)
   //         console.log(users)

            const userElement = await users.find(element => {
                return element._id === session;
            })
            console.log(userElement)
            if(userElement) {
                res.render("authentication/private", {
                    userName: userElement.username,
                    firstName: userElement.first_name,
                    lastName: userElement.last_name,
                    profession: userElement.profession,
                    bio: userElement.bio
                });
            } else {
                res.status(403).render("authentication/error", {});  
            }
        } catch (error) {
            res.status(403).render("authentication/error", {});    
        }
    });

    app.get("/logout", (req, res, next) => {
        res.render("authentication/logout", {});
        res.clearCookie("AuthCookie");
 //       console.log(req.cookies)
    });

    app.post("/login", async (req, res) => {
        const userName = req.body["username"];
        const passWord = req.body["password"];
        let comparePassword = false;

        try {
            const userElement = await users.find(element => {
                return element.username === userName;
            })

            comparePassword = await bcrypt.compare(passWord, userElement.hashed_password)   //compares the hashed password
            console.log(comparePassword)

            if(comparePassword === true) {
                res.cookie("AuthCookie", {session: userElement._id}); //creates a new cookie with value of AuthCookie
                res.redirect("/private");           
            } else {
                res.render("authentication/static", {err: true})
            }
        } catch (error) {
            res.render("authentication/static", {err: true})
        }
    });
}

module.exports = constructorMethod;