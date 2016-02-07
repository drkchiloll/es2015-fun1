'use strict';

(() => {

  let arr = ['a','b','c'];
  for(let val of arr) {
    console.log(val);
  }

  let mySet = new Set();
  mySet.add('x').add('y').add('z');

  for(let val of mySet) {
    console.log(val);
  }

  let myMap = new Map();
  myMap.set(1,'1').set(2,'2').set(3,'3');
  for(let val of myMap) {
    console.log(val);
  }
})()
