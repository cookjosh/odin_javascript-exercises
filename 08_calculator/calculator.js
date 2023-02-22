const add = function(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function(numArray) {
	let overallSum = numArray.reduce((total, num) => {
    return total + num;
  }, 0)
  return overallSum;
};

const multiply = function(numArray) {
  let overallSum = numArray.reduce((total, num) => {
    return total * num;
  }, 1)
  return overallSum;
};

const power = function(firstNumber, secondNumber) {
	return firstNumber ** secondNumber;
};

const factorial = function(factNum) {
  numArray = [];
	for (i = factNum; i > 0; i--) {
    numArray.push(i);
  }
  console.log(numArray);
  let factTotal = numArray.reduce((total, num) => {
    return total * num;
  }, 1)
  return factTotal;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
