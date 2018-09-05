const errorChecking = (value, valuename) => {
    if (typeof value === "undefined") {
        throw `${valuename || 'given value'} is undefined`;
    } else if (typeof value !== "number") {
        throw `${valuename || 'given value'} is not a number`;
    }
}

module.exports = {
    volumeOfRectangularPrism: (length, width, height) => {
        errorChecking(length, "length");
        errorChecking(width, "width");
        errorChecking(height, "height");

        const volume = length * width * height;
        return console.log('The volume of a rectangular prism is:', volume);
    },

    surfaceAreaOfRectangularPrism: (length, width, height) => {
        errorChecking(length, "length");
        errorChecking(width, "width");
        errorChecking(height, "height");

        const Area = 2*((width*length)+(height*length)+(height*width));
        return console.log('The area of a rectangular prism is:', Area);
    },

    volumeOfSphere: (radius) => {
        errorChecking(radius, "radius");

        const Volume = (4/3)*(Math.PI)(radius*radius*radius);
        return console.log('The volume of a sphere is:', Volume);
    },

    surfaceAreaOfSphere: (radius) => {
        errorChecking(radius, "radius");

        const Area = 4*(Math.PI)*(radius*radius);
        return console.log('The area of a sphere is:', Area);
    },

}