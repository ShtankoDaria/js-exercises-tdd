var getWordLengths = function(someWords) {
    let newA = [];
    for(i=0; i<someWords.length; i++){
            newA.push(someWords[i].length);
        };
        return newA;
    }

module.exports = getWordLengths;
