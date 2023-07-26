const convertToCelsius = function (degree) {
  let farToCel = (degree - 32) * (5 / 9);

  if (farToCel === 0) {
    return farToCel;
  } else {
    return Number.parseFloat(farToCel.toFixed(1));
  }
};

const convertToFahrenheit = function (degree) {
  let celToFar = degree * (9 / 5) + 32;

  if (celToFar === 0) {
    return celToFar;
  } else {
    return Number.parseFloat(celToFar.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
