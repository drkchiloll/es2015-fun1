'use strict';

(() => {
  var mySet = new Set();

  let anArray = [1,1,1,2,3,4,4,5];
  let myOtherSet = new Set(anArray);

  console.log(myOtherSet); //Removes all Duplicates
  console.log(myOtherSet.size);

  mySet.add('something').add('else');
  console.log(mySet);
  mySet.delete('else');
  console.log(mySet, `delete('else') removed else`);
  mySet.clear();
  console.log(mySet, ' was cleared()');
  console.log(mySet.has('something'), 'has(\'value\')');

  myOtherSet.forEach((value1, value2, set) => {
    console.log(value1);
  });

  console.log(myOtherSet[0]); //undefined
})()
