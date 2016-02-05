'use strict';

(function() {
  console.log(block);

  if(true) {
    // Create Variable on Associated to it Container BLOCK
    // NOT HOISTED..Anything Above is the Temporal Dead Zone
    console.log(block);
    let block = 'block';

    const PI

    PI = 3.14159
    console.log(PI);
  }
}());
