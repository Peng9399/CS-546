const tester = require('./geometry')

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
    tester.volumeOfRectangularPrism(10,20,30);
} catch (e) {
    console.log('There was an Error:', e);
}

try {
    tester.surfaceAreaOfRectangularPrism(5, 6, 7);
} catch (e) {
    console.log('There was an Error:', e);
}

//5 cases for surface area of rectangular prism

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
    tester.surfaceAreaOfRectangularPrism(5, 6, 7);
} catch (e) {
    console.log('There was an Error:', e);
}