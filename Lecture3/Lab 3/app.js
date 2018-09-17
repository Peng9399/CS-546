const dataFile = require("./fileData");
const metrics = require("./textMetrics");

async function tester(file) {
    if (typeof file !== "string" || !file) {
        throw "Please enter a correct file path"
    }
    
    const result = file.split('/').pop().split('.');
    const resultJson = result[0] + '.result.json';

    try {
        let fileRead = await dataFile.getFileAsJSON(resultJson)
        console.log(fileRead);
    } catch (error) {
        if (error.code === "ENOENT") {
            let stringContents = await dataFile.getFileAsString(file);
            let objectContents = await metrics.createMetrics(stringContents);
            let saveJSON = await dataFile.saveJSONToFile(resultJson, objectContents);
            let parseFile = await dataFile.getFileAsJSON(resultJson);
            console.log(parseFile);
        } else {
            throw error;
        }
    }

}
tester(4).catch(error => {
    console.log('There was an error: ', error);
})

tester('./chapter2.txt').catch(error => {
    console.log('There was an error: ', error);
})

// tester('./chapter3.txt').catch(error => {
//     console.log(error);
// })