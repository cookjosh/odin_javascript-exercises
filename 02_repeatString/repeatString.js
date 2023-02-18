const repeatString = function(givenString, givenNumber) {
    let i = 0;
    let resultString = "";
    if (givenNumber < 0) {
        return 'ERROR';
    } else {
        while (i < givenNumber) {
            resultString = resultString + givenString;
            i++;
        }
    }

    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
