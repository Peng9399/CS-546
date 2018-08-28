const questionOne = function questionOne(arr) {
    let sum = 0
    arr.forEach(element => {
        sum = sum + (element * element);
    });
    return sum;
}

const questionTwo = function questionTwo(num) { 
    if(num <= 1){
        return num;
    }
    return questionTwo(num-1) + questionTwo(num-2);
}

const questionThree = function questionThree(text) {
    let sum = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i<=text.length; i++){
        vowels.forEach(element => {
            if(text.charAt(i).includes(element)){
                sum = sum + 1;
            }
        });
    }
    return sum;
}

const questionFour = function questionFour(num) {
    let sum = 1;
    if(num < 0){
        return NaN;
    } else {
        for(let i = 1; i <= num; i++){
            sum = sum * i;
        }
    }
    return sum;
}

module.exports = {
    firstName: "Jonathan", 
    lastName: "Fishkin", 
    studentId: "10394200",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};
