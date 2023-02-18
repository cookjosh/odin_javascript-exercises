const reverseString = function(givenString) {
    let splitArray = givenString.split("");
    let reverseArray = splitArray.reverse();
    let reverseString = reverseArray.join("");
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
