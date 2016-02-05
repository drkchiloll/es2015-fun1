'use strict';

(() => {
  var logSomething = (something = 'default message', somethingElse = `${something} with concatenation`) => {
    console.log(something, somethingElse);
  }

  logSomething();
  logSomething(undefined, 'and overriding');

  var sum = (a, b, c) => a + b + c;
  let nums = [1, 2, 3];
  // Use of Spread Operator
  console.log(sum(...nums)); // 6

  // Spread Operator in Array Literals
  let arr = [...nums, 4, 5, 6];
  console.log(arr); // [1, 2, 3, 4, 5, 6]

  // Spread Operator in FN Parameter (REST Param)
  var joinStuff = (...stuffs) => {
    console.log(stuffs.join(' '));
  }
  // Any Number of ARGs will Work
  joinStuff('Stuffs', 'to', 'join');
})()
