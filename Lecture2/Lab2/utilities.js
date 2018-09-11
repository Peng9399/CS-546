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

const stringError = (value, valuename) => {
    if (typeof value === 'undefined') {
        throw `${valuename || 'given value'} is undefined`;
    } else if(typeof value !== 'string') {
        throw `${valuename || 'given value'} is not a string`;
    }
}



const deepEquality = (obj1, obj2) => {
    equalityError(obj1, 'Object 1');
    equalityError(obj2, 'Object 2');
    let checker = true;                 // objects are identical unless they fail conditions below

    const obj1Keys = Object.getOwnPropertyNames(obj1);
    const obj2Keys = Object.getOwnPropertyNames(obj2);

    if(obj1Keys.length !== obj2Keys.length) {
        checker = false;                                              // checks if length is different first
        return console.log(`The Objects equality are: ${checker}`);  
    }

   for(let i = 0; i < obj1Keys.length; i++){
       const obj1Name = obj1Keys[i]
       const obj2Name = obj2Keys[i]

       if (obj1Name !== obj2Name) {          //compares the names at i to check if names are the same
            checker = false;
            return console.log(`The Objects equality are: ${checker}`);
       } else if (obj1[obj1Name] !== obj2[obj2Name]) {                     //checks to see if the key value pairs are the same
           checker = false; 
           return console.log(`The Objects equality are: ${checker}`);
       }    
   }

    return console.log(`The Objects equality are: ${checker}`);
}


const uniqueElements = (arr) => {
    arrayError(arr, 'Given Array')
    const list = []
    arr.forEach(element => {
       if(!list.includes(element)){        //if the list doesnt include the value in the array it pushes new unique element
           list.push(element)
       }
    });

    return console.log(`The amount of unique elements are: ${list.length}`);
}

const countOfEachCharacterInString = (str) => {
    stringError(str, 'Given String');
    const list = [];
    const obj = {};

    for(let i = 0; i < str.length; i++){         
        if(!list.includes(str.charAt(i))){    //this parses the string and grabs the unique characters from the string
            list.push(str.charAt(i))
        }
    }

    list.sort()        //sorts the list normally

    list.forEach(element => {
        let sum = 0;
        for(let i = 0; i < str.length; i++){       
            if(str.charAt(i) === element){     // compares each letter at string i to the letter in the list
                sum = sum + 1;             // adds 1 for every duplicate of the same unique letter it finds
            }
            
        obj[element] = sum   //adds new key value pair to object

        }
    });

   return console.log(obj);
}

module.exports = {
    deepEquality,
    uniqueElements,
    countOfEachCharacterInString
}