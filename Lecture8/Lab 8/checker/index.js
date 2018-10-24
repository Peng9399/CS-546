
const checker = phrase => {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let reverseString = "";
    for(let i = phrase.length; i >= 0; i-- ){
        let letter = phrase.charAt(i).toLowerCase();
        if(alphabet.includes(letter)) {
            reverseString = reverseString + letter;
        }    
    }
  //  phrase.toLowerCase().split(" ");
    return reverseString;
}

console.log(checker("Was it a cat I saw?"))

module.exports = checker;