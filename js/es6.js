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


  // Arrow Functions ()'s and return optional'
  var fn = (param1) => {
    var square = param1 * param1;
    return square;
  };
  console.log(fn(3));

  // THIS
  let user = {
    name: 'someone'
  };
  function getUserName() {
    return this.name;
  }
  console.log(getUserName.call(user));

  // CANNOT USE ARROW FUNCTIONS AS CONSTRUCTORS BECAUSE OF THIS
  var getUserArrow = () => {
    return this.name;
  };
  // console.log(getUserArrow.call(user));

  // GENERATORS
  function* square(x) {
    var y = (yield x * x) * x;
    console.log('x was', x);
    console.log('y was', y);
  }
  // Invoke the Generator to get an Iterator
  let squareGenerator = square(5);
  console.log(squareGenerator.next());
  console.log(squareGenerator.next(10));

  // PROMISES
  var myPromise = new Promise((resolve, reject) => {
    (Math.random() < .5) ? resolve('success') : reject('failure');
  });

  myPromise.then((resp) => {
    console.log('The promise was resolved');
    return true;
  }).catch((err) => {
    console.log('The Promise was rejected');
    return false;
  }).then((val) => {
    console.log(val);
  });

  var getNumberFact = (url) => {
    return new Promise((resolve, reject) => {
      var request = new XMLHttpRequest();

      request.onreadystatechange = function(e) {
        if(this.readyState === 4) {
          if(this.status === 200) {
            resolve(this.response);
          } else {
            reject(this.statusText);
          }
        }
      }
      request.open('GET', url, true);
      request.send();
    });
  }

  getNumberFact('http://numbersapi.com/random').then(response => {
    console.log(response);
  }).catch(err => console.log(err));
})()
