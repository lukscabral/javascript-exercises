const convertToCelsius = function(f) {
  let c =(f-32)*(5/9) 
  c = c.toFixed(1);
  return Number.parseFloat(c);
};

const convertToFahrenheit = function(c) {
  let f = c*(9/5)+32;
  f = f.toFixed(1);
  return Number.parseFloat(f);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};


