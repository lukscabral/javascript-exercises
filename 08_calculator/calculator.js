const add = function(a,b) {
  let value = a + b;
	return value
};

const subtract = function(a,b) {
	 let value = a - b;
   return value
};

const sum = function(array) {
  
  let value = 0;
	for(let num of array){
    value += num;
  }return value
};

const multiply = function(array) {// ver o resultado dessa inicializaçao com 1
  let value = 1;
  for(num of array){
    value *= num;
  }return value
};

const power = function(a,b) {
	return a**b
};

const factorial = function(factorial) {
	let value = 1;
  if(factorial === 0 || factorial === 1){
    return value
  } else {
    for(i = 1; i<=factorial; i++){
      value *= i; 
    }return value
  }
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
