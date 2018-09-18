const dataFile = require("./fileData");
const metrics = require("./textMetrics");

async function tester(file) {
    if (typeof file !== "string" || !file) {
        throw "Please enter a correct file path"
    }
    
    const result = file.split('/').pop().split('.');
    const resultJson = result[0] + '.result.json';

    try {
        let fileRead = await dataFile.getFileAsJSON(resultJson)             //tries to read the resultJSon file
        console.log(fileRead);
    } catch (error) {
        if (error.code === "ENOENT") {                                           //error code EONT will come from getFilasJson and cause ENOENT error
            let stringContents = await dataFile.getFileAsString(file);            //gets the file as string
            let objectContents = await metrics.createMetrics(stringContents);     // creates metrics

            await dataFile.saveJSONToFile(resultJson, objectContents);           //creates a new .result.json file with the contents of file

            let parseFile = await dataFile.getFileAsJSON(resultJson);               //reads the newly created file
            console.log(parseFile);
        } else {
            throw error;
        }
    }

}

tester('./chapter1.txt').catch(error => {
    console.log('There was an error: ', error);
})

tester('./chapter2.txt').catch(error => {
    console.log('There was an error: ', error);
})

tester('./chapter3.txt').catch(error => {
     console.log(error);
 })