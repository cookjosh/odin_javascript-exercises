const sumAll = function(firstNumber, lastNumber) {
    let sum = 0
    function range(firstNumber, lastNumber) {
        for (i = firstNumber; i <= lastNumber; i++) {
            sum += i;
        }
        return sum;
    }
    if (firstNumber < 0 || lastNumber < 0 || typeof firstNumber != "number" || typeof lastNumber != "number") {
        return "ERROR";
    } else if (lastNumber < firstNumber) {
        return range(lastNumber, firstNumber);
    } else {
        return range(firstNumber, lastNumber);
    }
};

// Do not edit below this line
module.exports = sumAll;

/*
if (typeof firstNumber && typeof lastNumber === "number") {
        console.log(firstNumber);
        console.log(lastNumber);
        console.log(sum);
        range(firstNumber, lastNumber);
    }
*/