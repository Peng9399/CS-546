const errorChecking = (value, valuename) => {
    if (typeof value === 'undefined' ){
        throw `${valuename || 'given value'} is undefined`;
    } else if (typeof value !== 'number') {
        throw `${valuename || 'given value'} is not a number`;
    } else if(Math.sign(value) === -1){                              // area or volume cant have a ngetaive distance
        throw `${valuename || 'given value'} is negative`;
    } else if(Math.sign(value) === 0){                             // side length or radius cant be zero
        throw `${valuename || 'given value'} is zero`;
    }
}

module.exports = {
    volumeOfRectangularPrism: (length, width, height) => {
        errorChecking(length, 'length');
        errorChecking(width, 'width');
        errorChecking(height, 'height');

        const volume = length * width * height;
        return console.log('The volume of a rectangular prism is:', volume);
    },

    surfaceAreaOfRectangularPrism: (length, width, height) => {
        errorChecking(length, 'length');
        errorChecking(width, 'width');
        errorChecking(height, 'height');

        const area = 2*((width*length)+(height*length)+(height*width));
        return console.log('The area of a rectangular prism is:', area);
    },

    volumeOfSphere: (radius) => {
        errorChecking(radius, 'radius');

        const volume = (4/3) * Math.PI * (radius*radius*radius);
        return console.log('The volume of a sphere is:', volume);
    },

    surfaceAreaOfSphere: (radius) => {
        errorChecking(radius, 'radius');

        const area = 4 * Math.PI * (radius*radius);
        return console.log('The surface area of a sphere is:', area);
    },

}