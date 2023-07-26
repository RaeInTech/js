const leapYears = function (year) {
  //year is divible by 4 but NOT by 100
  //year is divisible by BOTH 100 and 400

  return (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
};

// Do not edit below this line
module.exports = leapYears;
