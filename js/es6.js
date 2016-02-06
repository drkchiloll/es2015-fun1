'use strict';

(() => {

  // StartsWith/EndsWith
  var testStr = 'test string';
  console.log(testStr.startsWith('test'));
  // The 2nd Arg denotes how many characters to include
  // In this case the output will be FALSE
  console.log(testStr.endsWith('string', testStr.length - 1));

  // Includes
  // Supports POS Arg which denotes Index to Search From
  console.log(testStr.includes('ring', 8)); //FALSE

  // Repeat(Number of Times)
  console.log(testStr.repeat(2));
})()
