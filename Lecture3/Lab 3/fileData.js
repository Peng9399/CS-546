const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));

async function getFileAsString(path) {
    if (!path){
        throw "You must provide a path";
    }

    if(path === undefined || typeof path !== "string"){
        throw "You must provide a string"
    }

    try {

    const stringFile = await fs.readFileAsync(path, "utf-8");
    return stringFile;

    } catch(error) {
      throw error;
    }
}

async function getFileAsJSON(path) {
    if(!path) {
        throw "You must provide a path";
    }

    if(path === undefined || typeof path !== "string"){
        throw "You must provide a string"
    }

    try {
        const stringFile = await fs.readFileAsync(path, "utf-8");
        const asObject = JSON.parse(stringFile);
        return asObject;
        
    } catch (error) {
        throw error;
    }
}

async function saveStringToFile(path, text) {
    if (!path || typeof path === "undefined"){
        throw "You must provide a path";
    }
    if(!text || typeof text === "undefined") {
        throw "You must provide text";
    }

    if(typeof text !== "string") {
        throw "You must provide a valid string";
    }

    try {
        await fs.writeFileAsync(path, text, 'utf-8')
        return console.log("true");
        
    } catch (error) {
        throw error;
    }

}

async function saveJSONToFile(path, obj) {

    if (!path || typeof path === "undefined"){
        throw "You must provide a path";
    }
    if(!obj || typeof obj === "undefined") {
        throw "You must provide an object";
    }

    if(typeof obj !== "object") {
        throw "You must provide a valid object";
    }

    try {
        const textConverted = JSON.stringify(obj)
        await fs.writeFileAsync(path, textConverted, 'utf-8')
        return console.log("true");
        
    } catch (error) {
        throw error;
    }


}


module.exports = {
    getFileAsString,
    getFileAsJSON,
    saveStringToFile,
    saveJSONToFile
}