const equalityError = (value, valuename) => {
    if (typeof value === 'undefined') {
        throw `${valuename || 'given value'} is undefined`;
    } else if(typeof value !== 'object') {
        throw `${valuename || 'given value'} is not an object`;
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
       } else if (obj1Name[i] !== obj2Name[i]) {
           checker = false;
           return console.log(`The Objects equality are: ${checker}`);
       }
      
   }

    return console.log(`The Objects equality are: ${checker}`);

}

//deepEquality({ a: 1, b: 2 }, { a: 1 });
//deepEquality({ a: 1, b: 2 }, { a: 1, b:2 });
//deepEquality({ a: 1 }, function test() {});
//deepEquality({ a: 1 });

module.exports = {
    deepEquality,

}