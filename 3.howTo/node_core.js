/*
    CORE MODULES
    ============
  - modules that u do not need to install w/npm
  - installed locally with nodejs  

  ex: path module

*/


//PATH MODULE
//===========

var path = require('path');
console.log(path.basename(__filename));

//returns:
// => core.js  (name of this file)

//creating path strings to join some 'dirUploads directory' to www/files/uploads
var dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
console.log(dirUploads);

// => /Users/stework/Public/node/www/files/uploads


// UTILITIES MODULE CALL => UTIL
// =============================

/*
 has several helper functions like `logs`
 instead of doing console.log, we do `util.logs` (adds a date/time stamp)
*/

var util = require('util');

util.log(dirUploads);

/*
=>
22 Feb 23:45:24 - /Users/stework/Public/node/www/files/uploads
22 Feb 23:45:24 - core.js
22 Feb 23:45:24 - /Users/stework/Public/node/www/files/uploads

*/



var v8 = require('v8');
//module to get the details of memory usage
util.log(v8.getHeapStatistics);

/*

 => 22 Feb 23:45:24 - { total_heap_size: 7159808,
  total_heap_size_executable: 3670016,
  total_physical_size: 6058976,
  total_available_size: 1492609616,
  used_heap_size: 4602992,
  heap_size_limit: 1501560832,
  malloced_memory: 8192,
  peak_malloced_memory: 1185152,
  does_zap_garbage: 0 }


*/



