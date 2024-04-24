const convertToCelsius = function(tempFahrenheit) {
  const tempCelsius = (tempFahrenheit - 32) / 1.8;
  const celsiusRounded = Math.round(tempCelsius * 10) / 10
  return celsiusRounded;
};

const convertToFahrenheit = function(tempCelsius) {
  const tempFahrenheit = ((tempCelsius * 1.8)+ 32);
  const fahrenheitRounded = Math.round(tempFahrenheit * 10) / 10;
  return fahrenheitRounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
