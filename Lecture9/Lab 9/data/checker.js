const checker = phrase => {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let reverseString = "";
    let forwardString = "";

    for(let i = phrase.length; i >= 0; i-- ){
        let letter = phrase.charAt(i).toLowerCase();
        if(alphabet.includes(letter)) {
            reverseString = reverseString + letter;
        }    
    }

    for(let i = 0; i <= phrase.length; i++ ){
        let letter = phrase.charAt(i).toLowerCase();
        if(alphabet.includes(letter)) {
            forwardString = forwardString + letter;
        }    
    }

    return reverseString === forwardString;
}

module.exports = checker;