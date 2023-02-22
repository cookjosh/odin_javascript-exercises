const palindromes = function (word) {
    let specialChar = [",", "!", " "]
    let splitWord = word.split("");
    
    let reverseArray = splitWord.reverse();
    for (char in specialChar) {
        for (i = 0; i < reverseArray.length; i++) {
            if (char === reverseArray[i]) {
                let index = reverseArray.indexOf(i)
                reverseArray.push(reverseArray.splice(index, 1)[0]);
            }
        }
    }
    
    let reverseWord = reverseArray.join("");
    return reverseWord === word ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
