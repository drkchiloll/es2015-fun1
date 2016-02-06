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
  console.log();
  console.log('Template Strings');
  // Template Strings
  // Line Breaks are Legel
  var template = `this is a template
string!`;
  console.log(template);

  // Interpolation using ${string} Tokens
  let a = '5',
      b = 'something';
  console.log(`a is ${a}, while b is ${b} else`);

  var reverseString = (string) => string.split('').reverse().join('');
  console.log(`a is ${a}, while b is ${b} else, and ${reverseString(b)} is reversed`);

  // Tagged Template Strings
  var str = (literals, ...values) => {
    // console.log(literals);
    // console.log(values);
    return values[2] + literals[3] + literals[2] + values[1] + literals[1] + values[0] + literals[0];
  };

  console.log(str`a is ${a}, while b is ${b} else, and ${reverseString(b)} is reversed`);

})()
