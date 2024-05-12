const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
  let sum;
  sum =a.map(element => sum +=element);
	return sum;
};

const multiply = function(a) {
  let multi
  multi= a.map(element => multi *= element);
  return multi;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  let fac=1;
	for(let i=1;i<=a;i++){
    fac *=i;
  }
  return fac
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
