'use strict';

(() => {

  console.log(Array.of('test', [1,2], {foo: 'bar'}));

  // Creat Array from Array-Like Object
  var arrFromArgs = (...args) => {
    return Array.from(args);
  };

  console.log(arrFromArgs('something', 'else'));

  let superheros = [{
    name: 'Peter Parker',
    superheroName: 'Spiderman'
  }, {
    name: 'Bruce Wayne',
    superheroName: 'Batman'
  }];

  // Array Contains an Item using FIND
  // Braces don't need to Surround the body when Implied RETURN
  var findByHeroName = (name) =>
    superheros.find((item) => item.superheroName === name);
  console.log(findByHeroName('Batman')); // {name:'Bruce'..}

  // Find Index in Array of Objects
  var findHeroIndex = (name) => {
    return superheros.findIndex(item => item.superheroName === name);
  };
  console.log(findHeroIndex('Batman')); //1

  console.log(superheros.copyWithin(1, 0))
})()
