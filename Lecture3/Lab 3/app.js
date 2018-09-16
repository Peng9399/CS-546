const dataFile = require("./fileData");
//const metrics = require("./textMetrics");
const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));

async function tester (path) {
    const result = path.split('/').pop().split('.');
    const resultJson = result[0] + '.result.json';

  // fs.statAsync(resultJson)
  // .then(result => {
  //   tester = await dataFile.getFileAsJSON(resultJson) 
  //   console.log(tester);
  // })
  // .catch(error => {
  //   console.log("No such file was found");
  // })
  
    

    //TRY TO USE .THEN

    // https://www.gregjs.com/javascript/2016/checking-whether-a-file-directory-exists-without-using-fs-exists/

    // if(fs.existsAsync(resultJson)) {
    //       dataFile.getFileAsJSON(resultJson);
    // }

}
 tester('./chapter1.txt')