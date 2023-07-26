const convertToCelsius = function (fahrenheit) {
  let farToCel = (fahrenheit - 32) * (5 / 9);

  if (farToCel === 0) {
    return farToCel;
  } else {
    return Number.parseFloat(farToCel.toFixed(1));
    /*
    BETTER SOLUION: 
     return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
     */
  }
};

const convertToFahrenheit = function (celsius) {
  let celToFar = celsius * (9 / 5) + 32;

  if (celToFar === 0) {
    return celToFar;
  } else {
    return Number.parseFloat(celToFar.toFixed(1));
    /*
    BETTER SOLUION: 
     return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
     */
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
