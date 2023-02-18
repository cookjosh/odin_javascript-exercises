const convertToCelsius = function(tempFarenheit) {
  let convertedTemp = ((tempFarenheit - 32) * (5/9));
  return Math.round(convertedTemp * 10) / 10;
};

const convertToFahrenheit = function(tempCelsius) {
  let convertedTemp = ((tempCelsius * 9/5) + 32);
  return Math.round(convertedTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
