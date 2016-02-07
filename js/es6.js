'use strict';

(() => {

  var mySet = new Set(['a', 'b', 'c']),
      items = mySet.entries();
  console.log(items.next());

  let myMap = new Map([['a', 1], ['b', 2]]),
      myMapItems = myMap.entries();

  console.log(myMapItems.next());
  console.log(myMapItems.next());
  console.log(myMapItems.next()); // value=undefined done=true

  let setValues = mySet.values(),
      mapValues = myMap.values();
  console.log(setValues.next());
  console.log(mapValues.next());

  let mapKeys = myMap.keys();
  console.log(mapKeys);
})()
