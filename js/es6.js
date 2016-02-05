'use strict';

(() => {
  var logSomething = (something = 'default message', somethingElse = `${something} with concatenation`) => {
    console.log(something, somethingElse);
  }

  logSomething();
  logSomething(undefined, 'and overriding');
})()
