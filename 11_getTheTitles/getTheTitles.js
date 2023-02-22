const getTheTitles = function(input) {
    bookArray = [];
    for (i=0; i < input.length; i++) {
        bookArray.push(input[i].title);
    }
    return bookArray;
};

// Do not edit below this line
module.exports = getTheTitles;
