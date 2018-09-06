const tester = require('./geometry')
const utilitieTester = require('./utilities')

// 5 cases for volume of a rectangular prism

try {
    tester.volumeOfRectangularPrism(4, 5, "hello1");
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    tester.volumeOfRectangularPrism(5, 1);
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    tester.volumeOfRectangularPrism(4, true, 1);
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    tester.volumeOfRectangularPrism(10,20,-6);
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    tester.volumeOfRectangularPrism(5, 6, 7);
} catch (e) {
    console.log('There was an Error:', e);
}

//5 cases for surface area of rectangular prism
console.log('\n');

try {
    tester.surfaceAreaOfRectangularPrism("tester", 5, 7);
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    tester.surfaceAreaOfRectangularPrism(5, 1);
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    tester.surfaceAreaOfRectangularPrism(4, true, 1);
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    tester.surfaceAreaOfRectangularPrism(10,20,30);
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    tester.surfaceAreaOfRectangularPrism(5, 6, 8);
} catch (e) {
    console.log('There was an Error:', e);
}

//5 cases for volume of sphere
console.log('\n');

try {
    tester.volumeOfSphere("tester");
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    tester.volumeOfSphere();
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    tester.volumeOfSphere(false);
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    tester.volumeOfSphere(5);
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    tester.volumeOfSphere(6);
} catch (e) {
    console.log('There was an Error:', e);
}

//5 cases for surface area of a sphere
console.log('\n');

try {
    tester.surfaceAreaOfSphere("tester");
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    tester.surfaceAreaOfSphere();
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    tester.surfaceAreaOfSphere(false);
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    tester.surfaceAreaOfSphere(5);
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    tester.surfaceAreaOfSphere(6);
} catch (e) {
    console.log('There was an Error:', e);
}

//5 cases for deep equality
console.log('\n')

try {
    utilitieTester.deepEquality({ test: 1 });
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    utilitieTester.deepEquality('test string', {test: 1 });
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    utilitieTester.deepEquality({ test: 1, name: 2 }, false);
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    utilitieTester.deepEquality({ test: 1, name: 2, name: 3}, { test: 1, name: 2});
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    utilitieTester.deepEquality({ test: 1, name: 2 }, { test: 1, name: 2});
} catch (e) {
    console.log('There was an Error:', e);
}

//5 cases for unique element
console.log('\n')

try {
    utilitieTester.uniqueElements('tester');
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    utilitieTester.uniqueElements(56);
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    utilitieTester.uniqueElements();
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    utilitieTester.uniqueElements(["a", "a", "b", "a", "b", "c"]);
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    utilitieTester.uniqueElements(["a", "a", "b", "a", "b", "c", 1, 1, 2, 2, 3, 4, 4, 4, 4, 4]);
} catch (e) {
    console.log('There was an Error:', e);
}

//5 cases for count of each character
console.log('\n')

try {
    utilitieTester.countOfEachCharacterInString();
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    utilitieTester.countOfEachCharacterInString(false);
} catch (e) {
    console.log('There was an Error:', e);
}


try {
    utilitieTester.countOfEachCharacterInString({test:1});
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    utilitieTester.countOfEachCharacterInString("My name is: Jonathan");
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    utilitieTester.countOfEachCharacterInString("Hello, the pie is in the oven");
} catch (e) {
    console.log('There was an Error:', e);
}
