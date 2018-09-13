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

async function main () {
    const fileData = await getFileAsString('./chapter1.txt')
    .catch(error => {
        return error;
    });

    const fileData2 = await getFileAsJSON('./chapter1.txt')
    .catch(error => {
        return error;
    });
    console.log(fileData2);
}


main();


module.exports = {

}