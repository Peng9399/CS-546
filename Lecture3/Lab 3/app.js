const dataFile = require("./fileData");
//const metrics = require("./textMetrics");
const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));

async function tester (path) {
    const result = path.split('/').pop().split('.');
    const resultJson = result[0] + '.result.json';


}
 tester('./chapter1.txt')