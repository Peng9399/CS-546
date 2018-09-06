const equalityError = (value, valuename) => {
    if (typeof value === 'undefined') {
        throw `${valuename || 'given value'} is undefined`;
    } else if(typeof value !== 'object') {
        throw `${valuename || 'given value'} is not an object`;
    }
}

const arrayError = (array, valuename) => {
    if (typeof array === 'undefined') {
        throw `${valuename || 'given value'} is undefined`;
    } else if(!Array.isArray(array)) {
        throw `${valuename || 'given value'} is not an array`;
    }
}

const deepEquality = (obj1, obj2) => {
    equalityError(obj1, 'Object 1');
    equalityError(obj2, 'Object 2');
    let checker = true;                 // objects are identical unless they fail conditions below

    const obj1Keys = Object.getOwnPropertyNames(obj1);
    const obj2Keys = Object.getOwnPropertyNames(obj2);

    if(obj1Keys.length !== obj2Keys.length) {
        checker = false;
        return console.log(`The Objects equality are: ${checker}`);
    }

   for(let i = 0; i < obj1Keys.length; i++){
       const obj1Name = obj1Keys[i]
       const obj2Name = obj2Keys[i]


       if (obj1Name !== obj2Name) {
            checker = false;
            return console.log(`The Objects equality are: ${checker}`);
       } else if (obj1[obj1Name] !== obj2[obj2Name]) {
           checker = false;
           return console.log(`The Objects equality are: ${checker}`);
       }
      
   }

    return console.log(`The Objects equality are: ${checker}`);

}


const uniqueElements = (arr) => {
    arrayError(arr)
    const list = []
    arr.forEach(element => {
       if(!list.includes(element)){
           list.push(element)
       }
    });

    return console.log(`The amount of unique elements are: ${list.length}`);
}

module.exports = {
    deepEquality,
    uniqueElements

}