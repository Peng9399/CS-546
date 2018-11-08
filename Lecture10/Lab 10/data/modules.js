const userData = require("../data/users.js");
const bcrypt = require("bcrypt");

    //check if username exists
async function userCheck(username, password) {
    let userInfo = userData.find(element => {
        return element.username == username;
    });
    if (!userInfo) return false;
    
    let authenticated = await bcrypt.compare(password, userInfo.hashed_password);  //checking against hashed password
    if (authenticated){
        return userInfo._id
    } else {
        return false
        }
    }
    
async function getUser(id) {
    let result = userData.find(element => {
        return element._id == id;    //returns where the users session id matches the given id
    });
    return result;
}


module.exports = {
    userCheck,
    getUser
};