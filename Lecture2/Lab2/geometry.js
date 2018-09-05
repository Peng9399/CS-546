const errorChecking = (value, valuename) => {
    if (typeof value === "undefined") {
        console.error( `${valuename || 'given value'} is undefined`);
    } else if (typeof value !== "number") {
        console.error( `${valuename || 'given value'} is not a number`);
    }
}

module.exports = {
    volumeOfRectangularPrism: (length, width, height) => {
        errorChecking(length, "length");
        errorChecking(width, "width");
        errorChecking(height, "height");

        const volume = length * width * height;
        return volume;
    },

    surfaceAreaOfRectangularPrism: (length, width, height) => {
        errorChecking(length, "length");
        errorChecking(width, "width");
        errorChecking(height, "height");

        const Area = 2*((width*length)+(height*length)+(height*width));
        return Area;
    },

    volumeOfSphere: (radius) => {
        errorChecking(radius, "radius");

        const Volume = (4/3)*(Math.PI)(radius*radius*radius);
        return Volume;
    },

    surfaceAreaOfSphere: (radius) => {
        errorChecking(radius, "radius");

        const Area = 4*(Math.PI)*(radius*radius);
        return Area;
    },

}