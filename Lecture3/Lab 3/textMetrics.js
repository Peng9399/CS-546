const createMetrics = (text) => {
    const objectMetrics = {};
    const words = [];

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's',
    't', 'v', 'w', 'x', 'y', 'z'];

    let letters = 0;
    let nonLetters = 0;
    let vowelsNumber = 0;
    let consenentsNumber = 0;
    for(let i = 0; i< text.length; i++){
        const textLetter = text.charAt(i).toLowerCase();

        alphabet.forEach(value => {         //loops through alphabet list and if it matches a letter its a letter, if not, its a non letter
            if(textLetter === value) {
                letters = letters + 1;
            } else if(textLetter !== value) {
                nonLetters = nonLetters + 1;
            }
        });

        vowels.forEach(value => {              // loops through vowels and if its a vowel
            if(textLetter === value ) {
                vowelsNumber = vowelsNumber + 1;
            }
        });

        consonants.forEach(value => {              // loops through vowels and if its a vowel
            if(textLetter === value ) {
                consenentsNumber = consenentsNumber + 1;
            }
        });
    }

    objectMetrics["totalLetters"] = letters;
    objectMetrics["totalNonLetters"] = nonLetters;
    objectMetrics["totalVowels"] = vowelsNumber;
    objectMetrics["totalConsonants"] = consenentsNumber;




    return console.log(objectMetrics);

}

createMetrics("Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23");

//REMEMBER TO CHECK FOR ERRORS




//{
//     totalLetters: total number of letter characters in the text,
//     totalNonLetters: total number of non-letters in the text,
//     totalVowels: total number of vowels in the text (not counting y),
//     totalConsonants: total number of consonants in the text (counting y),
//     totalWords: total number of words in the text; a word is defined as any sequence of letters broken by any not-letter. For example, the phrase to-do is two words; a word does not start until a letter appears,
//     uniqueWords: total number of unique words that appear in the lowercased text,
//     longWords: number of words in the text that are 6 or more letters long; this is a total count of individual words, not unique words,
//     averageWordLength: the average number of letters in a word in the text; this is counting the individual words, not unique words,
//     wordOccurrences: a dictionary of each word and how many times each word occurs in the text.
//}



module.exports = {
    createMetrics,
}