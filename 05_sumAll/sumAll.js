const sumAll = function (min, max) {
  let sum = 0;

  if (!Number.isInteger(min) || !Number.isInteger(max) || min < 0 || max < 0) {
    return "ERROR";
  }
  //If min is greater than max, temporarily switch the values
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  for (let i = min; i <= max; i++) {
    sum += i;
    console.log(i);
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
