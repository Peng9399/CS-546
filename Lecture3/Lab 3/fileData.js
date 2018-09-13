const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));

async function getFileAsString(path) {
    if (!path){
        throw "You must provide a path";
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

    try {
        const stringFile = await fs.readFileAsync(path, "utf-8");
        const asObject = JSON.parse(stringFile);
        return asObject;
        
    } catch (error) {
        throw error;
    }
}

async function saveStringToFile(path, text) {
    if (!path){
        throw "You must provide a path";
    }
    if(!text) {
        throw "You must provide text";
    }

    if(typeof text !== "string") {
        throw "You must provide a valid string";
    }

    try {
        await fs.writeFileAsync(path, text, 'utf-8')
        return true;
        
    } catch (error) {
        throw error;
    }



}











async function main () {
    const fileData = await getFileAsString('./chapter1.txt')
    .catch(error => {
        return error;
    });

    const fileData2 = await getFileAsJSON('./package.json')
    .catch(error => {
        return error;
    });

    await saveStringToFile("./message.txt", "Hello Lab 3 test");
    console.log(fileData2);
}


main();


module.exports = {
    getFileAsString,
    getFileAsJSON,
    saveStringToFile
}