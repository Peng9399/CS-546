const dataFile = require("./fileData");
const metrics = require("./textMetrics");
const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));

async function tester (file) {
    const result = file.split('/').pop().split('.');
    const resultJson = result[0] + '.result.json';

    try {
        let result = await dataFile.getFileAsJSON(resultJson)
        console.log(result);
    } catch (error) {
        if(error.code === "ENOENT") {
            let string = await dataFile.getFileAsString(file);
            let obj = await metrics.createMetrics(string);
            let saveJSON = await dataFile.saveJSONToFile(resultJson, obj);
            let newResult = await dataFile.getFileAsJSON(resultJson);
            console.log(newResult);
        } else {
            throw error;
        }
    }

}
 tester('./chapter1.txt').catch(error => {
     console.log(error);
 })