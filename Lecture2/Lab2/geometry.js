const errorChecking = (value, valuename) => {
    if (isNaN(value)) {
        throw `${valuename || 'given value'} is NaN`;
    } else if (typeof value !== "number") {
        throw `${valuename || 'given value'} is not a number`;
    } else if(typeof value!== "undefined") {
        throw `${valuename || 'given value'} is undefined`;
    }
}


module.exports = {
    volumeOfRectangularPrism: (length, width, height) => {
        errorChecking(length, "length");
        errorChecking(width, "width");
        errorChecking(height, "height");
    },

    surfaceAreaOfRectangularPrism: (length, width, height) => {
        errorChecking(length, "length");
        errorChecking(width, "width");
        errorChecking(height, "height");
    },

    volumeOfSphere: (radius) => {
        errorChecking(radius, "radius");
    },

    surfaceAreaOfSphere: (radius) => {
        errorChecking(radius, "radius");
    },

}