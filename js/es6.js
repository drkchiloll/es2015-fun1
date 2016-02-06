'use strict';

(() => {
  // Epsilon
  console.log(Number.EPSILON);

  // Number Methods
  console.log(Number.isFinite(1)); //TRUE
  console.log(Number.isFinite(Infinity)); //FALSE
  console.log(Number.isInteger(1)); //TRUE
  console.log(Number.isInteger(1.1)); //FALSE

  console.log(Number.isSafeInteger(1)); //TRUE
  console.log(Number.isSafeInteger(Math.pow(2, 53))); //FALSE
  //Math.pow(num, exp) === 2 **= 53 in ES2016

  // Updated Methods
  console.log(isNaN('NaN')); //TRUE
})()
