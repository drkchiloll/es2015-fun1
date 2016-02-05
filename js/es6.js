'use strict';

(() => {
  var logSomething = (something = 'default message') => {
    console.log(something);
  }

  logSomething();
  logSomething('not default');
})()
